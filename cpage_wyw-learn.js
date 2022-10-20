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
    let wyw__allRightSections = wywSection.querySelectorAll('[wyw-learn-right]');
    wyw__allRightSections.forEach(wyw__section => {
        wyw__section.classList.add('hide');
    });
    
    function renderBlock__1 () {

    }
    
    function renderBlock__2 () {
        
    }
    
    function renderBlock__3 () {
        
    }

    quotes.forEach(quotes__item => {
        let currentDigit = quotes__item.textContent;
        currentDigit = Number(currentDigit)
        currentDigit = currentDigit - 1;
        window['renderBlock__' + quotes__item.textContent]();
        wywSection.querySelector(`[wyw-learn-right="${quotes__item.textContent}"]`).classList.remove('hide');
        wywSection.querySelector(`[wyw-learn-right="${quotes__item.textContent}"] h3`).textContent = currentSrc.querySelectorAll(`h3`)[currentDigit].textContent;
    });

}

