const body = document.body;
const nav = document.querySelector('.nav');
const navBtn = document.querySelector('#nav-btn');
const line1 = document.querySelector('#line1');
const line2 = document.querySelector('#line2');
const line3 = document.querySelector('#line3');

const navBtnAnimation = new TimelineMax({paused:true,reversed:true});

navBtnAnimation
  .to(line1,.7,{delay:.5,y: 14.5,ease: Power2.easeOut},"join")
  .to(line3,.7,{delay:.5,y: 14.5,ease: Power2.easeOut},"join")
  .to(line2,0,{scaleX: 0,transformOrigin: "20 20"})
  .to(line1,.6,{rotation: 45,transformOrigin: "20 0",ease: Power2.easeOut},"cross")
  .to(line3,.6,{rotation: -45,transformOrigin: "20 0",ease: Power2.easeOut},"cross");


// For Toggling
navBtn.addEventListener('click',_=>{
  nav.classList.toggle('nav_open');
  navBtnAnimation.reversed() ? navBtnAnimation.play() : navBtnAnimation.reverse();
});

//For disabling Scroll
navBtn.addEventListener('click', _=> {
 /* Detect the button class name */
 var navOpen = nav.classList.contains('nav_open');
 
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

