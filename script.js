let userXInput = 0;
let userYInput = -1;
let x_position = 50;
let y_position = 300;
const movementSpeed = 4;
const gravity = 5;
const jumpSpeed = 5;
const screenWidth = window.innerWidth-200;
let keys = {
    kA: false,
    kS: false,
    kD: false,
    kW: false,
}
function ManipulatePosition() {
    if (userXInput < 0) {
        x_position -= movementSpeed;
        userXInput += movementSpeed;
    }
    else if (userXInput > 0) {
        x_position += movementSpeed;
        userXInput -= movementSpeed;
    }
    if (userYInput > 0) {
        y_position -= 5
        userYInput -= 1
    }
    if (userYInput == 0 && y_position != 300) {
        y_position += 5
    }
    if (userYInput == 0 && y_position >= 300) {
        y_position = 300
        userYInput = -1
    }
    document.querySelector('img').style.left = `${x_position}px`;
    document.querySelector('img').style.top = `${y_position}px`;
}
setInterval(ManipulatePosition, 15)
window.addEventListener('keydown', function (e) {
    if (e.key == 'a') {
        keys.kA = true;
    }
    if (e.key == 'w') {
        keys.kW = true;
    }
    if (e.key == 'd') {
        keys.kD = true;
    }
    document.querySelector('p').innerHTML = `You pressed ${e.key}`;
    if (keys.kA == true && x_position > 0) {
        userXInput -= movementSpeed*2;
    }
    else if (keys.kD == true && x_position < screenWidth) {
        userXInput += movementSpeed*2;
    }
    if (keys.kW == true && userYInput == -1) {
        userYInput = 50;
    }
  }, false);
window.addEventListener('keyup', function (e) {
    if (e.key == 'a') {
        keys.kA = false;
    }
    if (e.key == 'w') {
        keys.kW = false;
    }
    if (e.key == 'd') {
        keys.kD = false;
    }
});
