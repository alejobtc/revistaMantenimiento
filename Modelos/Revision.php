<?php

class Revision
{
	var $ide_articulo;
	var $ide_par;
	var $nota;
	var $comentarios;	
		
	public function __construct($ide_articulo,$ide_par,$nota, $comentarios)
	{
		$this->ide_articulo=$ide_articulo;
		$this->ide_par=$ide_par;
		$this->nota=$nota;
		$this->comentarios=$comentarios;
	}
	//set  y get
	public function getide_articulo()
	{
		return($this->ide_articulo);	
	}
	
	public function getide_par()
	{
		return($this->ide_par);	
	}
	
	public function getnota()
	{
		return($this->nota);	
	}

	public function getcomentarios()
	{
		return($this->comentarios);	
	}	

	//sets

	public function setide_articulo($ide_articulo)
	{
		$this->ide_articulo =$ide_articulo;
	}
	public function setide_par($ide_par)
	{
		$this->ide_par =$ide_par;
	}

	public function setnota($nota)
	{
		$this->nota=$nota;
	}

	public function setcomentarios($comentarios)
	{
		$this->comentarios=$comentarios;
	}	
				

	public function __destruct() 
	{	    
	    $this->ide_articulo;
	    $this->ide_par;
	    $this->nota;
		$this->comentarios;		    
	}

}
?>
