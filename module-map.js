let roadmap__section = document.querySelector('[cpage-section="roadmap"]');
let roadmap__src = roadmap__section.querySelector('.text-rich-text.is-src');

let roadmap__labels = roadmap__section.querySelectorAll('.l-component-road_roadmap-item .is-roadmap-tag');
let roadmap__headlines = roadmap__section.querySelectorAll('.l-component-road_roadmap-item h3');

let roadmap__src__h5 = roadmap__src.querySelectorAll('h5');
let roadmap__src__h6 = roadmap__src.querySelectorAll('h6');

roadmap__src__h5.forEach((el, elId) => {
    if (roadmap__labels[elId] != undefined) {
        roadmap__labels[elId].textContent = el.textContent;
    }
});

roadmap__src__h6.forEach((el, elId) => {
    if (roadmap__headlines[elId] != undefined) {
        roadmap__headlines[elId].textContent = el.textContent;
    }
});