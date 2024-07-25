//---------------------------CONFIGURACIÓN DE ANIMACIÓN DEL MENÚ(SWIPER)----------------------------------//
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000, // 3 SEGUNDOS ENTRE CADA SERVICIO
    disableOnInteraction: false,
  },
  loop: true, // REPITE DESDE EL PRINCIPIO CUANDO PASA EL ÚLTIMO SERVICIO
});
