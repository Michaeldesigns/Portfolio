$(document).ready(function(){
	console.log("Yay, it's working!");

	$("#sendMail").click(function(){

	// Get the forms we want to add validation styles to

	var forms = document.getElementsByClassName('needs-validation');

	// Loop over them and prevent submission

	var validation = Array.prototype.filter.call(forms, function(form) {

		form.addEventListener('click', function(event) {

		if (form.checkValidity() === false) {

			event.preventDefault();

			event.stopPropagation();

		}else {

			// This is where we put the code that runs if the form is filled in correctly
			console.log("form is valid");
	//pull out the information (values) that the use put in the form and store them in variables
			var name=$("#formName").val();
			var email=$("#formEmail").val();
			var msg=$("#formMessage").val();

			var emailBody = "Name:"+name+"<br>Email: "+email+"<br>Message: "+msg;

			console.log(name);
			console.log(email);
			console.log(msg);

			//create a var that holds all into together to be passed to the eamil
			var dataString= "name="+name+"&email="+email+"&message="+emailBody;
			console.log(dataString);

			$.ajax({
				type:"POST",
				url:"email.php",
				data:dataString,
				success:function(){
					//this runs if the data has been passed to php files
					$("#formName").val('');
					$("#formEmail").val('');
					$("#formMessage").val('');

					//gives a success message to user
					$("#respond").html("hi thanks for doing the thing");
				}
			});  
	}

	form.classList.add('was-validated');

	}, false);

	});




	});//ends click
});//ends doc ready