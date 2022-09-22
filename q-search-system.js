let ss__trueInput = document.querySelector('.input_search-nav');
let ss__dropdown = document.querySelector('.form_search-nav-1px-parent');
let ss__closeButton = document.querySelector('.search-nav_search-ico-close');

ss__trueInput.addEventListener('keydown', function() {
    ss__inputJob();
});


ss__trueInput.addEventListener('keyup', function() {
    ss__inputJob();
});


ss__trueInput.addEventListener('change', function() {
    ss__inputJob();
});

ss__closeButton.addEventListener('click', function() {
    ss__trueInput.value = '';
});

setInterval(ss__inputJob, 10000);

function ss__inputJob () {
    setTimeout(function() {
        if (ss__trueInput.value.length > 0) {
            ss__dropdown.style.display = 'block';
        } else {
            ss__dropdown.style.display = 'none';
        }
    }, 350);
}



ss__trueInput.addEventListener('focus', function() {
    document.querySelector('.search-circle_o').click();
});

ss__trueInput.addEventListener('focusout', function() {
    document.querySelector('.search-circle_c').click();
});