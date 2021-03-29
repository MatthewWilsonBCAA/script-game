let userInput = 0;
let x_position = 0;
window.addEventListener('keydown', function (e) {

    document.querySelector('p').innerHTML = `You pressed ${e.key}`;
    if (e.key == 'a' && x_position > 0) {
        userInput -= 3;
    }
    else if (e.key == 'd' && x_position < 1000) {
        userInput += 3;
    }
    console.log(window.innerWidth)
    document.querySelector('img').style.left = `${x_position}px`;
  }, false);
function ManipulatePosition() {
    if (userInput < 0) {
        x_position -= 1
        userInput += 1
    }
    else if (userInput > 0) {
        x_position += 1
        userInput -= 1
    }
}
setInterval(ManipulatePosition, 10)