class CustomProductCard extends HTMLElement {
    constructor() {
        super();
        this.productHandle = this.dataset.productHandle;
        this.sectionId = this.dataset.sectionId;
        this.productId = this.dataset.productId;
        this.productUrl = this.dataset.productUrl;
        this.variantData = JSON.parse(this.querySelector('script').textContent);
        this.addEventListener('change', function () {
            this.varients = Array.from(this.querySelectorAll('input[type="radio"]:checked'), input => input.value);
            this.currentVarient = this.variantData.find(item => JSON.stringify(item.options) == JSON.stringify(this.varients))
            console.log(this.currentVarient)
            this.getVarient(this.currentVarient.id)

        })
    }

    getVarient(myVar) {
        const url = `/products/${this.productHandle}?variant=${myVar}&section_id=product-card-render`;
        fetch(url)
            .then(data => data.text())
            .then((content) => {
                const innerContent = new DOMParser().parseFromString(content, "text/html");
                this.innerHTML = innerContent.querySelector(`[data-product-handle='${this.productHandle}']`).innerHTML;
            })
    }
}

customElements.define('custom-product-card', CustomProductCard);