window.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.log-login-form'),
        signupForm = document.querySelector('.log-signup-form'),
        backLayer = document.querySelector('.log-back-layer');

    document.querySelector('.log-login button').addEventListener('pointerdown', () => {
        console.log('Login button clicked');
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
        backLayer.style.clipPath = 'inset(0 50% 0 0)';
        backLayer.style.transform = 'translateX(0%)';
    });

    document.querySelector('.log-signup button').addEventListener('pointerdown', () => {
        console.log('Signup button clicked');
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
        backLayer.style.clipPath = 'inset(0 0 0 50%)';
        backLayer.style.transform = 'translateX(0%)';
    });
});
