<%@ page import="java.util.Locale"%><%@ page
	import="java.util.ResourceBundle"%><%@ page
	import="java.util.MissingResourceException"%><%@ page
	contentType="text/html; charset=UTF-8"%>



<!doctype html>

<html>
<head>
<META http-equiv="content-type" content="text/html; charset=UTF-8">
<title>Qmatic Platform Login page <shiro:authenticated>
		<shiro:principal />
	</shiro:authenticated></title>
<link rel="stylesheet" type="text/css" href="/css/reset.css">
<link rel="stylesheet" type="text/css" href="/css/css3.css">
<link rel="stylesheet" type="text/css" href="/css/orchestra.css">
<link rel="stylesheet" type="text/css" href="/css/custom-theme.css">
<script src="ini.js"></script>
<style type="text/css">
/* Container help, not need for gwt */
.container {
	padding: 120px 20px 60px 20px;
	max-width: 960px;
}
/* Login and Home specific */
.content-wrapper {
	min-width: 400px;
}

.content {
	min-height: 100px;
}

.orch-actions a:first-child,.orch-actions a:last-child {
	border: 0;
	float: none;
}

td.orch-actions div {
	width: 48px;
}
</style>
<!--[if lt IE 9]>
	    <script src="/css/html5shiv.js"></script>
	<![endif]-->

<script type="text/javascript">
	function init() {
		if (inIframe()) {
			window.parent.location = '/login.jsp';
		}
		document.getElementById("username").focus();

	}
	function inIframe() {
		try {
			return

			window.self !== window.top;
		} catch (e) {
			return

			true;
		}
	}
</script>
</head>

<body>

</body>

</html>
