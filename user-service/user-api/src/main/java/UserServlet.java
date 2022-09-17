import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class UserServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		try {
	        resp.setContentType("text/html; charset=utf-8");
			PrintWriter out = resp.getWriter();
	 		out.println("<HTML>");
	 		out.println("<HEAD>");
	 		out.println("<META charset=\"utf-8\" />");
	 		out.println("<TITLE>HTMLを出力するサーブレット</TITLE>");
	 		out.println("</HEAD>");
	 		out.println("<BODY>");
	 		out.println("HTMLを出力するサーブレット");
	 		out.println("</BODY>");
	 		out.println("</HTML>");
		}catch(Exception e){
			
		}
	}
}
