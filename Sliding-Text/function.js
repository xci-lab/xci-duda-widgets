$(document).ready(function() {
    let currentSlide = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    // Function to show the next slide
    function showNextSlide() {
        // Fade out the current slide
        slides.eq(currentSlide).addClass('fade-out');

        // After a short delay, change slide
        setTimeout(function() {
            // Remove active and fade-out classes from current slide
            slides.eq(currentSlide).removeClass('active fade-out');

            // Move to the next slide
            currentSlide = (currentSlide + 1) % totalSlides;

            // Add the active class to the next slide
            slides.eq(currentSlide).addClass('active');
        }, 2000); // 1 second delay for fade-out
    }

    // Show the next slide every 4 seconds
    setInterval(showNextSlide, 6000);
});
