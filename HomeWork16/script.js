const accessKey = 'FNysiBzxrPCSGX8QGz6SpeJojazOt4maiErOQZJSnYs';
const likeButton = document.getElementById('likeButton');

likeButton.addEventListener('click', likePhoto);

async function getRandomPhoto() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);

        const data = await response.json();
        const photoElement = document.getElementById('photo');
        const photographerElement = document.getElementById('photographer');

        photoElement.src = data.urls.regular;
        photographerElement.textContent = `Photographer: ${data.user.name}`;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function likePhoto() {
    const likeCountElement = document.getElementById('likeCount');
    const currentLikes = parseInt(likeCountElement.textContent.replace('Likes: ', ''), 10);
    const newLikes = currentLikes + 1;
    likeCountElement.textContent = `Likes: ${newLikes}`;
}

getRandomPhoto();
