package vernaza;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.DriverManager;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.itextpdf.text.pdf.codec.Base64.OutputStream;

import net.sf.dynamicreports.jasper.builder.JasperReportBuilder;
import net.sf.dynamicreports.jasper.builder.export.ExporterBuilders;
import net.sf.dynamicreports.jasper.builder.export.JasperPdfExporterBuilder;
import net.sf.dynamicreports.report.builder.DynamicReports;
import net.sf.dynamicreports.report.builder.column.Columns;
import net.sf.dynamicreports.report.builder.component.Components;
import net.sf.dynamicreports.report.builder.datatype.DataTypes;
import net.sf.dynamicreports.report.constant.HorizontalAlignment;
import net.sf.dynamicreports.report.exception.DRException;
import net.sf.jasperreports.engine.JRExporter;
import net.sf.jasperreports.engine.JRExporterParameter;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.export.JRPdfExporter;

import net.sf.dynamicreports.examples.Templates;
import net.sf.dynamicreports.jasper.builder.export.JasperPdfExporterBuilder;
import net.sf.dynamicreports.report.datasource.DRDataSource;
import net.sf.dynamicreports.report.exception.DRException;
import net.sf.jasperreports.engine.JRDataSource;

/**
 * Servlet implementation class ActionServlet
 */

public class reporte extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public reporte() {

		// TODO Auto-generated constructor stub
	}

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.println("videoid");

		String name = null;
		String cedula = request.getParameter("user");
		java.sql.Connection con;
		java.sql.Statement s;
		java.sql.Statement s2;
		java.sql.ResultSet rs;
		java.sql.ResultSet rs2;
		java.sql.PreparedStatement pst;

		con = null;
		s = null;
		s2 = null;
		pst = null;
		rs = null;
		rs2 = null;
		System.out.print("test");
		String url = "jdbc:sqlserver://localhost:1433;databaseName=calificacionTest";
		String id = "sa";
		String pass = "Gm0924321391";
		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection(url, id, pass);
			System.out.println("connected");
			s = con.createStatement();
			String queryString = "select * from sysobjects where type='u'";
			rs = s.executeQuery(queryString);
			while (rs.next()) {
				System.out.println(rs.getString(1));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		JasperReportBuilder report = DynamicReports.report();// a new report
		report.columns(

				Columns.column("Pregunta", "timer", DataTypes.stringType()),
				Columns.column("Respuesta", "CalifiBase_id",
						DataTypes.stringType())

		// ,Columns.column("Cedula", "cedula", DataTypes.stringType()),
		// Columns.column("fecha", "Califi_fecha", DataTypes.stringType())
		)
				.title(// title of the report
				Components.text("REPORTERIA LUIS VERNAZA")
						.setHorizontalAlignment(HorizontalAlignment.CENTER))
				.pageFooter(Components.pageXofY())// show page number on the
													// page footer
				.setDataSource(
						"SELECT TOP 1000 [CalifiTimer_id],[timer],[CalifiBase_id] FROM [calificacionTest].[dbo].[CalifiTimer]",
						con);

		try {
			// show the report
			// report.show();
			FileOutputStream outFile = null;
			outFile = new FileOutputStream("d:/report_de_" + cedula + ".xlsx");
			report.toXlsx(outFile);
			outFile.close();
			outFile = null;
			outFile = new FileOutputStream("d:/report_de_" + cedula + ".docx");
			report.toDocx(outFile);
			outFile.close();
			outFile = null;
			outFile = new FileOutputStream("d:/report_de_" + cedula + ".pdf");
			report.toPdf(outFile);
			outFile.close();
			outFile = null;
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			// export the report to a pdf file

		} catch (DRException e) {
			System.out.print("ERROR");
			e.printStackTrace();
		} catch (FileNotFoundException e) {
			System.out.print("ERROR");
			e.printStackTrace();
		} finally {

			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
					System.out.print("ERROR");
				}
			}
		}

		name = "";
		name = "EXITOS EN SU RESPUESTA A LA REPORTERIA "
				+ request.getParameter("user");
		if (request.getParameter("user").toString().equals("")) {
			name = "HOLA USUARIO";
		}
		response.setContentType("text/plain");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(name);
	}

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

	}

}