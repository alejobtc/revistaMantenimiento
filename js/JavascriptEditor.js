// JavaScript Document


$(function()
{
$("#cerrarSE").button().on("click", function(event)
{	
	
	$.post("../Controlador/ControladoraLogin.php",{metodocontrol:'1'},function(respuesta)
			{
				window.location="../Vistas/Vindex.html";
				
		})
});		
	
	// funcion para crear el chat
$("#enviarChat").button().on("click", function(event)
{	
	
	var usuario = $("#user").val();
	var mensaje = $("#mensaje").val();
	
	$.post("../Controlador/chat2.php",{user:usuario, mensaje:mensaje },function(respuesta)
			{
			
				
		})
				
});

	
	
	
$("#Pares").button().on("click", function(event)
     {
	 
	document.getElementById("ingresarp").style.visibility = "visible";
	document.getElementById("consultarp").style.visibility = "visible";
	document.getElementById("modificarp").style.visibility = "visible";
	document.getElementById("eliminarp").style.visibility = "visible";
	
		document.getElementById("ingresara").style.visibility = "hidden";
	document.getElementById("consultara").style.visibility = "hidden";
	document.getElementById("modificara").style.visibility = "hidden";
	document.getElementById("eliminara").style.visibility = "hidden";
	 
	})

$("#Autores").button().on("click", function(event)
     {
	 
	document.getElementById("ingresara").style.visibility = "visible";
	document.getElementById("consultara").style.visibility = "visible";
	document.getElementById("modificara").style.visibility = "visible";
	document.getElementById("eliminara").style.visibility = "visible";
	
	// cerrar
	
	document.getElementById("ingresarp").style.visibility = "hidden";
	document.getElementById("consultarp").style.visibility = "hidden";
	document.getElementById("modificarp").style.visibility = "hidden";
	document.getElementById("eliminarp").style.visibility = "hidden";
	 
	});
});

