document.addEventListener('DOMContentLoaded', function() {
    const chnageNameBtn = document.querySelector('.change-name-btn');
    const chnagePasswordBtn = document.querySelector('.change-password-btn');

    const chnageNameContainer = document.querySelector('.change-name');
    const chnagePasswordContainer = document.querySelector('.change-password');
    
    chnageNameContainer.style.display = 'none';
    chnagePasswordContainer.style.display = 'block';
    
    chnageNameBtn.addEventListener('click', function(event) {
    event.preventDefault();
        chnageNameContainer.style.display = 'block';
    chnagePasswordContainer.style.display = 'none';
    });
    
    chnagePasswordBtn.addEventListener('click', function(event) {
    event.preventDefault();
        chnagePasswordContainer.style.display = 'block';
    chnageNameContainer.style.display = 'none';
    });
});