const allCareersCards = document.querySelectorAll('[data-counter-career-item]');
const allLpSrcClw =  document.querySelectorAll('[data-type-of-learn-src]');


allCareersCards.forEach(allCareersCard__item => {
    let currentCareerTitle = allCareersCard__item.querySelector('[data-type-of-learn]').getAttribute('data-type-of-learn');
    let currentArray = new Array();
    allLpSrcClw.forEach(allLpSrcClwItem => {
        let srcName = allLpSrcClwItem.getAttribute('data-type-of-learn-src');
        if (srcName == currentCareerTitle) {
            currentArray.push(srcName);
        }
    });

    allCareersCard__item.querySelector('[data-counter-career-span]').innerHTML = currentArray.length;
});



//––––––––––––––––––––––––––––––––––

const allTrueFeatured = document.querySelectorAll('[fs-checking-boolean-ak="true"]');
allTrueFeatured.forEach(allTrueFeatured__item => {
    allTrueFeatured__item.nextElementSibling.textContent = 'Featured';
});