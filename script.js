

function valida() {
	//valido el nombre
	if (document.formW.nombre.value.length==0) {
		alert("Recuerde que tiene que escribir su nombre")
		document.formW.nombre.focus ()
		return 0;

		}

	telefono = document.formW.telefono.value
	document.formW.telefono.value=telefono
	if (telefono=="") {
		alert("tiene que introducir el número de su teléfono.")
		document.formW.telefono.focus()
		return 0;
		}

		alert("muchas gracias por enviar el formulario");
	document.formW.submit();
	}

