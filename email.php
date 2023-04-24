<?php

//if you receive something through the post

if($_POST){

 $name = $_POST['name'];

 $email = $_POST['email'];

 $message = $_POST['message'];

 

 //send mail

 mail("mkesmth07@gmail.com", "You have a new message from ".$email, $message);

 

 

}



?>
