import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  gsap.to("#js-footer-btn", {
    opacity: 1,
    duration: 0.3,
    ease: "power2.out",
    pointerEvents: "auto",
    scrollTrigger: {
      trigger: "body", // 全ページのスクロールを監視
      start: "top+=300px", // 300px スクロールしたら発火
      toggleActions: "play reverse play reverse", // 下スクロールで表示・上スクロールで非表示
    },
  });
});
