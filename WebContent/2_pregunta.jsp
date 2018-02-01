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
<title>SEGUNDA PREGUNTA</title>
</head>
<body style="overflow: hidden; display: hidden;">
	<%
		String cedula = request.getParameter("CEDULA");
		String val1 = request.getParameter("elem1");
	%>


	<%@ page import="java.util.*"%>
	<%@ page import="javax.sql.*;"%>
	<%
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
		String sql = "select * from CalificacionBase where Califi_estado='1'";
		String sql_pregunta = "select * from Califi_preguntas where Califi_estado ='1' and Califi_numero_pregunta='2' order by Califi_numero_pregunta";
		try {
			s2 = con.createStatement();
			rs2 = s2.executeQuery(sql_pregunta);
			s = con.createStatement();
			rs = s.executeQuery(sql);
	%>

	<div class="divPreg_css">
		<%
			while (rs2.next()) {

					out.println(rs2.getString(2));
				}
		%>
	</div>
	<br>
	<table class="table_css">


		<%
			int contador = 0;
				int contador_pagina = 3;
				while (rs.next()) {
					contador++;
		%>
		<tr>
			<td class="td_css">
				<button class="button_encuesta" id="<%=rs.getString("Califi_id")%>"><%=rs.getString("Califi_detalle")%></button>
			</td>
		</tr>



		<%
			}
		%>

		<br>
		<input id="val1" type="hidden" value="<%=val1%>">

		<input id="cedula" type="hidden" value="<%=cedula%>">
		<input id="contador" type="hidden" value="<%=contador%>">
		<input id="contador_pagina" type="hidden" value="<%=contador_pagina%>">
		<%
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				if (rs != null)
					rs.close();
				if (rs2 != null)
					rs2.close();
				if (s != null)
					s.close();
				if (s2 != null)
					s2.close();
				if (con != null)
					con.close();
			}
		%>

	</table>
</body>
</html>