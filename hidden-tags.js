//—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//⭐️ Точка входа (начало)
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
        // Делаем видимым тэг с тултипом
        ht__listOfDynamicItems = document.querySelectorAll('[hidden-tags-counter="main-parent"]');
        ht__listOfDynamicItems.forEach(ht__dynamicItems => {
            if (ht__dynamicItems.getAttribute('ht-status') != 'true') {
            let ht__currentTooltipButton = ht__dynamicItems.querySelector('.additional-tags');
            let ht__currentNestTagsWrapper = ht__dynamicItems.querySelector('[fs-cmsnest-collection="article-topics"]');
            let ht__currentTagWrapper = ht__dynamicItems.querySelector('[hidden-tags-counter="tags-wrapper"]');
            ht__currentTagWrapper.classList.add('opacity-full');
            let ht__currentTagLast = ht__currentNestTagsWrapper.lastChild;
            ht__currentTagLast.after(ht__currentTooltipButton);
            
            // Перемещаем основную категорий в начало списка
            let ht__currentCategoryTag = ht__dynamicItems.querySelector('.is-current-card-category');
            let ht__currentTagFirst = ht__currentNestTagsWrapper.firstChild;
            ht__currentTagFirst.before(ht__currentCategoryTag);


            let ht__currentCountOfTags = ht__dynamicItems.querySelector('[hidden-tags-counter-max]').getAttribute('hidden-tags-counter-max');
            ht__currentCountOfTags = Number(ht__currentCountOfTags);
            let ht__currentNestTags = ht__dynamicItems.querySelectorAll('[hidden-tags-counter="tag"]');
            let ht__currentTooltipWaiter = ht__dynamicItems.querySelector('.additional-tags_list-wrapper');


            // Определяем количество нужных тэгов и ненужные скрываем в тултипе

            ht__currentNestTags.forEach((ht__currentNestTag, ht__currentNestTagId) => {
                if ((ht__currentNestTagId+1) > ht__currentCountOfTags) {
                    ht__currentTooltipWaiter.append(ht__currentNestTag);

                    //показываем тултип если только он нужен
                    ht__currentTooltipButton.classList.add('opacity-full');
                }                
            });
            
            }
            ////////

            //говорим о том, что карточка уже обработана
            ht__dynamicItems.setAttribute('ht-status', 'true')
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
