<?php
include_once("../Modelos/Conexion.php");
class CRUDPar extends Conexion
{
var $Mensaje;
var $Sql;
public function __construct()
{
$this->Mensaje=parent::conectar();	
$this->Sql="";
}

public function getM(){return($this->Mensaje);}
	
public function ingresar($persona)
{
	$this->Sql="insert into par values('".$persona->getnombrep()."','".$persona->getdireccionp()."','".$persona->gettelefonop().								"','".$persona->getcorreop()."','".$persona->getafiliacionp()."','".$persona->getestudiop()."','".$persona->getidep()."');";
	pg_exec($this->Conexion,$this->Sql);
	
}

public function ingresarLogin($login)
{	
	$this->Sql="insert into login values('".$login->getusuario()."' ,' ".$login->getclave()."','".$login->getrol()."','".$login->getide()."');";	
	pg_exec($this->Conexion,$this->Sql);
}


public function consultar($persona)
{
	if($persona->getidep()=="")
		$this->Sql="Select * from par order by nombrep;";
	if($persona->getidep()!="")
		$this->Sql="Select * from par where idep='".$persona->getidep()."';";
		$Registros=pg_exec($this->Conexion,$this->Sql);	
	return($Registros);
	
}



public function modificar($persona)
{

	$this->Sql="Update par set  nombrep='".$persona->getnombrep()."',direccionp='".$persona->getdireccionp()."',telefonop='".		$persona->gettelefonop()."',correop='".$persona->getcorreop()."',afiliacionp='".$persona->getafiliacionp()."',estudiop='".$persona	->getestudiop()."'where idep='".$persona->getidep()."';";
	$Registros=pg_exec($this->Conexion,$this->Sql);

}

public function eliminar($persona)
{
	$this->Sql="delete from par  where idep='".$persona->getidep()."';";	
	$Registros=pg_exec($this->Conexion,$this->Sql);
}

	

}


?>