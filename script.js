document.addEventListener('DOMContentLoaded', function() {

    const hamburger = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-menu');
    const icon_x = document.querySelector('#icon-x');
    
    hamburger.addEventListener('click', () => {
        mobile_menu.classList.toggle('show');
    });

    icon_x.addEventListener('click', () => {
        mobile_menu.classList.toggle('show');
    });
    
});

const NavigateTo = (url) => {
    window.location.href = url;
}
