class customGridButton extends HTMLElement {
    constructor() {
        super();
        this.addEventListener('change', () => {
            this.inputClicked = this.querySelector('input[type="radio"]:checked')
            this.gridCount = Number(this.inputClicked.dataset.number)
            console.log(this.gridCount)
        })
    } s


}
customElements.define("custom-grid-button", customGridButton)