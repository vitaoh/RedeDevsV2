// Controle de slides para a apresentação de conclusão do RedeDev's
let currentSlide = 1;
const totalSlides = 11;
let isFullscreen = false;

// Elementos DOM
const slidesContainer = document.getElementById('slidesContainer');
const slides = document.querySelectorAll('.slide');
const currentSlideElement = document.getElementById('currentSlide');
const totalSlidesElement = document.getElementById('totalSlides');
const progressFill = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const presentationContainer = document.querySelector('.presentation-container');

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    initializePresentation();
    setupEventListeners();
    updatePresentation();
});

function initializePresentation() {
    totalSlidesElement.textContent = totalSlides;
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev');
        if (index === 0) slide.classList.add('active');
    });
}

function setupEventListeners() {
    prevBtn?.addEventListener('click', goToPreviousSlide);
    nextBtn?.addEventListener('click', goToNextSlide);
    fullscreenBtn?.addEventListener('click', toggleFullscreen);

    document.addEventListener('keydown', handleKeyPress);

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    setupTouchNavigation();
    addSlideJumpFunctionality();
}

// Navegação por teclado
function handleKeyPress(e) {
    const withCtrl = e.ctrlKey || e.metaKey;
    switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
            e.preventDefault();
            goToPreviousSlide();
            break;
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
            e.preventDefault();
            goToNextSlide();
            break;
        case 'Home':
            e.preventDefault();
            goToSlide(1);
            break;
        case 'End':
            e.preventDefault();
            goToSlide(totalSlides);
            break;
        case 'f':
        case 'F11':
            e.preventDefault();
            toggleFullscreen();
            break;
        case 'Escape':
            if (isFullscreen) toggleFullscreen();
            break;
        case '1': case '2': case '3': case '4': case '5':
        case '6': case '7': case '8': case '9':
            if (withCtrl) {
                const num = parseInt(e.key, 10);
                if (num <= totalSlides) {
                    e.preventDefault();
                    goToSlide(num);
                }
            }
            break;
        case '0':
            if (withCtrl) {
                e.preventDefault();
                goToSlide(10);
            }
            break;
        case 'p': case 'P':
            if (withCtrl) {
                e.preventDefault();
                window.print();
            }
            break;
    }
}

// Navegação por toque
function setupTouchNavigation() {
    let startX = 0, startY = 0, endX = 0, endY = 0;
    slidesContainer.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    slidesContainer.addEventListener('touchend', e => {
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;
        handleSwipe();
    });

    function handleSwipe() {
        const dx = startX - endX;
        const dy = startY - endY;
        const threshold = 50;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > threshold) {
            dx > 0 ? goToNextSlide() : goToPreviousSlide();
        }
    }
}

function goToPreviousSlide() { if (currentSlide > 1) goToSlide(currentSlide - 1); }
function goToNextSlide() { if (currentSlide < totalSlides) goToSlide(currentSlide + 1); }

function goToSlide(n) {
    if (n < 1 || n > totalSlides || n === currentSlide) return;
    const from = currentSlide;
    currentSlide = n;
    slides.forEach((s, i) => {
        s.classList.remove('active', 'prev');
        if (i === currentSlide - 1) s.classList.add('active');
        else if (i < currentSlide - 1) s.classList.add('prev');
    });
    addSlideTransition(from, currentSlide);
    updatePresentation();
    announceSlideChange(currentSlide);
}

function addSlideTransition(from, to) {
    const fromSlide = slides[from - 1];
    const toSlide = slides[to - 1];
    slides.forEach(s => { s.style.transition = 'all 0.4s ease'; });
    if (to > from) fromSlide.style.transform = 'translateX(-100%)';
    else fromSlide.style.transform = 'translateX(100%)';
    toSlide.style.transform = 'translateX(0)';
    setTimeout(() => slides.forEach(s => { s.style.transition = ''; s.style.transform = ''; }), 400);
}

function updatePresentation() {
    progressFill.style.width = `${(currentSlide / totalSlides) * 100}%`;
    currentSlideElement.textContent = currentSlide;
    prevBtn.disabled = currentSlide === 1;
    nextBtn.disabled = currentSlide === totalSlides;
    animateSlideContent();
}

function animateSlideContent() {
    const content = slides[currentSlide - 1].querySelector('.slide-content');
    if (content) {
        content.style.animation = 'none';
        content.offsetHeight; // reflow
        content.style.animation = 'slideInUp 0.6s ease';
        content.setAttribute('tabindex', '-1');
        content.focus();
    }
}

function announceSlideChange(num) {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.style.position = 'absolute';
    announcer.style.left = '-9999px';
    announcer.textContent = `Slide ${num} de ${totalSlides}`;
    document.body.appendChild(announcer);
    setTimeout(() => document.body.removeChild(announcer), 1000);
}

function toggleFullscreen() { isFullscreen ? exitFullscreen() : enterFullscreen(); }
function enterFullscreen() {
    if (presentationContainer.requestFullscreen) presentationContainer.requestFullscreen();
    else if (presentationContainer.webkitRequestFullscreen) presentationContainer.webkitRequestFullscreen();
    else if (presentationContainer.mozRequestFullScreen) presentationContainer.mozRequestFullScreen();
    else if (presentationContainer.msRequestFullscreen) presentationContainer.msRequestFullscreen();
}
function exitFullscreen() {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
}
function handleFullscreenChange() {
    isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
    presentationContainer.classList.toggle('fullscreen', isFullscreen);
    fullscreenBtn.textContent = isFullscreen ? 'Sair Tela Cheia' : 'Tela Cheia';
}

function addSlideJumpFunctionality() {
    const indicator = document.querySelector('.slide-indicator');
    if (!indicator) return;
    indicator.style.cursor = 'pointer';
    indicator.title = 'Clique para pular para um slide';
    indicator.addEventListener('click', () => {
        const s = prompt(`Ir para slide (1-${totalSlides}):`);
        const num = parseInt(s, 10);
        if (num >= 1 && num <= totalSlides) goToSlide(num);
    });
}

// Exportar para depuração
window.presentationControls = {
    goToSlide, goToPreviousSlide, goToNextSlide, toggleFullscreen,
    getCurrentSlide: () => currentSlide,
};
