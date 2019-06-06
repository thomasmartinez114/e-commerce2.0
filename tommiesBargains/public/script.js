function getSellerInfo() {
    const input = document.getElementById('sellerName').value;
    console.log(input)
    axios.get('/showprofile/' + input)
    .then(response => {
        document.getElementById('sellerInfo').innerHTML = response.data
    })
}

function handleSubmit(){
    const userName = document.getElementById('user-name').value;
    const userId = document.getElementById('user-id').value;
    const message = document.getElementById('message').value;
    console.log(userName, UserId, message);
}