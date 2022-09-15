let fhTrue__mirror__allTopicButtonsPc = document.querySelectorAll('[fh-mirror="true-topic-pc"]');
let fhFalse__mirror__allTopicButtonsPc = document.querySelectorAll('[fh-mirror="false-topic-pc"]');
let fhFalse__mirror__allTopicButtonsMobile = document.querySelectorAll('[fh-mirror="false-topic-mobile"]');

let fhTrue__mirror__allCategoriesButtonsPc = document.querySelectorAll('[fh-mirror="true-category-pc"]');
let fhFalse__mirror__allCategoriesButtonsMobile = document.querySelectorAll('[fh-mirror="false-category-mobile"]');

function activeState__syncCategories () {
    fhTrue__mirror__allCategoriesButtonsPc.forEach((fhTrue__categoryPc, fhTrue__categoryPcId) => {
        // console.log(fhTrue__categoryPc);
        if (fhTrue__categoryPc.classList.contains('is-active')) {
            fhFalse__mirror__allCategoriesButtonsMobile[fhTrue__categoryPcId].classList.add('is-active');
            // console.log('добавили класс для' + fhFalse__mirror__allCategoriesButtonsMobile[fhTrue__categoryPcId]);
        } else {
            fhFalse__mirror__allCategoriesButtonsMobile[fhTrue__categoryPcId].classList.remove('is-active');
        }
    });
}

function activeState__syncTopic () {

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