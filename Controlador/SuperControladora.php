<?php
include_once("../Modelos/Par.php");
include_once("../Modelos/Autor.php");
include_once("../Modelos/Articulo.php");
include_once("../Modelos/Par.php");
include_once("../Modelos/CRUDPar.php");
include_once("../Modelos/Login.php");

class controladora
{

	public function __construct($args)
	{
	try
	{
		if (isset($args['clase'])) 
	      { 
		  $t2=null;  
		  
   	  	  $clase =$args['clase'];
          $clasecrud =$args['clasecrud'];
          $metodocrud=$args['metodcrud'];
          $obj = new $clase($args['nombre'],$args['direccion'],$args['telefono'],$args['correo'],$args['afiliacion'],$args['estudio'],$args['cedula']);
		  $objCrud=new $clasecrud();
	  	$t=$objCrud->$metodocrud($obj);
		
		if (isset($args['clase2'])) 
	      {			
			$clase2 =$args['clase2'];
		$metodocrudLogin = $args['metodocrudLogin'];
		$clase2 =$args['clase2'];
		$metodocrudLogin = $args['metodocrudLogin'];
   	  	$obj2= new $clase2($args['usuario'],$args['contrasena'],$args['rol'],$args['cedula']);
		$t2=$objCrud->$metodocrudLogin($obj2);
		  }
				
		if($t==null && $t2==null ){
		echo json_encode("Exito");
		}
		else{
			$Filas=pg_numrows($t);
			
			
			for($cont=0;$cont<$Filas;$cont++)
		 {
		 $response=array("nombre"=>"".pg_result($t,$cont,0),
		                 "direccion"=>"".pg_result($t,$cont,1),
					     "telefono"=>"".pg_result($t,$cont,2),
					    "correo"=>"".pg_result($t,$cont,3),
					    "afiliacion"=>"".pg_result($t,$cont,4),
					    "estudio"=>"".pg_result($t,$cont,5),
						"cedula"=>"".pg_result($t,$cont,6)
						 ) ;
		 $M[$cont]=$response;
		 }
	$response=$M;
	echo json_encode($response,true);

		}	
		  }
       else
	     {
		 echo json_encode("Error el nombre de la clase o metodo incorrectos");	 
		 }
	
}
catch (Exception $e)
{
 echo json_encode(array("mensaje" => $e->getMessage()));
}

}
public function __destruct()
{}


}
session_start();
if(isset($_SESSION['clave'])&&isset($_SESSION["usuario"])){
$Ob= new controladora($_REQUEST);
}


?>
