/* global axios */

function getSellerInfo() {
    const input = document.getElementById('sellerUsername').value
    console.log(input);
    axios.get(`/showprofile/ ${input}`)
        .then(response => {
            document.getElementById('sellerInfo').innerHTML = response.data;
        })
}

function handleSubmit() {
    const product = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const description = document.getElementById('productDescription').value;
    console.log(product, price, description);
    const payload = {
        product,
        price,
        description
    }
    axios.post('/api/', payload)
        .then(response => {
            console.log(response)
        })
}