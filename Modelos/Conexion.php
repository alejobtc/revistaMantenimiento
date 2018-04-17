<?php
abstract class Conexion 
{ 
protected $Conexion;

//funcion para realizar la conexion
  public function __construct ()
	{
	 $this->Conexion='';
	}

  protected function conectar()
	    {   
		$this->Conexion =pg_connect('dbname=revista user=postgres password=admin');
	    $Mensaje="Exito";
		if(!$this->Conexion)
		$Mensaje="<table width'195' border='0' align='center' cellpadding'0' cellspacing='0'> <tr><TD><font color='font color='#990000'>ERROR AL ABRIR LA BASE DE DATOS </font></TD></tr></table>";
		return($Mensaje);
	    }
	  
  public function __destruct ()
	{
	 $this->Conexion;
	}
}

?>