
import React from "react";
import {Container} from "react-bootstrap";
import "../styles/AboutUs.css";

import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing(1),
  },
  container: {
    display: 'flex',
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const hrStyle = {
    display: "block",
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    height: "1px",
    backgroundColor: "white",
    width: "100%"
  };

  const hrStyle_2 = {
    display: "block",
    marginTop: "10px",
    marginBottom: "10px",
    marginRight: "auto",
    height: "1px",
    backgroundColor: "#333",
    width: "80%"
  };

  return (
    <Container id="aboutUs-frame" style={{marginTop: "40px"}}>
    <h3 id="aboutUs-title">Our Mission</h3>
        <hr style={hrStyle}></hr>
    <div className={classes.container}>
    <Slide direction="left" in={true}>
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{backgroundColor: "#333", color:"white"}} TransitionProps={{unmountOnExit: true}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Quality Assurance</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{width: "100%"}}>
          <hr style={hrStyle}></hr>
          <ul style = {{ fontSize: "14px", position: 'relative', left: '12px'}}>
          <li>
          With more than 20 years of extensive experience in the automotive industry, We have all the right 
          connections to make your dream car come together.
          </li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{backgroundColor: "#333", color:"white"}} TransitionProps={{unmountOnExit: true}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Automotive Performance</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{width: "100%"}}>
          <hr style={hrStyle}></hr>
          <ul style = {{ fontSize: "14px", position: 'relative', left: '12px'}}>
                          <li>
                            <p> Engine Performance Upgrades (Turbo, Supercharger, Computer Chip,...)</p>
                          </li>
                          <hr style={hrStyle_2}></hr> 
                          <li>
                            <p> Drivetrain Modifications and Upgrades </p>
                          </li>
                          <hr style={hrStyle_2}></hr> 
                          <li>
                            <p> Suspension Upgrades and Brakes Upgrades</p>
                          </li>
                          <hr style={hrStyle_2}></hr> 
                          <li>
                            <p> Enhanced Performance Exhaust Upgrades</p>
                          </li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{backgroundColor: "#333", color:"white"}} TransitionProps={{unmountOnExit: true}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Exterior Cosmetics</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{width: "100%"}}>
          <hr style={hrStyle}></hr>  
          <ul style = {{ fontSize: "14px", position: 'relative', left: '12px'}}>
                          <li>
                            <p> Comprehensive Body Kit Modifications (Spoilers, Wide Body, Flares,...)</p>
                          </li>
                          <hr style={hrStyle_2}></hr> 
                          <li>
                            <p> Custom Powder Coating Rims and Brake Calipers</p>
                          </li>
                          <hr style={hrStyle_2}></hr> 
                          <li>
                          <p> Ceramic Coating/Premium Paint Protection</p>
                          </li>
                          <hr style={hrStyle_2}></hr> 
                          <li>
                            <p> Custom 3D PPF(Paint Protection Film)</p>
                          </li>
           </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{backgroundColor: "#333", color:"white"}} TransitionProps={{unmountOnExit: true}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>Interior Modifications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{width: "100%"}}>
          <hr style={hrStyle}></hr>  
          <ul style = {{ fontSize: "14px", position: 'relative', left: '12px'}}>
                          <li>
                           <p> Complete Custom Interior (Change on Design, Leather, Stiching,...)</p>
                          </li>
                          <hr style={hrStyle_2}></hr> 
                          <li>
                           <p> Custom Sound System, Navigation, Dash Cam, Anti-Theft System with GPS Tracking.</p>
                          </li>
                          <hr style={hrStyle_2}></hr> 
                          <li>
                          <p> Custom Dash (Gauge and Indicators)</p>
                          </li>
                          <hr style={hrStyle_2}></hr> 
                          <li>
                           <p> LED Ambient Lighting</p>
                          </li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>    
    </div>
    </Slide>
    </div>
    </Container>
  );
}

