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
  const modals = [
    {
      btnId: "translateBtn1",
      titleId: "translateTitle1",
      contentId: "translateContent1",
      clientId: "translateClient1",
      categoryId: "translateCategory1",
      translations: {
        title: {
          kr: "I AM",
          en: "I AM",
          ja: "I AM"
        },
        content: {
            kr: `이름: 이재원<br>생년월일: 2003/2/5<br>전화번호: 010-3193-@@@@<br>e-mail: nyse**@naver.com`,
            en: `Name: Jaewon Lee<br>Date of Birth: February 5, 2003<br>Phone: 010-3193-@@@@<br>e-mail: nyse**@naver.com`,
            ja: `名前: イ・ジェウォン<br>生年月日: 2003年2月5日<br>電話番号: 010-3193-@@@@<br>メール: nyse**@naver.com`
        },
        client: {
          kr: "-",
          en: "-",
          ja: "-"
        },
        category: {
          kr: "-",
          en: "-",
          ja: "-"
        }
      }
    },
    {
      btnId: "translateBtn2",
      titleId: "translateTitle2",
      contentId: "translateContent2",
      clientId: "translateClient2",
      categoryId: "translateCategory2",
      translations: {
        title: {
          kr: "젠틀몬스터 홈페이지 디자인(예정)",
          en: "Gentle Monster Homepage Design (Planned)",
          ja: "ジェントルモンスター ホームページデザイン (予定)"
        },
        content: {
          kr: `젠틀몬스터의 브랜드 이미지를 반영한 세련된 웹페이지 디자인을 할 예정입니다. HTML/CSS와 JavaScript를 활용해 반응형 웹사이트를 제작하며, 젠틀몬스터의 현대적인 감각과 사용자 경험을 강조한 인터랙티브 요소도 추가할 계획입니다.`,
          en: `A sophisticated web page design reflecting Gentle Monster's brand image will be created. Using HTML/CSS and JavaScript, a responsive website will be developed, emphasizing Gentle Monster's modern sensibility and user experience with interactive elements.`,
          ja: `ジェントルモンスターのブランドイメージを反映した洗練されたウェブページデザインを行う予定です。HTML/CSSとJavaScriptを活用してレスポンシブなウェブサイトを制作し、ジェントルモンスターの現代的な感覚とユーザー体験を強調したインタラクティブな要素も追加する予定です。`
        },
        client: {
          kr: "Gentle Monster",
          en: "Gentle Monster",
          ja: "Gentle Monster"
        },
        category: {
          kr: "웹사이트 개발",
          en: "Website Development",
          ja: "ウェブサイト開発"
        }
      }
    },
    {
      btnId: "translateBtn3",
      titleId: "translateTitle3",
      contentId: "translateContent3",
      clientId: "translateClient3",
      categoryId: "translateCategory3",
      translations: {
        title: {
          kr: "진격의 거인(예정)",
          en: "Attack on Titan (Planned)",
          ja: "進撃の巨人 (予定)"
        },
        content: {
          kr: `진격의 거인 세계관을 기반으로, JavaScript와 Python을 활용한 웹 기반 게임을 기획 중입니다. 캐릭터의 움직임과 적과의 전투를 구현하며, 간단한 게임 로직과 애니메이션 효과를 중심으로 개발할 예정입니다.`,
          en: `Based on the world of Attack on Titan, we are planning to create a web-based game using JavaScript and Python. It will feature character movement, combat with enemies, and focus on simple game logic and animation effects.`,
          ja: `進撃の巨人の世界観を基に、JavaScriptとPythonを活用したウェブベースのゲームを企画中です。キャラクターの動きや敵との戦闘を実装し、シンプルなゲームロジックとアニメーション効果に重点を置いて開発する予定です。`
        },
        client: {
          kr: "개인 프로젝트",
          en: "Personal Project",
          ja: "個人プロジェクト"
        },
        category: {
          kr: "게임 개발",
          en: "Game Development",
          ja: "ゲーム開発"
        }
      }
    },
      {
      btnId: "translateBtn4",
      titleId: "translateTitle4",
      contentId: "translateContent4",
      clientId: "translateClient4",
      categoryId: "translateCategory4",
      translations: {
        title: {
          kr: "AI 개발(예정)",
          en: "AI Development (Planned)",
          ja: "AI開発 (予定)"
        },
        content: {
          kr: `사용자별 데이터를 분석하여 개인화된 콘텐츠와 서비스를 제공하는 AI를 개발할 계획입니다. Python으로 머신러닝과 자연어처리 기술을 학습하며, 사용자 피드백을 반영해 맞춤형 추천, 대화형 응답, 자동화된 일정관리 등 실생활에 도움이 되는 기능을 구현할 예정입니다. 또한, IoT와 결합해 방의 전자기기와 조명 등을 원격으로 제어할 수 있는 스마트홈 시스템을 설계해, 집 밖에서도 편리하게 기기를 관리할 수 있도록 만들고자 합니다.`,
          en: `We plan to develop an AI that analyzes user-specific data to provide personalized content and services. We will study machine learning and natural language processing with Python, incorporating user feedback to implement features such as customized recommendations, conversational responses, and automated schedule management, making daily life more convenient. Additionally, we aim to integrate this with IoT to design a smart home system that allows remote control of electronic devices and lighting in the room, enabling users to manage their devices conveniently even when away from home.`,
          ja: `ユーザーごとのデータを分析し、パーソナライズされたコンテンツやサービスを提供するAIを開発する予定です。Pythonで機械学習や自然言語処理技術を学び、ユーザーのフィードバックを反映しながら、カスタマイズされたレコメンデーション、対話型応答、自動化されたスケジュール管理など、日常生活に役立つ機能を実装します。また、IoTと連携し、部屋の電子機器や照明などを遠隔で制御できるスマートホームシステムを設計し、外出先からでも便利に機器を管理できるようにすることを目指します。`
        },
        client: {
          kr: "개인 프로젝트",
          en: "Personal Project",
          ja: "個人プロジェクト"
        },
        category: {
          kr: "AI",
          en: "AI",
          ja: "AI"
        }
      }
    },
    {
      btnId: "translateBtn5",
      titleId: "translateTitle5",
      contentId: "translateContent5",
      clientId: "translateClient5",
      categoryId: "translateCategory5",
      translations: {
        title: {
          kr: "승부예측 프로그램(예정)",
          en: "Match Prediction Program (Planned)",
          ja: "勝負予測プログラム (予定)"
        },
        content: {
          kr: `각 팀의 선수 부상 여부, 최근 경기 전적, 팀의 승률, 맞대결 기록 등 다양한 데이터를 종합하여 승부를 예측하는 프로그램을 개발할 예정입니다. Python으로 데이터 분석과 머신러닝 모델을 학습해 예측 정확도를 높이는 것을 목표로 하고 있습니다.`,
          en: `We plan to develop a program that predicts the outcome of games by integrating various data such as player injuries, recent match results, team win rates, and head-to-head records. Our goal is to improve prediction accuracy by using Python for data analysis and machine learning model training.`,
          ja: `各チームの選手の負傷状況、直近の試合成績、チームの勝率、直接対決の記録など、さまざまなデータを総合して勝敗を予測するプログラムを開発する予定です。Pythonでデータ分析や機械学習モデルを学習し、予測の精度を高めることを目指します。`
        },
        client: {
          kr: "개인 프로젝트",
          en: "Personal Project",
          ja: "個人プロジェクト"
        },
        category: {
          kr: "프로그램 개발",
          en: "Program Development",
          ja: "プログラム開発"
        }
      }
    },
    {
      btnId: "translateBtn6",
      titleId: "translateTitle6",
      contentId: "translateContent6",
      clientId: "translateClient6",
      categoryId: "translateCategory6",
      translations: {
        title: {
          kr: "비밀번호 진단 프로그램(예정)",
          en: "Password Diagnosis Program (Planned)",
          ja: "パスワード診断プログラム (予定)"
        },
        content: {
          kr: `사용자가 설정한 비밀번호의 보안 강도를 분석하고, 취약한 비밀번호를 자동으로 알려주는 프로그램을 개발할 예정입니다. JavaScript와 Python으로 비밀번호 안전성 점검 알고리즘을 구현하고, 사용자에게 안전한 비밀번호 사용을 유도하는 가이드를 제공합니다.`,
          en: `We plan to develop a program that analyzes the security of user-set passwords and automatically notifies users of weak passwords. We will implement a password security check algorithm using JavaScript and Python, and provide a guide to encourage users to use secure passwords.`,
          ja: `ユーザーが設定したパスワードの安全性を分析し、脆弱なパスワードを自動的に知らせるプログラムを開発する予定です。JavaScriptとPythonでパスワードの安全性診断アルゴリズムを実装し、ユーザーに安全なパスワードの使用を促すガイドを提供します。`
        },
        client: {
          kr: "개인 프로젝트",
          en: "Personal Project",
          ja: "個人プロジェクト"
        },
        category: {
          kr: "보안",
          en: "Security",
          ja: "セキュリティ"
        }
      }
    }
  ];

  let currentLang = "kr";

  // 공통 번역 버튼 클릭 처리
  modals.forEach((modal) => {
    const btn = document.querySelector(`#${modal.btnId}`);
    if (!btn) return; // 버튼 없으면 스킵

    btn.addEventListener("click", () => {
      // 다음 언어로 전환
      if (currentLang === "kr") {
        currentLang = "en";
        btn.textContent = "Translate";
      } else if (currentLang === "en") {
        currentLang = "ja";
        btn.textContent = "翻訳";
      } else {
        currentLang = "kr";
        btn.textContent = "번역";
      }

      // title 번역
      if (modal.titleId && modal.translations.title && document.querySelector(`#${modal.titleId}`)) {
        document.querySelector(`#${modal.titleId}`).textContent = modal.translations.title[currentLang];
      }

      // content 번역
      if (modal.contentId && modal.translations.content && document.querySelector(`#${modal.contentId}`)) {
        document.querySelector(`#${modal.contentId}`).innerHTML = modal.translations.content[currentLang];
      }

      // category 번역
      if (modal.categoryId && modal.translations.category && document.querySelector(`#${modal.categoryId}`)) {
        document.querySelector(`#${modal.categoryId}`).textContent = modal.translations.category[currentLang];
      }

      // client 번역
      if (modal.clientId && modal.translations.client && document.querySelector(`#${modal.clientId}`)) {
        document.querySelector(`#${modal.clientId}`).textContent = modal.translations.client[currentLang];
      }
    });
  });
});
