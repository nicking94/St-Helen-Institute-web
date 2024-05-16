//dropdowns
document.addEventListener("DOMContentLoaded", function () {
  var dropdown1Toggle = document.getElementById("dropdown1Toggle");
  var dropdown1 = document.getElementById("dropdown1");

  dropdown1Toggle.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleDropdown(dropdown1);
  });

  var dropdown2Toggle = document.getElementById("dropdown2Toggle");
  var dropdown2 = document.getElementById("dropdown2");

  dropdown2Toggle.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleDropdown(dropdown2);
  });

  var dropdown3Toggle = document.getElementById("dropdown3Toggle");
  var dropdown3 = document.getElementById("dropdown3");

  dropdown3Toggle.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleDropdown(dropdown3);
  });

  document.addEventListener("click", function (event) {
    if (
      !event.target.closest("#dropdown1Toggle") &&
      !event.target.closest("#dropdown1") &&
      !event.target.closest("#dropdown2Toggle") &&
      !event.target.closest("#dropdown2") &&
      !event.target.closest("#dropdown3Toggle") &&
      !event.target.closest("#dropdown3")
    ) {
      closeAllDropdowns();
    }
  });

  function toggleDropdown(dropdown) {
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      closeAllDropdowns();
      dropdown.style.display = "block";
    }
  }

  function closeAllDropdowns() {
    dropdown1.style.display = "none";
    dropdown2.style.display = "none";
    dropdown3.style.display = "none";
  }
});

//test
var respuestasCorrectas = 0;
var respuestasIncorrectas = 0;

function volverPagina(paginaActual, paginaAnterior) {
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.getElementById(paginaActual).classList.add("hidden");
  document.getElementById(paginaAnterior).classList.remove("hidden");
  document.getElementById("puntaje").classList.add("hidden");
}

function mostrarPagina(paginaActual, paginaSiguiente) {
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.getElementById(paginaActual).classList.add("hidden");
  document.getElementById(paginaSiguiente).classList.remove("hidden");
}

function mostrarPuntaje() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.querySelectorAll(".pagina").forEach(function (pagina) {
    pagina.classList.add("hidden");
  });
  document.getElementById("puntaje").classList.remove("hidden");
}

function validarRespuesta(respuestaCorrecta, name) {
  limpiarFondos(name); 
  var respuestaSeleccionada = document.querySelector(
    'input[name="' + name + '"]:checked'
  );
  var inputTexto = document.querySelector('input[name="' + name + '"]');

  if (respuestaSeleccionada) {
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      respuestaSeleccionada.parentNode.style.background = "#00FF00"; 
      respuestasCorrectas++;
    } else {
      respuestaSeleccionada.parentNode.style.background = "#FF0000"; 
      respuestasIncorrectas++;
    }
  } else if (inputTexto) {
    var inputTextoNormalizado = inputTexto.value
      .trim()
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    var respuestaCorrectaNormalizada = respuestaCorrecta
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    if (inputTextoNormalizado === respuestaCorrectaNormalizada) {
      inputTexto.style.background = "#00FF00";
      respuestasCorrectas++;
    } else {
      inputTexto.style.background = "#FF0000"; 
      respuestasIncorrectas++;
    }
  }
  calcularPuntaje();
}

function limpiarFondos(name) {
  var opciones = document.querySelectorAll('input[name="' + name + '"]');
  opciones.forEach(function (opcion) {
    opcion.parentNode.style.background = "";
  });
}

function calcularPuntaje() {
  var puntaje =
    (respuestasCorrectas / (respuestasCorrectas + respuestasIncorrectas)) * 100;
  document.getElementById("puntajeValor").textContent =
    Math.round(puntaje) + "%";
}

//SWIPER JS
const swiper = new Swiper(".swiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  spaceBetween: 14,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
