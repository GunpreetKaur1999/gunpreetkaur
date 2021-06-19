import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import profile_img from "../../assets/images/profile.jpeg";
import "./Profile.css";
import CustomTimeline, { CustomTimelineSeperator } from "../Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import PersonPinCircleRoundedIcon from "@material-ui/icons/PersonPinCircleRounded";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomTimelineItem from "../Timeline/TimelineItem";
import { keys } from "@material-ui/core/styles/createBreakpoints";
import CustomButton from "../Button/Button"
import GetAppIcon from '@material-ui/icons/GetApp';

class Profile extends Component {
  render() {
    return (
      <div className="profile container_shadow">
        <div className="profile_name">
          <Typography className="name">{resumeData.name}</Typography>
          <Typography className="title">{resumeData.title}</Typography>
        </div>
        <figure className="profile_image">
          <img src={profile_img} alt="" />
        </figure>
        <div className="profile_information">
          <CustomTimeline icon={<PersonPinCircleRoundedIcon />}>
            <CustomTimelineItem title="Name" text={resumeData.name}/>
            <CustomTimelineItem title="Birthday" text={resumeData.birthday}/>
            <CustomTimelineItem title="Email" text={resumeData.email} />
            <CustomTimelineItem title="College" text={resumeData.college} />

            {Object.keys(resumeData.formalsocials).map((key) => (
                <CustomTimelineItem title={key} text={resumeData.formalsocials[key].text} link={resumeData.formalsocials[key].link}/>
            ))}

          </CustomTimeline>
          
          <div className="button_container">
          <CustomButton text="Download Cv" icon={<GetAppIcon/>}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
