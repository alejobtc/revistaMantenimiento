<?php
include_once("../Modelos/Articulo.php");
include_once("../Modelos/CRUDarticulo.php");
//atribtos del articulo

session_start();
if(isset($_SESSION['clave'])&&isset($_SESSION["usuario"])){
$idear = $_POST['idear'];
$temaar = $_POST['temaar'];
$p_clavear = $_POST['p_clavear'];
$resumenar = $_POST['resumenar'];
$idautorar = $_POST['idautorar'];
$comentariosar = $_POST['comentariosar'];
	    
		
		$rutaEnServidor='../Archivos';
        $nombre      = $_POST['tituloar'];
		$archivo1       = $_FILES['archivo']['name'];
        $archivo1_tmp = $_FILES['archivo']['tmp_name']; //REFERENCIA AL NOMBRE TEMPORAL DEL ARCHIVO
        $rutaDestino=$rutaEnServidor.'/'.$archivo1;
        
       //MOVER A UN DIRECTORIO DE TRABAJO
  		move_uploaded_file($archivo1_tmp,"../Archivos/".$archivo1);
        
   		//LO AGREGAMOS A LA BASE DE DATOS
		$obj = new Articulo ($rutaDestino,"recibido",$idear,$nombre,$temaar,$p_clavear,$resumenar,$idautorar,$comentariosar);
		$objCrud=new CRUDarticulo();
    $M=$objCrud->ingresar($obj);
	if($M==1){
	  echo json_encode("ingresado");
	  
	  }
	  else{
		  echo json_encode("no ingresado");
		  }
}
?>