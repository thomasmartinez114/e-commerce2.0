function getUserInfo() {
    const input = document.getElementById('userName').value;
    console.log(input);
    axios.get(`/showprofile/ ${input}`)
    .then(response => {
        document.getElementById('userInfo').innerHTML = response.data
    })
}