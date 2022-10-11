var slideIndex = 0;
showDivs(slideIndex);

const elements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
    })
}, {
    threshold: 0.5
})
elements.forEach(element => {
    observer.observe(element);
})

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    var ps = document.getElementsByClassName("slide-p");
    var dots = document.getElementsByClassName("indicator");
    if (n > x.length - 1) { slideIndex = 0 }
    if (n < 0) { slideIndex = x.length - 1 };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        ps[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" white-bg", "");
    }
    x[slideIndex].style.display = "block";
    ps[slideIndex].style.display = "block";
    dots[slideIndex].className += " white-bg";
}