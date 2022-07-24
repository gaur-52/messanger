import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import {
  Avatar,
  Paper,
  Typography,
  Grid,
  Item,
  Hidden,
  Divider,
  Button,
} from "@mui/material";
import "../styles/userStyles.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useState } from "react";

function User() {
  return (
    <div className="user-profile">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item md={12}>
          <Input
            className="search"
            placeholder="Search people"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </Grid>
        <Grid item md={12}>
          <Avatar
            alt="Ryan"
            src="ryan.jpg"
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
        <Grid item md={12}>
          <Typography variant="h5">Ryan Howard</Typography>
        </Grid>
        <Grid item md={12}>
          <Typography Variant="h6" className="devName">
            Junior Analysit
          </Typography>
        </Grid>
        <Grid container  className="alpha">
        <Grid item md={6} className="action-wrapper" direction="column">
              
              <div className="action-box">
                <ChatBubbleIcon style={{ color: "blue", height: 30, width: 30 }} />
              </div>
              <div>
                Call
              </div>
              </Grid>
          
          <Divider className="divider" />
          <Grid item md={6} className="action-Wrapper" direction="column">
              
          <div className="action-box">
            <VideocamIcon style={{ color: "blue", height: 30, width: 30 }} />
          </div>
          <div>
            Video Call
          </div>
          </Grid>
        </Grid>
        <Grid item md={12} className="options" container direction="column">
          <Grid className="option">
            <PersonIcon /> View Friends
          </Grid>
          <Grid className="option">
            <FavoriteBorderIcon /> Add to Favorite
          </Grid>
        </Grid>

        <Grid  directrion="row" container spacing={1} justifyContent="center">
          <Grid item>
          <Paper
            style={{
              backgroundColor: "rgb(178, 206, 238)",
              height: "50px",
              width: "50px",
              justifyContent:"center",
              alignItems:"center",
              display:"flex"
              
            }}
          >
            PDF
          </Paper>
          </Grid>
          <Grid item>
          <Paper
            style={{
              backgroundColor: "rgb(178, 206, 238)",
              height: "50px",
              width: "50px",
              justifyContent:"center",
              alignItems:"center",
              display:"flex"
            }}
          >
            Video
          </Paper>
          </Grid>
          <Grid item>
          <Paper
            style={{
              backgroundColor: "rgb(178, 206, 238)",
              height: "50px",
              width: "50px",
              justifyContent:"center",
              alignItems:"center",
              display:"flex"
            }}
          >
            MP3
          </Paper>
          </Grid>
          <Grid item>
          <Paper
            style={{
              backgroundColor: "rgb(178, 206, 238)",
              height: "50px",
              width: "50px",
              justifyContent:"center",
              alignItems:"center",
              display:"flex"
            }}
          >
            Image
          </Paper>
          </Grid>
        </Grid>

        <Grid>
        <Button variant="outlined" style={{borderRadius:"50px" , marginTop:"10px"}}>Outlined</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default User;
