/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const translateBtn2 = document.querySelector("#translateBtn2");
const translateContent2 = document.querySelector("#translateContent2");
const translateTitle2 = document.querySelector("#translateTitle2");
const translateCategory2 = document.querySelector("#translateCategory2");

const translations2 = [
  {
    btnText: "번역",
    title: "젠틀몬스터 홈페이지 디자인(예정)",
    content: "젠틀몬스터의 브랜드 이미지를 반영한 세련된 웹페이지 디자인을 할 예정입니다. HTML/CSS와 JavaScript를 활용해 반응형 웹사이트를 제작하며, 젠틀몬스터의 현대적인 감각과 사용자 경험을 강조한 인터랙티브 요소도 추가할 계획입니다.",
    category: "웹사이트 디자인"
  },
  {
    btnText: "Translate",
    title: "Gentle Monster Website Design (Planned)",
    content: "I plan to create a sophisticated website design that reflects the brand image of Gentle Monster. Using HTML/CSS and JavaScript, I will build a responsive website and add interactive elements to highlight Gentle Monster's modern sense and user experience.",
    category: "Website Design"
  },
  {
    btnText: "翻訳",
    title: "ジェントルモンスターのウェブサイトデザイン（予定）",
    content: "ジェントルモンスターのブランドイメージを反映した洗練されたウェブページをデザインする予定です。HTML/CSSとJavaScriptを活用し、レスポンシブなウェブサイトを構築するとともに、ジェントルモンスターのモダンな感覚とユーザー体験を強調するインタラクティブな要素も追加する予定です。",
    category: "ウェブサイトデザイン"
  }
];

let currentLang2 = 0;
translateBtn2.addEventListener("click", () => {
  currentLang2 = (currentLang2 + 1) % translations2.length;
  const translation = translations2[currentLang2];
  
  translateBtn2.textContent = translation.btnText;
  translateTitle2.textContent = translation.title;
  translateContent2.textContent = translation.content;
  translateCategory2.textContent = translation.category;
});
