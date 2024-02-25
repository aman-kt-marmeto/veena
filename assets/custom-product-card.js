class CustomProductCard extends HTMLElement {
    constructor() {
        super();
        this.productHandle = this.dataset.productHandle;
        this.sectionId = this.dataset.sectionId;
        this.productId = this.dataset.productId;
        this.productUrl = this.dataset.productUrl;
        this.variantData = JSON.parse(this.querySelector('script').textContent);
        console.log(this.variantData)
        this.addEventListener('change', function () {
            this.varients = Array.from(this.querySelectorAll('input[type="radio"]:checked'), input => input.value);
            this.currentVarient = this.variantData.find(item => JSON.stringify(item.options) == JSON.stringify(this.varients))
            this.getVarient(this.currentVarient.id)
        })
    }

    // fetchPro() {
    //     console.log(this.productUrl)
    //     fetch(this.productUrl)
    //         .then(data => data.text())
    //         .then((content) => {
    //             const innerContent = new DOMParser().parseFromString(content, "text/html");
    //             document.querySelector('body').innerHTML = innerContent.querySelector(`#shopify-section-template--22106840957230__slideshow_hero_banner_a49bzY`).innerHTML
    //         })
    // }

    getVarient(myVar) {
        const url = `/products/${this.productHandle}?variant=${myVar}&section_id=${this.sectionId}`;
        fetch(url)
            .then(data => data.text())
            .then((content) => {
                const innerContent = new DOMParser().parseFromString(content, "text/html");
                this.innerHTML = innerContent.querySelector(`[data-product-handle='${this.productHandle}']`).innerHTML;
            })
    }
}

customElements.define('custom-product-card', CustomProductCard);