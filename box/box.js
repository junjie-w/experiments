var cube = document.getElementById("cube");
// document.addEventListener("mousemove", e => {
//     var transform = `rotateX(${e.pageY}deg) rotateY(${e.pageX}deg)`;
//     cube.style.transform = transform;
// });

// var cube = document.getElementById("cube");
// let mousedown = false;
// cube.addEventListener("click", e => {
//     mousedown = true;
// })
// // if (mousedown) {

// cube.addEventListener("mousedown", function (e) {
//     mouseDownFunction(e);


// cube.addEventListener("mousemove", e => {
//     var transform = `rotateX(${e.pageY}deg) rotateY(${e.pageX}deg)`;
//     cube.style.transform = transform;
// })

// });

// cube.addEventListener("mousemove", e => {
//     var transform = `rotateX(${e.pageY}deg) rotateY(${e.pageX}deg)`;
//     cube.style.transform = transform;
// })


// cube.addEventListener("mouseup", function (e) {
//     cube.onmousemove = null
// });



// }


// // ----- inputs ----- //

// document.querySelector('.reset-button').onclick = function () {
//     illo.rotate.set(sceneStartRotation);
// };


document.querySelector(".handle").addEventListener("click", e => {
    $(".front").addClass("open")
    $(".front").removeClass("close")
})

document.querySelector(".closeHandle").addEventListener("click", e => {
    $(".front").addClass("close")
    $(".front").removeClass("open")
})

var move = false;
cube.addEventListener("dblclick", function (e) {
    move = !move
    console.log("clicked");
    console.log(move)
})
moveCube();


function moveCube() {

    // if (move) {
    //     console.log("now")
    // cube.onmousemove = e => {
    //     var transform = `rotateX(${e.pageY}deg) rotateY(${e.pageX}deg)`;
    //     cube.style.transform = transform;
    // }
    cube.onmousemove = function (e) {
        if (move) {
            var transform = `rotateX(${e.pageY}deg) rotateY(${e.pageX}deg)`;
            cube.style.transform = transform;
        } else {
            cube.style.transform = null;
        }
    }

    // } else {
    //     cube.onmousemove = null

    // }
}


// cube.addEventListener("mouseup", function (e) {
//     cube.onmousemove = null
// });

// cube.addEventListener("mousedown", function (e) {

//     cube.onmousemove = function (e) {
//         var transform = `rotateX(${e.pageY}deg) rotateY(${e.pageX}deg)`;
//         cube.style.transform = transform;
//         // cube.addEventListener("mousemove", e => {


//         // })
//     }
// });

document.querySelector(".indiaCurry").addEventListener("click", () => {
    // document.querySelector(".cube").style.perspective = "100px";
    // document.querySelector(".cube").style.transform = "rotate(0)";
    document.querySelector(".recipe").style.visibility = "visible";

})

document.querySelector(".closeRecipe").addEventListener("click", () => {
    // document.querySelector(".cube").style.perspective = "100px";
    // document.querySelector(".cube").style.transform = 0;
    document.querySelector(".recipe").style.visibility = "hidden";

})

dragElement(document.getElementById("recipe"));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0,
        pos5 = 0,
        pos6 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        pos5 = e.clientZ;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        pos5 = e.clientZ;
        pos6 = pos5 - e.clientZ;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}