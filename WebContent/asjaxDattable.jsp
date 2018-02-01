<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Ajax Data Response And JQuery data table</title>

<style type="text/css" title="currentStyle">
@import "./resource/css/buttons.dataTables.min.css";
@import "./resource/css/jquery.dataTables.min.css";
@import "./resource/css/bootstrap.css";
@import "./resource/css/daterangepicker.css";
</style>


<script src="./resource/js/moment.min.js"></script>


<script src="./resource/js/jquery-1.12.4.js"></script>
<script src="./resource/js/canvasjs.min.js"></script>
<script src="./resource/js/jspdf.js"></script>
<script src="./resource/js/jquery.canvasjs.min.js"></script>
<script src="./resource/js/jspdf.min.js"></script>
<script src="./resource/js/jquery.dataTables.min.js"></script>
<script
	src="https://cdn.datatables.net/buttons/1.2.4/js/dataTables.buttons.min.js"></script>
	<script src="//cdn.datatables.net/buttons/1.2.4/js/buttons.colVis.min.js"></script>
<script src="//cdn.datatables.net/buttons/1.2.4/js/buttons.flash.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js"></script>
<script
	src="//cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/pdfmake.min.js"></script>
<script src="./resource/js/vfs_fonts.js"></script>
<script src="./resource/js/buttons.html5.min.js"></script>
<script src="//cdn.datatables.net/buttons/1.2.4/js/buttons.print.min.js"></script>
<script src="http://code.highcharts.com/highcharts.js"></script>
<script
	src="http://code.highcharttable.org/master/jquery.highchartTable-min.js"></script>

<script src="./resource/js/my-demo-table-script.js"></script>

<script src = "https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
      <link href = "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css"
         rel = "stylesheet">

</head>
<body>
	<div class="table-container">
	<input type="text" placeholder="from this date" id="from" />
to
<input type="text" placeholder="that date" id="to" />


<input type="button" value="Clear dates" class="btn" id="clear-dates">




		<table border="0" cellspacing="5" cellpadding="5">
			<tbody>
				<tr>
					<td>Graficar:</td>
					
					<td><button id="grafico2" name="grafico">Grafico
					</td>

				</tr>
				
			</tbody>
		</table>
		<table id="example" class="display" cellspacing="0" width="100%">
			<thead>
				<tr><left>
					<th>ID</th>
					<th>Marca</th>
					<th>Fecha</th>
					<th>Provincia</th>
					<th>Ciudad</th>
					</left>

				</tr>
			</thead>
			<tfoot>
				<tr>
					<th>ID</th>
					<th>Marca</th>
					<th>Fecha</th>
					<th>Provincia</th>
					<th>Ciudad</th>

				</tr>
			</tfoot>
			<tbody>
			</tbody>
		</table>
	</div>
	<br />
	<!-- Just so that JSFiddle's Result label doesn't overlap the Chart -->
	<div class="table-container2">
		<table border="0" cellspacing="5" cellpadding="5">
			<tbody>
				<tr>
					<td><button id="tablas" type="button">Vista de tablas</button>
					</td>
				</tr>
				<tr>
					<td>Tipos de graficos</td>
					<td><button class=".tipodegrafico" id="line" type="button"
							value="line" onclick='getTypeButton(this)'>Lineas</button></td>
					<td><button class=".tipodegrafico" id="pie" type="button"
							value="pie" onclick='getTypeButton(this)'>Pie</button></td>
					<td><button class=".tipodegrafico" id="splineArea"
							type="button" value="splineArea" onclick='getTypeButton(this)'>Curvas</button>
					</td>
				</tr>
				<tr>

					<td>Exportar:</td>

					<td><button id="exportButton" type="button">Export as
							PDF</button></td>

				</tr>

			</tbody>
		</table>

		<div id="chartContainer" style="height: 100%; width: 100%;"></div>
	</div>
</body>
</html>