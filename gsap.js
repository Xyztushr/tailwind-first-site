let a = gsap.timeline()

a.from("#logo",{
    y:-20,
    duration:1,
    delay:1,
    opacity:0,
    stagger:1,
})
a.from("#im",{
    x:30,
    duration:1,
    opacity:0,
    // scale:1.5,
})
a.from("#im2",{
    x:-30,
    duration:1,
    opacity:0,
    // scale:1.5,
    
})
a.from("#text",{
    duration:1,
    opacity:0,
    
})

gsap.from("#start h2",{
    x:-10,
    duration:1,
    delay:1,
    yoyo:true,
    repeat:-1
})
gsap.from("#im3",{
  x:-10,
  duration:1,
  opacity:0,
  scale:1.2,
  stagger:1,
  scrollTrigger:{
    trigger:" #im3",
    scroller:"body",
    start:"top 0%",
    end:"top 50%",
    scrub:5
}
})
gsap.from("#box",{
  x:-40,
  duration:2,
  opacity:0,
  stagger:1,
  scrollTrigger:{
    trigger:" #im3",
    scroller:"body",
    start:"top 0%",
    end:"top 100%",
    scrub:5
}
})
gsap.from("#pg3",{
  opacity:0,
x:100,
  duration:3,
  scrollTrigger:{
    trigger:" #pg3",
    scroller:"body",
    start:"top 60%",
    end:"top 100%",
    scrub:5
}
})

