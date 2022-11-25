package services;

import java.io.IOException;
import java.util.Date;
import java.util.UUID;
import java.util.function.Consumer;

import org.hibernate.Session;

import domain.Auth;
import domain.User;
import foody.db.SessionUtil;
import foody.log.Logger;
import foody.util.PostParamGetter;
import input.LoginInput;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class LoginServlet
 */
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		try {
		final LoginInput loginInput = PostParamGetter.getPostRequestFromJson(request, LoginInput.class);
		Session session = SessionUtil.getSession();
		final String name = loginInput.getUserName();
		
		// ユーザー名で検索
		User user = session
				.createSelectionQuery("FROM User WHERE userName='"+name+"'", User.class)
				.getSingleResult();
		
		// ユーザー名で一致しない場合はメールアドレスで検索
		if (user == null) {
			user = session
					.createSelectionQuery("FROM User WHERE mailAddress="+name, User.class)
					.getSingleResult();
		}
		
		final User gotUser = user;
		
		if (gotUser == null) {
			throw new ServletException();
		}

		// 認証情報の登録処理
		SessionUtil.transaction(new Consumer<Session>() {
			@Override
			public void accept(Session session) {
				
				String token = null;
				Auth auth = gotUser.getAuth();

				// 認証に成功した場合、tokenにランダムな文字列を設定する
				if (auth.getPassword().equals(loginInput.getPassword())) {
					token = UUID.randomUUID().toString();
					auth.setLastLoginAt(new Date());
				}
				auth.setToken(token);
				session.merge(auth);
			}
		});
		
		// 認証情報を再度取得する
		Auth auth = session.find(User.class, user.getId()).getAuth();
		
		if (auth.getToken() == null) throw new ServletException();
		
		response.getWriter().write(auth.getToken());
		
		} catch(Exception e) {
			Logger.outputLog("doPost", e.getMessage());
			throw new ServletException("Auth Error");
		}
	}

}
