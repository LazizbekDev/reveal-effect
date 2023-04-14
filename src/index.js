import gsap, {Power1, Power3} from "gsap";

const textWrapper = document.querySelector('loader-text');

/* textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>&&</span>"
) */

const CURSOR = document.querySelector('.cursor');
const links = document.querySelectorAll('a');
const speacialLinks = document.querySelectorAll('.cursor-hover');

gsap.timeline().add({
    targets: ".loader-text .letter",
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "linear",
    duration: 1200,
    delay: ((el, i) => 2400 + 30 * i)
})

gsap.from(".loader-wrapper", 2, {
    scale: 0.8,
    ease: Power1.easeInOut
})

gsap.from(".loader", 2, {
    top: "100%",
    ease: Power3.easeInOut
})

gsap.to(".loader-wrapper, .pre-loader", 1, {
    scale: 1.3,
    opacity: 0,
    display: 'none',
    ease: Power3.easeInOut,
    delay: 2
}, "-=1")

gsap.from(".revealer", 1, {
    width: "0",
    ease: Power3.easeInOut,
    delay: 3
})

gsap.to(".revealer", 0.8, {
    left: "100%",
    ease: Power3.easeInOut,
    delay: 4
})


gsap.to(".loader-text-wrapper", 0.2, {
    opacity: 0,
    display: "none",
    ease: Power3.easeInOut,
    delay: 4
})

gsap.from(".col-left", 1, {
    left: "-100%",
    ease: Power3.easeInOut,
    delay: 4.5
})

gsap.from(".col-left .copy > div", 1.5, {
    x: -40,
    opacity: 0,
    ease: Power3.easeInOut,
    delay: 5,
    stagger: {
        amount: 0.3
    }
})

gsap.from(".col-right .header", 1, {
    x: -20,
    opacity: 0,
    ease: Power3.easeInOut,
    delay: 5.5
})


window.addEventListener("mousemove", (e) => {
    const {clientX: x, clientY: y} = e;

    CURSOR.style.left = x + 'px';
    CURSOR.style.top = y + 'px';
})

links.forEach(link => {
    link.addEventListener("mouseenter", (e) => {
        CURSOR.classList.add('active')
    })
    link.addEventListener("mouseleave", (e) => {
        CURSOR.classList.remove('active')
    })
})

speacialLinks.forEach(link => {
    link.addEventListener("mouseenter", (e) => {
        CURSOR.classList.add('active')
    })
    link.addEventListener("mouseleave", (e) => {
        CURSOR.classList.remove('active')
    })
})