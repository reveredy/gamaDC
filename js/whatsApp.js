const whatsImg = document.querySelector("#whatsImg");
const msgAtiva = document.querySelector(".whatsAppContato .animado");

whatsImg.addEventListener("mouseover", () => {
  msgAtiva.classList.add("ativo");
});

whatsImg.addEventListener("mouseleave", () => {
  msgAtiva.classList.remove("ativo");
});

// function animaWhats() {
//   msgAtiva.classList.toggle("ativo");
// }
// const animaMsgInterval = setInterval(animaWhats, 6000);

function whatsShaking() {
  whatsImg.classList.toggle("ativo");
}
const shakeWhatsInterval = setInterval(whatsShaking, 5940);
