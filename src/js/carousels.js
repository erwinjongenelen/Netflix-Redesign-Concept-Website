import { tns } from "tiny-slider";

const headerCarousel = tns({
    container: '#header-carousel',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    speed: 400,
    autoplayButtonOutput: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    responsive: {
        768: {
            speed: 800
        }
    }
});