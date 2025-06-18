// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const nav = document.getElementById('nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.innerHTML = nav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Portfolio filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Testimonial slider (simplified version)
let currentTestimonial = 0;
const testimonials = [
    {
        text: '"Elysium transformed our brand perception in the luxury market. Their strategic approach and attention to detail resulted in a 40% increase in high-net-worth client engagement."',
        name: "Sophie Laurent",
        title: "CEO, Maison de Luxe",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
        text: '"Working with Elysium was a game-changer for our luxury automotive brand. Their creative campaign increased our pre-orders by 65%."',
        name: "James Rutherford",
        title: "Marketing Director, Prestige Motors",
        image: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    {
        text: '"The team at Elysium understands the nuances of luxury branding like no one else. Our brand identity refresh has been universally praised by our clients."',
        name: "Isabelle DuPont",
        title: "Creative Director, Haute Jewelers",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
    }
];

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    const testimonialItem = document.querySelector('.testimonial-item');
    
    testimonialItem.innerHTML = `
        <p class="testimonial-text">${testimonial.text}</p>
        <div class="testimonial-author">
            <div class="author-img">
                <img src="${testimonial.image}" alt="Client">
            </div>
            <div class="author-info">
                <h4>${testimonial.name}</h4>
                <p>${testimonial.title}</p>
            </div>
        </div>
    `;
    
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

// Change testimonial every 5 seconds
setInterval(updateTestimonial, 5000);