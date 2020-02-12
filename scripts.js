var root = document.documentElement;
var button = document.querySelector('button');
button.addEventListener('click', handleClick);
function handleClick() {
    var color = '#000000'.replace(/0/g, function () {
        return Math.floor(Math.random() * 16).toString(16);
    });
    root.style.setProperty('--bg-color', color);
}