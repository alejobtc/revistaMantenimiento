<?php
include_once("Conexion.php");

class CRUDautor extends Conexion
{

	var $Mensaje;
	var $Sql;
	
public function __construct()
	{
	
		$this->Mensaje=parent::conectar();	
		$this->Sql="";
	}

public function getM()
	{
		return($this->Mensaje);
	}
		
public function ingresar($persona)
	{
		$this->Sql="insert into autor values('".$persona->getnombrea()."','".$persona->getdirecciona()."','".$persona->gettelefonoa()."','".$persona->getcorreoa()."','".$persona->getafiliaciona()."','".$persona->getidea()."');";
		pg_exec($this->Conexion,$this->Sql);
	}

public function ingresarLogin($login)
{	
	$this->Sql="insert into login values('".$login->getusuario()."' ,' ".$login->getclave()."','".$login->getrol()."','".$login->getide()."');";	
	pg_exec($this->Conexion,$this->Sql);
}	

	public function consultar($persona)
	{
		if($persona->getidea()=="")
			$this->Sql="Select * from autor order by nombrea;";
		if($persona->getidea()!="")
			$this->Sql="Select * from autor where idea ='".$persona->getidea()."';";
			$Registros=pg_exec($this->Conexion,$this->Sql);
			//$Registros=pg_exec($this->Conexion->getConexion(),$this->Sql);	
		return($Registros);
		
	}


	public function modificar($persona)
	{
		$this->Sql="Update autor set  nombrea='".$persona->getnombrea()."',direcciona='".$persona->getdirecciona()."',telefonoa='".$persona->gettelefonoa()."',correoa='".$persona->getcorreoa()."',afiliaciona='".$persona->getafiliaciona().
		"'where idea='".$persona->getidea()."';";

		$Registros=pg_exec($this->Conexion,$this->Sql);	
		
	}

	public function eliminar($persona)
	{
		$this->Sql="delete from autor  where idea='".$persona->getidea()."';";
		$Registros=pg_exec($this->Conexion,$this->Sql);
	}

}


?>