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
        console.log('ht__showTags()');
    }, 200);
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
document.querySelector('body').addEventListener('mousedown', ht__showTags);
document.querySelector('body').addEventListener('mouseup', ht__showTags);
document.querySelector('body').addEventListener('touchstart', ht__showTags);
document.querySelector('body').addEventListener('touchend', ht__showTags);
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