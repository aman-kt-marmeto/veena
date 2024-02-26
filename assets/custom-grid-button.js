class customGridButton extends HTMLElement {
    constructor() {
        super();
        this.addEventListener('click', (e) => {
            const colCount = e.target.dataset.column
            const productGrid = document.querySelector("#product-grid")
            productGrid.classList.forEach(function (className) {
                if (className.endsWith('desktop')) {
                    productGrid.classList.replace(className, `grid--${colCount}-col-desktop`);
                }
            });
        })
    } s


}
customElements.define("custom-grid-button", customGridButton)