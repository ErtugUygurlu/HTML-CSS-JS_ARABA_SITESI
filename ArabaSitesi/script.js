document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    let currentIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const newPosition = -currentIndex * 100 + '%';
        slider.style.transform = 'translateX(' + newPosition + ')';
    }

    setInterval(function () {
        currentIndex++;
        showSlide(currentIndex);
    }, 3000); // Slider her 3 saniyede bir geçiş yapacak, süreyi ihtiyaca göre ayarlayabilirsiniz.
});
