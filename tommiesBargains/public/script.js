function getSellerInfo() {
    const input = document.getElementById('sellerName').value;
    console.log(input)
    axios.get('/showprofile/' + input)
    .then(response => {
        document.getElementById('sellerInfo').innerHTML = response.data
    })
}

function handleSubmit() {
    const sellerEmail = document.getElementById('seller-email').value;
    const sellerName = document.getElementById('seller-name').value;
    console.log(sellerEmail, sellerName);

    const payload = {
        selleremail: sellerEmail,
        sellername: sellerName
    }
    axios.post('/api/', payload)
    .then(response => {
        console.log(response)
    })
}