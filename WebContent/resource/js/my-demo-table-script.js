$.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {
	var min = parseInt($('#min').val(), 10);
	var min2 = $("#ciudad option:selected").text();

	var max = parseInt($('#max').val(), 10);
	var age = String(data[5]) || 5; // use data for the age column

	if ((isNaN(min) && isNaN(max)) || (isNaN(min) && age <= max)
			|| (min <= age && isNaN(max)) || (min <= age && age <= max)) {
		return true;
	}
	return false;
});

var Tipodegrafico;
$(document)
		.ready(
				function() {
					$('.table-container').show(300);
					$('.table-container2').hide(300);
					// $(".table-container").css("visibility","visible");
					// $("#chartContainer").css("visibility","hidden");
					 var table = $('#example')
							.DataTable(
									{
										
										"bProcessing" : false,
										"bServerSide" : false,
										"sAjaxSource" : "./StudentDataServlet",
										dom : 'Brtip',
										buttons : [ {
											 text: 'export',
										        extend: 'pdfHtml5',
										        exportOptions: {
										          columns: ':visible:not(.not-export-col)'
										        }
											
										},
							            'colvis' ],
										"aoColumns" : [ {
											"mData" : "id",
											"bSearchable": true
										}, {
											"mData" : "marca",
											"bSearchable": true
										}, {
											"mData" : "fecha",
											"bSearchable": true
										}, {
											"mData" : "provincia",
											"bSearchable": true
										}, {
											"mData" : "ciudad",
											"bSearchable": true
										} ],
										initComplete : function() {
											this
													.api()
													.columns()
													.every(
															function() {
																var column = this;
																var select = $(
																		'<select><option value=""></option></select>')
																		.appendTo(
																				$(
																						column
																								.footer())
																						.empty())
																		.on(
																				'change',
																				function() {
																					var val = $.fn.dataTable.util
																							.escapeRegex($(
																									this)
																									.val());

																					column
																							.search(
																									val ? '^'
																											+ val
																											+ '$'
																											: '',
																									true,
																									false)
																							.draw();

																				});

																column
																		.data()
																		.unique()
																		.sort()
																		.each(
																				function(
																						d,
																						j) {

																					select
																							.append('<option value="'
																									+ d
																									+ '">'
																									+ d
																									+ '</option>')
																				});
															});
										}
									});
					 
					//END of the data table
					var dateToday = new Date();
					var dates = $("#from, #to").datepicker({
					    defaultDate: "+1w",
					    changeMonth: true,
					    dateFormat: 'mm-dd-yy',
					    maxDate: dateToday,
					    onSelect: function(selectedDate) {
					        var option = this.id == "from" ? "minDate" : "maxDate",
					            instance = $(this).data("datepicker"),
					            date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
					        dates.not(this).datepicker("option", option, date);
					        table.draw();
					    }
					});
					

					$('#clear-dates').on('click', function () {
					    dates.datepicker('setDate', null);
					    table.draw();
					});
					
					$.fn.dataTableExt.afnFiltering.push(
					function( oSettings, aData, iDataIndex ) {
						
						var grab_daterange = $("#from").val();
						var grab_daterange2 = $("#to").val();
						
					    var filterstart = grab_daterange;
					    var filterend = grab_daterange2;
					    var iStartDateCol = 2; //using column 2 in this instance
					    var iEndDateCol = 2;
					    var tabledatestart = aData[iStartDateCol];
					    var tabledateend= aData[iEndDateCol];
						
					    if ( !filterstart && !filterend )
					    {
					        return true;
					    }
					    else if ((moment(filterstart).isSame(tabledatestart) || moment(filterstart).isBefore(tabledatestart)) && filterend === "")
					    {
					        return true;
					    }
					    else if ((moment(filterstart).isSame(tabledatestart) || moment(filterstart).isAfter(tabledatestart)) && filterstart === "")
					    {
					        return true;
					    }
					    else if ((moment(filterstart).isSame(tabledatestart) || moment(filterstart).isBefore(tabledatestart)) && (moment(filterend).isSame(tabledateend) || moment(filterend).isAfter(tabledateend)))
					    {
					        return true;
					    }
					    return false;
					}
					);

					
					
					$("#tablas").click(function() {
						$('.table-container').show(300);
						$('.table-container2').hide(300);
					});
					$("#grafico2").click(function() {
						Tipodegrafico = "pie";
						getGraphicDone();
						$('.table-container').hide(300);
						$('.table-container2').show(300);
					});

					$("#exportButton")
							.click(
									function() {
										var canvas = $(
												"#chartContainer .canvasjs-chart-canvas")
												.get(0);
										var dataURL = canvas.toDataURL();
										var pdf = new jsPDF();
										pdf.addImage(dataURL, 'JPEG', 0, 0);
										pdf.save("download.pdf");
									});

					$(".tipodegrafico").click(function() {
						getGraphicDone();

					});
					 $('#ciudad').change( function() {
					    	var min2 = $( "#ciudad option:selected" ).text();
					    	oTable = $('#example').DataTable();
					    	console.log(min2);
					    	oTable.search($(this).val()).draw() ;
					    } );
					 

				});

