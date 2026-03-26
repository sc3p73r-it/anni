// script.js
document.addEventListener('DOMContentLoaded', function() {
    const homePage = document.getElementById('home-page');
    const thingsPage = document.getElementById('things-page');
    const situationPage = document.getElementById('situation-page');
    const thingsBtn = document.getElementById('things-btn');
    const situationBtn = document.getElementById('situation-btn');
    const backThings = document.getElementById('back-things');
    const backSituation = document.getElementById('back-situation');

    // Show things page
    thingsBtn.addEventListener('click', function() {
        homePage.classList.remove('active');
        thingsPage.classList.add('active');
    });

    // Show situation page
    situationBtn.addEventListener('click', function() {
        homePage.classList.remove('active');
        situationPage.classList.add('active');
    });

    // Go back to home from things page
    backThings.addEventListener('click', function() {
        thingsPage.classList.remove('active');
        homePage.classList.add('active');
    });

    // Go back to home from situation page
    backSituation.addEventListener('click', function() {
        situationPage.classList.remove('active');
        homePage.classList.add('active');
    });
});