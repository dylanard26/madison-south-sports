const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () =>{
        
        //toggle nav
    nav.classList.toggle('nav-active');
    //animate links
    navLinks.forEach((link, index) => { 
        if(link.style.animation){
            link.style.animation = '';
        } else {
<<<<<<< HEAD
            link.style.animation=`navLinkFade 1.0s ease forwards ${index / 7+0.2}s`;
=======
            link.style.animation=`navLinkFade 0.5s ease forwards ${index / 7+0.5}s`;
>>>>>>> 905cd219421d2525a67410beb3986381b064216b
        }
    });
    //burger animation
    burger.classList.toggle(`toggle`);
    
    });
    
    }
    
    navSlide();