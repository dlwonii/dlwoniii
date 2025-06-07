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

const translations2 = [
  {
    label: '번역',
    text: '젠틀몬스터의 브랜드 이미지를 반영한 세련된 웹페이지 디자인을 할 예정입니다. HTML/CSS와 JavaScript를 활용해 반응형 웹사이트를 제작하며, 젠틀몬스터의 현대적인 감각과 사용자 경험을 강조한 인터랙티브 요소도 추가할 계획입니다.'
  },
  {
    label: 'Translate',
    text: 'I plan to create a sophisticated web page design that reflects Gentle Monster’s brand image. Using HTML/CSS and JavaScript, I will create a responsive website, adding interactive elements that emphasize Gentle Monster’s modern aesthetic and user experience.'
  },
  {
    label: '翻訳',
    text: 'ジェントルモンスターのブランドイメージを反映した洗練されたウェブページデザインを作成する予定です。HTML/CSSとJavaScriptを使用してレスポンシブなウェブサイトを構築し、ジェントルモンスターのモダンな感覚とユーザー体験を強調するインタラクティブな要素を追加します。'
  }
];

const btn2 = document.querySelector('#translateBtn2');
const content2 = document.querySelector('#translateContent2');
let index2 = 0;

btn2.addEventListener('click', () => {
  index2 = (index2 + 1) % translations2.length;
  const current = translations2[index2];
  content2.innerText = current.text;
  btn2.innerText = current.label;
});
