// let bg = document.getElementById("bg");
// let moon = document.getElementById("moon");
// let mountain = document.getElementById("mountain");
// let road = document.getElementById("road");
// let text = document.getElementById("text");

// window.addEventListener("scroll", () => {
//     let value = window.scrollY;
//     bg.style.top = value * 0.5 + 'px';
//     moon.style.left = -value * 0.5 + 'px';
//     mountain.style.top = -value * 0.15 + 'px';
//     road.style.top = value * 0.15 + 'px';
//     text.style.top = value * 1 + 'px';
// })

let snowman = document.querySelector("#snowmanAnimation");
let yellowLight = document.querySelector("#yellow-light");
let redLight = document.querySelector("#red-light");
let greenLight = document.querySelector("#green-light");
let yellowLightCone = document.querySelector("#yellow-light-cone");
let redLightCone = document.querySelector("#red-light-cone");
let greenLightCone = document.querySelector("#green-light-cone");
let ball = document.querySelector("#ball");
let scene = document.querySelector("#scene")
let light = [yellowLight, redLight, greenLight]
let lightCone = [yellowLightCone, redLightCone, greenLightCone]

ball.addEventListener("mouseenter", () => {
    ball.setAttribute("dynamic-body", "linearDamping", "0.45")

})
// ball.addEventListener("click", () => {
//     ball.removeAttribute("dynamic-body")
// })

setTimeout(() => {
    yellowLight.setAttribute("visible", true)
    yellowLightCone.setAttribute("visible", true)
}, 4000)

setTimeout(() => {
    greenLight.setAttribute("visible", true)
    greenLightCone.setAttribute("visible", true)
}, 7000)

// setInterval(() => {
//     let randomNumber = Math.floor(Math.random() * 3)
//     light[randomNumber].setAttribute("visible", true)
//     lightCone[randomNumber].setAttribute("visible", true)
//     setTimeout(() => {
//         light[randomNumber].setAttribute("visible", false)
//         lightCone[randomNumber].setAttribute("visible", false)
//     }, 3000)
// }, 6000)