import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Icon } from "@material-ui/core";
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
