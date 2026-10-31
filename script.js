// ESTRELLAS DE LA PRIMERA PANTALLA
const botonDescubrir = document.getElementById("abrirFrasco");

// SEGUNDA PANTALLA
const pantallaEstrellas = document.getElementById("pantallaEstrellas");

// Al tocar el botón, mostramos la galaxia
botonDescubrir.addEventListener("click", () => {
    document.querySelector(".universo").style.display = "none";
    pantallaEstrellas.style.display = "block";
});

// ESTRELLAS DE LA GALAXIA
const estrellasGalaxia = document.querySelectorAll(".estrella-galaxia");

estrellasGalaxia.forEach((estrella) => {
    estrella.addEventListener("click", () => {
        estrella.classList.toggle("activa");
    });
});