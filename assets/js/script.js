const botao = document.getElementById("ligar");
const iconTema = document.getElementById("iconCorTema");

let temaClaro = false;

botao.addEventListener("click", function () {
  console.log("Botão clicado!");

  temaClaro = !temaClaro;
  iconTema.src = temaClaro ? "assets/imgs/sun-solid-full.svg" : "assets/imgs/moon-solid-full.svg";

 document.getElementById("ligar").classList.toggle("light");
  document.body.classList.toggle("light");
  document.querySelector(".container").classList.toggle("light");
});
