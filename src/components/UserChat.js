import React, { Component } from "react";
import "../App.css";

class UserChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverUrl: "https://default-chat-server.com",
      category: "Necklace",
      message: ""
    };
  }
  componentDidMount() {
    console.log("Connecting to chat server", this.state.serverUrl);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.category !== this.state.category || prevState.serverUrl !== this.state.serverUrl) {
      console.log("Resetting chat connection...");
      console.log(`New server: ${this.state.serverUrl}, Category: ${this.state.category}`);
    }
  }
  componentWillUnmount() {
    console.log("Destroying chat connection...");
  }
  handleCategoryChange = e => this.setState({ category: e.target.value });
  handleServerChange = e => this.setState({ serverUrl: e.target.value });
  handleMessageChange = e => this.setState({ message: e.target.value });
  handleSend = () => {
    console.log(`Message sent: ${this.state.message}`);
    this.setState({ message: "" });
  };
  render() {
    return (
      <div className="user-chat">
        <h3>User Chat</h3>
        <label>Category:</label>
        <select value={this.state.category} onChange={this.handleCategoryChange}>
          <option value="Necklace">Necklace</option>
          <option value="Bangles">Bangles</option>
          <option value="Accessories">Accessories</option>
       </select>
        <label>Server URL:</label>
        <input type="text" value={this.state.serverUrl} onChange={this.handleServerChange} />
        <label>Message:</label>
        <input type="text" value={this.state.message} onChange={this.handleMessageChange} />
        <button className="buy-btn" onClick={this.handleSend}>Send</button>
      </div>
    );
  }
}

export default UserChat;