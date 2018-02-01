package vernaza;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ReporteriaVernaza
 */
@WebServlet("/ReporteriaVernaza")
public class ReporteriaVernaza extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ReporteriaVernaza() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		VerticalValuesReport vm = new VerticalValuesReport();
		 if (request.getParameter("button1") != null) {
			
	        } else if (request.getParameter("button2") != null) {
	        	 SimpleReportExample.reporte();
	        } else if (request.getParameter("button3") != null) {
	        	 SimpleReportExample.reporte();
	        } else {
	            // ???
	        }
	}

}
