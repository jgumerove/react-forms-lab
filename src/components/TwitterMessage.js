import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    const {maxChars} = this.props
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleMessageChange} />
        <h1>{maxChars - this.state.message.length}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
