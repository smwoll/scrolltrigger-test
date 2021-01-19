import "./styles.scss";
console.log("hello world!");

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// gsap.from(".right", {
//   duration: 5,
//   x: "-50vw",
//   rotation: -360,
//   ease: "linear",
//   scrollTrigger: {
//     trigger: ".right",
//     markers: true,

//     start: "top 75%", //when top of herman passes 75% viewport height
//     end: "bottom 25%", //when bottom of herman passes 25% viewport height

//     //events: onEnter onLeave onEnterBack onLeaveBack
//     toggleActions: "restart complete reverse reset",
//     //options: play, pause, resume, reset, restart, complete, reverse,none
//   },
// });

// leftside item entering from left
const left = gsap.utils.toArray(".left");
left.forEach((left) => {
  gsap.from(left, {
    xPercent: "-150",
    opacity: "0",
    borderRadius: "100%",
    rotate: "-360",
    scrollTrigger: {
      trigger: left,
      scrub: true,
      start: "top 100%", //when top of item reaches 100% viewport height
      end: "center 50%", //when center of item reaches 50% viewport height
    },
  });
});

// rightside item entering from right
const right = gsap.utils.toArray(".right");
right.forEach((right) => {
  gsap.from(right, {
    xPercent: "150",
    scrollTrigger: {
      trigger: right,
      scrub: true,
      start: "top 100%", //when top of item reaches 100% viewport height
      end: "center 50%", //when center of item reaches 50% viewport height
    },
  });
});
