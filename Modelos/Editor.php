<?php

class Editor
{
	var $nombree;
	var $idee;
	var $cargoe;	
		
	public function __construct($nombree,$idee,$cargoe)
	{
		$this->nombrea=$nombree;
		$this->direcciona=$idee;
		$this->telefonoa=$cargoe;
	}
	//set  y get
	public function getnombree()
	{
		return($this->nombree);	
	}
	
	public function getidee()
	{
		return($this->idee);	
	}
	
	public function getcargoe()
	{
		return($this->cargoe);	
	}

	//sets

	public function setnombree($nombree)
	{
		$this->nombree =$nombree;
	}
	public function setidee($idee)
	{
		$this->idee =$idee;
	}

	public function setcargoe($cargoe)
	{
		$this->cargoe=$cargoe;
	}
				

	public function __destruct() 
	{	    
	    $this->nombree;
	    $this->idee;
	    $this->cargoe;
		    
	}

}
?>
