const allCareersCards = document.querySelectorAll('[data-counter-career-item]');
const allLpSrcClw =  document.querySelectorAll('[data-type-of-learn-src]');


allCareersCards.forEach(allCareersCard__item => {
    let currentCareerTitle = allCareersCard__item.querySelector('[data-type-of-learn]').getAttribute('data-type-of-learn');
    let currentArray = new Array();
    allLpSrcClw.forEach(allLpSrcClwItem => {
        let srcName = allLpSrcClwItem.getAttribute('data-type-of-learn-src');
        if (srcName == currentCareerTitle) {
            currentArray.push(srcName);
            console.log(srcName);
        }
    });

    allCareersCard__item.querySelector('[data-counter-career-span]').innerHTML = currentArray.length;
});