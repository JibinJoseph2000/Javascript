const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getColor = function (selectedElement,selectedElement2) {
     console.log(window.getComputedStyle(selectedElement).backgroundColor);
    console.log(window.getComputedStyle(selectedElement2).backgroundColor)
};
getColor(pink,violet);