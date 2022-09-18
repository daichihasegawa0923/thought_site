import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

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
	 		out.println("HTMLを出力するサーブレット test");
	 		out.println("</BODY>");
	 		out.println("</HTML>");
		}catch(Exception e){
			
		}
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Enumeration<String> content  = req.getParameterNames();
		File file  =new File("test.txt");
		FileWriter fw = new FileWriter(file);
		
		String str = "";
		
		for(Enumeration<String> i = content; i.hasMoreElements();) {
			str += i.nextElement();
		}
		
		fw.write(str);
		
		fw.close();
	}
}
