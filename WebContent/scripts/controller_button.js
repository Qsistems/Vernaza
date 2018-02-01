$(function() {

	var cedula = '';
	// run the currently selected effect
	function runEffect(id) {
		// get effect type from
		var selectedEffect = "bounce";

		// most effect types need no options passed by default
		var options = {};
		// some effects have required parameters
		if (selectedEffect === "scale") {
			options = {
				percent : 0
			};
		} else if (selectedEffect === "transfer") {
			options = {
				to : "#" + id,
				className : "ui-effects-transfer"
			};
		} else if (selectedEffect === "size") {
			options = {
				to : {
					width : 200,
					height : 60
				}
			};
		}

		// run the effect
		$("#" + id).effect(selectedEffect, options, 500, callback(id));
	}
	;

	// callback function to bring a hidden box back
	function callback(id) {
		var val = $("#contador_pagina").attr('value');
		var elem1 = $("#val1").attr('value');
		var elem2 = $("#val2").attr('value');
		var elem3 = $("#val3").attr('value');
		var elem4 = $("#val4").attr('value');
		// alert(val);
		if (val == 2) {
			elem1 = id;
			// alert("entro a 2:" + elm2);
		}
		if (val == 3) {
			elem2 = id;
			// alert(elem2);
			// alert("entro a 3:" + elm3);
		}
		if (val == 4) {
			elem3 = id;
			// alert("entro a 4:" + elm4);
		}
		if (val == 1) {
			elem4 = id;
		}
		cedula = $("#cedula").attr('value');
		// elem4 = $("#val4").attr('value');

		if (val != "1") {
			setTimeout(function() {

				window.location = val + "_pregunta.jsp?CEDULA=" + cedula
						+ "&ID=" + id + "&elem1=" + elem1 + "&elem2=" + elem2
						+ "&elem3=" + elem3 + "&elem4=" + elem4;

			}, 500);

		} else {
			setTimeout(function() {

				window.location = "final.jsp?CEDULA=" + cedula + "&elem1="
						+ elem1 + "&elem2=" + elem2 + "&elem3=" + elem3
						+ "&elem4=" + elem4;

			}, 500);

		}

	}
	;
	/*
	 * $("#1").click(function() { var val = $(this).attr('id'); runEffect(val);
	 * return false; }); $("#2").click(function() { var val =
	 * $(this).attr('id'); runEffect(val); return false; });
	 * 
	 * $("#3").click(function() { var val = $(this).attr('id'); runEffect(val);
	 * return false; });
	 * 
	 * $("#4").click(function() { var val = $(this).attr('id'); runEffect(val);
	 * return false; });
	 * 
	 * $("#5").click(function() { var val = $(this).attr('id'); runEffect(val);
	 * return false; });
	 */
	$(".button_encuesta").click(function() {
		var val = $(this).attr('id');
		runEffect(val);
		return false;
	});
});
function OnSuccess(data, status, req) {

}
