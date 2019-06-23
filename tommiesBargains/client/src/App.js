import React, { Component } from "react";

class App extends Component {
  getUserInfo = () => {
    console.log("This button is clicked");
  };

  render() {
    return (
      <div className="App">
        <h2>Tommie's Bargains</h2>     
        <input placeholder="Seller's Name" type="text" />
        <button onClick={this.getSellerInfo}>Get seller info</button>    
      </div>
    );
  }
}

export default App;
