document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');
    });

    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        });
    });

   
    const contactForm = document.forms['contactForm'];

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        
        const fullName = contactForm['fullName'].value.trim();
        const email = contactForm['email'].value.trim();
        const phoneNumber = contactForm['phoneNumber'].value.trim();
        const subject = contactForm['subject'].value.trim();
        const message = contactForm['message'].value.trim();

        if (fullName === '') {
            alert('Please enter your full name.');
            contactForm['fullName'].focus();
            return;
        }

        if (email === '' || !validateEmail(email)) {
            alert('Please enter a valid email address.');
            contactForm['email'].focus();
            return;
        }

        if (phoneNumber === '' || !validatePhoneNumber(phoneNumber)) {
            alert('Please enter a valid phone number.');
            contactForm['phoneNumber'].focus();
            return;
        }

        if (subject === '') {
            alert('Please enter a subject.');
            contactForm['subject'].focus();
            return;
        }

        if (message === '') {
            alert('Please enter your message.');
            contactForm['message'].focus();
            return;
        }

       
        alert('Form submitted successfully!');
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
});
