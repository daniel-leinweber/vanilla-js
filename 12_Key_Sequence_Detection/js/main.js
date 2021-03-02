const keysPressed = [];
const secretCode = 'mysecretcode';

window.addEventListener('keyup', (e) => {

    keysPressed.push(e.key);
    keysPressed.splice(-secretCode.length - 1, keysPressed.length - secretCode.length);

    if (keysPressed.join('').includes(secretCode)) {
        cornify_add();
    }

});