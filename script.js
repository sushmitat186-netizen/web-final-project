// DARK MODE TOGGLE
document.getElementById("darkModeBtn").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// IMAGE SLIDER
const images = [
    "images/20250807_161951.jpg",
    "images/20250807_161952.jpg",
    "images/20250807_161953.jpg"
];

let index = 0;

document.getElementById("nextBtn").addEventListener("click", function () {
    index = (index + 1) % images.length;
    document.getElementById("galleryImage").src = images[index];
});