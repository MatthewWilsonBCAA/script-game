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
class Circle {
    constructor (x, y, r) {
        this.x = x;
        this.y = y;
        this.radius = r;
        this.drawn = false;
    }
    draw_obj () {
        const sprite = document.createElement("img");
        sprite.src = "imgTwo.png";
        sprite.style = `position:absolute; left: ${this.x}px; top: ${this.y}px;`;
        sprite.id = "b";
        this.w = sprite.width;
        this.h = sprite.height;
        document.body.appendChild(sprite);
        this.drawn = true;
    }
}

const temp_circle = new Circle(500, 200, 7)

function ManipulatePosition() {
    if (temp_circle.drawn == false) {
        temp_circle.draw_obj();
    }
    if (userXInput < 0) {
        x_position -= movementSpeed;
        userXInput += 2;
    }
    if (userXInput > 0) {
        x_position += movementSpeed;
        userXInput -= 2;
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
    let leftX = temp_circle.x - temp_circle.w;
    let rightX = temp_circle.x + temp_circle.w;
    let topY = temp_circle.y - temp_circle.h;
    let bottomY = temp_circle.y + temp_circle.h;
    if (x_position > leftX && x_position < temp_circle.x && y_position > topY && y_position < bottomY) {
        x_position -= movementSpeed + 2;
    }
    else if (x_position < rightX && x_position > temp_circle.x && y_position > topY && y_position < bottomY) {
        x_position += movementSpeed + 2;
    }
    else if (x_position < rightX && x_position > leftX && y_position > topY && y_position < temp_circle.y) {
        y_position -= temp_circle.radius;
    }
    else if (x_position < rightX && x_position > leftX && y_position < bottomY && y_position > temp_circle.y) {
        y_position -= temp_circle.radius;
    }
    document.querySelector('#player').style.left = `${x_position}px`;
    document.querySelector('#player').style.top = `${y_position}px`;
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
        userXInput -= movementSpeed;
    }
    if (keys.kD == true && x_position < screenWidth) {
        userXInput += movementSpeed;
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
