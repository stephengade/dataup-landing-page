// selectors
 const trigger = document.querySelector(".hamburger");
 const hamburger = document.querySelector("nav .hamburger span");
 const menu = document.querySelector(".nav-menu");
 const mobileBtn = document.querySelector(".mobile-buttons");
 
 // add event listener

 trigger.addEventListener("click", menuTrigger);

 // function

 let showMenu = false;

 function menuTrigger() {
    hamburger.classList.add("opacity"); 

    if (!showMenu) {
       menu.style.display = "block";
       mobileBtn.style.display = "block"

       showMenu = true;

    } else {
       hamburger.classList.remove("opacity");
       menu.style.display = "none";
       mobileBtn.style.display = "none"

       showMenu = false;
    }
 }
 
 // Scroll trigger

 let tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.hero-main',
  }
});

tl.from(".hero-text", {x: -400, opacity: 0, duration: 1.5} )

// hero text 

let th = gsap.timeline({
  scrollTrigger: {
      trigger: '.hero-main',
  }
});

th.from(".hero-image", {x: 400, opacity: 0, duration: 1.5} )


// Cta
let tq = gsap.timeline({
  scrollTrigger: {
      trigger: '.cta-1', 
  }
});

tq.from(".cta-1-image", {x: 200, opacity: 0, duration: 2.5} )

// text

let tp = gsap.timeline({
  scrollTrigger: {
      trigger: '.cta-1',
  }
});

tp.from(".cta-1-text", {x: -200, opacity: 0, duration: 2.5} )


//

// Cta
let tj = gsap.timeline({
  scrollTrigger: {
      trigger: '.cta-2', 
  }
});

tj.from(".cta-2-image", {x: 400, opacity: 0, duration: 3.5} )

// text

let tk = gsap.timeline({
  scrollTrigger: {
      trigger: '.cta-2',
  }
});

tk.from(".cta-2-text", {x: -400, opacity: 0, duration: 3.5} )

// last cta

let tu = gsap.timeline({
  scrollTrigger: {
      trigger: '.last_cta', 
  }
});

tu.from(".last_cta_image", {y: 400, opacity: 0, duration: 4} )

// last cta text

let tm = gsap.timeline({
  scrollTrigger: {
      trigger: '.last_cta',
  }
});

tm.from(".last_cta_text", {x: 400, opacity: 0, duration: 4} )


// Logo animation

let rotateLogo = gsap
  .timeline()
  .fromTo(".hero-logo", {
      opacity: 0,
      scale: 0
    },{
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out"      
    })

let tween = gsap.fromTo(".hero-logo", {
      rotation: 0
    },{
      rotation: 360,
      duration: 1,
      repeat: -1,
      ease: "linear"
    })

gsap.fromTo(tween, {timeScale: 3}, {timeScale: 1, duration: 1});


// icon 

let rotateIcon = gsap
  .timeline()
  .fromTo(".icon", {
      opacity: 0,
      scale: 0
    },{
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out"      
    })

let icony = gsap.fromTo(".icon", {
      rotation: 0
    },{
      rotation: 360,
      duration: 1,
      repeat: -1,
      ease: "linear"
    })

gsap.fromTo(icony, {timeScale: 3}, {timeScale: 1, duration: 1});