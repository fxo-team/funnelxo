/**
 * FunnelXo Main Script
 */

// 1. Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 2. Smooth Scroll function for Buttons (e.g., Hero Button)
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// 3. Mobile Menu Logic
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const body = document.body;

menuToggle.addEventListener('click', () => {
    // Toggle the 'active' class on both the button and the menu
    const isActive = navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');

    if (isActive) {
        // LOCK SCROLL: Prevents the background from moving while menu is open
        body.style.overflow = 'hidden';
    } else {
        // UNLOCK SCROLL: Allows scrolling again when menu is closed
        body.style.overflow = 'auto';
    }
});

// 4. Auto-Close Menu when a Link is Clicked
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        // Remove active classes
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Always restore scrolling when moving to a new section
        body.style.overflow = 'auto';
    });
});
