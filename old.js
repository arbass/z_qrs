setTimeout(() => {
    let arrayElements__blogCards1 = document.querySelectorAll('.cl-i_blog-articles-full-list');
    let arrayElements__blogCards2 = document.querySelectorAll('.blog-articles-list_card-item');
    
    let arrayElements__blogCards = new Array();

    arrayElements__blogCards1.forEach(el => {
        arrayElements__blogCards.push(el);
    });

    arrayElements__blogCards2.forEach(el => {
        arrayElements__blogCards.push(el);
    });


    arrayElements__blogCards.forEach(el__blogCard => {
        let el__currentCategory = el__blogCard.querySelector('.is-current-card-category');
        let el__currentFirstTopics = el__blogCard.querySelectorAll('.cl-i_blog-articles-list_card-tags-wrapper')[0];
        let arrayElements__currentTopics = el__blogCard.querySelectorAll('.cl-i_blog-articles-list_card-tags-wrapper');
        el__currentFirstTopics.before(el__currentCategory);

        if (arrayElements__currentTopics.length > 2) {
            arrayElements__currentTopics.forEach(el__topic => {
                el__topic.classList.add('hide');
                arrayElements__currentTopics[0].classList.remove('hide');
                arrayElements__currentTopics[1].classList.remove('hide');
            });

            let cloneTag = document.querySelector('.inter-tag-line-semibold.is-element.is-style-grey-300').cloneNode(true);
            let cloneTag__appender = el__blogCard.querySelector('.blog-articles-list_card-tags-wrapper.is-nest-list');
            cloneTag.textContent = ('+' + (arrayElements__currentTopics.length - 2));
            cloneTag__appender.append(cloneTag);
        }
    });


    let allTagsInBlackSection = document.querySelectorAll('.section-blog-articles-list .inter-tag-line-semibold.is-element.is-style-grey-300');
    allTagsInBlackSection.forEach(blackTag => {
        blackTag.classList.remove('is-style-grey-300');
        blackTag.classList.add('is-style-grey-800');
    });


    //клонирууем чекбоксы
    let topicsCheckboxesWrapper = document.querySelector('.mirror-element-true');
    //pc version
    let clone_topicsCheckboxesWrapperPc = topicsCheckboxesWrapper.cloneNode(true);
    clone_topicsCheckboxesWrapperPc.classList.remove('mirror-element-true');
    clone_topicsCheckboxesWrapperPc.classList.add('mirror-element-false');
    //tablet version
    let clone_topicsCheckboxesWrapperTablet = topicsCheckboxesWrapper.cloneNode(true);
    clone_topicsCheckboxesWrapperTablet.classList.remove('mirror-element-true');
    clone_topicsCheckboxesWrapperTablet.classList.add('mirror-element-false');
    //let find appenders
    let topicsCheckboxesAppenderPc = document.querySelector('.blog-articles-full-list_topics-appender');
    let topicsCheckboxesAppenderTablet = document.querySelector('.filter-and-search-mob_category-dropdown-list-inner.is-topic');
    //pc version
    topicsCheckboxesAppenderPc.append(clone_topicsCheckboxesWrapperPc);
    //tablet version
    topicsCheckboxesAppenderTablet.append(clone_topicsCheckboxesWrapperTablet);
    //меняем классы по клику PC
    let allClickableTopicsPc = topicsCheckboxesAppenderPc.querySelectorAll('.blog-articles-filter-and-search_radio-button-text');
    allClickableTopicsPc.forEach(clickableTopic => {
        clickableTopic.addEventListener('click', function () {
            clickableTopic.parentElement.classList.toggle('is-active-topic');
        });
    });
    //меняем классы по клику Tablet
    let allClickableTopicsTablet = topicsCheckboxesAppenderTablet.querySelectorAll('.blog-articles-filter-and-search_radio-button-text');
    allClickableTopicsTablet.forEach(clickableTopic => {
        clickableTopic.addEventListener('click', function () {
            clickableTopic.parentElement.classList.toggle('is-active-topic');
        });
    });
    //let find true checkboxes
    let allTrueCheckboxes = document.querySelectorAll('.mirror-element-true .blog-articles-filter-and-search_radio-button-field');
    //зеркалим клики PC
    let allFalseCheckboxesPC = document.querySelectorAll('.blog-articles-full-list_topics-appender .blog-articles-filter-and-search_radio-button-field');
    allFalseCheckboxesPC.forEach((checkBox__false, idFalse) => {
        checkBox__false.addEventListener('mousedown', function() {
            allTrueCheckboxes[idFalse].click();
        });
    });
    //зеркалим клики Tablet
    let allFalseCheckboxesTablet = document.querySelectorAll('.filter-and-search-mob_category-dropdown-list-inner.is-topic .blog-articles-filter-and-search_radio-button-field');

    allFalseCheckboxesTablet.forEach((checkBox__false, idFalse) => {
        checkBox__false.addEventListener('mousedown', function () {
            allTrueCheckboxes[idFalse].click();
        });
    });


    //следим за инпутом
    let allFilterButtons = document.querySelectorAll('.blog-articles-filter-and-search_radio-button-field');

    allFilterButtons.forEach(el => {
        el.addEventListener('mousedown', function () {
            document.getElementById('blog-filter').scrollIntoView();
        });
    });

    let searchingFilter = document.querySelector('.blog-articles-filter-and-search_input');
    searchingFilter.addEventListener('change', function () {
        document.getElementById('blog-filter').scrollIntoView();

    });

    document.addEventListener('keyup', function () {
        document.getElementById('blog-filter').scrollIntoView();

    });


    //работаем с мобильной версией категорий в дродавне
    //клонирууем чекбоксы
    let categoriesWrapper = document.querySelector('.mirror-element-true_categories');
    let clone_categoriesWrapper = categoriesWrapper.cloneNode(true);
    clone_categoriesWrapper.classList.remove('mirror-element-true_categories');
    clone_categoriesWrapper.classList.add('mirror-element-false_categories');
    let categoriesAppender = document.querySelector('.filter-and-search-mob_category-dropdown-list-inner.is-category');
    categoriesAppender.append(clone_categoriesWrapper);
    //меняем классы по клику
    let allClickableCategories = categoriesAppender.querySelectorAll('.blog-articles-filter-and-search_radio-button-text');
    allClickableCategories.forEach(clickableCategory => {
         clickableCategory.addEventListener('click', function () {
             document.querySelector('.filter-and-search-mob_category-dropdown-text.is-category').textContent = clickableCategory.textContent;
             allClickableCategories.forEach(el => {
                 el.parentElement.classList.remove('is-active');
             });
             clickableCategory.parentElement.classList.add('is-active');
         });
    });
    //зеркалим клики
    let allTrueCategories = document.querySelectorAll('.mirror-element-true_categories .blog-articles-filter-and-search_radio-button-field');
    let allFalseCategories = document.querySelectorAll('.mirror-element-false_categories .blog-articles-filter-and-search_radio-button-field');

    allFalseCategories.forEach((checkBox__false, idFalse) => {
         checkBox__false.addEventListener('mousedown', function () {
             allTrueCategories[idFalse].click();
         });
     });

}, 4000);