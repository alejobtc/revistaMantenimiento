<?php
include_once("../Modelos/Login.php");
include_once("../Modelos/CRUDlogin.php");

extract($_REQUEST);

class controladora
{
	function __construct()
  {    
  }
  
	public function consultar($parametros)
	{

	extract($parametros);
	$Login=new Login($usuario,$contraseña,"","");
	$Crudl=new CRUDlogin();
	$Registros=$Crudl->consultarrol($Login);

   	$filas=pg_numrows($Registros);

		if($filas!=0){
			
		   
			session_start();
            unset($_SESSION['usuario']);
            unset($_SESSION['clave']);

			session_unset();
			session_destroy();
           
			
			session_start();
			$_SESSION['usuario'] = $usuario;
			$_SESSION['clave']=$contraseña;
 			
   			session_id();
			
			$response=pg_result($Registros,0,0);	
			
		}
	
		if($filas==0){
			$response=0;			
		}
	
	echo json_encode($response,true);
		
	}
	
	
	
	public function consultarartrevpar($parametros)
	{

	extract($parametros);
	$Login=new Login($usuario,$contraseña,"","");  // ARREGLAR PARAETRO ESTATICO - verificar como ingresan estas 2 variables
	$Crudl=new CRUDlogin();
	$Registros=$Crudl->consultarid($Login);

   	$filas=pg_numrows($Registros);
   	$M = array();
		

		for($cont=0;$cont<$filas;$cont++)
		 {
		 $response=array("enlace"=>"".pg_result($Registros,$cont,0),
		                 "idear"=>"".pg_result($Registros,$cont,1),
					     "titulo"=>"".pg_result($Registros,$cont,2),
						 "idepar"=>"".pg_result($Registros,$cont,3),					   
						 );
						 
		 $M[$cont]=$response;
		 }	
	$response=$M;
	echo json_encode($response,true);	

		
	}
}





if($_REQUEST['metodocontrol']==0){
$controladora=new controladora();
$controladora->consultar($_REQUEST);
}

if($_REQUEST['metodocontrol']==2){
$controladora=new controladora();
$controladora->consultarartrevpar($_REQUEST);
}

if($_REQUEST['metodocontrol']==1){

session_start();

$_SESSION = array();

if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

session_destroy();

}

?>