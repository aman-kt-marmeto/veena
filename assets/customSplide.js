class CustomSplide extends HTMLElement {
    constructor() {
        super();
        this.mySplide = this.querySelector('.splide');
        this.options = JSON.parse(
            this.querySelector("#splideProperties").textContent
        );
        console.log(this.options)
        this.initSlider();
    }

    initSlider() {
        new Splide(this.mySplide, this.options).mount();
    }
}

customElements.define('custom-splide', CustomSplide)