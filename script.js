let userInput = 0;
window.addEventListener('keydown', function (e) {

    document.querySelector('p').innerHTML = `You pressed ${e.key}`;
    if (e.key == 'a') {
        userInput -= 25;
    }
    else if (e.key == 'd') {
        userInput += 25;
    }
    console.log(document.querySelector('img').style.left)
    document.querySelector('img').style.left = `${userInput}px`;
  }, false);