let array__mutationIndicators = document.querySelectorAll('[mutation-indicator]');
let observer__mutationIndicators;
let status__tagsPrepare = false;
let status__tagsPrepareTimer;
let button__showMore = document.querySelector('.blog-articles-full-list_pagination-button');

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

                let cloneTag = document.querySelector('.inter-tag-line-semibold.is-element.is-style-grey-300').cloneNode(true);
                let cloneTag__appender = el__tagsWrappers.querySelector('.blog-articles-list_card-tags-wrapper_nest');
                cloneTag.textContent = ('+' + (arrayElements__currentTopics.length - 2));
                cloneTag.classList.add('cursor-question');
                cloneTag__appender.append(cloneTag);
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

button__showMore.addEventListener('click', function() {
    setTimeout(tagsShow, 50);
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