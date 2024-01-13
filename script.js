// task 1
const wrap = document.querySelector(".wrapper");

for (let i = 0; i < 100; i++) {
    let square = document.createElement("div");
    wrap.append(square);
    square.className = "square";
    let num = Math.floor(Math.random() * 101);
    square.innerText = num;
    if (num < 31) {
        square.style.background = `green`;
    } else if (num > 70) {
        square.style.backgroundColor = `red`;
    }
}

// task 2
const wrap2 = document.querySelector(".wrapper2");
let rectangle = document.createElement("div");
wrap2.append(rectangle);
rectangle.className = "rectangle";
function getRandom(max, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}
let rgb = `rgb(${getRandom(256)},${getRandom(256)},${getRandom(256)})`;
rectangle.style.backgroundColor = rgb;

function rgb2hex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
let rgbNumbers = rgb.match(/\d+/g);
let rgb2num = [+rgbNumbers[0],+rgbNumbers[1],+rgbNumbers[2]]
let hex = rgb2hex(rgb2num[0],rgb2num[1],rgb2num[2]);
rectangle.innerText = `hex: ${hex}\n rgb: ${rgb2num}`;

let sumRgb = rgb2num[0]+rgb2num[1]+rgb2num[2];

if (765 / 2 > sumRgb) {
    rectangle.style.color = "white";
} else {};