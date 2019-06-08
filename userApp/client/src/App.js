import React, { Component } from "react";
import Registration from "./components/Registration";
import UserInfo from "./components/UserInfo";
import AllUsers from "./components/AllUsers";

export default class App extends Component {
  state = {
    pageView: ""
  };

  render() {
    return (
      <div style={{ margin: "10px", textAlign: "center" }} className="App">
        <h2>My Express App</h2>
        <a
          style={{ margin: "10px" }}
          href="#"
          onClick={() => this.setState({ pageView: <Registration /> })}
        >
          Register
        </a>

        <a
          style={{ margin: "10px" }}
          href="#"
          onClick={() => this.setState({ pageView: <UserInfo /> })}
        >
          User Info
        </a>

        <a
          style={{ margin: "10px" }}
          href="#"
          onClick={() => this.setState({ pageView: <AllUsers /> })}
        >
          All Users
        </a>

        <br />
        {this.state.pageView}
      </div>
    );
  }
}
