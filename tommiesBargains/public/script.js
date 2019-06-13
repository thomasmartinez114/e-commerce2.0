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
      element.sellername +
      " || " +
      "Location: " +
      element.sellercity +
      ", " +
      element.sellerstate +
      "</li>"
    );
  });

  document.getElementById(id).innerHTML =
    "<ul>" + listItems.join("\n") + "</ul>";
}

function handleSubmit() {
  const sellerEmail = document.getElementById("seller-email").value;
  const sellerName = document.getElementById("seller-name").value;
  const sellerCity = document.getElementById("seller-city").value;
  const sellerState = document.getElementById("seller-state").value;
  const productName = document.getElementById("product-name").value;
  const productPrice = document.getElementById("product-price").value;
  console.log(
    sellerEmail,
    sellerName,
    sellerCity,
    sellerState,
    productName,
    productPrice
  );

  const payload = {
    selleremail: sellerEmail,
    sellername: sellerName,
    sellercity: sellerCity,
    sellerstate: sellerState,
    productname: productName,
    productprice: productPrice
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

// Button
function buttonPress() {
  const realFileBtn = document.getElementById("real-file");
  const customBtn = document.getElementById("custom-button");
  const customTxt = document.getElementById("custom-text");

  customBtn.addEventListener("click", function() {
    realFileBtn.click();
  });
  realFileBtn.addEventListener("change", function() {
    if (realFileBtn.value) {
      customTxt.innerHTML = realFileBtn.value.match(
        /[\/\\]([\w\d\s\.\-\(\)]+)$/
      )[1]; // this will display only file name not the entire path
    } else {
      customTxt.innerHTML = "No file chosen, yet";
    }
  });
}
