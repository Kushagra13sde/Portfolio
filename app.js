// console.log("Mera desh mhan");
const toTop = document.querySelector(".materialicons");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

let btnscrolltoup = document.getElementById('btnscrolltoup');
btnscrolltoup.addEventListener("click", () => {
    // btnscrolltoup.style.backgroundColor = "purple";
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

let ScrolltoAbout = document.getElementById("ScrolltoA");
ScrolltoAbout.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

let ScrolltoSkill = document.getElementById("ScrolltoS");
ScrolltoSkill.addEventListener("click", () => {
    window.scrollTo({
        top: 569.6,
        left: 0,
        behavior: "smooth"
    });
});
let ScrolltoContact = document.getElementById("ScrolltoC");
ScrolltoContact.addEventListener("click", () => {
    window.scrollTo({
        top: 1593.6,
        left: 0,
        behavior: "smooth"
    });
});