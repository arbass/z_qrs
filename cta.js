let cta__section = document.querySelector('[cpage-section="cta"]');
let cta__src = cta__section.querySelector('.text-rich-text.is-src');

let cta__headline = cta__section.querySelector('[cta-el="title"]');
let cta__subline = cta__section.querySelector('[cta-el="subtitle"]');
cta__headline.classList.add("hide");
cta__subline.classList.add("hide");

if (cta__src.textContent != '') {
    let src__headings = cta__src.querySelectorAll("h2, h3");
    src__headings.forEach(heading => {
        if (heading.tagName == "H2") {
            cta__headline.textContent = heading.textContent;
            console.log(heading.textContent);
            cta__headline.classList.remove("hide");
        } 
        if (heading.tagName == "H3") {
            console.log(heading.textContent);
            cta__subline.textContent = heading.textContent;
            cta__subline.classList.remove("hide");
        } 
    });
}