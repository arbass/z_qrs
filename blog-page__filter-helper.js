let fhTrue__mirror__allTopicButtonsPc = document.querySelectorAll('[fh-mirror="true-topic-pc"]');
let fhFalse__mirror__allTopicButtonsPc = document.querySelectorAll('[fh-mirror="false-topic-pc"]');
let fhFalse__mirror__allTopicButtonsMobile = document.querySelectorAll('[fh-mirror="false-topic-mobile"]');

let fhTrue__mirror__allCategoriesButtonsPc = document.querySelectorAll('[fh-mirror="true-category-pc"]');
let fhFalse__mirror__allCategoriesButtonsMobile = document.querySelectorAll('[fh-mirror="false-category-mobile"]');

function activeState__syncCategories () {
    fhTrue__mirror__allCategoriesButtonsPc.forEach((fhTrue__categoryPc, fhTrue__categoryPcId) => {
        if (fhTrue__categoryPc.classList.contains('is-active')) {
            fhFalse__mirror__allCategoriesButtonsMobile[fhTrue__categoryPcId].classList.add('is-active');
            document.querySelector('.filter-and-search-mob_category-dropdown-text.is-category').textContent = fhTrue__categoryPc.querySelector('.blog-articles-filter-and-search_radio-button-text.is-category').textContent;
        } else {
            fhFalse__mirror__allCategoriesButtonsMobile[fhTrue__categoryPcId].classList.remove('is-active');
        }
    });
}

function activeState__syncTopic () {
    fhTrue__mirror__allTopicButtonsPc.forEach((fhTrue__topicPc, fhTrue__topicPcId) => {
        if (fhTrue__topicPc.classList.contains('is-active-topic')) {
            console.log(fhTrue__topicPc);
            fhFalse__mirror__allTopicButtonsPc[fhTrue__topicPcId].classList.add('is-active-topic');
            fhFalse__mirror__allTopicButtonsMobile[fhTrue__topicPcId].classList.add('is-active-topic');
        } else {
            fhFalse__mirror__allTopicButtonsPc[fhTrue__topicPcId].classList.remove('is-active-topic');
            fhFalse__mirror__allTopicButtonsMobile[fhTrue__topicPcId].classList.remove('is-active-topic');
        }
    });
}

function activeState__sync () {
    setTimeout(() => {
        activeState__syncCategories();
        activeState__syncTopic();
    }, 100);
}

fhFalse__mirror__allTopicButtonsPc.forEach((fhFalse__topicPc, fhFalse__topicPcId) => {
    fhFalse__topicPc.addEventListener('mousedown', () => {
        fhTrue__mirror__allTopicButtonsPc[fhFalse__topicPcId].click();
        activeState__sync();
    });
});

fhFalse__mirror__allTopicButtonsMobile.forEach((fhFalse__topicMobile, fhFalse__topicMobileId) => {
    fhFalse__topicMobile.addEventListener('mousedown', () => {
        fhTrue__mirror__allTopicButtonsPc[fhFalse__topicMobileId].click();
        activeState__sync();
    });
});

fhFalse__mirror__allCategoriesButtonsMobile.forEach((fhFalse__categoryMobile, fhFalse__categoryMobileId) => {
    fhFalse__categoryMobile.addEventListener('mousedown', () => {
        fhTrue__mirror__allCategoriesButtonsPc[fhFalse__categoryMobileId].click();
        activeState__sync();
    });
});