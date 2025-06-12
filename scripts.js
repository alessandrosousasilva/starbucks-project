document.addEventListener("DOMContentLoaded", () => {
  const circulo = document.querySelector(".circulo");
  const imagen = document.querySelector(".starbucks-img");

  const temas = [
    { color: "#017143", img: "img/img1.png" },
    { color: "#eb7495", img: "img/img2.png" },
    { color: "#d752b1", img: "img/img3.png" },
  ];

  let index = 0;

  function cambiarTema(i) {
    circulo.style.backgroundColor = temas[i].color;
    imagen.style.opacity = 0;
    imagen.onload = () => {
      imagen.style.opacity = 1;
    };
    imagen.src = temas[i].img;
  }

  // Inicializa com o primeiro tema
  cambiarTema(index);

  // Troca automática a cada 5 segundos
  setInterval(() => {
    index = (index + 1) % temas.length;
    cambiarTema(index);
  }, 5000);

  // Funções globais para os botões (se quiser manter a interação manual)
  window.cambiarColor = function (color) {
    circulo.style.backgroundColor = color;
  };

  window.cambiarImagen = function (src) {
    imagen.style.opacity = 0;
    imagen.onload = () => {
      imagen.style.opacity = 1;
    };
    imagen.src = src;
  };
});
