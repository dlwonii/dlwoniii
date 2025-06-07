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

document.addEventListener("DOMContentLoaded", () => {
  const translateBtn2 = document.querySelector("#translateBtn2");
  const translateContent2 = document.querySelector("#translateContent2");

  const translations2 = {
    kr: "젠틀몬스터의 브랜드 이미지를 반영한 세련된 웹페이지 디자인을 할 예정입니다. HTML/CSS와 JavaScript를 활용해 반응형 웹사이트를 제작하며, 젠틀몬스터의 현대적인 감각과 사용자 경험을 강조한 인터랙티브 요소도 추가할 계획입니다.",
    en: "A sophisticated web page design reflecting Gentle Monster's brand image will be created. Using HTML/CSS and JavaScript, a responsive website will be developed, emphasizing Gentle Monster's modern sensibility and user experience with interactive elements.",
    ja: "ジェントルモンスターのブランドイメージを反映した洗練されたウェブページデザインを行う予定です。HTML/CSSとJavaScriptを活用してレスポンシブなウェブサイトを制作し、ジェントルモンスターの現代的な感覚とユーザー体験を強調したインタラクティブな要素も追加する予定です。"
  };

  let currentLang2 = "kr";

  translateBtn2.addEventListener("click", () => {
    if (currentLang2 === "kr") {
      translateContent2.textContent = translations2.en;
      translateBtn2.textContent = "Translate";
      currentLang2 = "en";
    } else if (currentLang2 === "en") {
      translateContent2.textContent = translations2.ja;
      translateBtn2.textContent = "翻訳";
      currentLang2 = "ja";
    } else {
      translateContent2.textContent = translations2.kr;
      translateBtn2.textContent = "번역";
      currentLang2 = "kr";
    }
  });
});
