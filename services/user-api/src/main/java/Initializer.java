
import java.io.IOException;

import org.eclipse.jetty.server.Request;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.AbstractHandler;
import org.eclipse.jetty.servlet.ServletHandler;

import jakarta.servlet.Servlet;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import services.UserAllServlet;
import services.AuthWithTokenServlet;
import services.LoginServlet;
import services.UserServlet;

public class Initializer extends AbstractHandler{
	public static void main(String[] args) throws Exception {
		
		Server server = new Server(4000);
		
		ServletHandler servletHandler = new ServletHandler();

		servletHandler.addServletWithMapping(UserServlet.class, "/user");
		servletHandler.addServletWithMapping(UserAllServlet.class, "/allUser");
		servletHandler.addServletWithMapping(LoginServlet.class, "/login");
		servletHandler.addServletWithMapping(AuthWithTokenServlet.class, "/auth");
		
		server.setHandler(servletHandler);
		
		server.start();
		server.join();
		

	}
	
	@Override
	public void handle(
			String target,
			Request baseRequest,
			HttpServletRequest request,
			HttpServletResponse response) throws IOException, ServletException{
	
	}
}
