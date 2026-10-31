// MÚSICA
const musica = document.getElementById("musica");
const volumen = document.getElementById("volumen");

// PRIMERA PANTALLA
const botonDescubrir = document.getElementById("abrirFrasco");
const pantallaEstrellas = document.getElementById("pantallaEstrellas");

botonDescubrir.addEventListener("click", () => {
    document.querySelector(".universo").style.display = "none";
    pantallaEstrellas.style.display = "block";

    if (musica) {
        musica.volume = volumen ? Number(volumen.value) : 0.3;
       musica.play().then(() => {
    console.log("Música funcionando");
}).catch(error => {
    alert("Error al reproducir: " + error.message);
});
    }
});

// CONTROL DE VOLUMEN
if (musica && volumen) {
    volumen.addEventListener("input", () => {
        musica.volume = Number(volumen.value);
    });
}

// ESTRELLAS DE LA GALAXIA
const estrellasGalaxia = document.querySelectorAll(".estrella-galaxia");

estrellasGalaxia.forEach((estrella) => {
    estrella.addEventListener("click", () => {
        estrella.classList.toggle("activa");
    });
});