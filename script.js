const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var timeout;
function firstPageAnime(){
  var tl = gsap.timeline()

  tl.from("#nav",{
    y: '-10',
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut
  })
  .to(".boundingelem",{
       y:0,
       ease: Expo.easeInOut,
      duration: 2,
      delay: -1.8,
      stagger: .2
  })
  .from("#godfooter",{
    y: -10,
    opacity: 0,
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut
  })
}

function circleChaptaKaro(){
  clearTimeout(timeout);
 var xscale = 1;
 var yscale = 1;

 var xprev = 0;
 var yprev = 0;

 window.addEventListener("mousemove",function(dets){
     xscale = gsap.utils.clamp(.8,1.2,dets.clientX - xprev);
     yscale = gsap.utils.clamp(.8,1.2,dets.clientY - yprev);

     xprev = dets.clientX;
     yprev = dets.clientY;
    
    circlemousefollower(xscale,yscale);
     timeout = setTimeout(function(){
       document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
     },100);
 })
}

function circlemousefollower(xscale,yscale){
  window.addEventListener("mousemove",function(dets){
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
  })
}

document.querySelectorAll(".elem").forEach(function(elem){
  var rotate;
  var difference;

  elem.addEventListener("mouseleave",function(){
    gsap.to(elem.querySelector("img"),{
      ease: Power3,
      opacity: 0 ,
      duration: 0.5
    })
  })
  elem.addEventListener("mousemove",function(dets){
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    difference = dets.clientX - rotate;
    rotate = dets.clientX;
       gsap.to(elem.querySelector("img"),{
        
        opacity: 1,
        ease : Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20,20,difference*0.8),
       });
  });
});
circlemousefollower();
firstPageAnime();
circleChaptaKaro();