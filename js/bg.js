const clearBg = document.getElementById('clear-bg');

if (clearBg) {
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        /* [핵심 보정 계산]
          마스크 판이 화면보다 가로/세로 각각 100%씩 더 크기 때문에,
          마우스 좌표에서 현재 창의 너비(innerWidth)와 높이(innerHeight)를 빼주면
          200%짜리 마스크 판의 정중앙이 포인터 위치와 일치하게 됩니다.
        */
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