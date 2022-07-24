import { Avatar, Badge, Grid, Paper, Typography,Hidden } from "@mui/material";
import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
function Friends() {
  return (
    <div>
      <Grid container direction="column">

        <Grid container className="owner-details">
          <Grid item xs={12} sm={12} md={3} className="owner-image">
        
            <Avatar src="boss.jpg" alt="boss" sx={{ width: 60, height: 60 }} />
        
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Typography variant="h6"  color="primary" className="boss-name">
              Michel Schot
            </Typography>
            <Typography color="A700">
                senior scientist
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1}>
          <EditIcon/>
          </Grid>
        </Grid>

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
          
            <Grid container  className="messages-list">
            <Grid container className="owner-details">
          <Grid item xs={12} sm={12} md={2} className="owner-image">
        
            <Avatar src="sam.jpg" alt="sam" sx={{ width: 40, height: 40 }} />
        
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            <Typography  color="primary" className="boss-name">
              Sam Halpert
            </Typography>
            <Hidden smDown xsDown>

            <Typography color="A700" className="message-preview">
                respected sir, the sells report or year 2021 shows that ..
            </Typography>
            </Hidden>
          </Grid>
          <Grid item xs={1} sm={1} md={1}>
          <CheckRoundedIcon color="green"/>
          </Grid>
        </Grid>
        <Grid container className="owner-details">
          <Grid item xs={12} sm={12} md={2} className="owner-image">
        
            <Avatar src="pam.jpg" alt="pam" sx={{ width: 40, height: 40 }} />
        
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            <Typography  color="primary" className="boss-name">
              Pam Beesly
            </Typography>
            <Hidden smDown xsDown>

            <Typography color="A700" className="message-preview">
            There are 3 meeting calls for the day and they all..
            </Typography>
            </Hidden>
          </Grid>
          <Grid item xs={1} sm={1} md={1}>
          <Badge badgeContent={1} color="primary"/>
          </Grid>
        </Grid>
        <Grid container className="owner-details">
          <Grid item xs={12} sm={12} md={2} className="owner-image">
        
            <Avatar src="dwight.jpg" alt="boss" sx={{ width: 40, height: 40 }} />
        
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            <Typography  color="primary" className="boss-name">
              Dwight Wilson
            </Typography>
            <Hidden smDown xsDown>

            <Typography color="A700" className="message-preview">
                Thank you sir for my promotion on the post of...
            </Typography>
            </Hidden>
          </Grid>
          <Grid item xs={1} sm={1} md={1}>
          <CheckRoundedIcon color="green"/>
          </Grid>
        </Grid>
        <Grid container className="owner-details">
          <Grid item xs={12} sm={12} md={2} className="owner-image">
        
            <Avatar src="angella.jpg" alt="boss" sx={{ width: 40, height: 40 }} />
        
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            <Typography  color="primary" className="boss-name">
            Angela Kinsey
            </Typography>
            <Hidden smDown xsDown>

            <Typography color="A700" className="message-preview">
                sir my work has been completed, although the time....
            </Typography>
            </Hidden>
          </Grid>
          <Grid item xs={1} sm={1} md={1}>
          <Badge badgeContent={1} color="primary"/>
          </Grid>
        </Grid>
        <Grid container className="owner-details">
          <Grid item xs={12} sm={12} md={2} className="owner-image">
        
            <Avatar src="kate.jpg" alt="boss" sx={{ width: 40, height: 40 }} />
        
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            <Typography  color="primary" className="boss-name">
            Kate Flannery
            </Typography>
            <Hidden smDown xsDown>

            <Typography color="A700" className="message-preview">
                reports on anual production is yet to be created sir
            </Typography>
            </Hidden>
          </Grid>
          <Grid item xs={1} sm={1} md={1}>
          <CheckRoundedIcon color="#33eb91"/>
          </Grid>
        </Grid>
            
            </Grid>
      </Grid>
            
    </div>
  );
}

export default Friends;
