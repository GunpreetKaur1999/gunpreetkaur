import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link , NavLink ,withRouter } from "react-router-dom";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import TelegramIcon from '@material-ui/icons/Telegram';
import "./Header.css"


const Header = (props) => {
    const pathName = props?.location?.pathname;
  return (
    
    <Navbar expand="lg" className="header">
        <Nav.Link as={NavLink} to="/" className="header_navlink">
            <Navbar.Brand className='header_home'>
                <HomeRoundedIcon />
            </Navbar.Brand>
        </Nav.Link>

        <Navbar.Toggle />
        <Navbar.Collapse>
            {/* Resume */}
            <Nav className="header_left">
                {/* We are using active nav link */}
                <Nav.Link as={NavLink} to="/" className={pathName == "/" ? "header_link_active" : "header_link"}>Resume</Nav.Link>
            
            {/* Portfolio */}
           
                {/* We are using active nav link */}
            <Nav.Link as={NavLink} to="/projects" className={pathName == "/projects" ? "header_link_active" : "header_link"}>Projects</Nav.Link>
            </Nav>

            <div className='header_right'>
                {Object.keys(resumeData.socials).map(key => (
                    <a href={resumeData.socials[key].link} target="_blanck">{resumeData.socials[key].icon}</a>
                ))}
                <CustomButton text={'Hire Me'} icon={<TelegramIcon />} />
            </div>
        </Navbar.Collapse>
    </Navbar>
    
  );
};

export default withRouter(Header);
