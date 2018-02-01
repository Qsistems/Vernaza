<html>
<head><title>Enter to database</title></head>
<body>
<table>
<%@ page import="java.util.*" %>
<%@ page import="javax.sql.*;" %>
<% 

java.sql.Connection con;
java.sql.Statement s;
java.sql.ResultSet rs;
java.sql.PreparedStatement pst;

con=null;
s=null;
pst=null;
rs=null;

// Remember to change the next line with your own environment 
String url = "jdbc:sqlserver://localhost:1433;databaseName=calificacionTest";
String id = "vernazaReporteria";
String pass = "ultimated01";
try{

	Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
con = java.sql.DriverManager.getConnection(url, id, pass);

}catch(ClassNotFoundException cnfex){
cnfex.printStackTrace();

}
String sql = "select * from CalificacionBase";
try{
s = con.createStatement();
rs = s.executeQuery(sql);
%>

<%
while( rs.next() ){
%><tr>
<td><%= rs.getString("Califi_detalle") %></td>
<td><%= rs.getString("Califi_id") %></td>

</tr>
<%
}
%>

<%

}
catch(Exception e){e.printStackTrace();}
finally{
if(rs!=null) rs.close();
if(s!=null) s.close();
if(con!=null) con.close();
}
String cedula="0924321391";
boolean cedulaCorrecta = false;
try {
	 
	if (cedula.length() == 10) // ConstantesApp.LongitudCedula
	{
	int tercerDigito = Integer.parseInt(cedula.substring(2, 3));
	if (tercerDigito < 6) {
	// Coeficientes de validación cédula
	// El decimo digito se lo considera dígito verificador
	 int[] coefValCedula = { 2, 1, 2, 1, 2, 1, 2, 1, 2 };
	 int verificador = Integer.parseInt(cedula.substring(9,10));
	 int suma = 0;
	 int digito = 0;
	for (int i = 0; i < (cedula.length() - 1); i++) {
	 digito = Integer.parseInt(cedula.substring(i, i + 1))* coefValCedula[i];
	 suma += ((digito % 10) + (digito / 10));
	 System.out.println(suma);
	}
	
	if ((suma % 10 == 0) && (suma % 10 == verificador)) {
	 cedulaCorrecta = true;
	
	}
	else if ((10 - (suma % 10)) == verificador) {
	 cedulaCorrecta = true;
	 System.out.println(suma % 10);
	} else {
	 cedulaCorrecta = false;
	}
	} else {
	cedulaCorrecta = false;
	}
	} else {
	cedulaCorrecta = false;
	}
	} catch (NumberFormatException nfe) {
	cedulaCorrecta = false;
	} catch (Exception err) {
	System.out.println("Una excepcion ocurrio en el proceso de validadcion");
	cedulaCorrecta = false;
	}
	 
	if (!cedulaCorrecta) {
	System.out.println("La Cédula ingresada es Incorrecta");
	}
	if (cedulaCorrecta) {
		System.out.println("La Cédula ingresada es correcta");
		}
	
	
%>

</body>
</html>