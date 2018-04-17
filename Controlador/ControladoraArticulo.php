<?php
include_once("../Modelos/Articulo.php");
include_once("../Modelos/CRUDarticulo.php");
include_once("../Modelos/CRUDrevision.php");
include_once("../Modelos/Revision.php");
include_once("../Modelos/Login.php");
include_once("../Modelos/CRUDlogin.php");
	
class controladora
{
  function __construct()
  {    
  }
  
  
  
  // consulta articulos por id 
  
	public function consultar($Dato)
	{   
	   
	 
		   
	$Login=new Login($Dato['usuario'],$Dato['contrasena'],"","");  
	$Crudl=new CRUDlogin();
	$Registros1=$Crudl->consultarid1($Login);
		 
				
		$obj = new Articulo ("","",$Dato['ideartic'],"","","","","".pg_result($Registros1,0,3),"");		
		$CRUDart= new CRUDarticulo();
		$Registros=$CRUDart->consultar($obj);
		
		$Filas=pg_numrows($Registros);
					
		
		for($cont=0;$cont<$Filas;$cont++)
		 {
		 $response=array("enlace"=>"".pg_result($Registros,$cont,0),
		                 "estado"=>"".pg_result($Registros,$cont,1),
					     "idear"=>"".pg_result($Registros,$cont,2),
					    "titulo"=>"".pg_result($Registros,$cont,3),
					    "tema"=>"".pg_result($Registros,$cont,4),
					    "palabras"=>"".pg_result($Registros,$cont,5),
						"resumen"=>"".pg_result($Registros,$cont,6),
						"idautor"=>"".pg_result($Registros,$cont,7),
						"comentarios"=>"".pg_result($Registros,$cont,8)
					   
						 ) ;
		 $M[$cont]=$response;
		 }
	$response=$M;
	echo json_encode($response,true);
		
	}
	
	
	/**
	 *
	 *	Este método selecciona los articulos 
	 *	pendientes de recibir modificaciones
	 *	pertenecientes al autor que tiene su 
	 *	sesión activa. 
	 * 
	 * @param  $Dato es un arreglo que contiene la 
	 * 			información de la sesión actual
	 * @return Se retorna un archivo json de artículos
	 */
	public function consultarestado($Dato)
	{   
	   	   
	$Login=new Login($Dato['usuario'],$Dato['contrasena'],"","");  
	$Crudl=new CRUDlogin();
	$Registros1=$Crudl->consultarid1($Login);
		 
				
		$obj = new Articulo ("","hacer_modificaciones","","","","","","".pg_result($Registros1,0,3),"");		
		$CRUDart= new CRUDarticulo();
		$Registros=$CRUDart->consultarestadocr($obj);
		
		$Filas=pg_numrows($Registros);
					
		
		for($cont=0;$cont<$Filas;$cont++)
		 {
		 $response=array("enlace"=>"".pg_result($Registros,$cont,0),
		                 "estado"=>"".pg_result($Registros,$cont,1),
					     "idear"=>"".pg_result($Registros,$cont,2),
					    "titulo"=>"".pg_result($Registros,$cont,3),
					    "tema"=>"".pg_result($Registros,$cont,4),
					    "palabras"=>"".pg_result($Registros,$cont,5),
						"resumen"=>"".pg_result($Registros,$cont,6),
						"idautor"=>"".pg_result($Registros,$cont,7),
						"comentarios"=>"".pg_result($Registros,$cont,8)
					   
						 ) ;
		 $M[$cont]=$response;
		 }
	$response=$M;
	echo json_encode($response,true);
		
	}
	
	
	//// listar todos los articulos con sus calificaciones
	
