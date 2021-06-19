import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./Button.css"

class CustomButton extends Component {
  render() {
    return (
      <Button
        className="custom_btn"
        endIcon={this.props.icon ? <div className="btn_icon_container">{this.props.icon}</div> : null}
      >
        <span className="btn_text">{this.props.text}</span>
      </Button>
    );
  }
}

export default CustomButton;
