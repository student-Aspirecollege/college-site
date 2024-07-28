        

const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function goToSlide(index) {
slides.style.transform = `translateX(${-index * 100}%)`;
currentIndex = index;

// Update active dot
dots.forEach((dot, i) => {
dot.classList.remove('active');
if (i === index) {
    dot.classList.add('active');
}
});
}

dots.forEach((dot, i) => {
dot.addEventListener('click', () => {
goToSlide(i);
});
});

// function toggleMenu() {
//     var navbarMenu = document.getElementById('navbarMenu');
//     navbarMenu.classList.toggle('active');
// }

function toggleMenu() {
    var navbarMenu = document.getElementById('navbarMenu');
    navbarMenu.classList.toggle('active');
}

