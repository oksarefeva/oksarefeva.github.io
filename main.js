i18next
    .use(i18nextHttpBackend)
    .init({
        lng: 'en',
        debug: true,
        backend: {
            loadPath: '/locales/{{lng}}/translation.json'
        }
    }).then(() => {
    updateContent();
});


function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerHTML = i18next.t(key);
    });
}

document.querySelectorAll('.dropdown-item')
    .forEach(item => {
        item.addEventListener('click', e => {
            i18next.changeLanguage(e.target.dataset.lang).then(updateContent);
        });
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(item => {
    item.addEventListener('click', e => {
        navLinks.forEach(it => {
            it.classList.remove('active');
        })
        e.target.classList.add('active');
    })
})









