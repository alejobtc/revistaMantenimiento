// JavaScript Document
$(function()
{	


$("#consultarPorFecha").button().on("click", function(event)
{
	
	if(document.getElementById('fechaInicio').value == '' || document.getElementById('fechaFin').value == '')
	{

		alert("Ingresar fecha de inicio y fecha de fin");

	}else{

		var obj=document.getElementById('Contenido1');
		obj.innerHTML="<tr class=\"success letras\"><td>TITULO</td><td>RESUMEN</td><td>TEMA</td></tr></table></div>";

		//alert(document.getElementById('CodPublicacion').value);

	 $.post("../Controlador/ControladoraArticulo.php",{accion:'consultarPorFecha', 
	 	inicio: document.getElementById('fechaInicio').value,
	 	fin: document.getElementById('fechaFin').value
	 	},

	 	function(respuesta){

	 		alert(respuesta);
	 		var datos= jQuery.parseJSON(respuesta); 	

	 		for (var i in datos)
	 {
	
	    var elementotr=document.createElement('tr');
		// creacion segundo td y se lo asigno al padre tr
		var elementotd=document.createElement('td');
		elementotr.appendChild(elementotd);
		var a = document.createElement('a');
		var linkText = document.createTextNode(datos[i].titulo);
	    a.appendChild(linkText);
		a.href = datos[i].enlace;	 
		elementotd.appendChild(a);	 
			 
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	
		var texto=document.createTextNode(datos[i].resumen);
	         elementotd.appendChild(texto);	
			 
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	
		var texto=document.createTextNode(datos[i].tema);
	         elementotd.appendChild(texto);			 
			 		 			 		
		
		var obj=document.getElementById('Contenido1');
        obj.appendChild(elementotr);
		}		
	 	})

	}

})


$("#consultarPorPublicacion").button().on("click", function(event)
{
	
	if(document.getElementById('CodPublicacion').value == '')
	{

		alert("Ingresar código de publicación");

	}else{

		var obj=document.getElementById('Contenido1');
		obj.innerHTML="<tr class=\"success letras\"><td>TITULO</td><td>RESUMEN</td><td>TEMA</td></tr></table></div>";

		//alert(document.getElementById('CodPublicacion').value);

	 $.post("../Controlador/ControladoraArticulo.php",{accion:'consultarPublicacion', 
	 	codigo: document.getElementById('CodPublicacion').value
	 	},

	 	function(respuesta){

	 		//alert(respuesta);
	 		var datos= jQuery.parseJSON(respuesta); 	

	 		for (var i in datos)
	 {
	
	    var elementotr=document.createElement('tr');
		// creacion segundo td y se lo asigno al padre tr
		var elementotd=document.createElement('td');
		elementotr.appendChild(elementotd);
		var a = document.createElement('a');
		var linkText = document.createTextNode(datos[i].titulo);
	    a.appendChild(linkText);
		a.href = datos[i].enlace;	 
		elementotd.appendChild(a);	 
			 
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	
		var texto=document.createTextNode(datos[i].resumen);
	         elementotd.appendChild(texto);	
			 
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	
		var texto=document.createTextNode(datos[i].tema);
	         elementotd.appendChild(texto);			 
			 		 			 		
		
		var obj=document.getElementById('Contenido1');
        obj.appendChild(elementotr);
		}		
	 	})

	}

})

$("#consultarPorFiltro").button().on("click", function(event)
{

	window.location = "../Vistas/VconsultaPorFiltro.html";

})

$("#Login").button().on("click", function(event)
{
		usu=document.getElementById("usuarioPP").value.toUpperCase();
	 	contr=document.getElementById("clavePP").value.toUpperCase();
		
		localStorage.setItem("usu",document.getElementById("usuarioPP").value.toUpperCase());
        localStorage.setItem("contr", document.getElementById("clavePP").value.toUpperCase());
			   
		  
		   
		
		
		if(usu!="" && contr!="")
		{$.post("../Controlador/ControladoraLogin.php",{usuario:usu,contraseña:contr,metodocontrol:'0'},function(respuesta)
			{
				
				
			var login= jQuery.parseJSON(respuesta); 
			
			
			if(String(login).charAt(0)== "p" || String(login).charAt(0)== "P" )	{
			
				window.location="../Vistas/Vpar.html";
				}
			if(String(login).charAt(0) == "a" || String(login).charAt(0) == "A")	{
			   
				window.location="../Vistas/Vautor.html";
				}
			if(String(login).charAt(0) == "e" || String(login).charAt(0) == "E")	{
			  
			   window.location="../Vistas/Veditor.html";
				}
				
			if(String(login).charAt(0) == "0" )	{
			  
			 alert("USUARIO O CONTRASEÑA INCORRECTOS");
				}										
    		}
				)
   	}
	 else
    	alert("debe ingresar los campos obligatorios(*)");
		
			
})
	


	
	
$("#Ingresar").button().on("click", function(event)
     {
	 
		nom=document.getElementById("nombre").value.toUpperCase();
		dire=document.getElementById("direccion").value.toUpperCase();
		tel=document.getElementById("telefono").value.toUpperCase();
		corr=document.getElementById("correo").value.toUpperCase();
		afil=document.getElementById("afiliacion").value.toUpperCase();
		est=document.getElementById("estudio").value.toUpperCase();
		ced=document.getElementById("idep").value.toUpperCase();
		usu=document.getElementById("usup").value.toUpperCase();
		contr=document.getElementById("conp").value.toUpperCase();
		rol=document.getElementById("rol").value.toUpperCase();
		
		
		if(ced!="" && nom!="" && usu!="" && contr!=="" && rol!=="")
   		{
	$.post("../Controlador/SuperControladora.php",{clase:'Par', clase2:'Login',clasecrud:'CRUDPar',metodcrud:'ingresar',metodocrudLogin:'ingresarLogin',nombre:nom,direccion:dire,telefono:tel,correo:corr,afiliacion:afil,estudio:est,cedula:ced,usuario:usu,contrasena:contr,rol:rol},function(respuesta)
			{
			alert(":: "+respuesta+" ::");	
    		}
				)
		

		document.getElementById("nombre").value="";
		document.getElementById("direccion").value="";
		document.getElementById("telefono").value="";
		document.getElementById("correo").value="";
		document.getElementById("afiliacion").value="";
		document.getElementById("estudio").value="";
		document.getElementById("idep").value="";
		document.getElementById("usup").value="";
		document.getElementById("conp").value="";
		document.getElementById("rol").value="";
   	}
	 else
    	alert("debe ingresar los campos obligatorios(*)");
		
	 
	});

	// buscar 
	
	$("#BuscarP").button().on("click", function(event)
     {
		 
	var cedula1="";
	var nombre1="";
	 
	if(document.getElementById("Parametro").value=='todos') 
	{
	cedula1="";
	nombre1="";
	}
	if(isNaN(document.getElementById("Parametro").value)==false)
	{
	cedula1=document.getElementById("Parametro").value;
	nombre1="";
	}
	if(isNaN(document.getElementById("Parametro").value)==true && document.getElementById("Parametro").value!='todos')
	{
	cedula1="";
	nombre1=document.getElementById("Parametro").value.toUpperCase();
	}
	 $.post("../Controlador/SuperControladora.php",{clase:'Par',clasecrud:'CRUDPar',metodcrud:'consultar',nombre:nombre1,direccion:"",telefono:"",correo:"",afiliacion:"",estudio:"",cedula:cedula1},function(respuesta)
	{
	

	  var datos= jQuery.parseJSON(respuesta); 	
     for (var i in datos)
	 {
		 //alert("Cedula: "+datos[i].Cedula+" Nombre: "+datos[i].Nombre+" Apellido: "+datos[i].Apellido);

	    var elementotr=document.createElement('tr');
	
	 	   // creacion primer td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
      	var texto=document.createTextNode(datos[i].nombre);
	              elementotd.appendChild(texto);
    
	 // creacion segundo td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	 var texto=document.createTextNode(datos[i].direccion);
	         elementotd.appendChild(texto);
			 
      // creacion tercer td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	var texto=document.createTextNode(datos[i].telefono);
	         elementotd.appendChild(texto);
			 
			 // creacion tercer td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	var texto=document.createTextNode(datos[i].correo);
	         elementotd.appendChild(texto);

// creacion tercer td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	var texto=document.createTextNode(datos[i].afiliacion);
	         elementotd.appendChild(texto);

// creacion tercer td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	var texto=document.createTextNode(datos[i].estudio);
	         elementotd.appendChild(texto);	

	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	var texto=document.createTextNode(datos[i].cedula);
	         elementotd.appendChild(texto);	


			 		 		
		var obj=document.getElementById('Contenido');
        obj.appendChild(elementotr);
	 }
	 })
 
	 })
	 
	 
	 
	 
	 
	 
	 $("#Buscarm").button().on("click", function(event)
     {
	if(document.getElementById("Cedp").value=="")
	  alert("Digitar la Cedula");
		 
	if(isNaN(document.getElementById("Cedp").value)==false && document.getElementById("Cedp").value!="")
	{
	cedula1=document.getElementById("Cedp").value;
	
$.post("../Controlador/SuperControladora.php",{clase:'Par',clasecrud:'CRUDPar',metodcrud:'consultar',nombre:"",direccion:"",telefono:"",correo:"",afiliacion:"",estudio:"",cedula:cedula1,usuario:"",contrasena:"",rol:""},function(respuesta)
	
	{
    
	  var datos= jQuery.parseJSON(respuesta); 	
     for (var i in datos)
	 {
	 document.getElementById("Nomm").value=datos[i].nombre;
	 document.getElementById("Dirm").value=datos[i].direccion;
	 document.getElementById("Telm").value=datos[i].telefono;
	 document.getElementById("Emailm").value=datos[i].correo;
	 document.getElementById("Afilm").value=datos[i].afiliacion;
 	 document.getElementById("Estudm").value=datos[i].estudio;
	 
	  }//fin for
	 })
	 }
	 //if(isNaN(document.getElementById("Cedb").value)==true)
	 //alert(":: la cedula debe ser numeros ::");
 
	 })

	 
	 
	 
	 /////////////////////
	 $("#Modificar").button().on("click", function(event)
    {
	 ced1=document.getElementById("Cedp").value.toUpperCase();
	 nom1=document.getElementById("Nomm").value.toUpperCase();
	 dir1=document.getElementById("Dirm").value.toUpperCase();
	 tel1=document.getElementById("Telm").value.toUpperCase();
	 email1=document.getElementById("Emailm").value.toUpperCase();
	 afil1=document.getElementById("Afilm").value.toUpperCase();
	 estu1=document.getElementById("Estudm").value.toUpperCase();
	
			if(isNaN(ced1)==false)
			{	
   				if(ced1!="" && nom1!="" && tel1!="")
   				{
$.post("../Controlador/SuperControladora.php",{clase:'Par',clasecrud:'CRUDPar',metodcrud:'modificar',nombre:nom1,direccion:dir1,telefono:tel1,correo:email1,afiliacion:afil1,estudio:estu1,cedula:ced1,usuario:"",contrasena:"",rol:""},function(respuesta)
	//$.post("../Controlador/CONTROLADORApar.php",{cedula:ced1,nombre:nom1,direccion:dir1,telefonos:tel1,email:email1,afiliacion:afil1,estudio:estu1,iden:3},function(respuesta)
				{
	alert(":: "+respuesta+" ::");	
    	}
	)
		/*
   document.getElementById("cedb").value="";
   document.getElementById("Nomm").value="";
   document.getElementById("Apellm").value="";
   document.getElementById("Telm").value="";
   document.getElementById("Dirm").value="";
   document.getElementById("Emailm").value="";
   */

   }
   else
    alert("debe ingresar los campos obligatorios(*)");
	
	}
	else
	alert("La cedula debe ser numeros");
	
    })
	
	
	
	$("#Buscare").button().on("click", function(event)
     {
	if(document.getElementById("Cedp").value=="")
	  alert("Digitar la Cedula");
		 
	if(isNaN(document.getElementById("Cedp").value)==false && document.getElementById("Cedp").value!="")
	{
	cedula1=document.getElementById("Cedp").value;
	
$.post("../Controlador/SuperControladora.php",{clase:'Par',clasecrud:'CRUDPar',metodcrud:'consultar',nombre:"",direccion:"",telefono:"",correo:"",afiliacion:"",estudio:"",cedula:cedula1,usuario:"",contrasena:"",rol:""},function(respuesta)
	
	{
    
	  var datos= jQuery.parseJSON(respuesta); 	
     for (var i in datos)
	 {
	 document.getElementById("Nomm").value=datos[i].nombre;
	 document.getElementById("Dirm").value=datos[i].direccion;
	 document.getElementById("Telm").value=datos[i].telefono;
	 document.getElementById("Emailm").value=datos[i].correo;
	 document.getElementById("Afilm").value=datos[i].afiliacion;
 	 document.getElementById("Estudm").value=datos[i].estudio;
	 
	  }//fin for
	 })
	 }
	 //if(isNaN(document.getElementById("Cedb").value)==true)
	 //alert(":: la cedula debe ser numeros ::");
 
	 })

 $("#Eliminar").button().on("click", function(event)
    {
	 ced1=document.getElementById("Cedp").value.toUpperCase();
	 nom1=document.getElementById("Nomm").value.toUpperCase();
	 dir1=document.getElementById("Dirm").value.toUpperCase();
	 tel1=document.getElementById("Telm").value.toUpperCase();
	 email1=document.getElementById("Emailm").value.toUpperCase();
	 afil1=document.getElementById("Afilm").value.toUpperCase();
	 estu1=document.getElementById("Estudm").value.toUpperCase();
	
			if(isNaN(ced1)==false)
			{	
   				if(ced1!="" && nom1!="" && tel1!="")
   				{
$.post("../Controlador/SuperControladora.php",{clase:'Par',clasecrud:'CRUDPar',metodcrud:'eliminar',nombre:"",direccion:"",telefono:"",correo:"",afiliacion:"",estudio:"",cedula:ced1,usuario:"",contrasena:"",rol:""},function(respuesta)
	
				{
	alert(":: "+respuesta+" ::");	
    	}
	)
		/*
   document.getElementById("cedb").value="";
   document.getElementById("Nomm").value="";
   document.getElementById("Apellm").value="";
   document.getElementById("Telm").value="";
   document.getElementById("Dirm").value="";
   document.getElementById("Emailm").value="";
   */

   }
   else
    alert("debe ingresar los campos obligatorios(*)");
	
	}
	else
	alert("La cedula debe ser numeros");
	
    })
	



///////////////////////////////////////////////////// METODOS DE AUTOR ///////////////////////////////////////////////////////




$("#IngresarAutor").button().on("click", function(event)
     {
	 
		nom=document.getElementById("nombre").value.toUpperCase();
		dire=document.getElementById("direccion").value.toUpperCase();
		tel=document.getElementById("telefono").value.toUpperCase();
		corr=document.getElementById("correo").value.toUpperCase();
		afil=document.getElementById("afiliacion").value.toUpperCase();
		idea=document.getElementById("idea").value.toUpperCase();
		usu=document.getElementById("usua").value.toUpperCase();
		contr=document.getElementById("cona").value.toUpperCase();
		rol=document.getElementById("rola").value.toUpperCase();
				
		
		if(nom!="")
   		{
	$.post("../Controlador/SuperControladoraAutor.php",{clase:'Autor',clase2:'Login',clasecrud:'CRUDautor',metodcrud:'ingresar',metodocrudLogin:'ingresarLogin',nombre:nom,direccion:dire,telefono:tel,correo:corr,afiliacion:afil,idea:idea,usuario:usu,contrasena:contr,rol:rol},function(respuesta)
			{
			alert(":: "+respuesta+" ::");	
    		}
				)
		
   	}
	 else
    	alert("debe ingresar los campos obligatorios(*)");
		
	 
	});



	// BUSCAR AUTOR
	 
	 
	 $("#BuscarA").button().on("click", function(event)
     {
		 
	var cedula1="";
	var nombre1="";
	 
	if(document.getElementById("Parametro").value=='todos') 
	{
	cedula1="";
	nombre1="";
	}
	if(isNaN(document.getElementById("Parametro").value)==false)
	{
	cedula1=document.getElementById("Parametro").value;
	nombre1="";
	}
	if(isNaN(document.getElementById("Parametro").value)==true && document.getElementById("Parametro").value!='todos')
	{
	cedula1="";
	nombre1=document.getElementById("Parametro").value.toUpperCase();
	}
	 $.post("../Controlador/SuperControladoraAutor.php",{clase:'Autor',clasecrud:'CRUDautor',metodcrud:'consultar',nombre:nombre1,direccion:"",telefono:"",correo:"",afiliacion:"",idea:cedula1},function(respuesta)
	{
		//alert(respuesta);
		//})
	

	  var datos= jQuery.parseJSON(respuesta); 	
     for (var i in datos)
	 {
		 //alert("Cedula: "+datos[i].Cedula+" Nombre: "+datos[i].Nombre+" Apellido: "+datos[i].Apellido);

	    var elementotr=document.createElement('tr');
	
	 	   // creacion primer td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
      	var texto=document.createTextNode(datos[i].nombre);
	              elementotd.appendChild(texto);
    
	 // creacion segundo td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	 var texto=document.createTextNode(datos[i].direccion);
	         elementotd.appendChild(texto);
			 
      // creacion tercer td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	var texto=document.createTextNode(datos[i].telefono);
	         elementotd.appendChild(texto);
			 
			 // creacion tercer td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	var texto=document.createTextNode(datos[i].correo);
	         elementotd.appendChild(texto);

// creacion tercer td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	var texto=document.createTextNode(datos[i].afiliacion);
	         elementotd.appendChild(texto);
	

	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	var texto=document.createTextNode(datos[i].idea);
	         elementotd.appendChild(texto);	


			 		 		
		var obj=document.getElementById('Contenido');
        obj.appendChild(elementotr);
	 }
	 })
 
	 })
	 
	 
	  $("#BuscarmAutor").button().on("click", function(event)
     {
	if(document.getElementById("idea").value=="")
	  alert("Digitar el id");
		 
	if(isNaN(document.getElementById("idea").value)==false && document.getElementById("idea").value!="")
	{
	idea=document.getElementById("idea").value;
	
$.post("../Controlador/SuperControladoraAutor.php",{clase:'Autor',clasecrud:'CRUDautor',metodcrud:'consultar',nombre:"",direccion:"",telefono:"",correo:"",afiliacion:"",estudio:"",idea:idea,usuario:"",contrasena:"",rol:""},function(respuesta)
	
	{
    
	  var datos= jQuery.parseJSON(respuesta); 	
     for (var i in datos)
	 {
	 document.getElementById("Nomm").value=datos[i].nombre;
	 document.getElementById("Dirm").value=datos[i].direccion;
	 document.getElementById("Telm").value=datos[i].telefono;
	 document.getElementById("Emailm").value=datos[i].correo;
	 document.getElementById("Afilm").value=datos[i].afiliacion;
 	 document.getElementById("ideam").value=datos[i].idea;
	 
	  }
	 })
	 }
	 
	 })

$("#ModificarAutor").button().on("click", function(event)
    {
	
	 nom1=document.getElementById("Nomm").value.toUpperCase();
	 dir1=document.getElementById("Dirm").value.toUpperCase();
	 tel1=document.getElementById("Telm").value.toUpperCase();
	 email1=document.getElementById("Emailm").value.toUpperCase();
	 afil1=document.getElementById("Afilm").value.toUpperCase();
	 idea1=document.getElementById("ideam").value.toUpperCase();
	
	
			if(isNaN(idea1)==false)
			{	
   				if(idea1!="" && nom1!="" && tel1!="")
   				{
$.post("../Controlador/SuperControladoraAutor.php",{clase:'Autor',clasecrud:'CRUDautor',metodcrud:'modificar',nombre:nom1,direccion:dir1,telefono:tel1,correo:email1,afiliacion:afil1,idea:idea1},function(respuesta)
				{
	alert(":: "+respuesta+" ::");	
    	}
	)

   }
   else
    alert("debe ingresar los campos obligatorios(*)");
	
	}
	else
	alert("La cedula debe ser numeros");
	
    })



	$("#BuscareAutor").button().on("click", function(event)
     {
	if(document.getElementById("idea").value=="")
	  alert("Digitar el id");
		 
	if(isNaN(document.getElementById("idea").value)==false && document.getElementById("idea").value!="")
	{
	idea=document.getElementById("idea").value;
	
$.post("../Controlador/SuperControladoraAutor.php",{clase:'Autor',clasecrud:'CRUDautor',metodcrud:'consultar',nombre:"",direccion:"",telefono:"",correo:"",afiliacion:"",estudio:"",idea:idea,usuario:"",contrasena:"",rol:""},function(respuesta)
	
	{
    
	  var datos= jQuery.parseJSON(respuesta); 	
     for (var i in datos)
	 {
	 document.getElementById("Nomm").value=datos[i].nombre;
	 document.getElementById("Dirm").value=datos[i].direccion;
	 document.getElementById("Telm").value=datos[i].telefono;
	 document.getElementById("Emailm").value=datos[i].correo;
	 document.getElementById("Afilm").value=datos[i].afiliacion;
 	 	 
	  }
	 })
	 }
	 
	 })


 $("#EliminarAutor").button().on("click", function(event)
    {
	 nom1=document.getElementById("Nomm").value.toUpperCase();
	 dir1=document.getElementById("Dirm").value.toUpperCase();
	 tel1=document.getElementById("Telm").value.toUpperCase();
	 email1=document.getElementById("Emailm").value.toUpperCase();
	 afil1=document.getElementById("Afilm").value.toUpperCase();
	 idea1=document.getElementById("idea").value.toUpperCase();
	
			if(isNaN(idea1)==false)
			{	
   				if(idea1!="" && nom1!="" && tel1!="")
   				{
$.post("../Controlador/SuperControladoraAutor.php",{clase:'Autor',clasecrud:'CRUDautor',metodcrud:'eliminar',nombre:"",direccion:"",telefono:"",correo:"",afiliacion:"",estudio:"",idea:idea1,},function(respuesta)
	
				{
	alert(":: "+respuesta+" ::");	
    	}
	)
		/*
   document.getElementById("cedb").value="";
   document.getElementById("Nomm").value="";
   document.getElementById("Apellm").value="";
   document.getElementById("Telm").value="";
   document.getElementById("Dirm").value="";
   document.getElementById("Emailm").value="";
   */

   }
   else
    alert("debe ingresar los campos obligatorios(*)");
	
	}
	else
	alert("La cedula debe ser numeros");
	
    })
//////////////////////////// MTODOS DE ARTICULO   ///////////////////////////////////////////////////////////////////////////

// BUSCAR ARTICULO CON ENLACE PARA DESCARGAR DESDE LA VISTA AUTOR

 $("#BuscarArt").button().on("click", function(event)
     {
		 
	var cedula1="";
	var nombre1="";
	 
	if(document.getElementById("Parametro").value=='todos') 
	{
	cedula1="";
	nombre1="";
	}
	if(isNaN(document.getElementById("Parametro").value)==false)
	{
	cedula1=document.getElementById("Parametro").value;
	nombre1="";
	}
	if(isNaN(document.getElementById("Parametro").value)==true && document.getElementById("Parametro").value!='todos')
	{
	cedula1="";
	nombre1=document.getElementById("Parametro").value.toUpperCase();
	
	}
	
contr=localStorage.getItem("contr");
	  usu=localStorage.getItem("usu");
	
		

	
	 $.post("../Controlador/ControladoraArticulo.php",{contrasena:contr,usuario:usu,accion:"consultar",nombre:nombre1,ideartic:cedula1},function(respuesta)
	{
		//alert(respuesta);
		//})
	

	  var datos= jQuery.parseJSON(respuesta); 	
     for (var i in datos)
	 {
		 //alert("Cedula: "+datos[i].Cedula+" Nombre: "+datos[i].Nombre+" Apellido: "+datos[i].Apellido);

	    var elementotr=document.createElement('tr');
	
		
	 	// creacion primer td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd);
		var a = document.createElement('a');
		var linkText = document.createTextNode(datos[i].titulo);
	    a.appendChild(linkText);
		a.href = datos[i].enlace;	 
		elementotd.appendChild(a);
    
	 // creacion segundo td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	 var texto=document.createTextNode(datos[i].estado);
	         elementotd.appendChild(texto);
	
			 		 		
		var obj=document.getElementById('Contenido');
        obj.appendChild(elementotr);
		
		
		
		
		//<a href="Vingresarp.html"></a>
	 }  
	 })
 
	 })


$("#Listarar").button().on("click", function(event)
     {

	var estad="recibido";

	
	 $.post("../Controlador/ControladoraArticulo.php",{accion:"listarpro",estado:estad},function(respuesta)
	{
	
	

	  var datos= jQuery.parseJSON(respuesta); 	
     for (var i in datos)
	 {
	
	    var elementotr=document.createElement('tr');
		 // creacion segundo td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
		elementotr.appendChild(elementotd); 
    	 var texto=document.createTextNode(datos[i].titulo);
	         elementotd.appendChild(texto);
			 
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	
		var texto=document.createTextNode(datos[i].idear);
	         elementotd.appendChild(texto);
			 
		var elemtoa=document.createElement('a');
		elemtoa.setAttribute("onClick","hola('"+datos[i].idear+"')");


		var createAText = document.createTextNode('Asignar');
		elemtoa.appendChild(createAText);
  		elementotd.appendChild(elemtoa);			 		
		
		var obj=document.getElementById('Contenido1');
        obj.appendChild(elementotr);
	 } 
	 
	 })
 
	 })

	$("#Listarpar").button().on("click", function(event)
     {
		 
	var cedula1="";
	var nombre1="";
	 
	
	 $.post("../Controlador/SuperControladora.php",{clase:'Par',clasecrud:'CRUDPar',metodcrud:'consultar',nombre:nombre1,direccion:"",telefono:"",correo:"",afiliacion:"",estudio:"",cedula:cedula1},function(respuesta)
	{
	

	  var datos= jQuery.parseJSON(respuesta); 	
     for (var i in datos)
	 {

	    var elementotr=document.createElement('tr');
	
	 	   // creacion primer td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
      	var texto=document.createTextNode(datos[i].nombre);
	              elementotd.appendChild(texto);
    
	 // creacion segundo td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	 var texto=document.createTextNode(datos[i].cedula);
	         elementotd.appendChild(texto);
			 	

		var elemtoa=document.createElement('a');
		elemtoa.setAttribute("onClick","hola2('"+datos[i].cedula+"')");



		var createAText = document.createTextNode('Asignar2');
		elemtoa.appendChild(createAText);
  		elementotd.appendChild(elemtoa);


			 		 		
		var obj=document.getElementById('Contenido2');
        obj.appendChild(elementotr);
	 }
	 })
 
	 })
	 
$("#anexar").button().on("click", function(event)
     {
	
	var idrev;
	var idpar;
	var estado1="pendiente";
	idrev=document.getElementById("ideart").value;
	idpar=document.getElementById("idep").value;
	
	$.post("../Controlador/ControladoraArticulo.php",{accion:'ingresarRev',idrev:idrev,idpar:idpar},function(respuesta)
			{
			alert(":: "+respuesta+" ::");					
			})
	$.post("../Controlador/ControladoraArticulo.php",{accion:'modificarestado',estado:estado1,idrev:idrev},function(respuesta)
			{
			alert(":: "+respuesta+" ::");					
			})		
			
			
   	})
	
	
	///////LISTAR ARTICULO PARA PUBLICAR DESDE LA VISTA DEL EDITOR


$("#BuscarArteditor").button().on("click", function(event)
     {

	var estad="pendiente";

	
	 $.post("../Controlador/ControladoraArticulo.php",{accion:"listarpro",estado:estad},function(respuesta)
	{
	
	
		alert(respuesta);
	  var datos= jQuery.parseJSON(respuesta); 	
     for (var i in datos)
	 {
	
	    var elementotr=document.createElement('tr');
		 // creacion segundo td y se lo asigno al padre tr
		var elementotd=document.createElement('td');
		elementotr.appendChild(elementotd);
		var a = document.createElement('a');
		var linkText = document.createTextNode(datos[i].titulo);
	    a.appendChild(linkText);
		a.href = datos[i].enlace;	 
		elementotd.appendChild(a);			 
		 
			 
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	
		var texto=document.createTextNode(datos[i].estado);
	         elementotd.appendChild(texto);

		var elemtoa=document.createElement('a');
		elemtoa.setAttribute("onClick","publicar('"+datos[i].idear+"')");
		

		var createAText = document.createTextNode('Publicar');
		elemtoa.appendChild(createAText);
  		elementotd.appendChild(elemtoa);			 		
		
		var obj=document.getElementById('Contenido1');
        obj.appendChild(elementotr);
	 } 
	 
	 })
 
	 })
	 
	 //lista todos os articulos con las calificaciones de los pares
	 	 
	 $("#ArtCalificadosEditor").button().on("click", function(event)
     {

	
	 $.post("../Controlador/ControladoraArticulo.php",{accion:"listarTodos"},function(respuesta)
	{
	
	

	  var datos= jQuery.parseJSON(respuesta); 	
     for (var i in datos)
	 {
	
	    var elementotr=document.createElement('tr');
		 // creacion segundo td y se lo asigno al padre tr
		var elementotd=document.createElement('td');
		elementotr.appendChild(elementotd);
		var a = document.createElement('a');
		var linkText = document.createTextNode(datos[i].titulo);
	    a.appendChild(linkText);
		a.href = datos[i].enlace;	 
		elementotd.appendChild(a);			 
		 
			 
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	
		var texto=document.createTextNode(datos[i].estado);
	         elementotd.appendChild(texto);

	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	
		var texto=document.createTextNode(datos[i].nota);
	         elementotd.appendChild(texto);
			 
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	
		var texto=document.createTextNode(datos[i].par);
	         elementotd.appendChild(texto);
			 
		    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	
		var texto=document.createTextNode(datos[i].comentarios);
	         elementotd.appendChild(texto);		 

			 		
		
		var obj=document.getElementById('Contenido1');
        obj.appendChild(elementotr);
	 } 
	 
	 })
 
	 })

	 
	 
	//////////////////////// METODOS REVISION Listarrevisiop ////////////////////////////////////////////////////////////////////////// 
	 
	//listar revision por pares vistas par 
$("#Listarrevisiop").button().on("click", function(event)
     {

      contr=localStorage.getItem("contr");
	  usu=localStorage.getItem("usu");	 
	 
	
	 
	 
	 $.post("../Controlador/ControladoraLogin.php",{usuario:usu,contraseña:contr,metodocontrol:2},function(respuesta)
	{

		alert(respuesta);
	  var datos= jQuery.parseJSON(respuesta); 	
	  
	  
	  
	  
     for (var i in datos)
	 {
	
	    var elementotr=document.createElement('tr');
		// creacion segundo td y se lo asigno al padre tr
		var elementotd=document.createElement('td');
		elementotr.appendChild(elementotd);
		var a = document.createElement('a');
		var linkText = document.createTextNode(datos[i].titulo);
	    a.appendChild(linkText);
		a.href = datos[i].enlace;	 
		elementotd.appendChild(a);	 
			 
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	
		var texto=document.createTextNode(datos[i].idear);
	         elementotd.appendChild(texto);	
			 		 
			 
		var elemtoa=document.createElement('a');
		elemtoa.setAttribute("onClick","hola3('"+datos[i].idear+"','"+datos[i].idepar+"')");

		var createAText = document.createTextNode('calificar');
		elemtoa.appendChild(createAText);
  		elementotd.appendChild(elemtoa);			 		
		
		var obj=document.getElementById('Contenido1');
        obj.appendChild(elementotr);
	 } 
	 
	 })

	 })
	 
	 /////busca por estado 
	 
	 
 $("#Buscarxj").button().on("click", function(event)
    {
	  contr=localStorage.getItem("contr");
	  usu=localStorage.getItem("usu");	
	
	
			
   			
 $.post("../Controlador/ControladoraArticulo.php",{accion:"consultarestado1",contrasena:contr,usuario:usu},function(respuesta)
	{
		
	

	  var datos= jQuery.parseJSON(respuesta); 	
	 
	  
     for (var i in datos)
	 {
		 //alert("Cedula: "+datos[i].Cedula+" Nombre: "+datos[i].Nombre+" Apellido: "+datos[i].Apellido);

	    var elementotr=document.createElement('tr');
	
		
	 	// creacion primer td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd);
		var a = document.createElement('a');
		var linkText = document.createTextNode(datos[i].titulo);
	    a.appendChild(linkText);
		a.href = datos[i].enlace;	 
		elementotd.appendChild(a);
    
	 // creacion segundo td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	 var texto=document.createTextNode(datos[i].estado);
	         elementotd.appendChild(texto);

	 // creacion segundo td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	 var texto=document.createTextNode(datos[i].comentarios);
	         elementotd.appendChild(texto);			 

		var elemtoa=document.createElement('a');
		elemtoa.setAttribute("onClick","hola4('"+datos[i].idear+"')");

		var createAText = document.createTextNode('modificar');
		elemtoa.appendChild(createAText);
  		elementotd.appendChild(elemtoa);			 
	
			 		 		
		var obj=document.getElementById('Contenido2');
        obj.appendChild(elementotr);
		
		
		
		
		//<a href="Vingresarp.html"></a>
	 }  
	 })
		
})




	 
/// buscar  los articulos por palabras .. index pp 





$("#buscarBTNPP").button().on("click", function(event)
     {
		 
		 
		 pal=document.getElementById("buscarPP").value.toUpperCase();
		 
		 alert(pal);
		 
$.post("../Controlador/ControladoraArticulo.php",{accion:'buscarpalabra',palabra:pal},function(respuesta)
			{
			
			
	  var datos= jQuery.parseJSON(respuesta); 	
	  
	  alert("BUSCAR ENTRO" + datos[0].titulo);
	  
	  
     for (var i in datos)
	 {
	
	    var elementotr=document.createElement('tr');
		// creacion segundo td y se lo asigno al padre tr
		var elementotd=document.createElement('td');
		elementotr.appendChild(elementotd);
		var a = document.createElement('a');
		var linkText = document.createTextNode(datos[i].titulo);
	    a.appendChild(linkText);
		a.href = datos[i].enlace;	 
		elementotd.appendChild(a);	 
			 
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	
		var texto=document.createTextNode(datos[i].resumen);
	         elementotd.appendChild(texto);	
			 
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	
		var texto=document.createTextNode(datos[i].tema);
	         elementotd.appendChild(texto);			 
			 		 			 		
		
		var obj=document.getElementById('Contenido2');
        obj.appendChild(elementotr);
		}					
			})
			})	

///envia  revision verifica  tres calificaciones y la nota enviar mensaje al autor ..



$("#sendre").button().on("click", function(event)
    {
		
		
	

	 idepar1=document.getElementById("ID").value;
	 ideart1=document.getElementById("IDp").value;
	 nota1=document.getElementById("Nota").value;
	 comentarios1=document.getElementById("Comentarios").value;
	 
	// alert(idepar+""+ideart+""+nota1+""+comentarios1);
	
	
	
	/// cambiar estado cuando ingresa nota a calificado  
	// verificar crud sql  para estado calificado 
	
	
		
   		if(idepar1!="" &&ideart1!="" && nota1!="" && comentarios1!="")
   			{
                $.post("../Controlador/ControladoraArticulo.php",{accion:"modificarRev",idart:idepar1,idpar:ideart1,nota:nota1,comentarios:comentarios1},function(respuesta)
				{
							
					
					
					
	alert(":: "+respuesta+" ::");	
    	})
		
		$.post("../Controlador/ControladoraArticulo.php",{accion:"contarCantnotas",idart:idepar1},function(respuesta)
	 	 {  
			
			 if(respuesta==3)
			 {
				 
				 $.post("../Controlador/ControladoraArticulo.php",{accion:"promedionotas",idart:idepar1},function(respuesta)
	 	       		{
							  var datos= jQuery.parseJSON(respuesta);
			                  alert(datos[0].prom);
					
						
	  			if(datos[0].prom>=4){
								  var estado1="aprobado";
								  
								  
							  $.post("../Controlador/ControladoraArticulo.php",{accion:"modificarestado",estado:estado1,idrev:idepar1},function(respuesta)
	 	       		{						
								 }) 
							  }
			 
			 
			 	if(datos[0].prom>=3 && datos[0].prom<4 ){
								  var estado1="hacer_modificaciones";
								  
								  
							  $.post("../Controlador/ControladoraArticulo.php",{accion:"modificarestado",estado:estado1,idrev:idepar1},function(respuesta)
	 	       		{						
								 }) 
							  }
			 
			 	if(datos[0].prom<3){
								  var estado1="no_aprobado";
								  
								  
							  $.post("../Controlador/ControladoraArticulo.php",{accion:"modificarestado",estado:estado1,idrev:idepar1},function(respuesta)
	 	       		{
												
								 }) 

}
			 
			 		}) 
				 
			 }				
      	 })
   } 
   else
    alert("debe ingresar los campos obligatorios(*)");		
    })
});



