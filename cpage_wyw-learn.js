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
    let wyw__allRightSections = wywSection.querySelectorAll('[wyw-learn-section]');
    wyw__allRightSections.forEach(wyw__section => {
        wyw__section.classList.add('hide');
    });
    
    function renderBlock__1 (currentTitleSrc) {
        let currentContent = wywSection.querySelector('[wyw-learn-section-content="1"]');
        let allElenetsOfContent = currentContent.querySelectorAll('*');
        allElenetsOfContent.forEach(element => {
            element.remove();
        });

        let currentPositon = currentTitleSrc;
        
        while(currentPositon.nextElementSibling != undefined && currentPositon.nextElementSibling.tagName != 'BLOCKQUOTE') {
            currentPositon = currentPositon.nextElementSibling;
            let currentPositonClone = currentPositon.cloneNode(true);
            currentContent.append(currentPositonClone);
        }        
    }
    
    function renderBlock__2 (currentTitleSrc) {
        let currentContent = wywSection.querySelector('[wyw-learn-section-content="2"]');
        let srcContentArray = new Array();
        let srcContentArrayFigures = new Array();

        let currentPositon = currentTitleSrc;
        while(currentPositon.nextElementSibling != undefined && currentPositon.nextElementSibling.tagName != 'BLOCKQUOTE') {
            currentPositon = currentPositon.nextElementSibling;
            srcContentArray.push(currentPositon);
        }
        
        srcContentArray.forEach(el => {
            if (el.tagName == 'FIGURE') {
                srcContentArrayFigures.push(el);
            }
        });
        
        srcContentArrayFigures.forEach(figure => {
            let clonableItem = currentContent.querySelector('[wyw-learn-section-item="1"]').cloneNode(true);
            let clonableItemImg = clonableItem.querySelector('[wyw-learn-section-item-image="1"]');
            let clonableItemTitle = clonableItem.querySelector('[wyw-learn-section-item-title="1"]');
            let clonableItemText = clonableItem.querySelector('[wyw-learn-section-item-text="1"]');

            let srcImageUrl = figure.querySelector('img').src;
            let srcCaption__1 = figure.querySelector('figcaption').textContent.split('/')[0];
            let srcCaption__2 = figure.querySelector('figcaption').textContent.split('/')[1];

            clonableItemImg.src = srcImageUrl;
            clonableItemTitle.textContent = srcCaption__1;
            clonableItemText.textContent = srcCaption__2;

            currentContent.append(clonableItem);
        });

        let clonableItem = currentContent.querySelectorAll('[wyw-learn-section-item="1"]')[0];
        clonableItem.remove();
    }
    
    function renderBlock__3 (currentTitleSrc) {

    }

    quotes.forEach(quotes__item => {
        let currentDigit = quotes__item.textContent;
        currentDigit = Number(currentDigit)
        currentDigit = currentDigit - 1;
        wywSection.querySelector(`[wyw-learn-section="${quotes__item.textContent}"]`).classList.remove('hide');
        
        
        let allSectionTitles = wywSection.querySelectorAll('[wyw-learn-section-title]');
        allSectionTitles.forEach(sectionTitle => {
            let currentDigitForTitle = sectionTitle.getAttribute('wyw-learn-section-title');
            currentDigitForTitle = Number(currentDigitForTitle);
            if ((currentDigit+1) == currentDigitForTitle) {
                let currentTitleSrc = quotes__item;
                while (currentTitleSrc.tagName != 'H3') {
                    currentTitleSrc = currentTitleSrc.nextElementSibling;
                }
                sectionTitle.textContent = currentTitleSrc.textContent;

                window['renderBlock__' + quotes__item.textContent](currentTitleSrc);
            }
        });



        
    });

}

