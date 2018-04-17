<?php

class Autor
{
	var $nombrea;
	var $direcciona;
	var $telefonoa;
	var $correoa;
	var $afiliaciona;
	var $idea;	
	
		
	public function __construct($nombrea,$direcciona,$telefonoa,$correoa,$afiliaciona,$idea)
	{
		$this->nombrea=$nombrea;
		$this->direcciona=$direcciona;
		$this->telefonoa=$telefonoa;
		$this->correoa=$correoa;
		$this->afiliaciona=$afiliaciona;
		$this->idea=$idea;	
	}
	//set  y get
	public function getnombrea()
	{
		return($this->nombrea);	
	}
	
	public function getdirecciona()
	{
		return($this->direcciona);	
	}
	
	public function gettelefonoa()
	{
		return($this->telefonoa);	
	}

	public function getcorreoa()
	{
		return($this->correoa);	
	}
	public function getafiliaciona()
	{
		return($this->afiliaciona);	
	}
	
	public function getidea()
	{
		return($this->idea);	
	}
	

	//sets

	public function setnombrea($nombrea)
	{
		$this->nombrea =$nombrea;
	}
	public function setdirecciona($direcciona)
	{
		$this->direcciona =$direcciona;
	}

	public function settelefonoa($telefonoa)
	{
		$this->telefonoa=$telefonoa;
	}

	public function setcorreoa($correoa)
	{
		$this->correoa =$correoa;
	}
	
	public function setafiliaciona($afiliaciona)
	{
		$this->afiliaciona =$afiliaciona;
	}
	public function setidea($idea)
	{
		$this->idea =$idea;
	}
				

	public function __destruct() 
	{	    
	    $this->nombrea;
	    $this->direcciona;
	    $this->telefonoa;
	    $this->correoa;
	    $this->afiliaciona;
	    $this->idea;		    
	}

}
?>