		public function listarTodos($Dato)
	{	
		$CRUDart= new CRUDarticulo();
		$Registros=$CRUDart->consultarTodos();
		
		$Filas=pg_numrows($Registros);
					
		
		for($cont=0;$cont<$Filas;$cont++)
		 {
		 $response=array("enlace"=>"".pg_result($Registros,$cont,0),
					    "titulo"=>"".pg_result($Registros,$cont,1),		 
		                 "estado"=>"".pg_result($Registros,$cont,2),
					     "nota"=>"".pg_result($Registros,$cont,3),
						 "par"=>"".pg_result($Registros,$cont,4),
						 "comentarios"=>"".pg_result($Registros,$cont,5),					   
						 ) ;
		 $M[$cont]=$response;
		 }
	$response=$M;
	echo json_encode($response,true);
		
	}
	
	
	//lista articulos por estado  buscar por estado 
	public function listarpro($Dato)
	{
		$obj = new Articulo ("",$Dato['estado'],"","","","","","","");		
		$CRUDart= new CRUDarticulo();
		$Registros=$CRUDart->consultarpro($obj);
		$Filas=pg_numrows($Registros);

		$M = array();
					
		
		for($cont=0;$cont<$Filas;$cont++)
		 {
		 $response=array("enlace"=>"".pg_result($Registros,$cont,0),
		                 "estado"=>"".pg_result($Registros,$cont,1),
					     "idear"=>"".pg_result($Registros,$cont,2),
					    "titulo"=>"".pg_result($Registros,$cont,3),
					    "tema"=>"".pg_result($Registros,$cont,4),
					    "palabras"=>"".pg_result($Registros,$cont,5),
						"resumen"=>"".pg_result($Registros,$cont,6),
						"idautor"=>"".pg_result($Registros,$cont,7),
						"comentarios"=>"".pg_result($Registros,$cont,8)
					   
						 ) ;
		 $M[$cont]=$response;
		 }
	$response=$M;
	
	echo json_encode($response,true);
		
	}
	
	//ingresar revision 	
	public function ingresarRev($Dato){
		$obj = new Revision ($Dato['idrev'],$Dato['idpar'],0,"");
		$objCrud=new CRUDrevision();
    $M=$objCrud->ingresar($obj);
	if($M==1){
	  echo json_encode("ingresado");
	  
	  }
	  else{
		  echo json_encode("no ingresado");
		  }
	
	}
	
		
	//modifica la revision con la nota  del par y el comentario
	
	public function modificarRev($Datos){
	  	$obj = new Revision ($Datos['idart'],$Datos['idpar'],$Datos['nota'],$Datos['comentarios']);
		$objCrud=new CRUDrevision();
    	$objCrud->modificar($obj);
	
	echo json_encode("Exito");
	
	}
	
	///modifica el estado cuando ingresa a la revision 
	
	public function modificarestado($Datos){
	  	$obj = new Articulo ("",$Datos['estado'],$Datos['idrev'],"","","","","","");
		$objCrud=new CRUDrevision();
    	$objCrud->modificarestado($obj);
		
	echo json_encode("ExitoM");
	
	}
	
	
	/// modifica el estado cuando se hace la revision 
	
	public function contarCantnotas($Datos){
	  $obj = new Revision ($Datos['idart'],"","","");
		$objCrud=new CRUDrevision();
    	$registros=$objCrud->contar($obj);
		
		$Filas=pg_numrows($registros);	  
	
	echo json_encode($Filas);	
	}

	/// modifica el estado del articulo cuando el editor decide publicarlo
	
	public function estadoPublicado($Datos){
	  $obj = new Articulo ("",$Datos['estado'],$Datos['ideart'],"","","","","","");
		$objCrud=new CRUDarticulo();
    	$registros=$objCrud->actualizarEstado($obj);
		
		$Filas=pg_numrows($registros);	  
	
	echo json_encode($Filas);	
	}	
	
	
	// saca promedio de las notas de los articulos 
	
	public function promedionotas($Datos){
	  $obj = new Revision ($Datos['idart'],"","","");
		$objCrud=new CRUDrevision();
    	$registros=$objCrud->promedio($obj);
		
	  	$Filas=pg_numrows($registros);
					
		
		for($cont=0;$cont<$Filas;$cont++)
		 {
		 $response=array("prom"=>"".pg_result($registros,$cont,0),
		                				   
						 ) ;
		 $M[$cont]=$response;
		 }
	$response=$M;
	
	
	
	echo json_encode($response);
	
	}
	
	public function buscarpalabra($Datos){
		
	  $obj = new Articulo ("","","",$Datos['palabra'],"","","","","");		
		$CRUDart= new CRUDarticulo();
		$Registros=$CRUDart->buscar($obj);
		
		$Filas=pg_numrows($Registros);
					
		
		for($cont=0;$cont<$Filas;$cont++)
		 {
		 $response=array("enlace"=>"".pg_result($Registros,$cont,0),
		                 "estado"=>"".pg_result($Registros,$cont,1),
					     "idear"=>"".pg_result($Registros,$cont,2),
					    "titulo"=>"".pg_result($Registros,$cont,3),
					    "tema"=>"".pg_result($Registros,$cont,4),
					    "palabras"=>"".pg_result($Registros,$cont,5),
						"resumen"=>"".pg_result($Registros,$cont,6),
						"idautor"=>"".pg_result($Registros,$cont,7),
						"comentarios"=>"".pg_result($Registros,$cont,8)
					   
						 ) ;
		 $M[$cont]=$response;
		 }
	$response=$M;
	echo json_encode($response,true);
	
	}
	
	
	
