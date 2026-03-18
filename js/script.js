// 1. 프로젝트 상세 데이터
const projectData = {
  res_1: {
    title: "Responsive Web 01",
    tags: ["시각적 내비게이션 시스템", "반응형 브랜딩 UI", "적응형 인터랙션 디자인"],
    edu: "단조로운 풀페이지 구조를 빼고, 잡지 느낌의 레이아웃을 통해 바이레도만 특유의 고급스러움을 재해석한 리디자인 입니다.",
    img: "./img2/BYREDO_Redesign1.jpg",
  },
  res_2: {
    title: "Responsive Web 02",
    tags: ["CSS 변수 시스템", "가변형 유동 레이아웃", "인터랙션 UI 컴포넌트"],
    edu: "Root을 활용한 CSS 변수 기반 설계로 디자인 일관성 확보, 미디어 쿼리와 제이쿼리를 결합한 유동적 가변형 레이아웃 및 아코디언 메뉴 시스템을 구현한 디자인",
    img: "./img2/archigarden_design.jpg",
  },
  res_3: {
    title: "Responsive Web 03",
    tags: ["Semantic Markup", "Typography", "Media Query"],
    edu: "수업 웹 구조 기반 타이포그래피와 여백 시스템 재정의, 제이쿼리 슬라이드 토글을 활용한 모바일 내비게이션 구현, 실무 중심 반응형 웹 리디자인 입니다.",
    img: "./img2/homepp_Redesign.jpg",
  },
  pc_1: {
    title: "Redesign 01",
    tags: ["가변형 컴포넌트", "다중 테마 시스템"],
    edu: "Ui Kit의 구조적 일관성을 유지하면서, 테마별 느낌을 다양하게 줄 수 있다는 것을 보여주기 위한 리디자인 입니다.",
    img: "./img2/Ui_Kit_Redesign.jpg",
  },
  pc_2: {
    title: "Redesign 02",
    tags: ["그리드 시스템 디자인", "모듈형 UI 키트"],
    edu: "Figma의 Auto Layout 시스템을 CSS 변수 기반의 Grid System으로 제작, 일관성과 시각적 리듬감을 준 리디자인 입니다.",
    img: "./img2/Ui_Kit_Redesign2.jpg",
  },
  app_1: {
    title: "Concept App 01",
    tags: ["피그마", "프로토타입", "컴포넌트"],
    edu: "산지의 신선함을 담은 '오늘의 제철'브랜드를 피그마 프로토타입으로 구현하여, 컴포넌트 기반의 경험을 설계한 앱 디자인",
    img: "./img2/App_Design.jpg",
  },
  app_2: {
    title: "Concept App 02",
    tags: ["Interactive", "Prototype"],
    edu: "머숨",
    img: "",
  },
  etc_1: {
    title: "Graphics Gallery 01",
    tags: ["Banner", "Book Cover"],
    edu: "배너 디자인",
    img: "",
  },
  etc_2: {
    title: "Graphics Gallery 02",
    tags: ["Banner", "Book Cover"],
    edu: "북커버 디자인",
    img: "",
  },
};

// 2. fullPage.js 초기화
new fullpage("#fullpage", {
  anchors: ["home", "responsive", "redesign", "concept-app", "graphics", "contact"],
  menu: "#menu", //상단메뉴 내 nav id값
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ["home", "responsive", "redesign", "concept-app", "graphics", "contact"],
  showActiveTooltip: false,
  responsiveWidth: 768,
  afterLoad: function (origin, destination) {
    if (destination.anchor === "home")
      document.querySelector(".logo").style.opacity = "1";
  },
});

// 3. 햄버거 메뉴 제어
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mo-nav-menu");

hamburger.onclick = () => {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("active");
};

// 모바일 메뉴 클릭 시 닫기
document.querySelectorAll(".mo-nav-menu a").forEach((link) => {
  link.onclick = () => {
    hamburger.classList.remove("active");
    mobileNav.classList.remove("active");
  };
});

// 4. 모달 로직
const modal = document.getElementById("modalContainer");
const modalBody = document.getElementById("modalBody");

document.querySelectorAll(".open-modal").forEach((btn) => {
  btn.onclick = function () {
    const d = projectData[this.getAttribute("data-id")];
    if (d) {
      modalBody.innerHTML = `
                <div>${d.tags
                  .map((t) => `<span class="tag">#${t}</span>`)
                  .join("")}</div>
                <h2 style="margin:15px 0; font-size:2rem;">${d.title}</h2>
                <div class="edu-note"><strong>💡 Instructor's Point:</strong> ${
                  d.edu
                }</div>
                <img src="${d.img}" alt="work">
            `;
      modal.style.display = "block";
      setTimeout(() => modal.classList.add("active"), 10);
      fullpage_api.setAllowScrolling(false);
    }
  };
});

window.onclick = (e) => {
  if (e.target == modal || e.target.classList.contains("close-btn")) {
    modal.classList.remove("active");
    setTimeout(() => (modal.style.display = "none"), 400);
    fullpage_api.setAllowScrolling(true);
  }
};
