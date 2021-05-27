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
let trafficLights = document.querySelector("#traffic-lights")

ball.addEventListener("mouseenter", () => {
    ball.setAttribute("dynamic-body", "linearDamping", "0.45")
    setTimeout(() => {
        ball.removeAttribute("dynamic-body")
    }, 9000)
})
snowman.addEventListener("mouseenter", () => {
    ball.setAttribute("dynamic-body", "linearDamping", "0.45")
    setTimeout(() => {
        ball.removeAttribute("dynamic-body")
    }, 9000)
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

if (window.matchMedia("(orientation: portrait)").matches) {
    document.querySelector("#cameraWrapper").setAttribute('position', {
        x: 0,
        y: 0,
        z: 3.75
    });
}

// trafficLights.addEventListener("mouseenter", () => {
//     setTimeout(() => {
//         yellowLight.setAttribute("visible", true)
//         yellowLightCone.setAttribute("visible", true)
//     }, 1000)

//     setTimeout(() => {
//         greenLight.setAttribute("visible", true)
//         greenLightCone.setAttribute("visible", true)
//     }, 2000)
// })

// setInterval(() => {
//     let randomNumber = Math.floor(Math.random() * 3)
//     light[randomNumber].setAttribute("visible", true)
//     lightCone[randomNumber].setAttribute("visible", true)
//     setTimeout(() => {
//         light[randomNumber].setAttribute("visible", false)
//         lightCone[randomNumber].setAttribute("visible", false)
//     }, 3000)
// }, 6000)