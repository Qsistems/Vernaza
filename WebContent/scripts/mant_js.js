var val = "0";
var valor_acumulado = "0";
var btn_clickeado = "";
$(function() {

	function runEffect(id) {
		// get effect type from
		var selectedEffect = "transfer";

		// most effect types need no options passed by default
		var options = {};
		// some effects have required parameters
		if (selectedEffect === "scale") {
			options = {
				percent : 0
			};
		} else if (selectedEffect === "transfer") {
			options = {
				to : "#separator",
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
	function runEffect_respuesta(id) {
		// get effect type from
		var selectedEffect = "transfer";

		// most effect types need no options passed by default
		var options = {};
		// some effects have required parameters
		if (selectedEffect === "scale") {
			options = {
				percent : 0
			};
		} else if (selectedEffect === "transfer") {
			options = {
				to : "#separator",
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
		$("#" + id).effect(selectedEffect, options, 500, callback_respuesta(id));
	}
	;
	function runEffect_nuevo(id) {
		// get effect type from
		var selectedEffect = "transfer";

		// most effect types need no options passed by default
		var options = {};
		// some effects have required parameters
		if (selectedEffect === "scale") {
			options = {
				percent : 0
			};
		} else if (selectedEffect === "transfer") {
			options = {
				to : "#logo",
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
		$("#" + id).effect(selectedEffect, options, 500, callback_nuevo(id));
	}
	;
	function callback(id) {

		setTimeout(function() {
			if (id == "1") {
				window.location = "mant_nuevo.jsp";
			} else {

				if (id == "2") {
					window.location = "mant_edit.jsp";
				} else {

					if (id == "3") {
						window.location = "mant_report.jsp";
					} else {
						if (id == "4") {
							window.location = "index.jsp";
						}

					}
				}
			}
		}, 500);
	}

	function callback_respuesta(id) {

		setTimeout(function() {
			if (id == "1") {
				window.location = "mant_nuevo_respuesta.jsp";
			} else {

				if (id == "2") {
					window.location = "mant_edit_respuestas.jsp";
				} else {

					if (id == "3") {
						window.location = "mant_report.jsp";
					} else {
						if (id == "4") {
							window.location = "index.jsp";
						}

					}
				}
			}
		}, 500);
	}

	$(".button_encuesta").click(function() {
		var val = $(this).attr('id');
		if (val == "4") {
			runEffect(val);
			setTimeout(function() {
				window.location = "index.jsp";
			}, 500);

		} else {
			runEffect(val);
		}
		return false;
	});
	
	$(".button_encuesta_Respuesta").click(function() {
		var val = $(this).attr('id');
		if (val == "4") {
			runEffect(val);
			setTimeout(function() {
				window.location = "index.jsp";
			}, 500);

		} else {
			runEffect_respuesta(val);
		}
		return false;
	});
	
	

	$(".button_mant_nuevo").click(function(e) {
		val = $(this).attr('id');
		e.preventDefault();
		if (val == valor_acumulado) {
			$(this).css('background', 'url("images/btn_0.png")');
			valor_acumulado = "0";
			if ($(this).attr("disabled") == "true") {
				$(".button_mant_nuevo").removeAttr("disabled");
				$(this).removeAttr("disabled");
			} else {
				$(".button_mant_nuevo").removeAttr("disabled");
				valor_acumulado = "";
			}
			btn_clickeado = "";

		} else {
			$(this).css('background', 'url("images/btn_espacio.png")');
			$(".button_mant_nuevo").attr("disabled", true);
			$(this).removeAttr("disabled");
			btn_clickeado = val;
		}
		runEffect_nuevo(val);
		valor_acumulado = val;

		return false;
	});

	$(".button_mant_nuevo_respuesta").click(function(e) {
		val = $(this).attr('id');
		e.preventDefault();
		if (val == valor_acumulado) {
			$(this).css('background', 'url("images/btn_0.png")');
			valor_acumulado = "0";
			if ($(this).attr("disabled") == "true") {
				$(".button_mant_nuevo_respuesta").removeAttr("disabled");
				$(this).removeAttr("disabled");
			} else {
				$(".button_mant_nuevo_respuesta").removeAttr("disabled");
				valor_acumulado = "";
			}
			btn_clickeado = "";

		} else {
			$(this).css('background', 'url("images/btn_espacio.png")');
			$(".button_mant_nuevo_respuesta").attr("disabled", true);
			$(this).removeAttr("disabled");
			btn_clickeado = val;
		}
		runEffect_nuevo(val);
		valor_acumulado = val;

		return false;
	});
	
	
	$(".button_mant_edit").click(function(e) {
		val = $(this).attr('id');
		var val_detalle = $(this).text();
		e.preventDefault();
		if (val == valor_acumulado) {
			$(this).css('background', 'url("images/btn_0.png")');
			valor_acumulado = "0";
			if ($(this).attr("disabled") == "true") {
				$(".button_mant_edit").removeAttr("disabled");
				$("#nueva_pregunta").val("");
				$(this).removeAttr("disabled");
			} else {
				$(".button_mant_edit").removeAttr("disabled");
				valor_acumulado = "";
			}
			btn_clickeado = "";

		} else {
			$(this).css('background', 'url("images/btn_espacio.png")');
			$(".button_mant_edit").attr("disabled", true);
			$("#nueva_pregunta").val($(this).val());
			$(this).removeAttr("disabled");
			btn_clickeado = val;
		}
		runEffect_nuevo(val);
		valor_acumulado = val;
		$("#nueva_pregunta").val(val_detalle);
		return false;
	});

	
	$(".button_mant_edit_respuesta").click(function(e) {
		val = $(this).attr('id');
		var val_detalle=$(this).text();
		e.preventDefault();
		if (val == valor_acumulado) {
			$(this).css('background', 'url("images/btn_0.png")');
			valor_acumulado = "0";
			if ($(this).attr("disabled") == "true") {
				$(".button_mant_edit_respuesta").removeAttr("disabled");
				$("#nueva_respuesta").val("");
				$(this).removeAttr("disabled");
			} else {
				$(".button_mant_edit_respuesta").removeAttr("disabled");
				valor_acumulado = "";
			}
			btn_clickeado = "";

		} else {
			$(this).css('background', 'url("images/btn_espacio.png")');
			$(".button_mant_edit_respuesta").attr("disabled", true);
			$("#nueva_respuesta").val($(this).val());
			$(this).removeAttr("disabled");
			btn_clickeado = val;
		}
		runEffect_nuevo(val);
		valor_acumulado = val;
		$("#nueva_respuesta").val(val_detalle);
		return false;
	});
	function callback_nuevo(id) {

	}
	$("#submit")
			.click(
					function() {
						var val = $(this).attr('id');
						$(this).attr("disabled", true);
						$(this).val("Guardando");
						var nueva_pregunta = $("#nueva_pregunta").val();
						if (nueva_pregunta.trim() == "") {

							$("#dialog_title_span")
									.text(
											"ERROR - NO DEBE DEJAR ESPACIOS EN BLANCO...");
							$(".ingresar_pregnta_nueva").css("border",
									" 1px dotted RED");
							$(this).attr("disabled", false);
							$(this).val("Guardar");
							return false;
						}
						$(".ingresar_pregnta_nueva").css("border",
								" 1px dotted black");
						runEffect_nuevo(val);
						$("#dialog_title_span").text("PROCESANDO...");
						setTimeout(function() {
							window.location = "mant_nuevo_final.jsp?pregunta1="
									+ btn_clickeado + "&preguntanueva="
									+ nueva_pregunta;
						}, 1000);

						return false;
					});
	
	$("#submit_respuesta")
	.click(
			function() {
				var val = $(this).attr('id');
				$(this).attr("disabled", true);
				$(this).val("Guardando");
				var nueva_pregunta = $("#nueva_respuesta").val();
				if (nueva_pregunta.trim() == "") {

					$("#dialog_title_span")
							.text(
									"ERROR - NO DEBE DEJAR ESPACIOS EN BLANCO...");
					$(".ingresar_respuesta_nueva").css("border",
							" 1px dotted RED");
					$(this).attr("disabled", false);
					$(this).val("Guardar");
					return false;
				}
				$(".ingresar_respuesta_nueva").css("border",
						" 1px dotted black");
				runEffect_nuevo(val);
				$("#dialog_title_span").text("PROCESANDO...");
				setTimeout(function() {
					window.location = "mant_nuevo_final_respuesta.jsp?respuesta1="
							+ btn_clickeado + "&respuestanueva="
							+ nueva_pregunta;
				}, 1000);

				return false;
			});
	
	
	$("#submit_edit").click(
			function() {
				var val = $(this).attr('id');
				$(this).attr("disabled", true);
				$(this).val("Guardando");
				var nueva_pregunta = $("#nueva_pregunta").val();

				runEffect_nuevo(val);
				$("#dialog_title_span").text("PROCESANDO...");
				setTimeout(function() {
					window.location = "mant_edit_final.jsp?pregunta1="
							+ btn_clickeado + "&preguntanueva="
							+ nueva_pregunta;
				}, 1000);

				return false;
			});

	$("#submit_edit_respuesta")
			.click(
					function() {
						var val = $(this).attr('id');
						$(this).attr("disabled", true);
						$(this).val("Guardando");
						var nueva_pregunta = $("#nueva_respuesta").val();

						runEffect_nuevo(val);
						$("#dialog_title_span").text("PROCESANDO...");
						setTimeout(
								function() {
									window.location = "mant_edit_final_respuestas.jsp?respuesta1="
											+ btn_clickeado
											+ "&respuestanueva="
											+ nueva_pregunta;
								}, 1000);

						return false;
					});

});