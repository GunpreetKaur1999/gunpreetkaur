import { Grid, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import "./Projects.css";
import resumeData from "../../utils/resumeData";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';


const Projects = () => {
  return (
    <Grid container className="section pb_45 pt_45">
        {/* Title */}
      <Grid item className="section_title mb_30">
        {/* For underline */}
        <span></span>
        <h6 className="section_title_text">Projects</h6>
      </Grid>
        {/* End of Title */}

        {/* Projects */}
        <Grid item xs={12}>
            <Grid container spacing={2}>
                {resumeData.projects.map(
                    (project) =>(
                <Grid item lg={4}> 
                    <Card className="customCard">
                        <CardActionArea>
                            <CardMedia/>
                            <CardContent>
                                
                                <img className="customCard_image" src={project.image}  />
                                <Typography variant="h6" className='customCard_title '>{project.title}</Typography>
                                <Typography className='customCard_description'>{project.description}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                ))}
            
        </Grid>



    </Grid>
    </Grid>
  );
};

export default Projects;
