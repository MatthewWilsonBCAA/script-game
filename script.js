let userInput = 0;
window.addEventListener('keydown', function (e) {

    document.querySelector('p').innerHTML = `You pressed ${e.key}`;
    if (e.key == 'a' && userInput > 0) {
        userInput -= 15;
    }
    else if (e.key == 'd' && userInput < 1000) {
        userInput += 15;
    }
    console.log(window.innerWidth)
    document.querySelector('img').style.left = `${userInput}px`;
  }, false);