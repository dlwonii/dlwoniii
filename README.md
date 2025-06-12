# dlwoniii

주소:https://dlwonii.github.io/dlwoniii/

테마 출처:https://startbootstrap.com/previews/agency

사진 출처:<br>https://holix.com<br>
        EPL<br>
        Gentle Monster<br>
        https://www.genetec.com/ko/blog/cybersecurity/putting-ai-to-work-for-the-security-industry<br>
        https://namu.wiki/w/104기%20훈련병단<br><br>

**<br>
-추가 기능: <번역><br>포트폴리오 페이지에서 왼쪽 상단 번역 버튼을 누르면 내용이 번역됩니다.<br>
-코드 위치: js파일 js/scripts.js 56번째 줄 ~ 끝<br>
-코드 설명: <br>
웹 페이지가 모두 로드되면 document.addEventListener("DOMContentLoaded", () => { ... })를 통해 코드 실행을 시작합니다.<br>
포트폴리오의 제목, 내용, 카테고리, 클라이언트 부분에 각각의 아이디를 부여 후 해당 내용을 각각 한국어, 일본어, 영어로 번역하여 포트폴리오 별로 배열을 생성합니다. 이때 번역 버튼에도 아이디를 부여해 현재 언어에 맞게 번역이라는 글자도 번역될 수 있도록 합니다.<br>
currentlang이라는 변수를 이용해 kr이면 한국어,jp면 일본어 ,en이면 영어임을 파악한 합니다<br>
forEach 문으로 각 버튼에 클릭 이벤트를 연결하고,번역 버튼을 눌렀을 때 한국어라면 영어로, 영어라면 일본어로 번역된 내용을 해당되는 부분에 textContent와 innerHTML을 사용해 제목, 내용, 카테고리, 클라이언트 요소의 내용을 해당 언어로 변경합니다.<br>
