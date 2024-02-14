class CustomSplide extends HTMLElement {
    constructor() {
        super();
        console.log(this)
        console.log(this.dataset.properties)

        this.mySplide = this.querySelector('.splide');

        this.options = JSON.parse(
            this.querySelector("#splideProperties").textContent
        );
        this.initSlider();
    }

    initSlider() {
        new Splide(this.mySplide, this.options).mount();
    }
}

customElements.define('custom-splide', CustomSplide)