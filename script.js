document.addEventListener("DOMContentLoaded", async () => {
	const modeSwitch = document.querySelector(".mode-switch");
	let isDarkMode = true;

	modeSwitch.addEventListener("click", () => {
		document.body.classList.toggle("night");
		document.body.classList.toggle("day");
		isDarkMode = !isDarkMode;
		modeSwitch.textContent = isDarkMode ? "Modo Día" : "Modo Oscuro";
	});

	try {
		const response = await fetch("data.json");
		const jsonData = await response.json();

		document.querySelector(".name").textContent = jsonData.name;

		document.querySelector(".contact-email").textContent = jsonData.contact.content.email;
		document.querySelector(".contact-phone").textContent = jsonData.contact.content.telefono;
		document.querySelector(".contact-address").textContent = jsonData.contact.content.direccion;
		document.querySelector(".about-content").textContent = jsonData.about.content;

		const educationList = document.querySelector(".education-list");
		jsonData.education.content.forEach((institution) => {
			const listItem = document.createElement("li");
			listItem.innerHTML = `
                <strong>Institución:</strong> ${institution.institucion}<br>
                <strong>Título:</strong> ${institution.titulo}<br>
                <strong>Fecha:</strong> ${institution.fecha}<br><br>
            `;
			educationList.appendChild(listItem);
		});
	} catch (error) {
		console.error("Error al cargar los datos:", error);
	}
});
