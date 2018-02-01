<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>REPORTERIA</title>
<script src="scripts/jquery-1.10.2.js"></script>
<script src="scripts/jquery-ui.js"></script>

</script>
<script>
	$(document).ready(function() {
		$('#submit').click(function(event) {
			var username = $('#user').val();
			$('#welcometext').text("Procesando..");
			alert("se envio los datos");
			/*$.get("reporte", function(data, textStatus) {
			    alert("Done, with the following status: " + textStatus
			        + ". Here is the response: " + data);
			}, "html");*/
			//alert("se regreso los datos");
			//$.get('reporte', {
	//			user : username
		//	}, function(responseText) {
			//	$('#welcometext').text(responseText);
			//});
		});
	});
</script>
</head>
<body>
	<form id="form1" action="reporte" method="get">
		<h1>REPORTERIA LUIS VERNAZA</h1>

		<a href="mant_index.jsp"> <img id="logo" src="photo.jpg"
			alt="Junta de beneficencia" width="150" height="150" border="4px"
			title="REGRESAR A INICIO" style="max-width: 100%; height: auto;">
		</a> <br> <br> CEDULA a buscar: <input type="text" id="user" />
		<input type="button" id="submit" value="Generar reporte" /> <br /> <br>
		<br>
		<div id="welcometext"></div>
		El proceso puede durar varios minutos , dependiendo de la velocidad de
		conexion, y trafico del momento.

	</form>
</body>
</html>