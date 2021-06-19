import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import { CustomTimelineSeperator } from "./Timeline";

import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

export default class CustomTimelineItem extends Component {
  render() {
    return (
      <div>
        <TimelineItem>
          <CustomTimelineSeperator />

          <TimelineContent className="timeline_content">
            {this.props.link ? (
              <Typography class="timelineItem_text">
                <span>{this.props.title}:</span>{" "}
                <a href={this.props.link} target='_blank'>{this.props.text}</a>
              </Typography>
            ) : (
              <Typography class="timelineItem_text">
                <span>{this.props.title}:</span> {this.props.text}
              </Typography>
            )}
          </TimelineContent>
        </TimelineItem>
      </div>
    );
  }
}
