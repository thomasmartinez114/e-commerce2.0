function getSellerInfo() {
  const input = document.getElementById("sellerEmail").value;
  const url = "/api/showprofile/" + input;
  axios.get(url).then(response => {
    displaySellers(response.data, "sellerInfo");
  });
}

function displaySellers(sellerData, id) {
  const listItems = sellerData.map(element => {
    return (
      "<li>" +
      "Email: " +
      element.selleremail +
      " || " +
      "Seller: " +
      (element.sellername
        ? element.sellername
        : " " + element.selleremail + " did not include their email address.") +
      "</li>"
    );
  });

  document.getElementById(id).innerHTML =
    "<ul>" + listItems.join("\n") + "</ul>";
}

function handleSubmit() {
  const sellerEmail = document.getElementById("seller-email").value;
  const sellerName = document.getElementById("seller-name").value;
  console.log(sellerEmail, sellerName);

  const payload = {
    selleremail: sellerEmail,
    sellername: sellerName
  };
  axios.post("/api/", payload).then(response => {
    console.log(response);
  });
}

function getAllSellers() {
  axios.get("/api/getallsellers").then(response => {
    displaySellers(response.data, "result");
  });
}
