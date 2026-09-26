const anchors = document.querySelectorAll('.header__nav a');

for (const anchor of anchors) {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const id = anchor.getAttribute('href');

        const elem = document.querySelector(id);

        window.scroll({
            top: elem.offsetTop - 80,
            behavior: 'smooth'
        })
    })
}