const servicos_lista = document.querySelectorAll(
  ".servicos-cont .servicos-lista .btn"
);

servicos_lista.forEach((btn) => {
  btn.addEventListener("click", () => {
    const complementares = document.querySelector(
      ".todos-servicos-cont .servicos-exames-complementares"
    );
    const ocupacional = document.querySelector(
      ".todos-servicos-cont .servicos-exames-conosco"
    );
    const treinamentos = document.querySelector(
      ".todos-servicos-cont .servicos-treinamentos"
    );

    if (btn.classList.contains("ocupacional")) {
      complementares.classList.remove("ativo");
      treinamentos.classList.remove("ativo");
      ocupacional.classList.toggle("ativo");
    } else if (btn.classList.contains("exames-complementares")) {
      ocupacional.classList.remove("ativo");
      treinamentos.classList.remove("ativo");
      complementares.classList.toggle("ativo");
    } else if (btn.classList.contains("treinamentos")) {
      ocupacional.classList.remove("ativo");
      complementares.classList.remove("ativo");
      treinamentos.classList.toggle("ativo");
    }
  });
});

const mobileBtn = document.querySelector(".menu-mobile");

mobileBtn.addEventListener("click", menuToggle);

function menuToggle() {
  const menu = document.querySelector(".menu-cont .menu .menu-lista");

  menu.classList.toggle("menuAtivo");
}

let slideIndex = 1;
showSlide(slideIndex);

function passarImg(n) {
  showSlide((slideIndex += n));
}

function imgAtual(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  let i;
  let slides = document.querySelectorAll(".banner-imgs");
  let dots = document.querySelectorAll(".dot");

  if (n < 1) {
    slideIndex = slides.length;
  }

  if (n > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

let autoSlideInterval = setInterval(() => {
  passarImg(1);
}, 5000);

function pararAutoSlide() {
  clearInterval(autoSlideInterval);
}

function retornarAutoSlide() {
  autoSlideInterval = setInterval(() => {
    passarImg(1);
  }, 5000);
}

let slides = document.querySelectorAll(".banner-imgs");

slides.forEach((slide) => {
  slide.addEventListener("mouseover", pararAutoSlide);
});

slides.forEach((slide) => {
  slide.addEventListener("mouseleave", retornarAutoSlide);
});
