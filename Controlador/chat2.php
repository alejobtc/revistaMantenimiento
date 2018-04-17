<?php

extract($_REQUEST);

$usu= $user;
$mens = $mensaje; 

$hist = fopen("../chat/historial.txt","a"); //abrimos el archivo donde se guarda todo el historial 
fwrite($hist, "$usu dice: $mens" . "<BR>" . PHP_EOL); //insertamos el texto 
fclose($hist);  //cerramos el archivo

?>