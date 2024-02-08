// Функция для загрузки содержимого из файла JSON
function loadContent() {
    fetch('../content/information.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('headerInfo').innerHTML = `<span style="${data.headerInfo.style}">${data.headerInfo.text}</span>`;
        document.getElementById('mainText').innerHTML = `<span style="${data.mainText.style}">${data.mainText.text}</span>`;
        document.getElementById('importantInfo').innerHTML = `<span style="${data.importantInfo.style}">${data.importantInfo.text}</span>`;
        document.getElementById('mainText2').innerHTML = `<span style="${data.mainText2.style}">${data.mainText2.text}</span>`;
    })
    .catch(error => console.error('Error loading content:', error));
}

// Загрузка содержимого при загрузке страницы
window.addEventListener('load', loadContent);
