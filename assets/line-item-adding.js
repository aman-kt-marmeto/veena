document.querySelector('#atc-2').addEventListener('click', () => {
    const sectionId = document.querySelector('#atc-2').dataset.sectionId
    let cart = document.querySelector('cart-notification') || document.querySelector('cart-drawer');
    let quantity = document.querySelector(`#Quantity-${sectionId}`).value
    console.log(quantity)
    const dataValue = document.querySelector("#monogram").value;
    console.log(document.querySelector("#monogram"))
    console.log(dataValue)
    const dataId = document.querySelector('#atc-2').dataset.productId

    const pId = document.querySelector('#atc-2').dataset.pId
    let formData = {
        "Color": "Moccasin",
        "quantity": 1,
        "form_type": "product",
        "id": dataId,
        "product-id": pId,
        "section-id": sectionId,
        "sections": cart.getSectionsToRender().map((section) => section.id),
        "sections_url": window.location.pathname,
    };
    fetch(window.Shopify.routes.root + 'cart/add.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
    })
        .then(response => {
            return response.json();
        })
        .then((res) => {
            console.log(res)
            cart.renderContents(res);
        })
        .catch((error) => {
            console.error('Error:', error);
        })
})



