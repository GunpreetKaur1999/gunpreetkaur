import React, { Component } from "react";
import "./Footer.css";
import Typography from "@material-ui/core/Typography";
import resumeData from "../../utils/resumeData";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer_right">
          <Typography className="footer_copyright">
            Designed and Developed by <a href="/">Gunpreet Kaur</a>
          </Typography>
        </div>
        <div className="footer_left">
          <Typography className="footer_name">
            {Object.keys(resumeData.socials).map((key) => (
              <a href={resumeData.socials[key].link} target="_blank">
                {resumeData.socials[key].icon}
              </a>
            ))}
          </Typography>
        </div>
      </div>
    );
  }
}

export default Footer;
