package services;

import java.io.IOException;

import org.hibernate.Session;

import db.SessionUtil;
import domain.Auth;
import input.AuthWithTokenInput;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AuthWithTokenServlet
 */
public class AuthWithTokenServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public AuthWithTokenServlet() {
        // TODO Auto-generated constructor stub
    }
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 * 
	 * tokenが適正で無い場合は、認証エラーを返す
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
		  Session session = SessionUtil.getSession();
		  AuthWithTokenInput input = PostParamGetter.getPostRequestFromJson(request, AuthWithTokenInput.class);
		  Auth auth = session
				  .createSelectionQuery("FROM Auth WHERE token='"+input.getToken()+"'", Auth.class)
				  .getSingleResult();
		  // 認証情報が見つからない場合、エラーを返す
		  if (auth == null) throw new Exception();
		} catch (Exception e) {
			throw new ServletException("認証エラー");
		}
		
	}

}
