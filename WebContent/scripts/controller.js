// Controller for the "keypad" Widget.
var idCustomer = -1;
var CedulaCliente = "";
var NombreCliente = "";
var PreferTrato = "";
var AtencionPref = "";
var Categoria = "";
var OficialAsignado = "";
var tipoIdentificacion = "";

$(function() {

	var totalWidth = $('#keypadtable').width();
	// totalWidth = $('#keypadtable').width();
	$('.digitbutton').css('width', (totalWidth / 3) - 2 + 'px');
	$('#DEL').css('width', (totalWidth / 3) - 2 + 'px');
	$('#BOR').css('width', (totalWidth / 3) - 2 + 'px');
	$('#ENTER').css('width', (totalWidth / 3) - 2 + 'px');
	$('#valuefield').css('font-size', (totalWidth / 11) + 'pt');
	$('#valuefield').focus();

	// Add click listener to all digit buttons.
	$('.digitbutton').click(function() {
		var val = $('#valuefield').val();
		val += $(this).attr('id');
		$('#valuefield').val(val);
	});

	// Add click listener to all digit buttons.
	$('.digitbuttonabc').click(function() {
		var val = $('#valuefield').val();
		val += $(this).attr('id');
		$('#valuefield').val(val);
	});

	// Add delete listener caracter
	$('#DEL').click(function() {
		var val = $('#valuefield').val();
		if (val.length > 0) {
			// val = val.substring(0, val.length-1);
			$('#valuefield').val('');
		}
	});

	// Add delete listenerTodo
	$('#BOR').click(function() {
		var val = $('#valuefield').val();
		if (val.length > 0) {
			val = val.substring(0, val.length - 1);
			$('#valuefield').val(val);
		}
	});

});

function limpiarDel() {
	// Add delete listener caracter
	var val = $('#valuefield').val();
	if (val.length > 0) {
		$('#valuefield').val('');
		$('#valuefield').focus();
	}
}

function limpiarBor() {
	// Add delete listenerTodo
	var val = $('#valuefield').val();
	if (val.length > 0) {
		val = val.substring(0, val.length - 1);
		$('#valuefield').val(val);
	}
}

function pulsado(radioButton) {
	var tipoCedula = document.getElementById('rdIdentidadC').checked;
	var tipoRuc = ""// document.getElementById('rdIdentidadR').checked;
	var tipoPasaporte = ""// document.getElementById('rdIdentidadP').checked;
	// $('#valuefield').val('');
	if (tipoPasaporte) {
		$("#tecladoabc").css("display", "block");
		$("#keypadtable").css("display", "none");
		$('#valuefield').focus();
	} else {
		$("#tecladoabc").css("display", "none");
		$("#keypadtable").css("display", "block");
		$('#valuefield').focus();
	}

}

function activaTecladoAbcJ() {
	document.getElementById('rdIdentidadC').checked = true;
	$("#tecladoabc").css("display", "none");
	$("#keypadtable").css("display", "block");
}

