<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">



<%@page import="java.sql.DriverManager"%>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql"%>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<link rel="stylesheet" href="css/keypad.css" />
<link rel="stylesheet" href="css/jquery.alerts.css" />
<link rel="stylesheet" href="css/jquery-ui.css">
<script src="scripts/jquery-1.8.2.min.js"></script>
<script src="scripts/controller.js"></script>
<script src="scripts/jquery.alerts.mod.js"></script>

<script src="scripts/jquery.ui.draggable.js"></script>
<!-- jquery -->

<script src="scripts/jquery-1.10.2.js"></script>
<script src="scripts/jquery-ui.js"></script>



<title>LUIS VERNAZA</title>

<script>
	function searchKeyPress(e) {
		// look for window.event in case event isn't passed in
		if (typeof e == 'undefined' && window.event) {
			e = window.event;
		}
		if (e.keyCode == 13) {
			document.getElementById('ENTER').click();

		}
	}
</script>

</head>

<body style="overflow: hidden; display: hidden;">
	
	<div id="dialog" title="Advertencia" style="display: none;">


		<p>ERROR al ingresar la cedula intentelo nuevamente</p>
		<center>
		<button id="cerrar">CERRAR</button>
		</center>
	</div>
	
	<div id="content" class="body_css">

		<div id="tecladoRadio" style="position: absolute; left: 1px;">




			<table id="keypadtableRadio" width="400px"
				style="position: absolute; left: 100px;" class="responsive"
				data-min="11" data-max="30" cellpadding="0" cellspacing="0">

				<tbody>
					<tr>
						<td width="135px"><input type="radio" name="rdIdentidad"
							id="rdIdentidadC" value="C" checked="checked"
							onchange="pulsado(this);" /> <label for="rdIdentidadC">Cédula</label>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<br /> <br />
		<div id="tecladoEnviar" style="position: absolute; left: 1px;">


			<table id="keypadtableT">
				<tbody>
					<tr>
						<td><input type="text" id="valuefield" maxlength="10"
							onkeypress="searchKeyPress(event);" /></td>


					</tr>
				</tbody>
			</table>
			<%%>
		</div>
		<br /> <br /> <br /> <br /> <br />
		<table id="keypadtable">
			<tbody>
				<tr>
					<td><button class="digitbutton" id="1">1</button></td>
					<td><button class="digitbutton" id="2">2</button></td>
					<td><button class="digitbutton" id="3">3</button></td>
					<td><button class="digitbutton" id="4">4</button></td>
					<td rowspan="4"><button id="ENTER" class="enterbutton"
							name="ENVIAR" onclick="CallSeleccionaTipoCliente();">CONTINUAR</button>
					</td>

				</tr>
				<tr>
					<td><button class="digitbutton" id="5">5</button></td>
					<td><button class="digitbutton" id="6">6</button></td>
					<td><button class="digitbutton" id="7">7</button></td>
					<td><button class="digitbutton" id="8">8</button></td>

				</tr>

				<tr>
					<td><button class="delbutton" id="DEL">Borrar</button></td>
					<td>
						<button class="digitbutton" id="9">9</button></td>
					<td><button class="digitbutton" id="0">0</button></td>
					<td><button class="delbuttonc" id="BOR">
							<label for="delbuttonc" style="color: #EEECF1">.</label>
						</button></td>
				</tr>
			</tbody>
		</table>



	</div>
	<div id="tecladoabc"
		style="position: absolute; left: 0px; display: none;">














		<table id="keypadtableabc">
			<tbody>
				<tr>
					<td><button class="digitbuttonabc" id="1">1</button></td>
					<td><button class="digitbuttonabc" id="2">2</button></td>
					<td><button class="digitbuttonabc" id="3">3</button></td>
					<td><button class="digitbuttonabc" id="4">4</button></td>
					<td><button class="digitbuttonabc" id="5">5</button></td>
					<td><button class="digitbuttonabc" id="6">6</button></td>
					<td><button class="digitbuttonabc" id="7">7</button></td>
					<td><button class="digitbuttonabc" id="8">8</button></td>
					<td><button class="digitbuttonabc" id="9">9</button></td>
					<td><button class="digitbuttonabc" id="0">0</button></td>
				</tr>
				<tr>
					<td><button class="digitbuttonabc" id="Q">Q</button></td>
					<td><button class="digitbuttonabc" id="W">W</button></td>
					<td><button class="digitbuttonabc" id="E">E</button></td>
					<td><button class="digitbuttonabc" id="R">R</button></td>
					<td><button class="digitbuttonabc" id="T">T</button></td>
					<td><button class="digitbuttonabc" id="Y">Y</button></td>
					<td><button class="digitbuttonabc" id="U">U</button></td>
					<td><button class="digitbuttonabc" id="I">I</button></td>
					<td><button class="digitbuttonabc" id="O">O</button></td>
					<td><button class="digitbuttonabc" id="P">P</button></td>
				</tr>
				<tr>
					<td><button class="digitbuttonabc" id="A">A</button></td>
					<td><button class="digitbuttonabc" id="S">S</button></td>
					<td><button class="digitbuttonabc" id="D">D</button></td>
					<td><button class="digitbuttonabc" id="F">F</button></td>
					<td><button class="digitbuttonabc" id="G">G</button></td>
					<td><button class="digitbuttonabc" id="H">H</button></td>
					<td><button class="digitbuttonabc" id="J">J</button></td>
					<td><button class="digitbuttonabc" id="K">K</button></td>
					<td><button class="digitbuttonabc" id="L">L</button></td>
					<td><button class="digitbuttonabc" id="Ñ">Ñ</button></td>
				</tr>
				<tr>
					<td><button class="digitbuttonabc" id="Z">Z</button></td>
					<td><button class="digitbuttonabc" id="X">X</button></td>
					<td><button class="digitbuttonabc" id="C">C</button></td>
					<td><button class="digitbuttonabc" id="V">V</button></td>
					<td><button class="digitbuttonabc" id="B">B</button></td>
					<td><button class="digitbuttonabc" id="N">N</button></td>
					<td><button class="digitbuttonabc" id="M">M</button></td>
					<td colspan="2"><button class="delbuttonabc" name="BORRAR"
							onclick="limpiarDel();">Borrar</button></td>
					<td><button class="delbuttonbackspace" name="ELIMINAR"
							onclick="limpiarBor();">
							<label for="delbuttonbackspace" style="color: #EEECF1">.</label>
						</button></td>
				</tr>
			</tbody>
		</table>

	</div>

</body>
</html>