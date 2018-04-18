<?php
include_once("../Modelos/Conexion.php");
class CRUDarticulo extends Conexion
{
var $Mensaje;
var $Sql;
public function __construct()
{
$this->Mensaje=parent::conectar();	
$this->Sql="";
}

public function getM(){return($this->Mensaje);}
	
public function ingresar($articulo)
{	
	$this->Sql="insert into articulo values('".$articulo->getenlacear()."','".$articulo->getestadoar()."','".$articulo->getidear()."','".$articulo->gettituloar()."','".$articulo->gettemaar()."','".$articulo->getpalabras_clavesar()."','".$articulo->getresumenar()."','".$articulo->getide_autorar()."','".$articulo->getcomentariosar()."');";
pg_exec($this->Conexion,$this->Sql);
return(1);
}

public function consultar($articulo)
{
	if($articulo->getidear()=="")
		$this->Sql="Select * from articulo where ide_autorar='".$articulo->getide_autorar()."';";
	if($articulo->getidear()!="")
		$this->Sql="Select * from articulo where idear='".$articulo->getidear()."' and ide_autorar='".$articulo->getide_autorar()."';";
		$Registros=pg_exec($this->Conexion,$this->Sql);	
	return($Registros);	
}

public function consultarestadocr($articulo)
{
	if($articulo->getidear()=="")
		$this->Sql="Select * from articulo where estadoar='".$articulo->getestadoar()."' and ide_autorar='".$articulo->getide_autorar()."';";
	
		$Registros=pg_exec($this->Conexion,$this->Sql);	
	return($Registros);	
}


public function consultarpro($articulo)

{
	//$this->Sql="Select * from articulo;";
	$this->Sql="Select * from articulo where estadoar='".$articulo->getestadoar()."';";
	$Registros=pg_exec($this->Conexion,$this->Sql);	
	//return($this->Mensaje);
	return($Registros);	
}

public function consultarTodos()
{
	$this->Sql="select a.enlacear, a.tituloar, a.estadoar, r.nota, r.ide_par, r.comentarios from articulo a join revision r on a.idear = r.ide_articulo;";
	$Registros=pg_exec($this->Conexion,$this->Sql);	
	return($Registros);	
}




public function actualizarEstado($articulo)
{
	
	$this->Sql="Update articulo set  estadoar='".$articulo->getestadoar()."' where idear='".$articulo->getidear()."';";
		
	$Registros=pg_exec($this->Conexion,$this->Sql);
	
	return($Registros);	
}


public function buscar($articulo)
{
	
	if($articulo->gettituloar()!="")
		$this->Sql="Select * from articulo where tituloar='".$articulo->gettituloar()."';";
		$Registros=pg_exec($this->Conexion,$this->Sql);	
	return($Registros);	
}

public function modificarart($articulo)
{
	
	if($articulo->gettituloar()!="")
		$this->Sql="Select * from articulo where tituloar='".$articulo->gettituloar()."';";
		$Registros=pg_exec($this->Conexion,$this->Sql);	
		return($Registros);	
}

public function consultarPublicacion($Dato){

	$this->Sql="Select * from articulo where codigopublicacion='".$Dato['codigo']."';";

	//$this->Sql="Select * from articulo where codigopublicacion='".$Dato."';";

	$Registros=pg_query($this->Conexion,$this->Sql);	

	if ($Registros == 'FALSE') {
		return -1;
	}else{
		return ($Registros);
	}
	
	

}

public function consultarPorFecha($Dato){

	$this->Sql="Select * from articulo where fechapublicacion>='".$Dato['inicio']."' and fechapublicacion<='".$Dato['fin']."';";
	$Registros = pg_query($this->Conexion,$this->Sql);	

	return ($Registros);
		
	

}



}





?>