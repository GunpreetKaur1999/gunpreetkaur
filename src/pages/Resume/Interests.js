import React, { Component } from 'react'
import { Grid, Typography } from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import "./Resume.css";
import Paper from "@material-ui/core/Paper";
import TimelineDot from "@material-ui/lab/TimelineDot";


export default class Interests extends Component {
    render() {
        return (
            <div>
                    <Grid container className="section  pb_45 p_50">
        <Grid item className="section_title mb_30">
          {/* For underline */}
          <span></span>
          <h6 className="section_title_text">Interests</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={3}>
            {resumeData.interests.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skill_title">
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography variant="body2" className="skill_description">
                      <TimelineDot
                        variant={"outlined"}
                        className="timeline_dot"
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
            </div>
        )
    }
}
