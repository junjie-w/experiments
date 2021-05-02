const section = document.querySelector("section.waving")

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, section.clientWidth / section.clientHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});
renderer.setSize(section.clientWidth, section.clientHeight);
section.appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();

const geometry1 = new THREE.PlaneGeometry(2, 1.7, 50, 30);
const material1 = new THREE.MeshBasicMaterial({
    color: "#000",
    wireframe: true,
    // map: loader.load("images/silk.jpg")
});
const cloth = new THREE.Mesh(geometry1, material1);
cloth.position.set(-1, 5, 0)
// scene.add(cloth);

const geometry2 = new THREE.PlaneGeometry(2, 1.7, 50, 30);
const material2 = new THREE.MeshBasicMaterial({
    color: "#000",
    // wireframe: true,
    // map: loader.load("images/silk.jpg")
});
const timeClock = new THREE.Mesh(geometry2, material2);
scene.add(timeClock);

timeClock.position.set(1, -5, 0)
// cloth.rotation.set(-0.1, 0, 0)

camera.position.z = 5;

const clock = new THREE.Clock();

function animate() {
    const t = clock.getElapsedTime()

    cloth.rotation.x += 0.001;
    cloth.rotation.y += 0.001;
    cloth.position.y -= 0.005;

    cloth.geometry.vertices.map(v => {

        const waveX1 = 0.15 * Math.sin(v.x * 2 + t)
        const waveX2 = 0.25 * Math.sin(v.x * 3 + t * 1)
        const waveY1 = 0.25 * Math.sin(v.y * 3 + t * 0.5)
        const waveZ1 = 0.1 * Math.sin(v.z * 3 + t * 0.5)

        v.z = waveX1 + waveX2 + waveY1 + waveZ1


    })

    cloth.geometry.verticesNeedUpdate = true

    timeClock.rotation.x += 0.001;
    timeClock.rotation.y += 0.001;
    timeClock.position.y += 0.005;

    timeClock.geometry.vertices.map(v => {

        const waveX1 = 0.15 * Math.sin(v.x * 2 + t)
        const waveX2 = 0.25 * Math.sin(v.x * 3 + t * 1)
        const waveY1 = 0.25 * Math.sin(v.y * 3 + t * 0.5)
        const waveZ1 = 0.1 * Math.sin(v.z * 3 + t * 0.5)

        v.z = waveX1 + waveX2 + waveY1 + waveZ1

    })

    timeClock.geometry.verticesNeedUpdate = true

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
    camera.aspect = section.clientWidth / section.clientHeight;
    camera.updateProjectionMatrix()
    renderer.setSize(section.clientWidth, section.clientHeight);
})