const city = 'Lviv';
const apiKey = '5d066958a60d315387d9492393935c19';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

// Виконання AJAX-запиту
$.ajax({
    url: apiUrl,
    type: 'GET',
    dataType: 'json',
    success: function (data) {
        // Отримання даних та виведення їх на сторінку
        $('#temp').text(data.main.temp);
        $('#pressure').text(data.main.pressure);
        $('#description').text(data.weather[0].description);
        $('#humidity').text(data.main.humidity);
        $('#speed').text(data.wind.speed);
        $('#deg').text(data.wind.deg);
        $('#weatherIcon').attr('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    },
    error: function (error) {
        console.error('Помилка запиту:', error);
        alert('Помилка отримання погоди');
    }
});