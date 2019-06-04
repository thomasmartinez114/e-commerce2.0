function getUserInfo() {
  const input = document.getElementById("userName").value;
  console.log(input);
  axios.get("showprofile/" + input).then(response => {
    const listItems = response.data.map(item => {
      return (
        "<li class='get-all-users'>" +
        item.username +
        " | " +
        item.message +
        "</li>"
      );
    });
    document.getElementById("userInfo").innerHTML =
      "<ul>" + listItems.join("\n") + "</ul>";
  });
}

function handleSubmit() {
  const userName = document.getElementById("user-name").value;
  const userId = document.getElementById("user-id").value;
  const message = document.getElementById("message").value;
  console.log(userName, userId, message);

  const payload = {
    username: userName,
    id: userId,
    message
  };
  axios.post("/api/", payload).then(response => {
    console.log(response);
  });
}

function getAllUsers() {
  axios.get("/getallusers/").then(response => {
    const listNames = response.data.map(names => {
      return (
        "<li class='get-all-users'>" +
        names.username +
        " | " +
        names.message +
        "</li>"
      );
    });
    document.getElementById("result").innerHTML =
      "<ul>" + listNames.join("\n") + "</ul>";
  });
}

// <table style="width:100%">
//   <tr>
//     <th>Firstname</th>
//     <th>Lastname</th>
//     <th>Age</th>
//   </tr>
//   <tr>
//     <td>Jill</td>
//     <td>Smith</td>
//     <td>50</td>
//   </tr>
//   <tr>
//     <td>Eve</td>
//     <td>Jackson</td>
//     <td>94</td>
//   </tr>
// </table>;
