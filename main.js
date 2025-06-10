
function updateContent() {
    document.getElementById('header-Home').innerText = i18next.t('header.home');
    document.getElementById('header-About').innerText = i18next.t('header.about');
    document.getElementById('header-Contact').innerText = i18next.t('header.contact');
    document.getElementById('section1-hello').innerText = i18next.t('section1.hello');
    document.getElementById('section1-heading').innerText = i18next.t('section1.heading');
    document.getElementById('section1-paragraph').innerText = i18next.t('section1.paragraph');

    document.getElementById('section2-aboutMe').innerText = i18next.t('section2.aboutMe');
    document.getElementById('section2-presentTime').innerText = i18next.t('section2.presentTime');
    document.getElementById('section2-education').textContent = i18next.t('section2.education');

    document.getElementById('section2-paragraph1').innerText = i18next.t('section2.paragraph1');


    document.getElementById('section2-experience').innerText = i18next.t('section2.experience');
    document.getElementById('section2-teacher').innerText = i18next.t('section2.teacher');
    document.getElementById('section2-maternity').innerText = i18next.t('section2.maternity');
    document.getElementById('section2-programming').innerText = i18next.t('section2.programming');
    document.getElementById('section2-paragraph2').innerText = i18next.t('section2.paragraph2');
    document.getElementById('section2-hobbies').innerText = i18next.t('section2.hobbies');
    document.getElementById('section2-paragraph3').innerText = i18next.t('section2.paragraph3');
    document.getElementById('section2-h1-contact').innerText = i18next.t('section2.contacts');

    document.getElementById('footer-resume').innerText = i18next.t('footer.resume');
    document.getElementById('footer-projects').innerText = i18next.t('footer.projects');
    document.getElementById('footer-contacts').innerText = i18next.t('footer.contacts');
    document.getElementById('footer-podpis').innerText = i18next.t('footer.podpis');
}


