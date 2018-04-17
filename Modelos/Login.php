<?php

class Login
{
	var $usuario;
	var $clave;
	var $rol;
	var $ide;	
		
	public function __construct($usuario,$clave,$rol, $ide)
	{
		$this->usuario=$usuario;
		$this->clave=$clave;
		$this->rol=$rol;
		$this->ide=$ide;
	}
	//set  y get
	public function getusuario()
	{
		return($this->usuario);	
	}
	
	public function getclave()
	{
		return($this->clave);	
	}
	
	public function getrol()
	{
		return($this->rol);	
	}

	public function getide()
	{
		return($this->ide);	
	}	

	//sets

	public function setusuario($usuario)
	{
		$this->usuario =$usuario;
	}
	public function setclave($clave)
	{
		$this->clave =$clave;
	}

	public function setrol($rol)
	{
		$this->rol=$rol;
	}

	public function setide($ide)
	{
		$this->ide=$ide;
	}	
				

	public function __destruct() 
	{	    
	    $this->usuario;
	    $this->clave;
	    $this->rol;
		$this->ide;		    
	}

}
?>
