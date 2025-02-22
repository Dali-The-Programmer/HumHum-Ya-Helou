const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');
const cartItem = document.querySelector('.cart-items-container')
const cartBtn = document.querySelector('#cart-btn')
const userbtn = document.querySelector('.log.html')
const navbar = document.querySelector('.navbar')
const menuBtn = document.querySelector('#menu-btn')

/*serch button*/
searchBtn.addEventListener('click', ()=>{
    searchForm.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm) ){
            searchForm.classList.remove('active');
        }
    })
})

/*user button*/
document.getElementById('user-btn').onclick = function() {
    window.location.href = './sign up-log in-form/log.html';
};

/*cart button*/
cartBtn.addEventListener('click', ()=>{
    cartItem.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem) ){
            cartItem.classList.remove('active');
        }
    })
})

/*menu button*/
menuBtn.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(navbar) && !e.composedPath().includes(menuBtn) ){
            navbar.classList.remove('active');
        }
    })
})

/*countdown timer*/
var countDownDate = new Date("August 10, 2024 23:59:59").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var timers = document.getElementsByClassName("countdown-timer");
    for (var i = 0; i < timers.length; i++) {
        timers[i].innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        if (distance < 0) {
            clearInterval(x);
            timers[i].innerHTML = "EXPIRED";
        }
    }
}, 1000);

/* delete button (cart)*/
document.addEventListener('DOMContentLoaded', function() {
    const deleteButtons = document.querySelectorAll('.cart-item .fas.fa-times');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cartItem = this.parentElement;
            cartItem.remove();
        });
    });
});

//toast notification

const checkoutBtn = document.getElementById("checkoutBtn");

checkoutBtn.addEventListener("click", () => {
    localStorage.setItem("showToast", "true");

    const currentPage = window.location.pathname;

    if (currentPage.includes("menu.html")) {
        window.location.href = "toast notification/index.html";
    } else if (currentPage.includes("products.html")) {
        window.location.href = "toast notification/index.html";
    } else if (currentPage.includes("review.html")) {
        window.location.href = "toast notification/index.html";
    } else if (currentPage.includes("about.html")) {
        window.location.href = "toast notification/index.html";
    } else if (currentPage.includes("blog.html")) {
        window.location.href = "toast notification/index.html";
    } else if (currentPage.includes("contact.html")) {
        window.location.href = "toast notification/index.html";
    } else {
        window.location.href = "toast notification/index.html"; 
    }
});
