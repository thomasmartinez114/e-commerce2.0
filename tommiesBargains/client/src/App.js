import React, { Component } from "react";

class App extends Component {
  state = {
    userName: ""
  };

  getSellerInfo = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <h2>Welcome to Tommie's Bargains!</h2>
        <input
          onChange={e =>
            this.setState({
              userName: e.target.value
            })
          }
          placeholder="user name"
          type="text"
        />
        <button onClick={this.getSellerInfo}>Get seller info</button>      
      </div>
    );
  }
}

export default App;
