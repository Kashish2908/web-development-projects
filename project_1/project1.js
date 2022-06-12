var tl = gsap.timeline()

tl.from("#left", {
    x: 700,
    duration: 2,
    ease: Expo.easeInOut,
})

tl.from("#left img", {
    rotate: "65deg",
    scale: 2,
    x: 1200,
    duration: 2,
    ease: Expo.easeInOut,
}, "-=1.5")

tl.from(".bimg", {
    x: 500,
    duration: 2,
    ease: Expo.easeInOut,


}, "-=1.5")

tl.to("#right #circle", {
    opacity: 1,
    borderTop: 2,
    duration: 1.1,
    ease: Linear.easeNone,

}, "-=1.5")

tl.to("#right #circle", {
    opacity: 1,
    borderRight: 2,
    duration: .6,
    ease: Linear.easeNone

}, "-=1.5")

tl.to("#right #circle", {
    opacity: 1,
    borderBottom: 2,
    duration: .7,
    ease: Linear.easeNone

}, "-=1.5")

tl.to("#right #circle", {
    opacity: 1,
    borderLeft: 2,
    duration: .8,
    ease: Linear.easeNone

},"-=1.5" )

tl.from("#circle h4", {
    y: 500,
    duration: 1.5,
    ease: "power4",
    stagger: 0.1
},"-=1.5")

tl.from("#right h1", {
    x: 400,
    duration: 2,
    ease: "power4"
},"-=1" )






