import { Grid, Typography } from "@material-ui/core";
import React from "react";
import resumeData from "../../utils/resumeData";
import "./Resume.css";
import CustomTimeline, {
  CustomTimelineSeperator,
} from "../../components/Timeline/Timeline";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import CustomTimelineItem from "../../components/Timeline/TimelineItem";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import Paper from "@material-ui/core/Paper";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TextField from '@material-ui/core/TextField';
import CustomButton from "../../components/Button/Button";

const Resume = () => {
  return (
    <>
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

      {/* Education and Accomplishments */}
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

      {/* Skills */}
      <Grid container className="ssection  pb_45 p_50">
        <Grid item className="section_title mb_30">
          {/* For underline */}
          <span></span>
          <h6 className="section_title_text">Skills</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={3}>
            {resumeData.skills.map((skill) => (
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

      {/* Contact */}
      <Grid container spacing={6} className="section pt_45">
        {/* Contact form */}
        <Grid item xs={12} lg={7} className="mb_30">
          <Grid container>
            <Grid item className="section_title mb_30">
              {/* For underline */}
              <span></span>
              <h6 className="section_title_text">Contact Form</h6>
            </Grid>

            <Grid item xs={12}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth name="name" label='Name'/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth name="email" label='E-mail'/>
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth name="message" label='Message' multiline rows={4}/>
                </Grid>
                <Grid item xs={12}>
                    <CustomButton text='Submit'/>
                </Grid>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Contact information */}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title mb_30">
              {/* For underline */}
              <span></span>
              <h6 className="section_title_text">Contact Information</h6>
            </Grid>

            <Grid item xs={12}>
                <Grid container >
                    <Grid item xs={12}>
                <Typography className="contactInfo_item">
                    <span>Address: </span> {resumeData.address}
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography className="contactInfo_item">
                    <span>Phone: </span> {resumeData.phone}
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography className="contactInfo_item">
                    <span>Email: </span> {resumeData.email}
                </Typography>
            </Grid>
            </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container className='contactInfo_socialsContainer'>
                    {Object.keys(resumeData.socials).map( (key)=>(
                        <Grid item className='contactInfo_social'>
                        <a href={resumeData.socials[key].link}>
                            {resumeData.socials[key].icon}
                        </a>
                        </Grid>
                    ) )}
                </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    
        
    </>
  );
};

export default Resume;
