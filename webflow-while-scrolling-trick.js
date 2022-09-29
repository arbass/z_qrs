const wwst__opacityElements__array = document.querySelectorAll('[wwst-opacity="true"]');

function wwst__opacityMagic () {
    wwst__opacityElements__array.forEach(wwst__opacityElements__item => {
        //if wwst__opacityElements__item opacity is 0
        if (wwst__opacityElements__item.style.opacity == 0) {
            wwst__opacityElements__item.classList.add('hide');
        } else {
            wwst__opacityElements__item.classList.remove('hide');
        }
    });
}

addEventListener('scroll', (event) => {
    wwst__opacityMagic();
});

wwst__opacityMagic();