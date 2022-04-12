let box = document.getElementById('cursor');
document.onmousemove = (event) => {
    cursor.style.left = event.clientX - (cursor.clientWidth/2) + 'px';
    cursor.style.top = event.clientY - (cursor.clientHeight/2) + 'px';
}

function random(number) {
    return Math.floor(Math.random() * number)
}

document.onclick = function () {
    bebas = "rgb("+ random(255) + "," + random(255) + "," + random(255) + ")";
    cursor.style.background = bebas
}