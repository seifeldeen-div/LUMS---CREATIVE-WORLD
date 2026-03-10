let cards = document.querySelectorAll(".card")
let observer = new IntersectionObserver((cards) => {
    cards.forEach(card => {
        if (card.isIntersecting) {
            card.target.classList.add("visible")
        }
    })
    count1()
    count2()
    count3()
    count4()
}, { threshold: 0.1 })
cards.forEach(card => {
    observer.observe(card)
})

let counter1 = document.querySelector("#counter1");
let counter1Span = document.querySelector("#counter1Span");
counter1Span.classList.add("red");

let counter2 = document.querySelector("#counter2")
let counter2Span = document.querySelector("#counter2Span");
let counter3 = document.querySelector("#counter3")
let counter3Span = document.querySelector("#counter3Span");
let counter4 = document.querySelector("#counter4")
let counter4Span = document.querySelector("#counter4Span");

let run1 = false
function count1() {
    if (run1) return
    var c = 0
    let interval1 = setInterval(() => {
        if (c > 10) {
            clearInterval(interval1)
            run1 = true
            return
        }
        counter1.innerHTML = `${c} <span id="counter1Span">K+</span>`
        c++
    }, 150)
}

let run2 = false
function count2() {
    if (run2) return
    var c = 1
    let interval2 = setInterval(() => {
        if (c > 98) {
            clearInterval(interval2)
            run2 = true
            return
        }
        counter2.innerHTML = `${c} <span id="counter1Span">%</span>`
        c++
    }, 30);
}
let run3 = false
function count3() {
    if (run3) return
    var c = 1
    let interval3 = setInterval(() => {
        if (c > 20) {
            clearInterval(interval3)
            run3 = true
            return
        }
        counter3.innerHTML = `${c} <span id="counter1Span">YR</span>`
        c++
    }, 150);
}
let run4 = false
function count4() {
    if (run4) return
    var c = 1
    let interval4 = setInterval(() => {
        if (c > 15) {
            clearInterval(interval4)
            run4 = true
            return
        }
        counter4.innerHTML = `${c} <span id="counter1Span">X</span>`
        c++
    }, 150);
}









// cursorRing
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx - 6 + "px";
    cursor.style.top = my - 6 + "px";
});

function animateRing() {
    rx += (mx - rx - 20) * 0.12;
    ry += (my - ry - 20) * 0.12;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
    requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll("button, a").forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(2.5)";
        ring.style.transform = "scale(1.6)";
    });
    el.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
        ring.style.transform = "scale(1)";
    });
});
