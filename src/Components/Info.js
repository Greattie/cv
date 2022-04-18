import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import profile from "./images/profile.jpg";
import { Typography } from "@mui/material";
import { width } from "@mui/system";

function Info() {
  return (
    <div style={DivStyle}>
      <div style={DivStyleI}>
        <div style={DivStyleIII}>
          <Typography variant="h2" color="primary">
            YOUR NAME
          </Typography>
          <Typography variant="h4">Your Title</Typography>
        </div>
        <div style={DivStyleIII}>
          <Typography variant="h2" color="primary">
            EXPERIENCE
          </Typography>
          <Typography>Your Experience</Typography>
          <Typography>Your Experience</Typography>
          <Typography>Your Experience</Typography>
        </div>
        <div style={DivStyleIII}>
          <Typography variant="h2" color="primary">
            ACHIEVEMENT
          </Typography>
          <Typography>Your achievement</Typography>
          <Typography>Your achievement</Typography>
          <Typography>Your achievement</Typography>
        </div>
      </div>
      <div style={DivStyleII}>
        <div style={DivStyleIII}>
          <Typography variant="h2" color="primary">
            PERSONAL DETAILS
          </Typography>
          <Typography noWrap variant="h6" color="primary">
            Email <br />
            <Typography color="black"> Your Email</Typography>
          </Typography>
          <Typography color="primary" variant="h6">
            Mobile
            <Typography color="black">0000000000</Typography>
          </Typography>
          <Typography color="primary" variant="h6">
            Address
            <Typography color="black">Your Address</Typography>
          </Typography>
        </div>
        <div style={DivStyleIII}>
          <Typography variant="h2" color="primary">
            EDUCATION
            <Typography color="black">Your Education</Typography>
            <Typography color="black">Your Education</Typography>
            <Typography color="black">Your Education</Typography>
          </Typography>
        </div>
        <div style={DivStyleIII}>
          <Typography variant="h2" color="primary">
            SKILLS
            <Typography color="black">Your Skills</Typography>
            <Typography color="black">Your Skills</Typography>
            <Typography color="black">Your Skills</Typography>
          </Typography>
        </div>
      </div>
    </div>
  );
}

const DivStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "10px",
  margin: "10px",
  minWidth: "100%",
};
const DivStyleI = {
  padding: "10px",
  margin: "10px",
  justifyContent: "flex-start",
};
const DivStyleII = {
  padding: "10px",
  margin: "10px",
  justifyContent: "flex-end",
  marginRight: "50px",
};
const DivStyleIII = {
  padding: "10px",
};

export default Info;
