package services;

import java.io.IOException;
import java.util.List;

import org.hibernate.Session;

import db.SessionUtil;
import domain.User;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import log.Logger;

/**
 * Servlet implementation class ErServlet
 */
public class UserAllServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public UserAllServlet() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println(request.getPathInfo());
		getAllUsers(request, response);
	}
	
	public static List<User> getAllUsers(){
		try {
		 Session session = SessionUtil.getSession();
		 List<User> users = session.createSelectionQuery("FROM User", User.class).list();
		 return users;
		}catch (Exception e) {
			Logger.outputLog("getAllUsers", e.getMessage());
			return null;
		}
	}
	
	private void getAllUsers(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		try {
			 List<User> users = UserAllServlet.getAllUsers();
			 for(User user : users){
				 // JSON変換時の循環参照防止用
				 user.setAuth(null);
				 user.setMessages(null);
			 }
			 response.getWriter().write(JsonParser.toJson(users));
			}catch(Exception e){
				Logger.outputLog("doGet", e.getMessage());
				throw new ServletException();
			}
	}
}