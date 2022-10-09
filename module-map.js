let roadmap__section = document.querySelector('[cpage-section="roadmap"]');
let roadmap__src = roadmap__section.querySelector('.text-rich-text.is-src');

let roadmap__labels = roadmap__section.querySelectorAll('.l-component-road_roadmap-item .is-roadmap-tag');
let roadmap__headlines = roadmap__section.querySelectorAll('.l-component-road_roadmap-item h3');

let src__h5 = roadmap__src.querySelectorAll('h5');
let src__h6 = roadmap__src.querySelectorAll('h6');


src__h5.forEach((h5, h5__id) => {
    roadmap__labels[h5__id].textContent = h5.textContent;
});

src__h6.forEach((h6, h6__id) => {
    roadmap__headlines[h6__id].textContent = h6.textContent;
});