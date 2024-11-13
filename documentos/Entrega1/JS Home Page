document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Adiciona evento para o botão "Próximo"
    document.getElementById('next').addEventListener('click', nextSlide);

    // Adiciona evento para o botão "Anterior"
    document.getElementById('prev').addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    // Faz o slide rodar automaticamente a cada 3 segundos (3000 milissegundos)
    setInterval(nextSlide, 3000);
});
