class CustomDiscountBanner extends HTMLElement {
    constructor() {
        super()
        this.button = this.querySelector("button")
        this.button.addEventListener('click', this.myFunction.bind(this))
    }

    myFunction() {
        var copyText = this.querySelector(".code").textContent;

        navigator.clipboard.writeText(copyText);

        this.querySelector("button").textContent = "Copied"
    }
}

customElements.define('custom-discount-banner', CustomDiscountBanner)