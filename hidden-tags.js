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
//👀 Функция для работы с тэгами (начало)

let ht__allMutatuinClw = document.querySelectorAll('[hidden-tags-counter="mutation-observer"]');
let ht__mutationTimer;
let ht__status = false;

function ht__showTags() {
    clearTimeout(ht__mutationTimer);
    if (ht__status == false) {
        ht__mutationTimer = setTimeout(() => {
            ht__status = true;
            let ht__allTagsParents = document.querySelectorAll('[hidden-tags-counter="main-parent"]');
                ht__allTagsParents.forEach(el__card => {    
                    let ht__interator = 0;
                    let ht__countOfVisibleTags = el__card.querySelector('[hidden-tags-counter-max]').getAttribute('hidden-tags-counter-max');
                    //переводим ht__countOfVisibleTags в число
                    ht__countOfVisibleTags = Number(ht__countOfVisibleTags);
                    //теперь для всех тэгов, кроме первых ht__countOfVisibleTags, добавим класс hide
                    let allCurrentTags = el__card.querySelectorAll('[hidden-tags-counter="tag"]');
                    allCurrentTags.forEach(tag => {
                        tag.classList.add('hide');
                    });
                    while (ht__interator < ht__countOfVisibleTags) {
                        if (allCurrentTags[ht__interator] != undefined) {
                            allCurrentTags[ht__interator].classList.remove('hide');
                        }
                        ht__interator++;
                    }
                    //перед началом работы скрипта убедимся, что у обёртки тэгов всё ещё нет сласса opacity-full
                    let currentTagWrapper = el__card.querySelector('[hidden-tags-counter="tags-wrapper"]');
                    if (currentTagWrapper.classList.contains('opacity-full') == false) {
                        //самое последние действие — выводи обёртку с тэгами из опасити
                        currentTagWrapper.classList.add('opacity-full');
                    }
                    let countOfHiddenTags = el__card.querySelectorAll('[hidden-tags-counter="tag"].hide');
                    let countOfVisibleTags = el__card.querySelectorAll('[hidden-tags-counter="tag"]:not(.hide)');
                    let currentTagsWrapper = countOfVisibleTags[0].parentNode;
                    let countOfHiddenTagsLength = countOfHiddenTags.length;
                    //тут мы переместим счётчик скрытых тэгов в нужное место
                    let currentTagCounter = el__card.querySelector('[hidden-tags-counter="additional-tags"]');
                    currentTagCounter.firstChild.firstChild.textContent = ('+' + countOfHiddenTagsLength);
                    if (countOfHiddenTagsLength > 0) {
                        currentTagCounter.classList.remove('hide');
                        // countOfHiddenTags[countOfHiddenTagsLength-1].after(currentTagCounter);
                        currentTagsWrapper.appendChild(currentTagCounter);
                        //а тут мы переместим все скрытые тэги в нужное место и снимем с них класс hide
                        countOfHiddenTags.forEach(tag => {
                            let currentRestTagAppender = el__card.querySelector('[hidden-tags-counter="rest-tags-appender"]');
                            currentRestTagAppender.appendChild(tag);
                            tag.classList.remove('hide');
                        });
                        //
                        setTimeout(function() {
                            window.Webflow && window.Webflow.destroy();
                            window.Webflow && window.Webflow.ready();
                            window.Webflow && window.Webflow.require( 'ix2' ).init();
                            document.dispatchEvent( new Event( 'readystatechange' ) );
                        } , 500);
                        //

                    }
            });

            setTimeout(() => {
                ht__status = false;
            }, 100); //возможно стоить уменьшить эти значения
        }, 50);//возможно стоить уменьшить эти значения
    }
};
//👀 Функция для работы с тэгами (конец)
//—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————