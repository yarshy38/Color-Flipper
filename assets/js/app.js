const colors = ["brown", "cyan", "rgba(13,12,20)", "#000000", "yellow", "gray"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    const random = getRandomColor();
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
    console.log(random);
})

function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}