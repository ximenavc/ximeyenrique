'use strict';

// Smooth scrolling for anchor links
const smoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};

// Form validation
const validateForm = (form) => {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    return isValid;
};

// Interactive elements
const setupInteractiveElements = () => {
    const buttons = document.querySelectorAll('.interactive-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
        });
    });
};

// Animations on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });
    elements.forEach(element => observer.observe(element));
};

// RSVP form handling
const handleRsvpForm = () => {
    const form = document.getElementById('rsvp-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm(form)) {
            // Handle successful RSVP form submission
            console.log('RSVP submitted!');
            form.reset();
        }
    });
};

// Initialize all functions
const init = () => {
    smoothScroll();
    setupInteractiveElements();
    animateOnScroll();
    handleRsvpForm();
};

document.addEventListener('DOMContentLoaded', init);
