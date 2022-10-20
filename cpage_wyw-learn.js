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
    

    //определяем список необходимых секций для правой колонки
    let requiredSections__quote = currentSrc.querySelector('blockquote').textContent.split(',');

    let allLearnCol = wywSection.querySelectorAll('[wyw-learn-right]');
    allLearnCol.forEach(learnCol => {
        learnCol.classList.add('hide');
    });

    requiredSections__quote.forEach(quoteNumber => {
        wywSection.querySelector(`[wyw-learn-right="${quoteNumber}"]`).classList.remove('hide');

        if (quoteNumber == '1') {
            let title__1 = currentSrc.querySelectorAll('h3')[0].textContent;
            console.log(title__1);

            let contentWaiter =  wywSection.querySelector(`[wyw-learn-right="${quoteNumber}"] .w-richtext`);
            let currentTitle =  wywSection.querySelector(`[wyw-learn-right-takeways="title"]`);
            currentTitle.textContent = title__1;
            let allInnereElements = contentWaiter.querySelectorAll('*');

            allInnereElements.forEach(el => {
                el.remove();
            });

            //тут нужно просто весь контент вставить, без изменений
            let startPointerForReachTextParsing = currentSrc.querySelectorAll('h3')[0].nextElementSibling;
            while (startPointerForReachTextParsing.nextElementSibling.tagName != 'H3') {
                elAppender = startPointerForReachTextParsing.cloneNode(true);
                contentWaiter.append(elAppender);
                startPointerForReachTextParsing = startPointerForReachTextParsing.nextElementSibling;
            }

            
        }

        if (quoteNumber == '2') {
            let title__2 = currentSrc.querySelectorAll('h3')[1].textContent;
            
        }

        if (quoteNumber == '3') {
            let title__3 = currentSrc.querySelectorAll('h3')[2].textContent;
            
        }
    });

}

