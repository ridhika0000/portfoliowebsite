const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});


document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});


const contactForm = document.forms['contactForm'];
const fullName = contactForm['fullName'];
const email = contactForm['email'];
const phoneNumber = contactForm['phoneNumber'];
const subject = contactForm['subject'];
const message = contactForm['message'];

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    
    if (fullName.value.trim() === '') {
        alert('Please enter your full name.');
        fullName.focus();
        return;
    }

    if (email.value.trim() === '' || !validateEmail(email.value)) {
        alert('Please enter a valid email address.');
        email.focus();
        return;
    }

    if (phoneNumber.value.trim() === '' || !validatePhoneNumber(phoneNumber.value)) {
        alert('Please enter a valid phone number.');
        phoneNumber.focus();
        return;
    }

    if (subject.value.trim() === '') {
        alert('Please enter a subject.');
        subject.focus();
        return;
    }

    if (message.value.trim() === '') {
        alert('Please enter your message.');
        message.focus();
        return;
    }

   
    console.log({
        fullName: fullName.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        subject: subject.value,
        message: message.value,
    });

    
    contactForm.reset();
});

function validateEmail(email) {
    
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function validatePhoneNumber(phoneNumber) {
    
    const pattern = /^\d{10}$/;
    return pattern.test(phoneNumber);
}