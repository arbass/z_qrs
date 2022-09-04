////@collapse
//|webflow| ПОДГОТОВКА К РАБОТЕ С ФУНКЦИЕЙ
//|webflow| 1. Найдите один экземляр тэга (лучше collection list item) и дайте ему аттрибут hidden-tags-counter="tag", ничего страшного, 
//|webflow| если он ещё находится не в карточке, а на пример в коллекции, которая нужна для finsweet с аттрибутом fs-cmsnest-collection="---"
//|webflow| 2. Укажите на родительский элемент, который будет сожержать в себе все теги, важно чтобы этот родитель был максимально близок
//|webflow| по уровню вложенности, дайте ему аттрибут hidden-tags-counter="tags-wrapper", также для более плавного отображения рекомендую дать ему
//|webflow| trasition для opacity '250ms ease', а в кастом коде для этого класса добавить в начале боди стиль .class {opacity: 0;}
//|webflow| также в css добавить класс .opacity-full {opacity: 1;}
//|webflow| после того как скрипт закончит работу, он добавит класс .opacity-full к родительскому элементу и покажет все теги
//|webflow| 3. Для этого же элемента с аттрибутом hidden-tags-counter="tags-wrapper" укажите максимальное количество тэгов, которые должны отображаться,
//|webflow| например hidden-tags-counter-max="2", если не укажите — скрипт сломается
//|webflow| 4. Найдите ближайший родительский элемент, который является collection list item и дайте ему аттрибут hidden-tags-counter="main-parent"
//|webflow| 5. Подготовьте dropdown элемент, в котором мы будем отображать количество скрытых тэгов и при наведении мы будем показывать остальные 
//|webflow| дайте ему аттрибут hidden-tags-counter="additional-tags" и дайте ему класс "hide"
//|webflow| в dropdown элементе у вас будет враппер, который будет ожидать в себя тэги, дайте ему аттрибут hidden-tags-counter="rest-tags-appender"
//|webflow| 6. Дайте clw аттрибут, который будет помогать наблюдать за мутациями hidden-tags-counter="mutation-observer"





//⭐️ Точка входа
let ht__allMutatuinClw = document.querySelectorAll('[ht-mutation-observer="clw"]');
let ht__finsweetNestStatusTimer;
// let ht__observer;
console.log(ht__finsweetNestStatusTimer);

//––––––––––––––––––––––––––––––––––––––

let ht__target = ht__allMutatuinClw;
const ht__config = {
    attributes: true,
    childList: true,
    subtree: true
};
const ht__observer = new MutationObserver(ht__finsweetNestStatusChecking);
ht__observer.observe(ht__target, ht__config);


function ht__finsweetNestStatusChecking() {
    clearTimeout(ht__finsweetNestStatusTimer);
    ht__finsweetNestStatusTimer = setTimeout(() => {
        console.log('⭐️ ⭐️ ⭐️ мутации закончились –––> можно запускать следующую функцию');
        ht__tagsPreparing();
    }, 2000);
}

function ht__tagsPreparing() {
}