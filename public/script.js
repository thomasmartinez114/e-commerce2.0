function getUserInfo() {
    const input = document.getElementById("userName").value
    console.log(input);
    axios.get("showprofile/" + input)
      .then(response => {
        document.getElementById('userInfo').innerHTML = JSON.stringify(response.data);
      })
   }
   

function handleSubmit() {
    const userName = document.getElementById('user-name').value;
    const userId = document.getElementById('user-id').value;
    const message = document.getElementById('message').value;
    console.log(userName, userId, message);

    const payload = {
        username: userName,
        id: userId,
        message
    }
    axios.post('/api/', payload)
    .then(response => {
        console.log(response)
    })
}


function getAllUsers() {
    axios.get('/getallusers/')
    .then(response => {
        document.getElementById('result').innerHTML = JSON.stringify(response.data)
    })
}