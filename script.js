const images = [
  {
    src: "images/20250807_161951.jpg",
    alt: "My Photo"
  },
  {
    src: "images/20240402_135812.jpg",
    alt: "Tree"
  },
  {
    src: "images/20260202_123213.jpg",
    alt: "Temple"
  },
  {
    src: "images/6885163461946573829_avatar.png (1).jpg",
    alt: "Sunset"
  },
  {
    src: "images/IMG-20260403-WA0092.jpg",
    alt: "Seoul Building"
  },
  {
    src: "images/received_2948728571962084.jpeg",
    alt: "Waterfall"
  }
];

let currentIndex = 0;

const galleryImage = document.getElementById("galleryImage");
const nextBtn = document.getElementById("nextBtn");
const darkModeBtn = document.getElementById("darkModeBtn");

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;

  galleryImage.src = images[currentIndex].src;
  galleryImage.alt = images[currentIndex].alt;
});

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "☀️ Light Mode";
  } else {
    darkModeBtn.textContent = "🌙 Dark Mode";
  }
});