let widget_id = Math.floor(Math.random() * (999999999 - 1000)) + 1000;
$(".mySwiper").addClass(`zhs-swiper${widget_id}`);
$(".swiper-pagination").addClass(`zhs-pagination${widget_id}`);
$(".swiper-button-next, .swiper-button-prev").addClass(`zhs-nav${widget_id}`);

let autoplay = false;
let interval = 6000;

let swiper = new Swiper(`.zhs-swiper${widget_id}`, {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    freeMode: false,
    loop: true,
    pagination: {
        el: `.zhs-pagination${widget_id}`,
        dynamicBullets: false,
        clickable: true,           
    },
    navigation: {
        nextEl: `.swiper-button-next.zhs-nav${widget_id}`,
        prevEl: `.swiper-button-prev.zhs-nav${widget_id}`,
    },
    autoplay: {
        delay: interval
    },
    on: {
        init: function () {
            $(".swiper-slide .zhs-background-image").removeClass("kenburns-bottom");
            $(".swiper-slide-active .zhs-background-image").addClass("kenburns-bottom");
        },
    }
});

autoplay ? swiper.autoplay.start() : swiper.autoplay.stop();

swiper.on('slideChangeTransitionEnd', function () {
    $(".swiper-slide .zhs-background-image").removeClass("kenburns-bottom");
    $(".swiper-slide-active .zhs-background-image").addClass("kenburns-bottom");
});
