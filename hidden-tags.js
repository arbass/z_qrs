//—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//⭐️ Точка входа (начало)
//Напоминалка: тут код проверяет ,чтобы все нэст тэги появились в карточке и после этого он считает, что финсфит закончил работу
let ht__listOfTagsWrapper = document.querySelectorAll('[hidden-tags-counter="tags-wrapper"]');
let ht__entryPointCounter = 0;
let ht__entryPointStatus = false;
let ht__entryPointCounterTimer;

function ht__finsweetNestStatusChecker() {
    if (ht__entryPointStatus == false) {
        ht__listOfTagsWrapper.forEach(ht__tagWrapper => {
            let ht__currentTagsClw = ht__tagWrapper.querySelector('[hidden-tags-counter="clonable-clw"]');
            if (ht__currentTagsClw == null) {
                clearTimeout(ht__entryPointCounterTimer);
                ht__entryPointCounterTimer = setTimeout(ht__finsweetNestStatusChecker, 50);
            } else {
                while (ht__entryPointCounter < ht__listOfTagsWrapper.length) {
                    ht__entryPointCounter++;
                }
            }
        });
        if (ht__entryPointCounter == ht__listOfTagsWrapper.length) {
            // console.log для проверки статуса
            // console.log(ht__entryPointCounter + ' == ' + ht__listOfTagsWrapper.length);
            ht__entryPointStatus = true;
        }
    } else {
        // console.log('finsweetNest сделал своё дело — мы можем запускать скрипт');
        ht__showTags();
    }
}
//запуск основной функции, при загрузке страницы
ht__finsweetNestStatusChecker();
//⭐️ Точка входа (конец)
//—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//
//
//
//
//
//
//
//—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//< Функция с проверкой клика (Начало)
let lastClickedElement;
window.addEventListener('mousedown', (e) => lastClickedElement=(e.target));
//> Функция с проверкой клика (конец)
//
//
//
//
//
//
//
//—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//< Функция для работы с тэгами (начало)
let ht__showTagsTrottlingTimer;
function ht__showTags() {
    clearTimeout(ht__showTagsTrottlingTimer);
    ht__showTagsTrottlingTimer = setTimeout(function(){
        ht__listOfDynamicItems = document.querySelectorAll('[hidden-tags-counter="main-parent"]');
        ht__listOfDynamicItems.forEach(ht__dynamicItems => {

            let ht__maximumForTags = ht__dynamicItems.querySelector('[hidden-tags-counter-max]').getAttribute('hidden-tags-counter-max');
                ht__maximumForTags = Number(ht__maximumForTags);
            let ht__currentNestTags = ht__dynamicItems.querySelectorAll('[hidden-tags-counter="tag"]');
            let ht__currentNestTagsCount = ht__currentNestTags.length;
            let ht__currentTooltipParent = ht__dynamicItems.querySelector('.additional-tags');
            let ht__currentTagsWrapperParent = ht__dynamicItems.querySelector('.blog-articles-list_card-tags-wrapper');
            let ht__currentTooltip = ht__dynamicItems.querySelector('.additional-tags_list-wrapper');
            let ht__currentTooltipTextSpan = ht__currentTooltipParent.querySelector('.additional-tags_toggle-text');
            let ht__currentTooltipCounter = 0;
            let ht__currentLink = ht__dynamicItems.querySelector('[hidden-tags-counter="main-link"]');
            let ht__curentTagsWrapper = ht__dynamicItems.querySelector('[hidden-tags-counter="tags-wrapper"]');
            let ht__curentTagsWrapperLinks = ht__curentTagsWrapper.querySelectorAll('a');
            ht__curentTagsWrapperLinks.forEach(a => {
                a.setAttribute('href', '#');
            });

            if (ht__dynamicItems.getAttribute('ht-status') != 'true' && ht__currentNestTagsCount > ht__maximumForTags) {
                //при клике на тэги или тултипы нужно прервать действие функции
                ht__currentLink.addEventListener('click', function(e) {
                    if (ht__curentTagsWrapper.contains(lastClickedElement)) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    // console.log(lastClickedElement);
                });

                //основной движ с тэгами
                ht__currentNestTags.forEach((ht__currentNestTag, ht__currentNestTagId) => {
                    if ((ht__currentNestTagId+1) > ht__maximumForTags) {
                        ht__currentTooltip.append(ht__currentNestTag);
                        ht__currentTooltipCounter++;
                        ht__currentTooltipTextSpan.textContent = '+' + ht__currentTooltipCounter;
                    }
                });

                //и показываем скрытые тултипы
                ht__currentTooltipParent.classList.add('opacity-full');
            }
        
        
        
        //говорим о том, что карточка уже обработана
        ht__dynamicItems.setAttribute('ht-status', 'true');
        //и показываем скрытые элементы
        ht__currentTagsWrapperParent.classList.add('opacity-full');
        });



    }, 300);
};
//> Функция для работы с тэгами (конец)
//—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//< События при которых мы запускаем функцию ht__showTags() (начало)
// document.querySelector('body').addEventListener('mousedown', ht__showTags);
// document.querySelector('body').addEventListener('mouseup', ht__showTags);
// document.querySelector('body').addEventListener('touchstart', ht__showTags);
// document.querySelector('body').addEventListener('touchend', ht__showTags);
document.querySelector('[hidden-tags-counter="load-more"]').addEventListener('click', ht__showTags);
let ht__listOfInputs = document.querySelectorAll('[hidden-tags-counter="input"]');
ht__listOfInputs.forEach(ht__input => {
    ht__input.addEventListener('keydown', ht__showTags);
});
//Мутации в форме с кнопками фильтра
var ht__target = document.querySelector('[ht-mutation-observer="form"]');
const ht__config = {
    attributes: true,
    childList: true,
    subtree: true
};
const ht__observer = new MutationObserver(ht__showTags);
ht__observer.observe(ht__target, ht__config);
//> События при которых мы запускаем функцию ht__showTags() (конец)
//—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


console.log('hello wrold');