		public function modificarartic($Datos){
			
	   $obj = new Articulo ($Datos['enlace'],"",$Datos['ide'],"","","","","","");		
		$CRUDart= new CRUDarticulo();
		$Registros=$CRUDart->modificarart($obj);
	
	echo json_encode("Exito");
	
	}



	public function consultarPublicacion($Dato){

		$CRUDart= new CRUDarticulo();
		$Registros=$CRUDart->consultarPublicacion($Dato);

		$Filas=pg_numrows($Registros);

		$M = array();
					
		
		for($cont=0;$cont<$Filas;$cont++)
		 {
		 $response=array("enlace"=>"".pg_result($Registros,$cont,0),
		                 "estado"=>"".pg_result($Registros,$cont,1),
					     "idear"=>"".pg_result($Registros,$cont,2),
					    "titulo"=>"".pg_result($Registros,$cont,3),
					    "tema"=>"".pg_result($Registros,$cont,4),
					    "palabras"=>"".pg_result($Registros,$cont,5),
						"resumen"=>"".pg_result($Registros,$cont,6),
						"idautor"=>"".pg_result($Registros,$cont,7),
						"comentarios"=>"".pg_result($Registros,$cont,8),
						"fecha"=>"".pg_result($Registros,$cont,9),
						"publicacion"=>"".pg_result($Registros,$cont,10)
					   	 ) ;
		 $M[$cont]=$response;
		 }
		$response=$M;
		echo json_encode($response);
	}

	public function consultarPorFecha($Dato){

		$CRUDart= new CRUDarticulo();
		$Registros=$CRUDart->consultarPorFecha($Dato);

		$Filas=pg_numrows($Registros);

		$M = array();
					
		
		for($cont=0;$cont<$Filas;$cont++)
		 {
		 $response=array("enlace"=>"".pg_result($Registros,$cont,0),
		                 "estado"=>"".pg_result($Registros,$cont,1),
					     "idear"=>"".pg_result($Registros,$cont,2),
					    "titulo"=>"".pg_result($Registros,$cont,3),
					    "tema"=>"".pg_result($Registros,$cont,4),
					    "palabras"=>"".pg_result($Registros,$cont,5),
						"resumen"=>"".pg_result($Registros,$cont,6),
						"idautor"=>"".pg_result($Registros,$cont,7),
						"comentarios"=>"".pg_result($Registros,$cont,8),
						"fecha"=>"".pg_result($Registros,$cont,9),
						"publicacion"=>"".pg_result($Registros,$cont,10)
					   	 ) ;
		 $M[$cont]=$response;
		 }
		$response=$M;
		echo json_encode($response);
	}
	
	
}


session_start();
// para cargar los articulos en el index
$controladora1=new controladora();
if($_REQUEST['accion']== "listarIndex")
	$controladora1->listarpro($_REQUEST);
	
if($_REQUEST['accion']== "buscarpalabra")
	$controladora1->buscarpalabra($_REQUEST);

if($_REQUEST['accion']== "consultarPublicacion")
	$controladora1->consultarPublicacion($_REQUEST);	

if($_REQUEST['accion']== "consultarPorFecha")
	$controladora1->consultarPorFecha($_REQUEST);			

if(isset($_SESSION['clave'])&&isset($_SESSION["usuario"])){
	$controladora=new controladora();
	
if($_REQUEST['accion']== "consultar")
	$controladora->consultar($_REQUEST);

if($_REQUEST['accion']== "listarpro")
	$controladora->listarpro($_REQUEST);
	
if($_REQUEST['accion']== "ingresarRev")
	$controladora->ingresarRev($_REQUEST);	

if($_REQUEST['accion']== "modificarRev")
	$controladora->modificarRev($_REQUEST);

if($_REQUEST['accion']== "modificarestado")
	$controladora->modificarestado($_REQUEST);

if($_REQUEST['accion']== "contarCantnotas")
	$controladora->contarCantnotas($_REQUEST);

if($_REQUEST['accion']== "promedionotas")
	$controladora->promedionotas($_REQUEST);
	
if($_REQUEST['accion']== "publicar")
	$controladora->estadoPublicado($_REQUEST);	

if($_REQUEST['accion']== "consultarestado1")
	$controladora->consultarestado($_REQUEST);	
	
if($_REQUEST['accion']== "listarTodos")
	$controladora->listarTodos($_REQUEST);





}
?>