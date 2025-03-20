// script for cart modal 

document.addEventListener("DOMContentLoaded", () => {
    const cartModal = document.getElementById("cartModal");
    const cartItems = document.querySelector(".cart-items");
    const totalPrice = document.getElementById("totalPrice");

    function renderCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.innerHTML = ''; 
        let total = 0;

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `
                <p>${item.name} - $${item.price} x ${item.quantity}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItems.appendChild(cartItem);
            total += parseFloat(item.price) * item.quantity;
        });

        totalPrice.textContent = total.toFixed(2);
    }

    function addToCart(name, price) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    function removeFromCart(index) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    document.getElementById("openCart").addEventListener("click", () => {
        cartModal.style.display = "block";
        renderCart();
    });

    document.querySelector(".close").addEventListener("click", () => {
        cartModal.style.display = "none";
    });

    window.onclick = function(event) {
        if (event.target == cartModal) {
            cartModal.style.display = "none";
        }
    };

    document.getElementById("checkout").addEventListener("click", () => {
        const selectedPayment = document.querySelector('input[name="payment"]:checked');
        if (selectedPayment) {
            alert(`You have selected ${selectedPayment.value} as your payment method.`);
            localStorage.removeItem('cart');
            renderCart();
        } else {
            alert("Please select a payment method.");
        }
    });
});


    
                         // favourits list
    document.getElementById("openFavorites").addEventListener("click", () => {
    document.getElementById("favModal").style.display = "block"; 
});

document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("favModal").style.display = "none"; 
});

window.onclick = function(event) {
    const favModal = document.getElementById("favModal");
    if (event.target == favModal) {
        favModal.style.display = "none";
    }
};





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



// Script for the sales grid
const salesSlideWrapper = document.querySelector('.sales-slide-wrapper');
const prevBtn = document.getElementById('PrevBtn');
const nextBtn = document.getElementById('NextBtn');
let salesCurrentIndex = 0;

function updateSalesSlidePosition() {
    const salesItemWidth = document.querySelector('.sales-box-item').offsetWidth;
    salesSlideWrapper.style.transform = `translateX(-${salesCurrentIndex * salesItemWidth}px)`;
    
    prevBtn.disabled = salesCurrentIndex === 0;
    
    nextBtn.disabled = salesCurrentIndex >= salesSlideWrapper.children.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (salesCurrentIndex > 0) {
        salesCurrentIndex--;
        updateSalesSlidePosition();
    }
});

nextBtn.addEventListener('click', () => {
    if (salesCurrentIndex < salesSlideWrapper.children.length - 1) {
        salesCurrentIndex++;
        updateSalesSlidePosition();
    }
});

updateSalesSlidePosition();





// Script for the foryou grid
const foryouSlideWrapper = document.querySelector('.foryou-slide-wrapper');
const foryouPrevBtn = document.getElementById('PreVBtn');
const foryouNextBtn = document.getElementById('NexTBtn');
let foryouCurrentIndex = 0;

function updateForyouSlidePosition() {
    const foryouItemWidth = document.querySelector('.foryou-box-item').offsetWidth;
    foryouSlideWrapper.style.transform = `translateX(-${foryouCurrentIndex * foryouItemWidth}px)`;

    foryouPrevBtn.disabled = foryouCurrentIndex === 0;

    foryouNextBtn.disabled = foryouCurrentIndex >= foryouSlideWrapper.children.length - 1;
}

foryouPrevBtn.addEventListener('click', () => {
    if (foryouCurrentIndex > 0) {
        foryouCurrentIndex--;
        updateForyouSlidePosition();
    }
});

foryouNextBtn.addEventListener('click', () => {
    if (foryouCurrentIndex < foryouSlideWrapper.children.length - 1) {
        foryouCurrentIndex++;
        updateForyouSlidePosition();
    }
});

updateForyouSlidePosition();


// script for controled slides

document.addEventListener('DOMContentLoaded', () => {
    loadImagesFromLocalStorage();
});

function loadImagesFromLocalStorage() {
    const grid = document.getElementById('bannerGrid');
    const images = JSON.parse(localStorage.getItem('images')) || [];

    images.forEach(src => {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'slide'; // Use 'slide' class to fit the slider style

        const img = document.createElement('img');
        img.src = src;

        imageContainer.appendChild(img);
        grid.appendChild(imageContainer);
    });
}


                       