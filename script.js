const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});
const wlcm= document.querySelector('.wlcm');

parallax.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    wlcm.style.transform = `translate(-${x * 50}px, -${y * 50}px)`; // Adjust the values for the desired effect
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
// document.addEventListener("DOMContentLoaded", function () {
//     const formGroup = document.getElementById("messageForm");
//     const popupMessage = document.getElementById("popupMessage");
//     const closePopup = document.getElementById("closePopup");

//     messageForm.addEventListener("submit", function (e) {
//         e.preventDefault();
//         // Here, you can send the message to your server or perform any necessary actions.
//         // For this example, we'll just display the popup.
//         popupMessage.style.display = "block";
//     });

//     closePopup.addEventListener("click", function () {
//         popupMessage.style.display = "none";
//     });
// });
