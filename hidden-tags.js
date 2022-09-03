//@collapse
//|webflow| ПОДГОТОВКА К РАБОТЕ С ФУНКЦИЕЙ
//|webflow| 1. Найдите один экземляр тэга (лучше collection list item) и дайте ему аттрибут hidden-tags-counter="tag", ничего страшного, 
//|webflow| если он ещё находится не в карточке, а на пример в коллекции, которая нужна для finsweet с аттрибутом fs-cmsnest-collection="---"
//|webflow| 2. Укажите на родительский элемент, который будет сожержать в себе все теги, важно чтобы этот родитель был максимально близок
//|webflow| по уровню вложенности, дайте ему аттрибут hidden-tags-counter="tags-wrapper", также для более плавного отображения рекомендую дать ему
//|webflow| trasition для opacity '250ms ease', а в кастом коде для этого класса добавить в начале боди стиль .class {opacity: 0;}
//|webflow| также в css добавить класс .opacity-full {opacity: 1;}
//|webflow| после того как скрипт закончит работу, он добавит класс .opacity-full к родительскому элементу и покажет все теги
//|webflow| 3. Для этого же элемента с аттрибутом hidden-tags-counter="tags-wrapper" укажите максимальное количество тэгов, которые должны отображаться,
//|webflow| например hidden-tags-counter-max="2", если не укажите — скрипт сломается :) 
//|webflow| 4. Найдите ближайший родительский элемент, который является collection list item и дайте ему аттрибут hidden-tags-counter="main-parent"
//|webflow| 5. Подготовьте dropdown элемент, в котором мы будем отображать количество скрытых тэгов и при наведении мы будем показывать остальные 
//|webflow| дайте ему аттрибут hidden-tags-counter="additional-tags"
//|webflow| 6. Дайте clw аттрибут, который будет помогать наблюдать за мутациями hidden-tags-counter="mutation-observer"




//⭐️ Entry point[java script] Ищем все CLW, в которых будут мутации
let ht__allMutatuinClw = document.querySelectorAll('[hidden-tags-counter="mutation-observer"]');
let ht__mutationTimer;
ht__allMutatuinClw.forEach(el => {
    // Выбираем целевой элемент
    let ht__target = el;
    // Конфигурация observer (за какими изменениями наблюдать)
    const ht__config = {
        attributes: true,
        childList: true,
        subtree: true
    };
    // Создаём экземпляр наблюдателя с указанной функцией колбэка
    const ht__observer = new MutationObserver(ht__showTags);
    // Начинаем наблюдение за настроенными изменениями целевого элемента
    ht__observer.observe(ht__target, ht__config);
});


//[java script] Найдём все родительские элементы с тэгом hidden-tags-counter="tags-wrapper" 
function ht__showTags() {
    console.log('запустили по мутации');
    // let ht__allTagsParents = document.querySelectorAll('[hidden-tags-counter="main-parent"]');
    //     ht__allTagsParents.forEach(el => {
    //         let ht__countOfVisibleTags = el.querySelector('[hidden-tags-counter-max]').getAttribute('hidden-tags-counter-max');
    //         //переводим ht__countOfVisibleTags в число
    //         ht__countOfVisibleTags = Number(ht__countOfVisibleTags);
    //         //теперь для всех тэгов, кроме первых ht__countOfVisibleTags, добавим класс hide
    //         let allCurrentTags = el.querySelectorAll('[hidden-tags-counter="tag"]');
    //         allCurrentTags.forEach(tag => {
    //             tag.classList.add('hide');
    //         });
    //         let ht__zero = 0;
    //         // while (ht__zero < ht__countOfVisibleTags) {
    //         //     allCurrentTags[ht__zero].classList.remove('hide');
    //         //     ht__zero++;
    //         // }
    //         //перед началом работы скрипта убедимся, что у обёртки тэгов всё ещё нет сласса opacity-full
    //         let currentTagWrapper = el.querySelector('[hidden-tags-counter="tags-wrapper"]');
    //         if (currentTagWrapper.classList.contains('opacity-full') == false) {
                
                
                
                
                
                
                
    //             //самое последние действие — выводи обёртку с тэгами из опасити
    //             currentTagWrapper.classList.add('opacity-full');
    //         }
    // });
};
