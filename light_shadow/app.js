let player = document.querySelector("#player")
let theball = document.querySelector("#ball")

player.addEventListener("collide", e => {
    console.log(e.detail.target.el.id + " collided with " + e.detail.body.el.id);

    e.detail.target.el; // Original entity (subject of event listener)
    e.detail.body.el; // Entity that was collided with
    e.detail.contact; // Stats about the collision (CANNON.ContactEquation).
    e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).
});