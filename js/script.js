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

    console.log(mario_x);

    if (pipe_x <= 120 && pipe_x > 0 && mario_x < 80) {
        gameover.style.display = 'block';

        pipe.style.animation = 'none';
        pipe.style.left = `${pipe_x}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${mario_x}px`;

        mario.src = './img/game-over.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump);