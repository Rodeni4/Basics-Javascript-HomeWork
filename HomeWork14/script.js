// Данные о занятиях (замените данными из JSON)
const scheduleData = [
    { name: "Йога", time: "10:00", maxParticipants: 15, currentParticipants: 8 },
    { name: "Фитнес", time: "12:00", maxParticipants: 20, currentParticipants: 18 },
    // Добавьте другие занятия...
];

// Функция для отображения занятий
function displaySchedule() {
    const scheduleContainer = document.getElementById('schedule');
    scheduleContainer.innerHTML = ''; // Очищаем контейнер перед обновлением

    scheduleData.forEach((classInfo) => {
        // Создаем элемент для каждого занятия
        const classElement = document.createElement('div');
        classElement.className = 'class';

        // Элементы для отображения информации о занятии
        const nameElement = document.createElement('p');
        nameElement.innerText = `Название: ${classInfo.name}`;

        const timeElement = document.createElement('p');
        timeElement.innerText = `Время: ${classInfo.time}`;

        const maxParticipantsElement = document.createElement('p');
        maxParticipantsElement.innerText = `Макс. участников: ${classInfo.maxParticipants}`;

        const currentParticipantsElement = document.createElement('p');
        currentParticipantsElement.innerText = `Записано: ${classInfo.currentParticipants}`;

        // Кнопка для записи на занятие
        const buttonElement = document.createElement('button');
        buttonElement.className = 'button';
        buttonElement.innerText = 'Записаться';
        buttonElement.disabled = classInfo.currentParticipants >= classInfo.maxParticipants;
        buttonElement.onclick = () => enroll(classInfo);

        // Добавляем элементы в контейнер
        classElement.appendChild(nameElement);
        classElement.appendChild(timeElement);
        classElement.appendChild(maxParticipantsElement);
        classElement.appendChild(currentParticipantsElement);
        classElement.appendChild(buttonElement);

        scheduleContainer.appendChild(classElement);
    });
}

// Функция для записи на занятие
function enroll(classInfo) {
    if (classInfo.currentParticipants < classInfo.maxParticipants) {
        // Увеличиваем количество записанных участников
        classInfo.currentParticipants++;
        displaySchedule(); // Обновляем отображение после успешной записи
    }
}

// Отображаем расписание при загрузке страницы
displaySchedule();