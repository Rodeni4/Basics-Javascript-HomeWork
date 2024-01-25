const accessKey = 'FNysiBzxrPCSGX8QGz6SpeJojazOt4maiErOQZJSnYs';
const likeButton = document.getElementById('likeButton');
const historyList = document.getElementById('historyList');
const clearHistoryButton = document.getElementById('clearHistoryButton');

let likeCount = parseInt(localStorage.getItem('likeCount')) || 0;
let viewedPhotos = JSON.parse(localStorage.getItem('viewedPhotos')) || [];

updateLikeCount();

likeButton.addEventListener('click', likePhoto);
clearHistoryButton.addEventListener('click', clearHistory);

async function getRandomPhoto() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);
        const data = await response.json();

        const photoElement = document.getElementById('photo');
        const photographerElement = document.getElementById('photographer');

        photoElement.src = data.urls.regular;
        photographerElement.textContent = `Photographer: ${data.user.name}`;

        addToHistory(data.urls.regular);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function likePhoto() {
    const likeCountElement = document.getElementById('likeCount');
    likeCount++;
    likeCountElement.textContent = `Likes: ${likeCount}`;
    localStorage.setItem('likeCount', likeCount.toString());
}

function updateLikeCount() {
    const likeCountElement = document.getElementById('likeCount');
    likeCountElement.textContent = `Likes: ${likeCount}`;
}

function addToHistory(photoUrl) {
    // Проверяем, не содержится ли фото уже в истории просмотров
    if (!viewedPhotos.includes(photoUrl)) {
        // Добавляем ссылку в массив просмотренных фото
        viewedPhotos.push(photoUrl);

        // Сохраняем массив в localStorage
        localStorage.setItem('viewedPhotos', JSON.stringify(viewedPhotos));

        // Отображаем новый элемент в истории
        const historyItem = document.createElement('li');
        historyItem.classList.add('history-item');
        historyItem.textContent = 'Viewed photo: ';

        const historyLink = document.createElement('a');
        historyLink.href = photoUrl;
        historyLink.textContent = 'View Photo';

        historyItem.appendChild(historyLink);
        historyList.appendChild(historyItem);
    }
}

function renderHistory() {
    // Отображаем историю просмотра при загрузке страницы
    for (const photoUrl of viewedPhotos) {
        const historyItem = document.createElement('li');
        historyItem.classList.add('history-item');
        historyItem.textContent = 'Viewed photo: ';

        const historyLink = document.createElement('a');
        historyLink.href = photoUrl;
        historyLink.textContent = 'View Photo';

        historyItem.appendChild(historyLink);
        historyList.appendChild(historyItem);
    }
}

function clearHistory() {
    // Очищаем массив просмотренных фото
    viewedPhotos = [];

    // Очищаем историю в localStorage
    localStorage.removeItem('viewedPhotos');

    // Очищаем отображение на странице
    historyList.innerHTML = 'History cleared';
}

// Отображаем историю просмотра при загрузке страницы
renderHistory();

getRandomPhoto();
