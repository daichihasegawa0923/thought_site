package services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import org.hibernate.Session;

import domain.Auth;
import domain.User;
import foody.db.SessionUtil;
import foody.util.PostParamGetter;
import input.UserInput;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import log.Logger;

/**
 * Servlet implementation class ErServlet
 */
public class UserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public UserServlet() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		final UserInput userInput = PostParamGetter.getPostRequestFromJson(request, UserInput.class);
		try {
		SessionUtil.transaction(new Consumer<Session>() {

			@Override
			public void accept(Session session) {
				User user = new User();
				Auth auth  = new Auth();
				user.setMailAddress(userInput.getMailAddress());
				user.setIsPublic(userInput.getIsPublic());
				user.setUserName(userInput.getUserName());
				auth.setUser(user);
				auth.setPassword(userInput.getPassword());
				session.persist(user);
				session.persist(auth);
			}

		});
		}catch(Exception e){
			Logger.outputLog("doPost", e.getMessage());
			throw new ServletException("Bad Request");
		}
	}
}
