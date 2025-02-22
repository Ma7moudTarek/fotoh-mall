




let slideIndex = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slideIndex = index;
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function currentSlide(index) {
    showSlide(index);
}

function autoSlide() {
    slideIndex = (slideIndex + 1) % dots.length;
    showSlide(slideIndex);
}

setInterval(autoSlide, 3000); 

showSlide(slideIndex);


           

let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    index = (index + step + totalSlides) % totalSlides;
    const newTransform = `translateX(${-index * 100}%)`;
    document.querySelector('.slider-container').style.transform = newTransform;
}



// Script for the original grid
const originalItemsToShow = 3;
const originalSlideWrapper = document.querySelector('.slide-wrapper');
let originalCurrentIndex = 0;

document.getElementById('prevBtn').addEventListener('click', () => {  
    originalCurrentIndex = (originalCurrentIndex - originalItemsToShow + originalSlideWrapper.children.length) % originalSlideWrapper.children.length;
    updateOriginalSlidePosition();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    originalCurrentIndex = (originalCurrentIndex + originalItemsToShow) % originalSlideWrapper.children.length;
    updateOriginalSlidePosition();
});

function updateOriginalSlidePosition() {
    const originalItemWidth = document.querySelector('.circle-item').offsetWidth;
    originalSlideWrapper.style.transform = `translateX(-${originalCurrentIndex * originalItemWidth}px)`;
}

// Script for the custom grid
const customItemsToShow = 0.8;
const customSlideWrapper = document.querySelector('#customSlideWrapper');
let customCurrentIndex = 0;

document.getElementById('PrevBtn').addEventListener('click', () => {
    customCurrentIndex = (customCurrentIndex - customItemsToShow + customSlideWrapper.children.length) % customSlideWrapper.children.length;
    updateCustomSlidePosition();
});

document.getElementById('NextBtn').addEventListener('click', () => {
    customCurrentIndex = (customCurrentIndex + customItemsToShow) % customSlideWrapper.children.length;
    updateCustomSlidePosition();
});

function updateCustomSlidePosition() {
    const customItemWidth = document.querySelector('.custom-circle-item').offsetWidth;
    customSlideWrapper.style.transform = `translateX(-${customCurrentIndex * customItemWidth}px)`;
}
    


                        //store page//

                       