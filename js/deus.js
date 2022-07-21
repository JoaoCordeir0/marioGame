const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameover = document.querySelector('.game-over');

const jump = () => {
    mario.classList.add('jump_on');

    setTimeout(() => {
        mario.classList.remove('jump_on')
    }, 500);
}

const loop = setInterval(() => {
    const pipe_x = pipe.offsetLeft;
    const mario_x = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipe_x <= 180 && pipe_x > 0 && mario_x < 80) {
        mario.style.bottom = '180px';
    }
    if (pipe_x > 120 && mario_x > 1) {
        mario.style.bottom = '0px';
    }

}, 10)

document.addEventListener('keydown', jump);