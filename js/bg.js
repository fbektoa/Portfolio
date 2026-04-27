/* const clearBg = document.getElementById('clear-bg');

if (clearBg) {
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        //[핵심 보정 계산]
        //마스크 판이 화면보다 가로/세로 각각 100%씩 더 크기 때문에,
        // 마우스 좌표에서 현재 창의 너비(innerWidth)와 높이(innerHeight)를 빼주면
        //200%짜리 마스크 판의 정중앙이 포인터 위치와 일치하게 됩니다.
        
        const moveX = mouseX - window.innerWidth;
        const moveY = mouseY - window.innerHeight;

        gsap.to(clearBg, {
            duration: 0.6,
            ease: "power2.out",
            webkitMaskPosition: `${moveX}px ${moveY}px`,
            maskPosition: `${moveX}px ${moveY}px`
        });
    });
} */






const clearBg = document.getElementById('clear-bg');

// 1. 터치 기기(아이패드, 아이폰 등)인지 판별하는 변수
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (clearBg) {
    // 2. PC(마우스가 있는 환경)에서만 마스크 효과 실행
    if (!isTouchDevice) {
        window.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // 마스크 판의 중심을 포인터 위치와 맞추는 보정 계산
            const moveX = mouseX - window.innerWidth;
            const moveY = mouseY - window.innerHeight;

            gsap.to(clearBg, {
                duration: 0.6,
                ease: "power2.out",
                webkitMaskPosition: `${moveX}px ${moveY}px`,
                maskPosition: `${moveX}px ${moveY}px`
            });
        });
    } 
    // 3. 아이패드/모바일 등 터치 기기일 때 실행
    else {
        // 마스크 속성을 강제로 제거하여 배경 이미지가 바로 보이게 설정
        clearBg.style.webkitMaskImage = 'none';
        clearBg.style.maskImage = 'none';
        
        // iOS 배경 확대 버그 방지를 위해 고정 속성도 함께 해제 (JS로 처리)
        clearBg.style.backgroundAttachment = 'scroll';
    }
}

