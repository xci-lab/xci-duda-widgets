
//Simple Slider
let slideArrw="<i class='fa fa-angle-left fa-3x slick-Arrow'></i>";
let slideArrw2="<i class='fa fa-angle-right fa-3x slick-Arrow'></i>";



$('.imgSliderContainer').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:'<button type="button" class="slick-Arrow-Prev  slickBtn-Arrow">'+slideArrw+'</button>',
  nextArrow:'<button type="button" class="slick-Arrow-Next slickBtn-Arrow">'+slideArrw2+'</button>',
});
