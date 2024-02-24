document.querySelector(".quantity__button").addEventListener('click', function (e) {
    console.log(document.querySelector(".quantity__button").values)
})
document.querySelector('.quantity__input').addEventListener('change', (e) => {
    const price = Number(document.querySelector("#cart-button__price").dataset.price.split(".")[0].replace(",", ""))
    let calcPrice = price * Number(e.target.value)
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
    });
    calcPrice = formatter.format(calcPrice)
    document.querySelector('#cart-button__price').innerHTML = calcPrice;
})