const canvas = document.getElementById('draw-wrapper');

canvas.width = window.innerWidth * 0.85;
canvas.height = window.innerHeight * 0.7;

// 색상
const colors = document.getElementsByClassName('box');

const colorsArray = ['빨간색', '주황색', '노란색', '연두색', '초록색', '하늘색', '파란색', '보라색', '자주색', '흰색', '연회색', '진회색'];

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', (e) => {
        const color = e.target.style.backgroundColor;

        ctx.strokeStyle = color;
        console.log('zmfkdmfkdsfsi', e.target.className)

        const snackbar = document.getElementById('snackbar');
        snackbar.innerText = colorsArray[i] + '으로 색깔이 바꼈습니다.';
        
        snackbar.className = 'box show';

        setTimeout(function() { 
            snackbar.className = snackbar.className.replace("box show", "box"); 
        }, 3000);
    });
}

const toggles = document.querySelectorAll('.toggle'); // NodeList(유사배열)
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
    toggleElements();
});

function toggleElements() {
    [].forEach.call(toggles, (toggle) => {
        toggle.classList.toggle('on');
    })
}




window.addEventListener('resize', () => {
    // console.log(window.innerWidth);
    canvas.width = window.innerWidth * 0.85;
    canvas.height = window.innerHeight * 0.7;
})

const ctx = canvas.getContext('2d');
ctx.lineWidth = 1; // 4
ctx.strokeStyle = '#09f';

canvas.addEventListener('mousedown', (mouseEvent) => {
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
});

const circle = document.getElementById('circle');
const square = document.getElementById('square');

circle.onclick = () => {
    ctx.lineCap = 'round';
};

square.onclick = () => {
    ctx.lineCap = 'butt';
};