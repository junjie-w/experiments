let room = document.getElementById("roomAnimation")
let microwave = document.getElementById("microwaveAnimation")
let vacation = document.getElementById("vacationAnimation")
let ocean = document.getElementById("ocean")
let instruction = document.getElementById("instruction")
let light = document.querySelectorAll(".light")
let castLight = document.querySelectorAll(".castLight")
let muteButton = document.getElementById("mute")
let scene = document.querySelector(".scene")
let softClock = document.querySelector(".softClock")
let clockAppear = false;

setTimeout(() => {
    ocean.components.sound.playSound()
}, 1000)

muteButton.addEventListener("click", () => {
    if (muteButton.src == "/images/on.png") {
        muteButton.src = "/images/off.svg"
    } else if (muteButton.src == "images/off.svg") {
        muteButton.src = "/images/on.png"
    }
    console.log(muteButton.src)
})

AFRAME.registerComponent('muter', {
    init: function () {
        let audio = []
        var audio1 = ocean;
        var audio2 = microwave;
        var audio3 = vacation;
        audio.push(audio1, audio2, audio3)
        // lets store volume levels for later use
        var volLevels = []
        audio.forEach(function (el, index) {
            volLevels[index] = el.getAttribute('sound').volume
        })

        var muted = false
        // when clicked - switch the volume
        muteButton.addEventListener('click', function () {
            audio.forEach(function (playAudio, index) {
                let volume = muted ? volLevels[index] : 0
                playAudio.setAttribute('sound', 'volume', volume)
                // for (i in muteButton.childNodes) {
                //     muted ? i.classList.add("muted") : i.classList.remove("muted")
                // }
                for (i = 1; i < 10; i++) {
                    !muted ? document.getElementById(`Line_${i}`).classList.add("muted") : document.getElementById(`Line_${i}`).classList.remove("muted");
                }
            });
            muted = !muted
        });
    }
});

room.addEventListener("click", (e) => {
    room.setAttribute("animation-mixer",
        "loop",
        "pingpong",
    )
})

AFRAME.registerComponent('modify-microwave', {
    init: function () {
        // Wait for model to load.
        this.el.addEventListener('model-loaded', () => {
            // Grab the mesh / scene.
            const obj = this.el.getObject3D('mesh');
            // Go over the submeshes and modify materials we want.
            obj.traverse(node => {
                microwave.addEventListener("click", () => {
                    if (node.name.indexOf('Cube') !== -1) {
                        node.material.color.set("#edeef7")
                        setTimeout(() => {
                            node.material.color.set('#fff');
                        }, 6000)
                    }
                })
                // console.log(node)
            });
            // console.log(obj)
        });
    }
});

microwave.addEventListener("click", (e) => {
    // room.removeAttribute("animation")
    e.stopPropagation();
    room.emit("animation-pause")

    microwave.components.sound.playSound();
    setTimeout(() => {
        vacation.components.sound.playSound();
    }, 1750)

    setTimeout(() => {
        microwave.components.sound.playSound();
    }, 5000)

    document.querySelector("#microwaveAnimation").setObject3D('light', new THREE.PointLight(0xFFFFFF, 1.2, 1000));
    microwave.setAttribute("animation-mixer",
        "loop",
        "once"
    )

    setTimeout(() => {
        document.querySelector("#cameraWrapper").object3D.position.set(0, -1, -2.55);
        document.querySelector("#cameraWrapper").setAttribute("orbit-controls", {
            target: "-0.06 0.4 0",
            initialPosition: "-0.06 0.4 3.45"
        });
        room.object3D.position = "0 0 0"
        document.querySelector("#roomAnimation").setAttribute("position", "0 0 0");
    }, 1000)

    setTimeout(() => {
        document.querySelector('#recipe').object3D.visible = true;
    }, 1750)

    setTimeout(() => {
        microwave.removeAttribute("animation-mixer")
    }, 5500)
})

var touchtime = 0;
$(document).on('click', function () {
    if (touchtime == 0) {
        touchtime = new Date().getTime();
    } else {
        if (((new Date().getTime()) - touchtime) < 800) {
            // alert("double clicked");
            touchtime = 0;

            document.querySelector("#cameraWrapper").object3D.position.set(0, 0, 0);
            room.emit("animation-resume")

            document.querySelector("#cameraWrapper").setAttribute("orbit-controls", {
                target: "0 1.35 0",
                initialPosition: "0 1.35 6"
            });
            document.querySelector('#recipe').object3D.visible = false;
        } else {
            touchtime = 0;
        }
    }
});

// document.onclick = e => {
//     if (e.detail === 2) {
//         document.querySelector("#cameraWrapper").object3D.position.set(0, 0, 0);
//         room.emit("animation-resume")

//         document.querySelector("#cameraWrapper").setAttribute("orbit-controls", {
//             target: "0 1.35 0",
//             initialPosition: "0 1.35 6"
//         });
//         document.querySelector('#recipe').object3D.visible = false;
//     }
// }

AFRAME.registerComponent('modify-vacation', {
    init: function () {
        // Wait for model to load.
        this.el.addEventListener('model-loaded', () => {
            // Grab the mesh / scene.
            const obj = this.el.getObject3D('mesh');
            // Go over the submeshes and modify materials we want.
            obj.traverse(node => {
                microwave.addEventListener("click", () => {
                    if (node.name.indexOf('Sphere007') !== -1) {
                        setTimeout(() => {
                            node.material.color.set('#9fd8df');
                        }, 1650)
                        setTimeout(() => {
                            node.material.color.set('#ee9595');
                        }, 2650)
                        setTimeout(() => {
                            node.material.color.set('#fdffbc');
                        }, 3650)
                        setTimeout(() => {
                            node.material.color.set('#ee9595');
                        }, 4650)
                    }
                })
                document.addEventListener("click", (e) => {
                    if (e.detail === 2) {
                        if (node.name.indexOf('Sphere007_0') !== -1) {
                            node.material.color.set('#fff');
                        }
                    }
                })
                // console.log(node)
            });
            // console.log(obj)
        });
    }
});

