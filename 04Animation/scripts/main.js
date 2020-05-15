

// // changing individual properties with code and using setInterval
var rotationSpeedx = 1;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
myOtherBox.object3D.rotation.x += rotationSpeedx;

console.log(myOtherBox.object3D.rotation.x);
}

//setInterval(spin, 16); //equivalent to 60 fps
