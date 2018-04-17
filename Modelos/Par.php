<?php

class Par
{
	var $nombrep;
	var $direccionp;
	var $telefonop;
	var $correop;
	var $afiliacionp;
	var $estudiop;
	var $idep;	
	
	
		
	public function __construct($nombrep,$direccionp,$telefonop,$correop,$afiliacionp,$estudiop,$idep)
	{
		$this->nombrep=$nombrep;
		$this->direccionp=$direccionp;
		$this->telefonop=$telefonop;
		$this->correop=$correop;
		$this->afiliacionp=$afiliacionp;
		$this->estudiop=$estudiop;
		$this->idep=$idep;	
	}
	// get
	public function getnombrep()
	{
		return($this->nombrep);	
	}
	
	public function getdireccionp()
	{
		return($this->direccionp);	
	}
	
	public function gettelefonop()
	{
		return($this->telefonop);	
	}

	public function getcorreop()
	{
		return($this->correop);	
	}
	
	public function getafiliacionp()
	{
		return($this->afiliacionp);	
	}
	
	public function getestudiop()
	{
		return($this->estudiop);	
	}
			
	public function getidep()
	{
		return($this->idep);	
	}
	

	//sets

	public function setnombrep($nombrep)
	{
		$this->nombrep =$nombrep;
	}
	public function setdireccionp($direccionp)
	{
		$this->direccionp =$direccionp;
	}

	public function settelefonop($telefonop)
	{
		$this->telefonop=$telefonop;
	}

	public function setcorreop($correop)
	{
		$this->correop =$correop;
	}
	
	public function setafiliacionp($afiliacionp)
	{
		$this->afiliacionp =$afiliacionp;
	}
	
	public function setestudiop($estudiop)
	{
		$this->estudiop =$estudiop;
	}

	public function setidep($idep)
	{
		$this->idep =$idep;
	}
				

	public function __destruct() 
	{	    
	    $this->nombrep;
	    $this->direccionp;
	    $this->telefonop;
	    $this->correop;
	    $this->afiliacionp;
		$this->estudiop;
	    $this->idep;		 
		  
	}

}
?>
