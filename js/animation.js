// SECTION HOME
var logoTL = new TimelineMax({onUpdate:updatePercentage});
const logoC = new ScrollMagic.Controller();

logoTL
  .from(".aboutus_text",.5,{y:15, opacity:.7})
  .from(".sec-aboutus div",.5,{y:10,width:40, opacity:.8})
  .from(".sec-aboutus p",.5,{y:10, opacity:.7});

const scene = new ScrollMagic.Scene({
  triggerElement: ".sec-logo",
  triggerHook: "onLeave",
  duration: "25%"
})
  //.setPin(".sec-logo")
  .setTween(logoTL)
  .addTo(logoC);

function updatePercentage(){
  logoTL.progress();
}


