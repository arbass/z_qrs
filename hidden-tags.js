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


//[Java script] Найдём все родительские элементы с тэгом hidden-tags-counter="tags-wrapper" 
let ht__allTagsParents = document.querySelectorAll('[hidden-tags-counter="main-parent"]');