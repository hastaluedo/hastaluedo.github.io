const intro = document.querySelector('.grafo3')
const video = intro.querySelector('.treemapvid');
//ENDSECTION
const section = intro.querySelector('.graf3end')

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
    duration: 15000,
    triggerElement: intro,
    triggerHook: 0.15
})
.addIndicators()
.setPin(intro)
.addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;

    video.currentTime = delay;
}, 33.3);