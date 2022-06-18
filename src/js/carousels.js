import { tns } from "tiny-slider";

const headerCarousel = tns({
    container: '#header-carousel',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    speed: 400,
    responsive: {
        768: {
            speed: 800
        }
    }
});