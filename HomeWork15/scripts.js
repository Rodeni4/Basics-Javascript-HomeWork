const sliderImages = document.getElementById('slider-images');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const dotsContainer = document.getElementById('dots-container');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

// Функция для отображения конкретного изображения
function showImage(index) {
  const newPosition = -index * 100 + '%';
  sliderImages.style.transform = 'translateX(' + newPosition + ')';
  updateDots(index);
}

// Функция для обновления активной точки
function updateDots(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle('active-dot', i === index);
  });
}

// Обработчик события для кнопки "Следующее изображение"
nextButton.addEventListener('click', function () {
  currentIndex = (currentIndex + 1) % dots.length;
  showImage(currentIndex);
});

// Обработчик события для кнопки "Предыдущее изображение"
prevButton.addEventListener('click', function () {
  currentIndex = (currentIndex - 1 + dots.length) % dots.length;
  showImage(currentIndex);
});

// Обработчик события для навигационных точек
dots.forEach((dot, index) => {
  dot.addEventListener('click', function () {
    currentIndex = index;
    showImage(currentIndex);
  });
});

// Показываем первое изображение при загрузке страницы
showImage(currentIndex);

// Дополнительно

// Функция для автоматического перелистывания слайдов
function autoSlide() {
    currentIndex = (currentIndex + 1) % dots.length;
    showImage(currentIndex);
  }

// Запускаем автоматическое перелистывание каждые 3 секунды
setInterval(autoSlide, 3000);