function CallSeleccionaTipoCliente() {

	var cedula = $('#valuefield').val();
	var cedulaCorrecta = false;
	var cedulaLenght = cedula.length;
	if (cedula.length == 10) // ConstantesApp.LongitudCedula
	{
		var tercerDigito = parseInt(cedula.substring(2, 3));
		if (tercerDigito < 6) {
			// Coeficientes de validación cédula
			// El decimo digito se lo considera dígito verificador
			var coefValCedula = [ 2, 1, 2, 1, 2, 1, 2, 1, 2 ];
			var verificador = parseInt(cedula.substring(9, 10));
			var suma = 0;
			var digito = 0;
			var nuevovalor = cedulaLenght - 1;
			// alert(nuevovalor);
			for ( var i = 0; i < (nuevovalor); i++) {

				digito = Math.floor(parseInt(cedula.substring(i, i + 1))
						* coefValCedula[i]);
				Math.floor(digito);
				suma += (Math.floor((digito % 10)) + Math.floor((digito / 10)));

			}

			if ((suma % 10 == 0) && (suma % 10 == verificador)) {
				cedulaCorrecta = true;
			} else if ((10 - (suma % 10)) == verificador) {
				cedulaCorrecta = true;
			} else {
				cedulaCorrecta = false;
			}
		} else {
			cedulaCorrecta = false;
		}
	} else {
		cedulaCorrecta = false;
	}

	if (!cedulaCorrecta) {
		$('#valuefield').val("");
		$('#valuefield').focus();
		//alert("La Cédula ingresada es Incorrecta");
		$("#dialog").dialog();
		
	}
	if (cedulaCorrecta) {
		// alert("La Cédula ingresada es correcta");

		var numCedula = $('#valuefield').val();
		var tipoCedula = document.getElementById('rdIdentidadC').checked;
		var tipoRuc = ""// document.getElementById('rdIdentidadR').checked;
		var tipoPasaporte = ""// document.getElementById('rdIdentidadP').checked;

		if (numCedula.length > 0) {
			if (tipoCedula) {
				if (numCedula.length == 10) {
					CallServiceCliente(numCedula, 'C');
					$('#valuefield').val("");
					$('#valuefield').focus();
				} else {
					jMessage('Cédula no valida verifique para continuar.');
					$('#valuefield').val('');
				}
			} else if (tipoPasaporte) {
				CallServiceCliente(numCedula, 'P');
				$('#valuefield').val("");
				$('#valuefield').focus();
			} else if (tipoRuc) {
				if (numCedula.length === 13) {
					CallServiceCliente(numCedula, 'R');
					$('#valuefield').val("");
					$('#valuefield').focus();
				} else {
					CallServiceCliente(numCedula, 'E');
					$('#valuefield').val("");
					$('#valuefield').focus();
				}
			}
		} else {
			if (tipoCedula) {
				jMessage('Digite su cédula para continuar.');
			} else if (tipoPasaporte) {
				jMessage('Digite su pasaporte para continuar.');
			} else if (tipoRuc) {
				jMessage('Digite su RUC de la Empresa o código del establecimiento para continuar.');
			}
		}
	}
	$("#cerrar").click(function() {
		$("#dialog").dialog( "close" );
		return false;
	});
}
var user = "superadmin";
var pwd = "ulan";
var cedulaFinal ="";
function getXmlHttpRequest() {
	try {
		// Firefox, Opera 8.0+, Safari
		return new XMLHttpRequest();
	} catch (e) {
		// Internet Explorer
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				return new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				jMessage('El sistema no soporta esta tecnologia.');
				return null;
			}
		}
	}
}

function getRequest(path, callback, user, pwd) {
	user = "superadmin";
	pwd = "ulan";
	var xhr = getXmlHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				var json = eval('(' + xhr.responseText + ')');
				callback(json);
			} else {
				jMessage('No esta en el sistema.');
				$('#valuefield').val('');
			}
		}
	};
	xhr.open("GET", path,true, user, pwd);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.send(null);
}
// Llama al Web Servidor
function CallServiceCliente(cedulaRuc, tipoId) {
//incia verificaciond e datos
	cedulaFinal=cedulaRuc;
	var command =  "/rest/entrypoint/customers;cardNumber=" + cedulaRuc;
	getRequest(command, showReturn);
	
	

}

// Función que se ejecuta si realizó completa la petición
function OnSuccess(data, status, req) {

}

function OnError(data, status, req) // Función que se ejecuta si ocurre algún
// error
{

}

// <summary>
// Retorna Consulta si eiste
// </summary>
// <param name="grupo">Identificador del Grupo Administrativo</param>
// <returns>True o False generico</returns>
$(function() {
	// Evita problemas de cross-domain con JQuery
	jQuery.support.cors = true;
});

function GetServicecustomers() {
	// alert("siguiente paso de alto valor");
	var command = "/rest/entrypoint/customers;cardNumber=" + CedulaCliente;
	// getRequest(command, showReturn);
	// activaTecladoAbcJ();

}

// <summary>
// Post Graba los datos en la tabla de Customer
// </summary>
// <param name="grupo">Identificador del Grupo Administrativo</param>
// <returns>True o False generico</returns>
function PostServicecustomers() {

}

// <summary>
// Post Graba los datos en la tabla de Customer
// </summary>
// <param name="grupo">Identificador del Grupo Administrativo</param>
// <returns>True o False generico</returns>
function PutServicecustomersUpdate() {

}

function showReturn(val) {
	$.ajax({
		type : "GET",
		cache : false,
		url : "index_marcos.jsp",
		success : function(data) {
			// jMessage(cedulaRuc);
			window.location = "inicio_encuesta.jsp?CEDULA=" + cedulaFinal;

		}
	});
	alert("encontro algo");
	return;
}

function showReturnInsert(val) {

}

function showReturnUpdate(val) {

}

function limpiarCampos() {
	CedulaCliente = "";
	NombreCliente = "";
	PreferTrato = "";
	AtencionPref = "";
	Categoria = "";
	OficialAsignado = "";
	tipoIdentificacion = "";
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
};
