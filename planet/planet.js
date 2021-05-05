var product = document.querySelector('#product');
var el = document.querySelector('a-sphere');

document.querySelector("button:nth-child(1)").addEventListener("click", () => {
    el.emit("rotation-pause")
    document.querySelector("#animation1").emit("animation1")
    setTimeout(() => {
        document.querySelector('#product').object3D.visible = true;
        document.querySelector('#location-germany').object3D.visible = true;
        document.querySelector('#text-germany').object3D.visible = true;
        el.setObject3D('light', new THREE.PointLight(0xFFFFFF, 1, 10));
        el.object3D.scale.set(1.1, 1.1, 1.1);
    }, 1000)
});

document.querySelector("button:nth-child(2)").addEventListener("click", () => {
    el.emit("rotation-pause")
    document.querySelector("#animation2").emit("animation2")
    setTimeout(() => {
        document.querySelector('#product').object3D.visible = true;
        document.querySelector('#location-Britain').object3D.visible = true;
        document.querySelector('#text-Britain').object3D.visible = true;
        el.setObject3D('light', new THREE.PointLight(0xFFFFFF, 1, 1000));
        el.object3D.scale.set(1.1, 1.1, 1.1);
    }, 1000)
});

document.querySelector("button:nth-child(3)").addEventListener("click", () => {
    el.emit("rotation-pause")
    document.querySelector("#animation3").emit("animation3")
    setTimeout(() => {
        document.querySelector('#product').object3D.visible = true;
        document.querySelector('#location-Spain').object3D.visible = true;
        document.querySelector('#text-Spain').object3D.visible = true;
        el.setObject3D('light', new THREE.PointLight(0xFFFFFF, 1, 1000));
        el.object3D.scale.set(1.1, 1.1, 1.1);
    }, 1000)
});

document.querySelector("button:nth-child(4)").addEventListener("click", () => {
    el.emit("rotation-pause")
    document.querySelector("#animation4").emit("animation4")
    setTimeout(() => {
        document.querySelector('#product').object3D.visible = true;
        document.querySelector('#location-Finland').object3D.visible = true;
        document.querySelector('#text-Finland').object3D.visible = true;
        el.setObject3D('light', new THREE.PointLight(0xFFFFFF, 1, 1000));
        el.object3D.scale.set(1.1, 1.1, 1.1);
    }, 1500)
})

document.getElementById("product").addEventListener('click', function (evt) {
    el.emit("rotation-resume");
    document.querySelector('#product').object3D.visible = false;
    var indicators = document.getElementsByClassName('location-indicator');
    for (var i = 0; i < 4; i++) {
        indicators[i].object3D.visible = false;
    }
    var texts = document.getElementsByClassName('text');
    for (var i = 0; i < 4; i++) {
        texts[i].object3D.visible = false;
    }
    el.setObject3D('light', new THREE.PointLight(0));
    el.object3D.scale.set(1, 1, 1);
})