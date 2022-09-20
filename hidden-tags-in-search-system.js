// let hts__allBlogCards;

// let hts__target = document.querySelector('.nav_component-src');
// let hts__mutationTimer;

// const hts__config = {
//     attributes: true,
//     childList: true,
//     subtree: true
// };

// const hts__callback = function(mutationsList, observer) {
//     for (let mutation of mutationsList) {
//         clearTimeout(hts__mutationTimer);
//         hts__mutationTimer = setTimeout(function() {
//             console.log('мутации кончились, отключаем обсервер');


//             hts__observer.disconnect();
//         }, 3000);
//     }
// };

// let hts__observer = new MutationObserver(hts__callback);
// hts__observer.observe(hts__target, hts__config);


// document.querySelector('.next-button').click();