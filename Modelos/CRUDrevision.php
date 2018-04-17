<?php
include_once("../Modelos/Conexion.php");

class CRUDrevision extends Conexion
{
var $Mensaje;
var $Sql;
public function __construct()
{
$this->Mensaje=parent::conectar();	
$this->Sql="";
}

public function getM(){return($this->Mensaje);}
	
public function ingresar($revision)
{	
	$this->Sql="insert into revision values('".$revision->getide_articulo()."','".$revision->getide_par()."','".$revision->getnota()."','".$revision->getcomentarios()."');";
pg_exec($this->Conexion,$this->Sql);
return(1);
}


/////modificarlo que no funciona porque sama es gay
public function consultar($articulo)
{
	if($articulo->getidear()=="")
		$this->Sql="Select * from articulo;";
	if($articulo->getidear()!="")
		$this->Sql="Select * from articulo where idear='".$articulo->getidear()."';";
		$Registros=pg_exec($this->Conexion,$this->Sql);	
	return($Registros);	
}


///modificar  revision  sql

public function modificar($persona)
{

	$this->Sql="Update revision set  nota=".$persona->getnota().", comentarios='".$persona->getcomentarios()."' where ide_articulo=".$persona->getide_articulo()." and  ide_par=".$persona->getide_par().";";
		$Registros=pg_exec($this->Conexion,$this->Sql);

}

public function modificarestado($persona)
{

	$this->Sql="Update articulo set  estadoar='".$persona->getestadoar()."' where idear='".$persona->getidear()."';";
		
		$Registros=pg_exec($this->Conexion,$this->Sql);

}

public function contar($articulo)
{
	if($articulo->getide_articulo()!="")
		$this->Sql="select * from revision where nota  IS NOT NULL and nota <> 0 and ide_articulo='".$articulo->getide_articulo()."';";
		$Registros=pg_exec($this->Conexion,$this->Sql);	
	return($Registros);	
}


public function promedio($articulo)
{
	if($articulo->getide_articulo()!="")
		$this->Sql="Select avg(nota) s from revision where ide_articulo='".$articulo->getide_articulo()."';";
		$Registros=pg_exec($this->Conexion,$this->Sql);	
		
		
	return($Registros);	
}

}





?>