
document.getElementById('apiButton').addEventListener('click', () => {
    fetch('/api/hello')
        .then(response => response.json())
        .then(data => {
            document.getElementById('apiResponse').innerText = data.message;
            document.getElementById('apiResponse').classList.add("red");
        });
});
document.getElementById('apiButtonName').addEventListener('click', () => {
    fetch('/api/helloName')
        .then(response => response.json())
        .then(data => {
            document.getElementById('apiResponseName').innerText = data.message;
            document.getElementById('apiResponseName').classList.add("gelatine");
        });
});