function getNumFilteredRows(id) {
	// var info = $(id).DataTable().page.info();
	var table = $('#example').DataTable();
	var info = table.page.info();

	return info.recordsDisplay;
}
var chart;
var pluginArrayArg = new Array();
function getGraphicDone() {
	pluginArrayArg = new Array();
	// $("#chartContainer").css("visibility","visible");
	// $(".table-container").css("visibility","hidden");
	var table = $('#example').DataTable();
	var text;
	if (table.data().count()) {
		text = table.columns(1).data().eq(0) // Reduce the 2D array into a 1D
												// array of data
		.sort() // Sort data alphabetically
		.unique() // Reduce to unique values
		;
		// alert((text.length));
	}
	var contador = [];
	for ( var i = 0; i < text.length; i++) {

		var value1 = table.columns(1).search(text[i]).draw();

		var countValue = getNumFilteredRows('example');
		
		contador.push(countValue);

	}

	table.columns(1).search("").draw();
	// alert(contador[2]);

	// var dataPoints = [{y : 10}, {y : 13}, {y : 18}, {y : 20}, {y : 17}];

	for ( var a = 0; a < contador.length; a++) {
		var jsonArg1 = new Object();

		jsonArg1.y = contador[a];
		jsonArg1.name = text[a];
		pluginArrayArg.push(jsonArg1);
	}
	 //alert(inspectObject(pluginArrayArg));

	// alert(inspectObject(dataPoints[0]));
	chart = new CanvasJS.Chart("chartContainer", {
		title : {
			text : "Dynamic Data"
		},
		axisX : {
			title : "Tipo de Calificaciones"
		},

		axisY : {
			title : "Numero de calificaciones"
		},
		data : [ {
			type : Tipodegrafico,

			indexLabelFontFamily : "Garamond",
			indexLabelFontSize : 20,
			indexLabelFontWeight : "bold",
			startAngle : 0,
			indexLabelFontColor : "MistyRose",
			indexLabelLineColor : "darkgrey",
			indexLabelPlacement : "inside",
			toolTipContent : "{name}: {y} calificaciones",
			showInLegend : true,
			indexLabel : "#percent%",
			dataPoints : pluginArrayArg
		} ]
	});

	chart.render();
	var index;
	document.getElementById('example').addEventListener("change", function(e) {

		console.log(e.target.value);
		index = 1;// e.path[2].rowIndex; // path[2] is ,tr>, 0 ->
		// <input> 1 -> <td> 2 -> <tr>
		if (!chart.options.data[0].dataPoints[index - 1])
			// console.log("chart.options.data[0]:"+inspectObject(chart.options.data[0]));
			chart.options.data[0].dataPoints[index - 1] = {};
		chart.options.data[0].dataPoints[index - 1].y = Number(e.target.value);
		// console.log("chart.options.data[0].dataPoints[index -
		// 1].y:"+chart.options.data[0].dataPoints[index - 1].y);
		chart.render();
	});

}

function getTypeButton(objButton) {
	Tipodegrafico = objButton.value;
	chart.options.title.text = "Actualziar";
	chart.options.animationEnabled = true;
	//chart.options.axisX.title = "123";
	//alert(inspectObject(chart.options));
	// alert(objButton.value);
	chart.options.data[0].type = Tipodegrafico;
	chart.render();
}
function inspectObject(obj) {
	var msg = '';

	for ( var property in obj) {
		if (typeof obj[property] == 'function') {
			var inicio = obj[property].toString().indexOf('function');
			var fin = obj[property].toString().indexOf(')') + 1;
			var propertyValue = obj[property].toString().substring(inicio, fin);
			msg += (typeof obj[property]) + ' ' + property + ' : '
					+ propertyValue + ' ;\n';
		} else if (typeof obj[property] == 'unknown') {
			msg += 'unknown ' + property + ' : unknown ;\n';
		} else {
			msg += (typeof obj[property]) + ' ' + property + ' : '
					+ obj[property] + ' ;\n';
		}
	}
	return msg;

}
