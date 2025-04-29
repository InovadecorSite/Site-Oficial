(function () {
	"use strict";
  
	// Função para inicializar o Tiny Slider
	const initTinySlider = function () {
	  const sliderElements = document.querySelectorAll(".testimonial-slider");
  
	  if (sliderElements.length > 0) {
		tns({
		  container: ".testimonial-slider",
		  items: 1,
		  axis: "horizontal",
		  controlsContainer: "#testimonial-nav",
		  swipeAngle: false,
		  speed: 700,
		  nav: true,
		  controls: true,
		  autoplay: true,
		  autoplayHoverPause: true,
		  autoplayTimeout: 3500,
		  autoplayButtonOutput: false,
		});
	  }
	};
  
	// Função para controle de quantidade
	const initQuantityControls = function () {
	  const quantityContainers = document.getElementsByClassName("quantity-container");
  
	  const createBindings = (container) => {
		const quantityAmount = container.getElementsByClassName("quantity-amount")[0];
		const increase = container.getElementsByClassName("increase")[0];
		const decrease = container.getElementsByClassName("decrease")[0];
  
		increase.addEventListener("click", () => increaseValue(quantityAmount));
		decrease.addEventListener("click", () => decreaseValue(quantityAmount));
	  };
  
	  const increaseValue = (quantityAmount) => {
		let value = parseInt(quantityAmount.value, 10) || 0;
		value++;
		quantityAmount.value = value;
	  };
  
	  const decreaseValue = (quantityAmount) => {
		let value = parseInt(quantityAmount.value, 10) || 0;
		if (value > 0) value--;
		quantityAmount.value = value;
	  };
  
	  Array.from(quantityContainers).forEach(createBindings);
	};
  
	// Função para inicializar o slider de imagens com textos sincronizados e fundo desfocado
const initImageSlider = function () {
	const sliderImages = document.querySelectorAll(".slider-img");
	const backgroundImages = document.querySelectorAll(".bg-img"); // Fundo desfocado
	const sliderText = [
	  {
		title: "Confecção de Novas Peças",
		subtext: "Sua imaginação pode virar realidade, excelentes móveis para todos os gostos.",
	  },
	  {
		title: "Uma nova cara para seu móvel",
		subtext: "Dê uma nova cara ao seu móvel antigo, com um novo design e cores no seu estilo.",
	  },
	  {
		title: "Conforto, Estilo e Qualidade",
		subtext: "Móveis planejados para o seu conforto e bem estar, com a qualidade que você merece.",
	  },
	];
  
	const sliderTextTitle = document.getElementById("slider-text");
	const sliderTextSubtext = document.getElementById("slider-subtext");
	const prevButton = document.querySelector(".slider-nav.prev");
	const nextButton = document.querySelector(".slider-nav.next");
  
	let currentSlide = 0;
	let autoSlideInterval;
  
	// Atualiza o slider
	const updateSlider = (index) => {
	  // Atualiza as imagens principais
	  sliderImages.forEach((img) => img.classList.remove("active"));
	  sliderImages[index].classList.add("active");
  
	  // Atualiza as imagens de fundo desfocado
	  backgroundImages.forEach((bg) => bg.classList.remove("active"));
	  backgroundImages[index].classList.add("active");
  
	  // Atualiza os textos
	  if (sliderTextTitle && sliderTextSubtext) {
		sliderTextTitle.textContent = sliderText[index].title;
		sliderTextSubtext.textContent = sliderText[index].subtext;
	  }
	};
  
	// Próximo slide
	const nextSlide = () => {
	  currentSlide = (currentSlide + 1) % sliderImages.length;
	  updateSlider(currentSlide);
	};
  
	// Slide anterior
	const prevSlide = () => {
	  currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
	  updateSlider(currentSlide);
	};
  
	// Navegação manual
	if (nextButton && prevButton) {
	  nextButton.addEventListener("click", () => {
		clearInterval(autoSlideInterval);
		nextSlide();
		startAutoSlide();
	  });
  
	  prevButton.addEventListener("click", () => {
		clearInterval(autoSlideInterval);
		prevSlide();
		startAutoSlide();
	  });
	}
  
	// Auto-slide
	const startAutoSlide = () => {
	  autoSlideInterval = setInterval(nextSlide, 6000); // Troca a cada 6 segundos
	};
  
	// Inicializa o slider
	if (sliderImages.length > 0 && backgroundImages.length > 0) {
	  updateSlider(currentSlide);
	  startAutoSlide();
	} else {
	  console.error("Slider images or background images not found!");
	}
  };
  
  // Inicializa todas as funções
  document.addEventListener("DOMContentLoaded", () => {
	initTinySlider();
	initQuantityControls();
	initImageSlider();
  });
  }
)();

document.addEventListener("DOMContentLoaded", function () {
	const slider = tns({
	  container: ".my-tiny-slider", // Seleciona o container do slider
	  fixedWidth: 300, // Largura fixa de cada slide (ajuste para o tamanho desejado)
	  gutter: 20, // Espaçamento entre slides
	  autoplay: true, // Ativar reprodução automática
	  autoplayTimeout: 2000, // Tempo entre transições
	  autoplayButtonOutput: false, // Ocultar botão de controle de autoplay
	  controls: false, // Ativar setas de navegação
	  nav: false, // Ocultar indicadores de navegação
	  loop: true, // Loop infinito	  
	});
  });


