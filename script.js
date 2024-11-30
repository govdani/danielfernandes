const translations = {
    "pt-br": {
        "translate": "PT-BR",
        "introductionTitle": "Introdução",
        "aboutTitle": "Quem sou eu?",
        "skillsTitle": "Conhecimentos",
        "socialTitle": "Redes sociais",
        "clients": "Clientes",
        "profileLocation": "Campinas, São Paulo",
        "profilePhone": "Em breve",
        "profileEmail": "embreve@gmail.com",
        "profileJob": "Infinity Studio",
        "informations": "Informações",
        "introContent": [
            "👑 • Dono da Infinity Studio",
            "🎨 • Especialista em Design Gráfico",
            "📚 • Estudando para criações de Site e visuais em FIGMA"
        ],
        "aboutContent": "Olá! Meu nome é Daniel Fernandes Fanhani, tenho 17 anos e atualmente estou focado no desenvolvimento web. Desenvolvo interfaces para diversos tipos de negócios, mas minha especialidade está no universo do jogo Grand Theft Auto (GTA), especificamente GTA RP. Com mais de 800 clientes atendidos e 400 servidores personalizados, meu objetivo vai além de entregar um bom serviço, ser o parceiro ideal para o sucesso do seu projeto!",
        "jobs": "Infinity Studio",
        "socialGitHub": "GitHub",
        "socialDiscord": "Discord",
    },
    "en-us": {
        "translate": "EN-US",
        "introductionTitle": "Introduction",
        "aboutTitle": "Who am I?",
        "skillsTitle": "Skills",
        "socialTitle": "Social networks",
        "clients": "Customers",
        "profileLocation": "Campinas, São Paulo, Brazil",
        "profilePhone": "Coming soon",
        "profileEmail": "embreve@gmail.com",
        "profileJob": "Infinity Studio",
        "informations": "Information",
        "introContent": [
            "👑 • Owner of Infinity Studio",
            "🎨 • Graphic Design Specialist",
            "📚 • Studying for website creations and visuals in FIGMA"
        ],
        "aboutContent": "Hello! My name is Daniel Fernandes Fanhani, I'm 17 years old and I'm currently focused on web development. I develop interfaces for different types of businesses, but my specialty is in the world of the game Grand Theft Auto (GTA), specifically GTA RP. With more than 800 clients served and 400 personalized servers, my objective goes beyond delivering a good service, to being the ideal partner for the success of your project!",
        "jobs": "Infinity Studio",
        "socialGitHub": "GitHub",
        "socialSpotify": "Spotify",
        "socialDiscord": "Discord",
        "socialSteam": "Steam"
    }
}

function updateProfileInfo(lang) {
    const profileInfoItems = document.querySelectorAll('.profile-info p');
    profileInfoItems.forEach((item, index) => {
        const img = item.querySelector('img');
        const key = ['profileLocation', 'profilePhone', 'profileEmail', 'profileJob'][index];

        if (key === 'profileJob') {
            const link = item.querySelector('a');
            if (link) {
                link.textContent = translations[lang][key];
            }
        } else {
            if (img) {
                item.innerHTML = img.outerHTML + ' ' + translations[lang][key];
            } else {
                item.textContent = translations[lang][key];
            }
        }
    });
}

function translatePage(lang) {
    const elementsToTranslate = document.querySelectorAll('[data-key]');

    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            if (Array.isArray(translations[lang][key])) {
                element.innerHTML = translations[lang][key].join('<br>');
            } else {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else if (element.querySelector('img, svg')) {
                    const nodes = Array.from(element.childNodes);
                    const textNode = nodes.find(node => node.nodeType === Node.TEXT_NODE);
                    if (textNode) {
                        textNode.textContent = ' ' + translations[lang][key];
                    } else {
                        element.appendChild(document.createTextNode(' ' + translations[lang][key]));
                    }
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        }
    });

    document.querySelector('.translate p').textContent = translations[lang].translate;

    updateProfileInfo(lang);
}

document.addEventListener('DOMContentLoaded', function () {
    let currentLang = 'pt-br';
    const translateButton = document.querySelector('.translate');

    translateButton.addEventListener('click', function () {
        currentLang = currentLang === 'pt-br' ? 'en-us' : 'pt-br';
        translatePage(currentLang);
    });

    translatePage(currentLang);
});

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById('navbar-links');

    navbar.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });

    navbar.addEventListener('dragstart', function (event) {
        event.preventDefault();
    });
});


// TEMA DARK MODE E LIGHT MODE
const themeButton = document.querySelector('.theme');
themeButton.addEventListener('click', toggleTheme);

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'dark';

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

setInitialTheme();