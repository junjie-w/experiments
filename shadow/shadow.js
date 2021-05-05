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

// setInterval(() => {
//     let randomNumber = Math.floor(Math.random() * 3)
//     light[randomNumber].setAttribute("visible", true)
//     lightCone[randomNumber].setAttribute("visible", true)
//     setTimeout(() => {
//         light[randomNumber].setAttribute("visible", false)
//         lightCone[randomNumber].setAttribute("visible", false)
//     }, 3000)
// }, 6000)


// let sceneStorm, sceneLight, portalLight, cam, renderer, clock, portalParticles = [],
//     smokeParticles = [];

// initScene = () => {
//     sceneStorm = new THREE.Scene()

//     sceneLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     sceneLight.position.set(0, 0, 1);
//     sceneStorm.add(sceneLight);

//     portalLight = new THREE.PointLight(0x062d89, 30, 600, 1.7);
//     portalLight.position.set(0, 0, 250);
//     sceneStorm.add(portalLight);

//     cam = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000)
//     cam.position.z = 1000;

//     sceneStorm.add(cam);

//     renderer = new THREE.WebGLRenderer();
//     renderer.setClearColor(0x000000, 1);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     // const sizes = {
//     //     width: window.innerWidth,
//     //     height: window.innerHeight
//     // }

//     // window.addEventListener('resize', () => {
//     //     // Update sizes
//     //     sizes.width = window.innerWidth
//     //     sizes.height = window.innerHeight

//     //     // Update camera
//     //     cam.aspect = sizes.width / sizes.height
//     //     cam.updateProjectionMatrix()

//     //     // Update renderer
//     //     renderer.setSize(sizes.width, sizes.height)
//     //     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//     // })
//     document.body.appendChild(renderer.domElement);

//     particleSetup();
// }

// particleSetup = () => {
//     let loader = new THREE.TextureLoader();
//     loader.load("images/smoke.png", (texture) => {
//         portalGeo = new THREE.PlaneBufferGeometry(350, 350);
//         portalMaterial = new THREE.MeshStandardMaterial({
//             map: texture,
//             transparent: true
//         });
//         smokeGeo = new THREE.PlaneBufferGeometry(1000, 1000);
//         smokeMaterial = new THREE.MeshStandardMaterial({
//             map: texture,
//             transparent: true
//         });

//         for (let p = 880; p > 250; p--) {
//             let particle = new THREE.Mesh(portalGeo, portalMaterial);
//             particle.position.set(
//                 0.5 * p * Math.cos((4 * p * Math.PI) / 180),
//                 0.5 * p * Math.sin((4 * p * Math.PI) / 180),
//                 0.1 * p
//             );
//             particle.rotation.z = Math.random() * 360;


//             var mouse = new THREE.Vector2(0.8, 0.5);

//             function onMouseMove(e) {
//                 mouse.y = e.clientY / window.innerHeight;
//                 mouse.x = e.clientX / window.innerWidth;

//                 TweenMax.to(particle.rotation, 2, {
//                     z: (mouse.y * 1.2 - mouse.x * 2),
//                     ease: Power1.easeOut
//                 });
//             }

//             portalParticles.push(particle);
//             sceneStorm.add(particle);



//             // particle.addEventListener("mouseenter", () => {

//             // })

//         }

//         // window.onmousemove = (e) => {
//         //     console.log("mouse location:", e.clientX, e.clientY)
//         //     // v.x = e.clientX + e.clientY

//         // }


//         // cloth.geometry.vertices.map(v => {
//         //     const waveX1 = 0.15 * Math.sin(v.x * 2 + t)
//         //     const waveX2 = 0.25 * Math.sin(v.x * 3 + t * 1)
//         //     const waveY1 = 0.25 * Math.sin(v.y * 3 + t * 0.5)
//         //     const waveZ1 = 0.1 * Math.sin(v.z * 3 + t * 0.5)
//         //     v.z = waveX1 + waveX2 + waveY1 + waveZ1

//         //     window.onmousemove = (e) => {
//         //         console.log("mouse location:", e.clientX, e.clientY)
//         //         v.x = e.clientX + e.clientY

//         //     }
//         // })

//         // cloth.geometry.verticesNeedUpdate = true

//         for (let p = 0; p < 40; p++) {
//             let particle = new THREE.Mesh(smokeGeo, smokeMaterial);
//             particle.position.set(
//                 Math.random() * 1000 - 500,
//                 Math.random() * 400 - 200,
//                 25
//             );
//             particle.rotation.z = Math.random() * 360;
//             particle.material.opacity = 0.4;

//             window.addEventListener("mousemove", onMouseMove);

//             portalParticles.push(particle);
//             sceneStorm.add(particle);
//         }

//         clock = new THREE.Clock();
//         animate();
//     })
// }

// animate = () => {
//     let delta = clock.getDelta();
//     portalParticles.forEach(p => {
//         p.rotation.z -= delta * 1.5;
//     });
//     smokeParticles.forEach(p => {
//         p.rotation.z -= delta * 0.2;
//     });
//     if (Math.random() > 0.9) {
//         portalLight.power = 350 + Math.random() * 500
//     }



//     window.addEventListener('resize', onWindowResize, false);

//     function onWindowResize() {

//         cam.aspect = window.innerWidth / window.innerHeight;
//         cam.updateProjectionMatrix();

//         renderer.setSize(window.innerWidth, window.innerHeight);

//     }

//     renderer.render(scene, cam);
//     requestAnimationFrame(animate);
// }

// initScene();