i18next.init({
    lng: 'cs', // язык по умолчанию
    debug: true,
    resources: {
        en: {
            translation: {
                "header": {
                    "home": "Home",
                    "about": "About",
                    "contact": "Contact"
                },
                "section1": {
                    "hello": "Hello!",
                    "heading": "A Bit About Me",
                    "paragraph": "I am an aspiring front end developer currently focusing on building a solid " +
                        "foundation in web development. Most of my time is dedicated to learning by doing — practicing code, " +
                        "experimenting with Angular and TypeScript, and gradually understanding how modern web applications work."
                },
                "section2": {
                    "aboutMe": "About Me",
                    "presentTime": "2023-Present",
                    "education": "Education",
                    "paragraph1": "Bachelor’s degree, Togliatti State University. Major: Mathematics, specialization: „Teaching“ ",
                    "experience": "Experience",
                    "teacher": "Mathematics teacher at a secondary school",
                    "maternity": "Maternity leave",
                    "programming": "Programming",
                    "paragraph2": "My journey began with JavaScript, and later I moved on to TypeScript. Previously, " +
                        "I was acquainted with Python, but my main focus now is Angular. Currently, I am developing a " +
                        "frontend application for car exchange that combines a user-friendly interface with dynamic client-side logic.",
                    "hobbies": "Hobbies",
                    "paragraph3": "In my free time, I enjoy swimming and taking care of plants :)",
                    "contacts": "Contacts"
                },
                "footer": {
                    "resume": "Resume",
                    "projects": "Projects",
                    "contacts": "Contacts",
                    "podpis": " © 2025 Oksana Arefeva. All rights reserved.",
                }
            }
        },
        cs: {
            translation: {
                "header": {
                    "home": "Domů",
                    "about": "O mně",
                    "contact": "Contact"
                },
                "section1": {
                    "hello": "Ahoj!",
                    "heading": "Něco O Mně",
                    "paragraph": "Jsem ctižádostivý front-end developer, který se v současné době zaměřuje na " +
                        "budování pevných základů ve vývoji webových aplikací. Většinu času se věnuji učení " +
                        "pomocí dělání-procvičování kódu, experimentování s Angular a TypeScript a " +
                        "postupné pochopení toho, jak fungují moderní webové aplikace.",
                },
                "section2": {
                    "aboutMe": "O mně",
                    "presentTime": "2023-dosud",
                    "education": "Education",
                    "Teacher": "Vyučování",
                    "paragraph1": "Bakalářské studium, Togliattská státní univerzita." +
                                    " Obor: Matematika, zaměření: „Vyučování“ ",
                    "experience": "Zkušenosti",
                    "teacher": "Učitel matematiky na základní škole",
                    "maternity": "Mateřská dovolená",
                    "programming": "Programování",
                    "paragraph2": "Má cesta začala s JavaScriptem a poté jsem přešla na TypeScript. " +
                        "Dříve jsem se seznámila s Pythonem, ale nyní se zaměřuji především na Angular. " +
                        "V současnosti vyvíjím frontendovou aplikaci pro výměnu automobilů, která spojuje " +
                        "uživatelsky přívětivé rozhraní s dynamickou logikou na straně klienta.",
                    "hobbies": "Koníčky",
                    "paragraph3": "Ve volném čase ráda plavu a pečuji o rostliny :)",
                    "contacts": "Contacts"
                },
                "footer": {
                    "resume": "Životopis",
                    "projects": "Projects",
                    "contacts": "Contacts",
                    "podpis": "© 2025 Oksana Arefeva. Všechna práva vyhrazena."
                }
            }
        },
        ru: {
            translation: {
                "header": {
                    "home": "Главная",
                    "about": "О себе",
                    "contact": "Контакты"
                },
                "section1": {
                    "hello": "Привет!",
                    "heading": "Немного обо мне",
                    "paragraph": "Я начинающий front-end разработчик, в настоящее время сосредоточенный на " +
                                "создании прочного фундамента в веб-разработке. Большую часть своего времени я посвящаю " +
                                "обучению на практике — отрабатываю код, экспериментирую с Angular и TypeScript и " +
                                "постепенно понимаю, как работают современные веб-приложения"
                },
                "section2": {
                    "aboutMe": "Oбо мне",
                    "presentTime": "2023 - настоящее время",
                    "education": "Образование",
                    "paragraph1": "Бакалавриат, Тольяттинский государственный университет. " +
                                "Специальность: Математика, профиль - Преподавание",
                    "experience": "Опыт",
                    "teacher": "Учитель математики (средняя школа)",
                    "maternity": "Декретный отпуск ",
                    "programming": "Программирование",
                    "paragraph2": "Мой путь начался с JavaScript, а затем перешла к TypeScript. " +
                                "Ранее я знакомилась с Python, но основной фокус сейчас — это Angular. В настоящее время " +
                                "создаю фронтенд-приложение для обмена автомобилями, где сочетаются удобный пользовательский " +
                                "интерфейс и динамическая логика на стороне клиента. ",
                    "hobbies": "Хобби",
                    "paragraph3": "В свободное время люблю плавать и ухаживать за растениями :)",
                    "contacts": "Контакты"
                },
                "footer": {
                    "resume": "Резюме",
                    "projects": "Проекты",
                    "contacts": "Контакты",
                    "podpis": "© 2025 Оксана Арефьева. Все права защищены."
                }
            }
        },
    }
}).then(updateContent());


    const toggleButton = document.getElementById('dropdownToggle');
    const menu = document.getElementById('dropdownMenu');
    const burgerLang = document.getElementById('burgerLang');
    const toggle = document.getElementById('burgerToggle');


    toggle.addEventListener('click', () => {
        burgerLang.classList.toggle("show");
    })
    document.querySelector('.burger-menu').addEventListener('click', e => {
        i18next.changeLanguage(e.target.className).then(updateContent);
    })


    toggleButton.addEventListener('click', () => {
        menu.classList.toggle("show");
    });
    document.querySelector('.lang-menu').addEventListener('click', e => {
        i18next.changeLanguage(e.target.className).then(updateContent);
    })


    document.addEventListener('click', e => {
        if (!e.target.closest(".lang")) {
            menu.classList.remove("show");
        }
        if (!e.target.closest('.burgerLang')) {
            burgerLang.classList.remove('show');
        }
    })







