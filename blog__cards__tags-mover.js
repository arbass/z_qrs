////@collapse

let array__mutationIndicators = document.querySelectorAll('[mutation-indicator]');
let form__filtersControls = document.querySelector('.blog-articles-filter-and-search_block-form');
let observer__mutationIndicators;
let status__tagsPrepare = false;
let status__tagsPrepareTimer;
let button__showMore = document.querySelector('.blog-articles-full-list_pagination-button');
let array__catButtons = document.querySelectorAll('.blog-articles-filter-and-search_radio-button-text');

function tagsShow() {
    let array__tagsWrappers = document.querySelectorAll('.blog-articles-list_card-tags-wrapper.is-nest-waiter');
    
    array__tagsWrappers.forEach(el__tagsWrappers => {
        if(el__tagsWrappers.classList.contains('opacity-full') == false) {
            allLinks = el__tagsWrappers.querySelectorAll('a');
            allLinks.forEach(a => {
                a.removeAttribute('href');
            });

            el__tagsWrappers.classList.add('opacity-full');

            let el__currentCategory = el__tagsWrappers.querySelector('.is-current-card-category');
            let el__currentFirstTopics = el__tagsWrappers.querySelectorAll('.cl-i_blog-articles-list_card-tags-wrapper')[0];
            let arrayElements__currentTopics = el__tagsWrappers.querySelectorAll('.cl-i_blog-articles-list_card-tags-wrapper');
            el__currentFirstTopics.before(el__currentCategory);

            if (arrayElements__currentTopics.length > 2) {
                arrayElements__currentTopics.forEach(el__topic => {
                    el__topic.classList.add('hide');
                    arrayElements__currentTopics[0].classList.remove('hide');
                    arrayElements__currentTopics[1].classList.remove('hide');
                });

                let cloneTag = el__tagsWrappers.parentElement.parentElement.nextElementSibling;
                cloneTag.classList.remove('hide');
                //let cloneTag__appender = el__tagsWrappers.querySelector('.blog-articles-list_card-tags-wrapper_nest');
                let tagTextCounter = cloneTag.querySelector('.additional-tags_toggle-text');
                tagTextCounter.textContent = ('+' + (arrayElements__currentTopics.length - 2));
                arrayElements__currentTopics[1].after(cloneTag);
                //
                setTimeout(function() {
                    window.Webflow && window.Webflow.destroy();
                    window.Webflow && window.Webflow.ready();
                    window.Webflow && window.Webflow.require( 'ix2' ).init();
                    document.dispatchEvent( new Event( 'readystatechange' ) );
                } , 500);
                //
                let allHiddenTags = el__tagsWrappers.querySelectorAll('.cl-i_blog-articles-list_card-tags-wrapper.hide');
                // let lengthString;
                let currentAdditionalTagsStart = el__tagsWrappers.querySelector('.start_additional-tags_list-wrapper');
                allHiddenTags.forEach(el => {
                    currentAdditionalTagsStart.after(el);
                    el.classList.remove('hide');
                });
            }

            if (el__tagsWrappers.classList.contains('is-black-subtree-tags')) {
                let allCurrentTags = el__tagsWrappers.querySelectorAll('[fs-cmsfilter-field="article-topic"]');
                allCurrentTags.forEach(blackTag => {
                    blackTag.classList.remove('is-style-grey-300');
                    blackTag.classList.add('is-style-grey-800');
                });
            }
        }
    });
}

document.querySelector('body').addEventListener('click', function(e) {
    tagsShow();
    setTimeout(tagsShow, 1000);
    setTimeout(tagsShow, 2500);
});


function startAfterTagsPrepare() {
    tagsShow();
}

function startAfterMutationObserver() {
    if (status__tagsPrepare == false) {
        clearTimeout(status__tagsPrepareTimer);
        status__tagsPrepareTimer = setTimeout(function() {
            status__tagsPrepare = true;
            observer__mutationIndicators.disconnect();
            startAfterTagsPrepare();
        } , 250);
    }
}

array__mutationIndicators.forEach(el__mutationIndicators => {
    let target = el__mutationIndicators;
    const config = {
        attributes: true,
        childList: true,
        subtree: true
    };
    observer__mutationIndicators = new MutationObserver(startAfterMutationObserver);
    observer__mutationIndicators.observe(target, config);
});


function syncFilters () {
    //нужно определить список тегов как src of true 
    //и определить список тегов как src of false
    // let allTrue__categoryTags = document.querySelectorAll('.mirror-element-true_categories .blog-articles-filter-and-search_radio-button-text.is-category');
    // let allFalse__categoryTags = document.querySelectorAll('.filter-and-search-mob_category-button .blog-articles-filter-and-search_radio-button-text');

    // allTrue__categoryTags.forEach((true__categoryTag, id__categoryTag) => {
    //     if(true__categoryTag.classList.contains('is-active') == true) {
    //         allFalse__categoryTags.forEach(fasle__categoryTag => {
    //             fasle__categoryTag.classList.remove('is-active');
    //         });
    //         allFalse__categoryTags[id__categoryTag].parentElement.classList.add('is-active');
    //     }
    // });
}

//создаем новую мутацию, чтобы следить за изменением в кнопках фильтров
let mutationTarget__filterControls = form__filtersControls;
const mutationConfig__filterControls = {
    attributes: true,
    childList: true,
    subtree: true
};
// Создаём экземпляр наблюдателя с указанной функцией колбэка
const observer__filterControls = new MutationObserver(syncFilters);
// Начинаем наблюдение за настроенными изменениями целевого элемента
observer__filterControls.observe(mutationTarget__filterControls, mutationConfig__filterControls);