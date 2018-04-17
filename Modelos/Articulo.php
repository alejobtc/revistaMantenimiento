<?php

class Articulo
{
	var $enlacear;
	var $estadoar;
	var $idear;
	var $tituloar;
	var $temaar;
	var $palabras_clavesar;
	var $resumenar;
	var $ide_autorar;
	var $comentariosar;	
	
		
	public function __construct($enlacear,$estadoar,$idear,$tituloar,$temaar,$palabras_clavesar,$resumenar,$ide_autorar,$comentariosar)
	{
		$this->enlacear=$enlacear;
		$this->estadoar=$estadoar;
		$this->idear=$idear;
		$this->tituloar=$tituloar;
		$this->temaar=$temaar;
		$this->palabras_clavesar=$palabras_clavesar;
		$this->resumenar=$resumenar;
		$this->ide_autorar=$ide_autorar;
		$this->comentariosar=$comentariosar;		
	
	}
	//set  y get
	public function getenlacear()
	{
		return($this->enlacear);	
	}
	
	public function getestadoar()
	{
		return($this->estadoar);	
	}
	
	public function getidear()
	{
		return($this->idear);	
	}

	public function gettituloar()
	{
		return($this->tituloar);	
	}
	public function gettemaar()
	{
		return($this->temaar);	
	}
	
	public function getpalabras_clavesar()
	{
		return($this->palabras_clavesar);	
	}
	
	public function getresumenar()
	{
		return($this->resumenar);	
	}

	public function getide_autorar()
	{
		return($this->ide_autorar);	
	}
	
	public function getcomentariosar()
	{
		return($this->comentariosar);	
	}	

	//sets

	public function setenlacear($enlacear)
	{
		$this->enlacear =$enlacear;
	}
	public function setestadoar($estadoar)
	{
		$this->estadoar =$estadoar;
	}

	public function setidear($idear)
	{
		$this->idear=$idear;
	}

	public function settituloar($tituloar)
	{
		$this->tituloar =$tituloar;
	}
	
	public function settemaar($temaar)
	{
		$this->temaar =$temaar;
	}
	public function setpalabras_clavesar($palabras_clavesar)
	{
		$this->palabras_clavesar =$palabras_clavesar;
	}
	
	public function setresumenar($resumenar)
	{
		$this->resumenar =$resumenar;
	}	

	public function setide_autorar($ide_autorar)
	{
		$this->ide_autorar =$ide_autorar;
	}
	
	public function setcomentariosar($comentariosar)
	{
		$this->comentariosar =$comentariosar;
	}			

	public function __destruct() 
	{	    
	    $this->enlacear;
	    $this->estadoar;
	    $this->idear;
	    $this->tituloar;
	    $this->temaar;
	    $this->palabras_clavesar;
	    $this->resumenar;
	    $this->ide_autorar;
		$this->comentariosar;		    
	}

}
?>