for (i = 0; i < 3; i++) {
    light[i].addEventListener("mouseenter", () => {
        for (i = 0; i < 3; i++) {
            const lightColor = ["#00adb5", "#f7ea00", "#ffb4b4", "#f3bda1"]
            let randomColor = lightColor[Math.floor(Math.random() * 4)]
            // light[i].setAttribute("color", lightOff ? randomColor : "#ffffff");
            light[i].setAttribute("color", randomColor);
            castLight[i].setAttribute("visible", true)
            castLight[i].setAttribute("light", "color", randomColor)
            setInterval(() => {
                for (i = 0; i < 3; i++) {
                    let randomColor = lightColor[Math.floor(Math.random() * 4)]
                    light[i].setAttribute("color", randomColor);
                    castLight[i].setAttribute("light", "color", randomColor)
                }
            }, 850)
        }
    })

    light[i].addEventListener("click", () => {
        for (i = 0; i < 3; i++) {
            light[i].emit("light-start");
        }

        setTimeout(() => {
            instruction.emit("instruction-start")
        }, 1200)

        setTimeout(() => {
            softClock.classList.add("clockAppear")
            clockAppear = true;
        }, 2000)

        // }, 3000)
    })

}

// add loading page, the silk - but you can make it like a light or water, I dont know, or maybe a boat
// set light to yellow - ADD PHYSICS HERE!!! JUMPING AND OTHER ANIMATIONS - GLOW effects - Lights jumping
// user can change sky and sea lights!!!!!!!! gui
// BOAT ROTATE A FULL 360 DEGREE 
// lights fell from the sky - change to RAIN! - mouse can control
// transition page to a big whole page, make it a model, transition 
// other 3D products models 
// physics - library 
// paralax scroll - moon light
// black and white?
// adding human model and interact with it 
// LIGHTS ON AND OFF 
// 360 video 

if (window.matchMedia("(orientation: portrait)").matches) {
    document.querySelector("#instruction").setAttribute("position", "0 3.05 2.95");
    const texts = document.querySelectorAll('.text');
    for (let i = 0; i < texts.length; i++) {
        texts[i].setAttribute("position", {
            x: -1.45
        })
    }
}

// Three.js

const scene_clock = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, softClock.clientWidth / softClock.clientHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});


renderer.setSize(softClock.clientWidth, softClock.clientHeight);
softClock.appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();

const geometry = new THREE.CircleGeometry(0.45, 100, 50, 30);
const material = new THREE.MeshBasicMaterial({
    color: "#fff",
    // wireframe: true,
    map: loader.load("island/images/clock.jpg")
});
const cloth = new THREE.Mesh(geometry, material);
cloth.position.set(-2.35, 5, 0);
// cloth.position.set(-2.35, 6, 0);
// if (clockAppear) {
scene_clock.add(cloth)
// };

var controls = new THREE.OrbitControls(camera, renderer.cloth);
controls.update();

camera.position.z = 5;
// document.addEventListener("mousemove", (e) => {
//     console.log(".ö.ö.ö.")
//     let mouseX = 0;
//     let mouseY = 0;
//     let windowHalfX = window.innerHeight / 2;
//     let windowHalfY = window.innerWidth / 2;
//     mouseX = e.clientX - windowHalfX;
//     mouseY = e.clientY - windowHalfY;
//     camera.position.z += (mouseX - camera.position.x) * 0.05;
//     camera.position.z += (-mouseY - camera.position.y) * 0.05;
// })

const clock = new THREE.Clock();

function animate() {
    if (cloth.position.y > 1) {
        cloth.position.y -= 0.001;
    }

    const t = clock.getElapsedTime()

    cloth.geometry.vertices.map(v => {
        const waveX1 = 0.15 * Math.sin(v.x * 2 + t)
        const waveX2 = 0.25 * Math.sin(v.x * 3 + t * 1)
        const waveY1 = 0.25 * Math.sin(v.y * 3 + t * 0.5)
        const waveZ1 = 0.1 * Math.sin(v.z * 3 + t * 0.5)
        v.z = waveX1 + waveX2 + waveY1 + waveZ1

        // window.onmousemove = (e) => {
        //     console.log("mouse location:", e.clientX, e.clientY)
        //     v.x = e.clientX + e.clientY

        // }
    })

    cloth.geometry.verticesNeedUpdate = true


    requestAnimationFrame(animate);
    renderer.render(scene_clock, camera);

    // function onDocumentMouseMove(e) {
    //   
    // }

    // function onDocumentTouchStart(e) {

    //     if (e.touches.length === 1) {

    //         e.preventDefault();
    //         mouseX = e.touches[0].pageX - windowHalfX;
    //         mouseY = e.touches[0].pageY - windowHalfY;
    //     }
    // }

    // function onDocumentTouchMove(e) {

    //     if (e.touches.length === 1) {

    //         e.preventDefault();
    //         mouseX = e.touches[0].pageX - windowHalfX;
    //         mouseY = e.touches[0].pageY - windowHalfY;
    //     }
    // }
}
animate();

window.addEventListener("resize", () => {
    camera.aspect = softClock.clientWidth / softClock.clientHeight;
    camera.updateProjectionMatrix()
    renderer.setSize(softClock.clientWidth, softClock.clientHeight);
})