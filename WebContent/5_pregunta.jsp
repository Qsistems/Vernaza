<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="css/jquery-ui.css">
<script src="scripts/jquery-1.10.2.js"></script>
<script src="scripts/jquery-ui.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" href="css/button.css" />
<script src="scripts/controller_button.js"></script>
<title>QUINTA PREGUNTA</title>
</head>
<body>
	<%
		String cedula = request.getParameter("CEDULA");
	%>
	CEDULA =
	<%=cedula%>

	<%@ page import="java.util.*"%>
	<%@ page import="javax.sql.*;"%>
	<%
		java.sql.Connection con;
		java.sql.Statement s;
		java.sql.ResultSet rs;
		java.sql.PreparedStatement pst;

		con = null;
		s = null;
		pst = null;
		rs = null;

		// Remember to change the next line with your own environment 
		String url = "jdbc:sqlserver://localhost:1433;databaseName=calificacionTest";
		String id = "vernazaReporteria";
		String pass = "ultimated01";
		try {

			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = java.sql.DriverManager.getConnection(url, id, pass);

		} catch (ClassNotFoundException cnfex) {
			cnfex.printStackTrace();

		}
		String sql = "select * from CalificacionBase";
		try {
			s = con.createStatement();
			rs = s.executeQuery(sql);
	%>


	<br> ¿Cómo califica la atención prestada por nuestros
	representantes en el modulo de servicio?
	<br>
	<table id="keypadtable">
		<tbody>
			<tr>
				<%
					int contador = 0;
						int contador_pagina = 1;
						while (rs.next()) {
							contador++;
				%>

				<td><button class="button_encuesta"
						id="<%=rs.getString("Califi_id")%>"><%=rs.getString("Califi_detalle")%></button>
				</td>




				<%
					}
				%>
			</tr>
			<br>
			<input id="cedula" type="hidden" value="<%=cedula%>">
			<input id="contador" type="hidden" value="<%=contador%>">
			<input id="contador_pagina" type="hidden"
				value="<%=contador_pagina%>">
			<%
				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					if (rs != null)
						rs.close();
					if (s != null)
						s.close();
					if (con != null)
						con.close();
				}
			%>
		</tbody>
	</table>
</body>
</html>