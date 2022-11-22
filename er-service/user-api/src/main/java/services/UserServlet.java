package services;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.List;
import java.util.UUID;
import java.util.function.Consumer;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.hibernate.Session;

import db.SessionUtil;
import domain.User;
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
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
		SessionUtil.transaction(new Consumer<Session>() {
			@Override
			public void accept(Session session) {
				User newUser  = new User();
				newUser.setUserName("aaaa");
				newUser.setMailAddress("test@co.jp");
				
				session.persist(newUser);
			}
		});
		}catch(Exception e) {
			System.out.println(e.getMessage());
			throw new ServletException("失敗");
		}
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
				user.setMailAddress(userInput.getMailAddress());
				user.setIsPublic(userInput.getIsPublic());
				user.setUserName(userInput.getUserName());
				session.persist(user);
			}

		});
		}catch(Exception e){
			Logger.outputLog("doPost", e.getMessage());
			throw new ServletException("Bad Request");
		}
	}
}
