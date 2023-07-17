let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
    sidebar.classList.toggle("active");
};



//**====================CHANGE SECTIONS CODE====================//
//**============================================================//

document.addEventListener("DOMContentLoaded", function () {
    const welcomeSection = document.querySelector("#welcome");
    const sections = document.querySelectorAll(".section");
    const logoContent = document.querySelector(".logo_content");
    const logoContent2 = document.querySelector(".logo_content2");

    // Mostrar o texto de boas-vindas inicialmente
    welcomeSection.classList.add("visible");

    // Função para atualizar o conteúdo da seção
    function updateContent(sectionId) {
        // Remover a classe "visible" de todas as seções
        sections.forEach(function (section) {
            section.classList.remove("visible");
        });

        // Adicionar a classe "visible" apenas para a seção correspondente
        const sectionToShow = document.querySelector(sectionId);
        sectionToShow.classList.add("visible");
    }

    // Atualizar o conteúdo da seção ao clicar nos itens do menu
    const menuItems = document.querySelectorAll(".nav_list li a, #contactMeBtn a");
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("click", function (e) {
            e.preventDefault();
            const sectionId = menuItem.getAttribute("href");
            updateContent(sectionId);
        });
    });

    // Mostrar o texto de boas-vindas ao clicar no logo_content
    logoContent.addEventListener("click", function () {
        updateContent("#welcome");
    });

    logoContent2.addEventListener("click", function () {
        updateContent("#welcome");
    });
});

//**=======================CHANGE NAVBAR========================//
//**============================================================//
const sidebarB = document.querySelector('.sidebar');
const bottombarMobile = document.querySelector('.bottombar_mobile');

function toggleBars() {
    if (window.innerWidth <= 768) {
        sidebarB.style.display = 'none';
        bottombarMobile.style.display = 'block';
    } else {
        sidebarB.style.display = 'block';
        bottombarMobile.style.display = 'none';
    }
}

// Chama a função inicialmente para definir a exibição correta das barras no carregamento da página
window.addEventListener('DOMContentLoaded', toggleBars);

// Ouve o evento de redimensionamento da janela e chama a função para atualizar a exibição das barras
window.addEventListener('resize', toggleBars);


//**======================HAMBURGER NAVBAR======================//
//**============================================================//

const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});


//**=========================ANIMATIONS=========================//
//**============================================================//
const secondElement = document.querySelector('.imageIllustration');

setTimeout(() => {
    secondElement.classList.add('fade-in');
}, 300);

const secondElement2 = document.querySelector('.imageIllustration_2');

setTimeout(() => {
    secondElement2.classList.add('fade-in');
}, 300);

//SCROLL TEXT CODE
// const scrollIndicator = document.getElementById("scroll-indicator");
// const sectionsToShow = document.querySelectorAll(".section");

// function updateScrollIndicator() {
//     const contentHeight = Math.max(
//         document.body.scrollHeight,
//         document.body.offsetHeight,
//         document.documentElement.clientHeight,
//         document.documentElement.scrollHeight,
//         document.documentElement.offsetHeight
//     );

//     const windowHeight = window.innerHeight || document.documentElement.clientHeight;
//     const scrollY = window.pageYOffset || document.documentElement.scrollTop;
//     const scrollPosition = scrollY + windowHeight;

//     let anySectionVisible = false;

//     sectionsToShow.forEach((section) => {
//         if (section.classList.contains("visible")) {
//             anySectionVisible = true;
//             return;
//         }
//     });

//     if (anySectionVisible && contentHeight > windowHeight && scrollPosition < contentHeight) {
//         scrollIndicator.classList.add("active");
//     } else {
//         scrollIndicator.classList.remove("active");
//     }
// }

// // Atualiza o indicador de scroll assim que qualquer seção alvo se torna visível
// sectionsToShow.forEach((section) => {
//     section.addEventListener("animationend", function () {
//         updateScrollIndicator();
//     });
// });

// // Atualiza o indicador de scroll ao rolar a página
// window.addEventListener("scroll", updateScrollIndicator);





//**========================PROGRESS BAR========================//
//**============================================================//
document.addEventListener('DOMContentLoaded', function () {
    var progressBars = document.querySelectorAll('.progress .progress-bar');
    progressBars.forEach(function (progressBar) {
        progressBar.style.width = progressBar.getAttribute('aria-valuenow') + '%';
    });

    var countPrs = document.querySelectorAll('.count_pr');
    countPrs.forEach(function (countPr) {
        countPr.style.left = countPr.getAttribute('data-percent') + '%';
    });
});
