let curriculum__section = document.querySelector('[cpage-section="curriculum"]');
let curriculum__src = curriculum__section.querySelector('.text-rich-text.is-src');

let curriculum__section__title = curriculum__section.querySelector('[curriculum-headline]');
curriculum__section__title.textContent = curriculum__src.querySelector('h1').textContent;

let curriculum__allMetaRows = curriculum__section.querySelectorAll('[curriculum-item-meta]');
let curriculum__allMetaIco = curriculum__section.querySelectorAll('[curriculum-item-meta-ico]');
let curriculum__allMetaTxt = curriculum__section.querySelectorAll('[curriculum-item-meta-ico-title]');

let curriculum__grid = curriculum__section.querySelector('[curriculum-grid]');

curriculum__allMetaRows.forEach(el => {
    el.classList.add('hide');
});

curriculum__allMetaIco.forEach(el => {
    el.classList.add('hide');
});

let curriculum__src__titles = curriculum__src.querySelectorAll('h2');

curriculum__src__titles.forEach(el__src => {
            let clonableItem = curriculum__section.querySelector('[curriculum-item]').cloneNode(true);
            let clonableItem__title = clonableItem.querySelector('[curriculum-item-title]');
            clonableItem__title.textContent = el__src.textContent;
        //––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
            //поймём есть ли у нас иконка
            let icoFinder = el__src.nextElementSibling;

            while (icoFinder != null && icoFinder.tagName != 'H2') {
                if (icoFinder.tagName == 'FIGURE') {
                    let clonableItem__ico = clonableItem.querySelector('[curriculum-item-meta-ico]');
                    let currentFigureImg = icoFinder.querySelector('img');
                    let currentFigureImgSrc = currentFigureImg.getAttribute('src');
                    clonableItem__ico.src = currentFigureImgSrc;
                    clonableItem__ico.classList.remove('hide');
                }
                icoFinder = icoFinder.nextElementSibling;
            }

        //––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
            let titleFinder = el__src.nextElementSibling;

            while (titleFinder != null && titleFinder.tagName != 'H2') {
                if (titleFinder.tagName == 'BLOCKQUOTE') {
                    let clonableItem__metaTitle = clonableItem.querySelector('[curriculum-item-meta-ico-title]');
                    clonableItem__metaTitle.textContent = titleFinder.textContent;

                    clonableItem__metaTitle.parentElement.classList.remove('hide');
                }
                titleFinder = titleFinder.nextElementSibling;
            }

        //––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
            let contentFinder = el__src.nextElementSibling;
            let contentArray = new Array();
            //удаляем внутррености блока
            let clonableItem__metaContent = clonableItem.querySelector('[curriculum-item-content]');
            let clonableItem__metaContentInnerElements = clonableItem__metaContent.querySelectorAll('*');
            clonableItem__metaContentInnerElements.forEach(el => {
                el.remove();
            });

            while (contentFinder != null && contentFinder.tagName != 'H2') {
                if (contentFinder.tagName != 'BLOCKQUOTE' && contentFinder.tagName != 'FIGURE' && contentFinder.tagName != 'H1') {
                    contentArray.push(contentFinder);
                }
                contentFinder = contentFinder.nextElementSibling;
            }
            contentArray.forEach(el => {
                clonableItem__metaContent.appendChild(el);
            });
            
            curriculum__grid.appendChild(clonableItem);
});

let curriculum__clonableItemAll = curriculum__section.querySelectorAll('[curriculum-item]');
curriculum__clonableItemAll[0].remove();





//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//если стики будет не заполнен
let sticky__curriculum = curriculum__section.querySelector('.column_sticky');

if (sticky__curriculum.classList.contains('w-condition-invisible')) {
    let simple__curriculumAppender = curriculum__section.querySelector('.course-curriculum_wrapper.var-2');
    let simple__curriculumTransfer = curriculum__section.querySelector('.l-component-faq_col-2.is-course-curriculum');
    let simple__curriculumTransfer__innerParent = curriculum__section.querySelector('.l-component-faq_inner.is-course-curriculum.var-2');
    let simple__curriculumTransfer__innerParentOld = curriculum__section.querySelector('.l-component-faq_inner.is-course-curriculum.var-1');

    simple__curriculumAppender.appendChild(simple__curriculumTransfer);
    simple__curriculumTransfer__innerParent.classList.add('show-as-flex');
    simple__curriculumTransfer__innerParentOld.classList.add('hide');
}