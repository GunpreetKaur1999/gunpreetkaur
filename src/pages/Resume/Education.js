import { Grid, Typography } from "@material-ui/core";
import React, {Component} from "react";
import resumeData from "../../utils/resumeData";
import "./Resume.css";
import CustomTimeline, {
  CustomTimelineSeperator,
} from "../../components/Timeline/Timeline";
import SchoolIcon from "@material-ui/icons/School";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

export default class Education extends Component {
  render() {
    return (
      <div>
        <Grid container className="section">
          <Grid item className="section_title mb_30">
            {/* For underline */}
            <span></span>
            <h6 className="section_title_text">Resume</h6>
          </Grid>

          <Grid item xs={12}>
            <Grid container className="resume_timeline">
              {/* Education History */}
              <Grid item sm={12} md={6}>
                <CustomTimeline title="Education History" icon={<SchoolIcon />}>
                  {resumeData.education_history.map((education) => (
                    <TimelineItem>
                      <CustomTimelineSeperator />

                      <TimelineContent className="timeline_content">
                        <Typography className="timeline_title">
                          {education.title}
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          {education.date}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="timeline_description"
                        >
                          {education.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </CustomTimeline>
              </Grid>
              {/* Accomplishments  */}
              <Grid item sm={12} md={6}>
                <CustomTimeline
                  title="Accomplishments"
                  icon={<EmojiPeopleIcon />}
                >
                  {resumeData.accomplishments.map((accomplishment) => (
                    <TimelineItem>
                      <CustomTimelineSeperator />

                      <TimelineContent className="timeline_content">
                        <Typography className="timeline_title">
                          {accomplishment.title}
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          {accomplishment.date}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="timeline_description"
                        >
                          {accomplishment.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </CustomTimeline>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
