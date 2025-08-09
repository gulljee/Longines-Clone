const track = document.querySelector('.slider-track');
const slides = Array.from(document.querySelectorAll('.slide'));
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    if (currentIndex < 1) {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }
});

function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.addEventListener('DOMContentLoaded', function () {
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video1.play();
                    video2.play();
                } else {
                    video1.pause();
                    video2.pause();
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    observer.observe(video1);
    observer.observe(video2);
});

document.addEventListener('DOMContentLoaded', function () {
    const cities = ["in Tokyo?", "in New York?", "in Berlin?", "in London?", "THERE?"];
    const span = document.getElementById("changing-text");
    let currentIndex = 0;

    setInterval(() => {

        span.textContent = cities[currentIndex];
        currentIndex = (currentIndex + 1) % cities.length;
    }, 700);
});

ham_btn = document.querySelector(".ham-btn");
ham_menu = document.querySelector(".hamburger-menu");
cross_icon = document.querySelector(".cross-icon");

ham_btn.addEventListener("click", () => {
    ham_menu.style.display = "grid";
    ham_menu.style.transform = "translateX(0%)";
    ham_btn.style.display = "none";
    cross_icon.style.display = "block";
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
}
);




cross_icon.addEventListener("click", () => {

    ham_menu.style.display = "none";
    ham_menu.style.transform = "translateX(100%)";
    ham_btn.style.display = "block";
    cross_icon.style.display = "none";
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''

}

);

function toggleExpand(element) {
    element.classList.toggle('expanded');
    const submenu = element.nextElementSibling;
    submenu.classList.toggle('expanded');
}
