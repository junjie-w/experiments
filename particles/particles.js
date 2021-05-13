// Texture loader
const loader = new THREE.TextureLoader();
const cross = loader.load("particles/images/star.svg")

// Debug
// const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Geometry: Torus
const geometry = new THREE.TorusGeometry(.7, .2, 16, 100);
// Materials: Torus
const material = new THREE.PointsMaterial({
    size: 0.005,
})
// Mesh: Torus
const sphere = new THREE.Points(geometry, material)

// Geometry: Particles
const particlesGeometry = new THREE.BufferGeometry;
const particlesCnt = 5000;

// To provide x y z coordinates for every single particle - that's why we times it by 3
const posArray = new Float32Array(particlesCnt * 3);
// Disperse the particles so it's spread over the page
for (let i = 0; i < particlesCnt * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 5
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

// material.color = new THREE.Color(0xff0000)
// Materials: Particles
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.007,
    map: cross,
    transparent: true,
    // blending: THREE.AdditiveBlending
})
// Mesh: Particles
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)

scene.add(sphere, particlesMesh)

// Lights
const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(new THREE.Color("#21282a"), 1)

// update when resize
window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Controls
const controls = new THREE.OrbitControls(camera, renderer.particlesMesh)
// controls.enableDamping = true
controls.update();

/**
 * Animate
 */

// Mouse
const animateParticles = (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
}
document.addEventListener("mousemove", animateParticles)
let mouseX = 0;
let mouseY = 0;

const clock = new THREE.Clock()

const tick = () => {

    // const elapsedTime = clock.getElapsedTime()
    const elapsedTime = clock.getDelta()

    // Update objects
    sphere.rotation.y += .5 * elapsedTime
    particlesMesh.rotation.y += -0.1 * elapsedTime

    if (mouseX > 0) {
        particlesMesh.rotation.x += -mouseY * (elapsedTime * 0.00008)
        particlesMesh.rotation.y += mouseX * (elapsedTime * 0.00008)
    }

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick();

// GSAP animation
const content = CSSRulePlugin.getRule('.content:before')
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const tl = gsap.timeline();

tl.from(content, {
    delay: .5,
    duration: 4,
    cssRule: {
        scaleX: 0
    }
})

tl.to(h1, {
    duration: 2,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    y: '30px'
}, "-=3")

tl.to(p, {
    duration: 4,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    y: '30px'
}, "-=2")