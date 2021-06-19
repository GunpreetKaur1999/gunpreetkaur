import { Grid, Typography } from "@material-ui/core";

import resumeData from "../../utils/resumeData";
import "./Resume.css";
import React, { Component } from "react";

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        {/* About Me */}
        <Grid container className="section pb_45 pt_45">
          <Grid item className="section_title mb_30">
            {/* For underline */}
            <span></span>
            <h6 className="section_title_text">About Me</h6>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" className="aboutme_text">
              {resumeData.about}
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}