//colocar el valor en los textos en el input 
function hola(uno)
	 {
		 document.getElementById("ideart").value=uno;
		 //alert(uno);
	 }
	 

//colocar el valor en los textos en el input 
function hola2(uno)
	 {
	   document.getElementById("idep").value=uno;
	 }

//colocar el valor en los textos en el input 
function hola3(uno,dos)
	 {
	   document.getElementById("ID").value=uno;
	   document.getElementById("IDp").value=dos;
	 }
	 
function hola4(uno)
	 {
	   document.getElementById("idartmodi").value=uno;
	   
	 }	 
	 
function modificar()
	 {
	   alert ("modificado con exito");
	   
	 }	
//cambia el estado del articulo a publicado cuando el autor decide publicarlo
function publicar (id)
{
	
$(function(){

   $.post("../Controlador/ControladoraArticulo.php",{accion:'publicar',estado:"publicado",ideart:id},function(respuesta)
			{
			alert(":: PUBLICADO ::");					
			})	
});

}

////// no lista todavia porque no ha iniciado sesion
function cargarArticulos (){
	$(function(){

   $.post("../Controlador/ControladoraArticulo.php",{accion:'listarIndex',estado:'publicado'},function(respuesta)
			{
			
			//alert(respuesta);
	  var datos= jQuery.parseJSON(respuesta); 	
	  
     for (var i in datos)
	 {
	
	    var elementotr=document.createElement('tr');
		// creacion segundo td y se lo asigno al padre tr
		var elementotd=document.createElement('td');
		elementotr.appendChild(elementotd);
		var a = document.createElement('a');
		var linkText = document.createTextNode(datos[i].titulo);
	    a.appendChild(linkText);
		a.href = datos[i].enlace;	 
		elementotd.appendChild(a);	 
			 
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	
		var texto=document.createTextNode(datos[i].resumen);
	         elementotd.appendChild(texto);	
			 
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	
		var texto=document.createTextNode(datos[i].tema);
	         elementotd.appendChild(texto);			 
			 		 			 		
		
		var obj=document.getElementById('Contenido1');
        obj.appendChild(elementotr);
		}					
			})	
});


	
	}
	
	