/// ---------------------------------------------------------------------------------------------------------------------------------
// Version : 5.0.02
// 
// Updates : 5.0.01 - 20121008 BvD 
//                             - first version
// ---------------------------------------------------------------------------------------------------------------------------------


// inject javascript code to be able to receive events

var user = "receptionlocal";
var pwd = "Reception123";
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
				alert("Your browser does not support AJAX!");
				return null;
			}
		}
	}
}

function getRequest(path, callback, user, pwd) {
	user = "receptionlocal";
	pwd = "Reception123";
	var xhr = getXmlHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				var json = eval('(' + xhr.responseText + ')');
				callback(json);
			} else {
				wwClient = qmatic.webwidget.client;	
				wwClient.switchHostPage("pant_No_cliente");
				$('#valuefield').val(''); 
			}
		}
	};
	xhr.open("GET", path,true, user, pwd);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.send(null);
}

function postRequest(path, json, user, pwd) {
	user = "receptionlocal";
	pwd = "Reception123";
	var xhr = getXmlHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200 || xhr.status == 204) {
				return;
			} else {
				wwClient = qmatic.webwidget.client;	
				wwClient.switchHostPage("pant_No_cliente");
				$('#valuefield').val(''); 
			}
		}
	};
	xhr.open("POST", path, true, user, pwd);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.setRequestHeader("Accept", "application/json");
	xhr.send(json);
}

function postCallBackRequest(path, json, callback, user, pwd) {
	user = "receptionlocal";
	pwd = "Reception123";
	var xhr = getXmlHttpRequest();	
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200 || xhr.status == 204) {
				var json = eval('(' + xhr.responseText + ')');
				callback(json);
			} else {
				wwClient = qmatic.webwidget.client;	
				wwClient.switchHostPage("pant_No_cliente");
				$('#valuefield').val(''); 
			}
		}
	};
	xhr.open("POST", path, true, user, pwd);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.setRequestHeader("Accept", "application/json");
	xhr.send(json);
}

function putRequest(path, user, pwd) {
	user = "receptionlocal";
	pwd = "Reception123";
	var xhr = getXmlHttpRequest();	
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200 || xhr.status == 204) {
				return;
			} else {
				loadError = true;
			}
		}
	};
	
	xhr.open("PUT", path, true, user, pwd);
	//xhr.setRequestHeader("Accept", "application/json");
	xhr.send(null);
}

function putCallBackRequest(path, callback, user, pwd) {
	user = "receptionlocal";
	pwd = "Reception123";
	var xhr = getXmlHttpRequest();	
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200 || xhr.status == 204) {
				var json = eval('(' + xhr.responseText + ')');
				callback(json);
			} else {
				loadError = true;
			}
		}
	};
	xhr.open("PUT", path, true, user, pwd);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.send(null);

}

function putJsonRequest(path, json, callback, user, pwd) {
	user = "receptionlocal";
	pwd = "Reception123";
	var xhr = getXmlHttpRequest();
	xhr.open("PUT", path, true, user, pwd);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.setRequestHeader("Accept", "application/json");
	xhr.send(json);
}

function showMessage(text) {
	var msg = document.getElementById("message");
	msg.innerHTML = "<span id='text'>" + text +"</span>";
	msg.style.visibility = "visible";
	window.setTimeout("hideMessage()", 5000);
}

function hideMessage() {
	document.getElementById("message").style.visibility = "hidden";
}

function showError(text) {
	var err = document.getElementById("error");
	err.innerHTML = "<span id='text'>" + text +"</span>";
	err.style.visibility = "visible";
	window.setTimeout("hideError()", 5000);
}

function hideError() {
	document.getElementById("error").style.visibility = "hidden";
}

function showModal(divId) {
    window.onscroll = function () { document.getElementById(divId).style.top = document.body.scrollTop; };
    document.getElementById(divId).style.display = "block";
    document.getElementById(divId).style.top = document.body.scrollTop;
}

function hideModal(divId) {
    document.getElementById(divId).style.display = "none";
	//document.getElementById(divId).style.visibility = "hidden";
}

function zeroPad(num,count) {
	var numZeropad = num + '';
	while(numZeropad.length < count) {
		numZeropad = "0" + numZeropad;
	}
	return numZeropad;
}

function secondsToHms(secs) {
	var t = new Date(1970,0,1);
	t.setSeconds(secs);
	return t.toTimeString().substr(0,8);
}

function secondsToHm(secs) {
	var t = new Date(1970,0,1);
	t.setSeconds(secs);
	return t.toTimeString().substr(0,5);
}