/*stciky navbar*/



/*menu icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick  =()=>{
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

/*scroll section active link*/
let sections =document.querySelector('section');
let navLinks = document.querySelector('header nav a');






window.onload = () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        let fromTop = window.scrollY;

        /*remove menu icon navbar when click navbar link(scroll)*/
menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')

        sections.forEach(section => {
            if (section.offsetTop - 150 <= fromTop && section.offsetTop + section.offsetHeight - 150 > fromTop) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                let id = section.getAttribute('id');
                document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
            }
        });

        // Handle changing the navbar color
        let header = document.querySelector('header');
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };
};



window.onscroll=()=>{

let header = document.querySelector('.header');

header.classList.toggle('sticky',window.scrollY>100)





}


/*swiper*/


    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween:50,
      loop:true,
      slidesPerGroupSkip: 1,
      grabCursor: true,
      keyboard: {
        enabled: true,
      },
      breakpoints: {
        769: {
          slidesPerView: 1,
        },
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });




    /*=====dark light mode====*/

    let darkModeIcon = document.querySelector('#darkMode-icon')

    darkModeIcon.onclick=()=>{
      darkModeIcon.classList.toggle('bx-sun');
      document.body.classList.toggle('dark-mode');
    };


     /*=====SCROLL REVEAL====*/
ScrollReveal({
      //reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200

      
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom'});

ScrollReveal().reveal('.home-content h1, .about-img img ', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });


  /*=====Full stack H3 animation====*/

// Wrap the animation in a function to restart it if needed
function restartTypingAnimation() {
  var element = document.getElementById('stack-title');
  element.style.animation = 'none';
  element.offsetHeight; /* Trigger reflow */
  element.style.animation = null;
  element.style.animation = 'typing 4s steps(40) forwards';
}

// Call the function whenever you want to restart the animation
restartTypingAnimation();


  /*=====Full stack H3 animation====*/


  /* About me read more */

  function aboutMeReadMore() {
    var hiddenParagraph = document.getElementById("about-hidden");
    var readMoreBtn = document.querySelector(".about-content .btn");

    if (hiddenParagraph.style.display === "none") {
        hiddenParagraph.style.display = "inline"; // or "block" depending on the desired layout
        readMoreBtn.textContent = "Read Less"; // Change button text to "Read Less"
    } else {
        hiddenParagraph.style.display = "none";
        readMoreBtn.textContent = "Read More"; // Change button text back to "Read More"
    }
}

  /* Email JS*/
  const contactForm = document.getElementById('contact-form');
  const statusMessage = document.getElementById('status-message');
  
  const SERVICE_ID = "service_fn212my";
  const TEMPLATE_ID = "template_vy2xcyk";
  const PUBLIC_KEY = "kFNFXzF4BVI5LA3JF";
  
  contactForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission behavior
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const mobile = document.getElementById('mobile').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
  
      // Basic form validation (client-side only, additional server-side validation is recommended)
      if (!name.trim() || !email.trim() || !message.trim()) {
          statusMessage.textContent = 'Please fill in all required fields.';
          return;
      }
  
      const params = {
          name: name,
          email: email,
          mobile: mobile,
          subject: subject,
          message: message
      };
  
      emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY)
          .then(() => {
              statusMessage.textContent = 'Message sent successfully!';
              contactForm.reset(); // Clear form fields after successful submission
              setTimeout(() => {
                  statusMessage.textContent = ''; // Clear the status message after a delay
              }, 3000); // 3 seconds delay
          })
          .catch((error) => {
              statusMessage.textContent = `Error sending message: ${error.message}`;
          });
  });
  
    /* Email JS*/
