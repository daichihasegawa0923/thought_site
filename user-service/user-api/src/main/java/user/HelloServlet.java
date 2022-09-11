package user;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class HelloServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		resp.setContentType("text/html");
		
		var out = resp.getWriter();
		
		out.println("<html>");
	    out.println("<head>");
	    out.println("<title>Hello World!</title>");
	    out.println("</head>");
	    out.println("<body>");
	    out.println("<h1>Hello World!</h1>");
	    out.println("</body>");
	    out.println("</html>");
	}
}
