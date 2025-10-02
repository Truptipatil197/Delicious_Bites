// Burger menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('nav ul.nav-links');
if (burger && navLinks) {
    burger.addEventListener('click', () => navLinks.classList.toggle('show'));
}

// Menu Tabs Filtering
const tabBtns = document.querySelectorAll('.tab-btn');
const menuItems = document.querySelectorAll('.menu-item');
function showCategory(category) {
    menuItems.forEach(item => {
        item.style.display = (item.dataset.category === category) ? 'block' : 'none';
    });
}
if (tabBtns.length) {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            showCategory(btn.dataset.category);
        });
    });
    showCategory('starters');
}

// Testimonials Slider (auto-rotate)
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;
function showTestimonial(idx) {
    testimonials.forEach((t, i) => t.classList.toggle('active', i === idx));
}
if (testimonials.length) {
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 4000);
    showTestimonial(0);
}
// Smooth scrolling for nav links
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
    });
}
