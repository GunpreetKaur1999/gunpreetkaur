import React, { Component } from 'react'
import { Grid, Typography } from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import "./Resume.css";
import TextField from '@material-ui/core/TextField';
import CustomButton from "../../components/Button/Button";

export default class Contact extends Component {
    render() {
        return (
            <div>
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
                    <a href="mailto:1999gunpreet@gmail.com" className="contact_button" >
                    <CustomButton text="Submit" />
                    </a>
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
    
            </div>
        )
    }
}
