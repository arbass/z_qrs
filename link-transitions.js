// function linkTransition() {
//     let lt__allLinksOnPage = document.querySelectorAll('a');
//     lt__allLinksOnPage.forEach(link => {
//         link.addEventListener("click", function(event){
//             if (link.getAttribute('href') != '#' && link.getAttribute('target') != '_blank') {
//                 let currentHrefValue = link.getAttribute('href');
//                 currentHrefValue = Array.from(currentHrefValue)[0];
//                 if (currentHrefValue != '#') {
//                     event.preventDefault()
//                     document.querySelector('body').classList.add('lt__body--transition');
//                     setTimeout(function(){
//                         window.location = link.getAttribute('href');
//                     }, 200);
//                 }
//             }
//     });
// });
// }
// linkTransition();
// setInterval(linkTransition, 10000);