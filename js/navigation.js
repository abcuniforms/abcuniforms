var body = document.body;
var nav = document.querySelector('.nav');
var navBtn = document.querySelector('#nav-btn');

// For Toggling
navBtn.addEventListener('click',_=>{
  nav.classList.toggle('nav_open');
});

//For disabling Scroll
navBtn.addEventListener('click', _=> {
 /* Detect the button class name */
 var navOpen = nav.classList.contains('nav_open');
 console.log(navOpen);
 
 /* Toggle the aria-hidden state on the overlay and the 
    no-scroll class on the body */
 nav.setAttribute('aria-hidden', !navOpen);
 body.classList.toggle('noscroll', navOpen);
 
 /* On some mobile browser when the overlay was previously
    opened and scrolled, if you open it again it doesn't 
    reset its scrollTop property after the fadeout */
 setTimeout(function() {
     nav.scrollTop = 0;              }, 1000)

}, false);

