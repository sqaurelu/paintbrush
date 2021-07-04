const canvas = document.getElementById('draw-wrapper');

const ctx = canvas.getContext('2d');
ctx.lineWidth = 1; // 4

canvas.addEventListener('mousedown', (mouseEvent) => {
    console.log(mouseEvent);
    x = mouseEvent.offsetX;
    y = mouseEvent.offsetY;
    drag = true;
});

canvas.addEventListener('mousemove', (mouseEvent) => {;
    if (drag === false) {
        return ;
    } else {
        let curX = mouseEvent.offsetX;
        let curY = mouseEvent.offsetY;

        draw(curX, curY);
        x = curX;
        y = curY;
    }
});

canvas.addEventListener('mouseup', () => {
    drag = false;
});

canvas.addEventListener('mouseout', () => {
    drag = false;
});

let x = 0;
let y = 0;
let drag = false; // canvas 안으로 마우스가 들어왔는지 여부

function draw(curX, curY) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(curX, curY);
    ctx.stroke();
}

const eraser = document.getElementById('eraser');

eraser.onclick = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
}

const inputRange = document.getElementById('input-range');

inputRange.addEventListener('input', (event) => {
    // console.log(event.target.value);
    ctx.lineWidth = event.target.value;
})