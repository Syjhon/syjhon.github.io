const images = [
    {
        src: "/images/carousel/p_imagen01.webp",
        text: "Nubes con fragmentos revela matices de un tiempo"
    },
    {
        src: "/images/carousel/p_imagen02.webp",
        text: "Horizontes lejanos con una revelacion en cada giro"
    },
    {
        src: "/images/carousel/p_imagen03.webp",
        text: "Posibilidades vistas en la linea del horizonte detenido"
    },
    {
        src: "/images/carousel/p_imagen04.webp",
        text: "Resuena el silencio en cada instante entrelazandose"
    },
    {
        src: "/images/carousel/p_imagen05.webp",
        text: "Un lienzo en blanco en la mente durante momentos"
    }
];

let currentIndex = 0;

const carouselImage = document.getElementById('carouselImage');
const carouselText = document.querySelector('.carousel-text h2');
const progressBarItems = document.querySelectorAll('.progress-bar-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Función para precargar imágenes
function preloadImages() {
    images.forEach(image => {
        const img = new Image();
        img.src = image.src;
    });
}

function animateCarousel() {
    // Establece la animación de desaparición
    carouselImage.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0.0, 0.2, 1)';
    carouselText.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0.0, 0.2, 1)';
    
    // Asegúrate de que la imagen se haya cargado completamente antes de cambiar
    const newImage = new Image();
    newImage.src = images[currentIndex].src;
    newImage.onload = () => {
        carouselImage.style.opacity = '0';
        carouselText.style.opacity = '0';
        carouselImage.style.transform = 'scale(0.95)';
        carouselText.style.transform = 'scale(0.95)';

        setTimeout(() => {
            // Actualiza la imagen y el texto
            carouselImage.src = newImage.src;
            carouselText.textContent = images[currentIndex].text;

            // Establece la animación de aparición
            carouselImage.style.opacity = '1';
            carouselText.style.opacity = '1';
            carouselImage.style.transform = 'scale(1)';
            carouselText.style.transform = 'scale(1)';
        }, 700); // Tiempo coincidente con la duración de la transición
    };
}

function updateCarousel() {
    // Actualiza la barra de progreso
    progressBarItems.forEach((item, index) => {
        item.classList.toggle('active', index <= currentIndex);
    });

    // Llama a la animación
    animateCarousel();
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

// Inicializar el carrusel
window.addEventListener('load', () => {
    preloadImages(); // Precargar imágenes al cargar la página
    updateCarousel(); // Mostrar la primera imagen
});
