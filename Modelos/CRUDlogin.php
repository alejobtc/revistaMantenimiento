<?php 
include_once("../Modelos/Conexion.php");


class CRUDlogin extends Conexion
{
	
	var $Mensaje;
	var $Sql;
	public function __construct()
	{
		$this->Sql="";
		$this->Mensaje=parent::conectar();			
	}
	
public function getM(){return($this->Mensaje);}	
	
public function consultarrol($Login)
	{
		
		
		if($Login->getclave()!=""&&$Login->getusuario()!="")
		$this->Sql="Select rol from login where usuario='".$Login->getusuario()."' and clave='".$Login->getclave()."'";
	
	
	 	$Registros=pg_exec($this->Conexion,$this->Sql);	
		
		
		
		return($Registros);
	}
	
	public function consultarid1($Login)
	{
		
		if($Login->getclave()==""||$Login->getusuario()=="")
		 echo("ingrese usuario o contrasena");
		if($Login->getclave()!=""&&$Login->getusuario()!="")
		$this->Sql="select enlacear, idear, tituloar, ide_par from (SELECT  * FROM articulo a JOIN (SELECT  * from revision where ide_par=(Select ide from login where usuario='".$Login->getusuario()."' and clave='".$Login->getclave()."')) t1 ON a.idear=t1.ide_articulo) t2 ";
		
	
	

	 	$Registros=pg_exec($this->Conexion,$this->Sql);	
		
		
		
		return($Registros);
	}	

public function consultarid($Login)
	{
		
		
		if($Login->getclave()!=""&&$Login->getusuario()!="")
		$this->Sql="select enlacear, idear, tituloar, ide_par from (SELECT  * FROM articulo a JOIN (SELECT  * from revision where ide_par=(Select ide from login where usuario='".$Login->getusuario()."' and clave='".$Login->getclave()."')) t1 ON a.idear=t1.ide_articulo) t2 where t2.estadoar='pendiente'";
		
	
	

	 	$Registros=pg_exec($this->Conexion,$this->Sql);	
		
		
		
		return($Registros);
	}	

	
	
} 



?>