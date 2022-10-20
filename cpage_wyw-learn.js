let wywSection = document.querySelector('[cpage-section="wyw-learn"]');
let currentSrc = wywSection.querySelector('.text-rich-text.is-src');

if (currentSrc.textContent != '') {
    //отрабатываем стики элемент
    let sitickyContent = currentSrc.querySelector('h1').textContent.split('/');

    let wywHeadline = wywSection.querySelector('[wyw-learn="headline"]');
    let wywSubline = wywSection.querySelector('[wyw-learn="subline"]');

    wywHeadline.classList.add('hide');
    wywSubline.classList.add('hide');


    if (sitickyContent.length == 1) {
        wywHeadline.textContent = sitickyContent[0];
        wywHeadline.classList.remove('hide');
    }
    if (sitickyContent.length == 2) {
        wywHeadline.textContent = sitickyContent[0];
        wywHeadline.classList.remove('hide');
        wywSubline.textContent = sitickyContent[1];
        wywSubline.classList.remove('hide');
    }
    //находим все quote
    let quotes = currentSrc.querySelectorAll('blockquote');
    
    function renderBlock__1 () {
        
    }
    
    function renderBlock__2 () {
        
    }
    
    function renderBlock__3 () {
        
    }

    quotes.forEach(quotes__item => {
        window['renderBlock__' + quotes__item.textContent]();
    });

}

