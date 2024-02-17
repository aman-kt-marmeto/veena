class CustomProductCard extends HTMLElement {
    constructor() {
        super();
        this.productHandle = this.dataset.productHandle;
        this.sectionId = this.dataset.sectionId;
        this.variantData = JSON.parse(this.querySelector('.product-varients').textContent);
        this.clicked = null
        this.varients = Array.from(this.querySelectorAll('input[type="radio"]:checked'));
        this.addEventListener('change', () => {
            this.clicked = this.querySelector('input[type="radio"]:checked')
            this.getVarient(this.clicked);
        })

    }

    getVarient(myVar) {
        const id = myVar.getAttribute("id");
        this.currentVarient = this.variantData.find(varient => varient.id == id)
        console.log(this.currentVarient.id)
        const url = `/products/${this.productHandle}?variant=${this.currentVarient.id}&section_id=${this.sectionId}`;

        fetch(url)
            .then(data => data.text())
            .then((content) => {
                const innerContent = new DOMParser().parseFromString(content, "text/html");
                this.innerHTML = innerContent.querySelector(`[data-product-handle='${this.productHandle}']`).innerHTML;
            })
    }


}

customElements.define('custom-product-card', CustomProductCard);