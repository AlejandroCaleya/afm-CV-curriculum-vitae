fetch("data.json")
	.then((response) => response.json())
	.then((respuesta) => {
		let elemento = document.getElementById("container");
		let codigo_HTML = "";
		codigo_HTML = "<h1>" + respuesta.nombre + "</h1>";
		codigo_HTML += "<h2>" + respuesta.titulo + "</h2>";
		codigo_HTML += "<h3>" + respuesta.resumen + "</h3>";

		codigo_HTML += "<ul>";
		codigo_HTML += "<li>" + respuesta.contacto.email + "</li>";
		codigo_HTML += "<li>" + respuesta.contacto.telefono + "</li>";
		codigo_HTML += "<li>" + respuesta.contacto.direccion + "</li>";
		codigo_HTML += "</ul>";

		codigo_HTML += "<ul>";
		respuesta.experiencia.forEach((element) => {
			codigo_HTML +=
				"<li>" +
				element.puesto +
				"<br>" +
				element.empresa +
				"<br>" +
				element.periodo +
				"<br>" +
				element.descripcion +
				"</li><br>";
		});
		codigo_HTML += "</ul>";

		codigo_HTML += respuesta.habilidades;

		elemento.innerHTML = codigo_HTML;
	})
	.catch((error) => {
		console.error("Error al cargar el archivo: ", error);
	});
