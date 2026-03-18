const inner = document.querySelector('.ring--inner');
const outer = document.querySelector('.ring--outer');
const title = document.querySelector('.title');
const line = document.querySelector('.underline');

// 1. 초기 상태 설정 (멀리서 날아올 준비)
// outer는 더 크고 멀리서, inner는 조금 더 가깝게 설정하여 입체감 부여
gsap.set([inner, outer], { xPercent: -50, yPercent: -50, opacity: 0 });
gsap.set(outer, { z: -3000, scale: 20, filter: 'blur(15px)' });
gsap.set(inner, { z: -1500, scale: 10, filter: 'blur(10px)' });

const mainTL = gsap.timeline({ defaults: { ease: "power3.out" } });

// 2. 인트로: 두 개의 링이 시차를 두고 날아옴
mainTL
  .to(outer, {
    duration: 2.2,
    z: 0,
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)'
  })
  .to(inner, {
    duration: 1.8,
    z: 0,
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)'
  }, "-=1.6") // outer가 날아오는 도중에 inner 시작

// 3. 심장박동 (Heartbeat) - 기존 로직 유지
  .to([inner, outer], {
    duration: 0.15,
    scale: 1.1,
    repeat: 3,
    yoyo: true,
    ease: "power2.inOut"
  })

// 4. 변형 (Morph): 링이 글자 아래 바 위치로 납작해지며 이동
// 이 과정에서 링은 사라지고 실제 underline이 나타납니다.
  .to([inner, outer], {
    duration: 0.7,
    y: 80, // 글자 아래쪽으로 이동
    scaleX: 2.0,
    scaleY: 0.01,
    opacity: 0,
    filter: 'blur(5px)',
    ease: "power2.inOut"
  }, "+=0.5")

// 5. 최종 등장: 글자와 언더라인이 자석처럼 붙으며 나타남
  .to(line, {
    duration: 0.6,
    width: "60%", // 반응형 너비
    maxWidth: "200px",
    opacity: 1,
    ease: "back.out(1.7)"
  }, "-=0.3")
  .to(title, {
    duration: 1,
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    ease: "power4.out",
    onStart: () => {
      // 글자가 나타날 때 살짝 '반짝 하는 느낌을 주고 싶다면 CSS 필터를 잠시 조절 할 수 있습니다.
      gsap.to(title, {filter: "brightness(2) blur(0px)", duration: 0.2, yoyo: true, repeat: 1});
    }
  }, "-=0.7");

// 리사이즈 대응: 창 크기가 변해도 위치를 유지하기 위해 
// CSS Flexbox를 사용했으므로 별도의 리사이즈 JS는 필요 없습니다.