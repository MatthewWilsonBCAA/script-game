let userXInput = 0;
let userYInput = 0;
let x_position = 1;
let y_position = 1;
window.addEventListener('keydown', function (e) {

    document.querySelector('p').innerHTML = `You pressed ${e.key}`;
    if (e.key == 'a' && x_position > 0) {
        userXInput -= 3;
    }
    else if (e.key == 'd' && x_position < 1000) {
        userXInput += 3;
    }
    if (e.key == 'w' && y_position > 0) {
        userYInput -= 3;
    }
    else if (e.key == 's' && y_position < 1000) {
        userYInput += 3;
    }
    console.log(window.innerWidth)
    document.querySelector('img').style.left = `${x_position}px`;
    document.querySelector('img').style.top = `${y_position}px`;
  }, false);
function ManipulatePosition() {
    if (userXInput < 0) {
        x_position -= 1
        userXInput += 1
    }
    else if (userXInput > 0) {
        x_position += 1
        userXInput -= 1
    }
    if (userYInput < 0) {
        y_position -= 1
        userYInput += 1
    }
    else if (userYInput > 0) {
        y_position += 1
        userYInput -= 1
    }
}
setInterval(ManipulatePosition, 10)