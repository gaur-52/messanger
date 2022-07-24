import { Avatar, Button, Divider, Grid, Typography , Paper} from '@mui/material';
import { borderRight } from '@mui/system';
import React, { useState } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import VoiceIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import AttachIcon from '@mui/icons-material/AttachFileOutlined';
import Cameraicon from '@mui/icons-material/CameraAltOutlined';
import EmojiIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import '../styles/chat.css'
function Chat() {
    return ( <div className='chat-ui'> 
        <Grid container direction="column">
            <Grid container  xs={12} sm={12} md={12}>
                <Grid item xs={1} sm={1} md={2}  >
                    {/* //photo */}
                    <Avatar
                    styles={{marginRight:"10px"}}
                        src='ryan.jpg'
                        alt="ryan"
                        sx={{ width: 50, height: 50 }}
                        />

                </Grid>
                <Grid item xs={8} sm={8} md={7}>
                    <Typography color="dark"  variant="h6"> Ryan Howard</Typography>

                </Grid>
                <Grid item xs={3} sm={3} md={3}> 
                    <SearchOutlinedIcon/>
                    <FavoriteBorderOutlinedIcon/>
                    <NotificationsNoneOutlinedIcon/>
                </Grid>
                
            </Grid>
            <Divider />
            <Grid container style={{height:"70vh", width:"100%" , display:"flex"}} >
                <Paper className='chat-box'>
                    
                    <Grid container className="message-sent">
                    

                    <Avatar
                    
                        src='boss.jpg'
                        alt="boss"
                        sx={{ width: 25, height: 25 }}
                    />
                    
                    <Grid item xs={6} sm={6} md={6} >
                        <div className="sent-digest">

                            <div className='pdf-chat'>
                                    pdf
                            </div>
                            wire frame.pdf
                        </div>
                    </Grid >
                    </Grid>
                    <Grid container className="message-received">
                    
                    <div>
                        <div className="received-digest">
                        Always Ready, sir
                            </div>
                    </div >
                    <Avatar
                    
                    src='ryan.jpg'
                    alt="ryan"
                    sx={{ width: 25, height: 25 }}
                />
                    </Grid>



                    <Grid container className="message-sent">
                    

                    <Avatar
                    
                        src='boss.jpg'
                        alt="boss"
                        sx={{ width: 25, height: 25 }}
                    />
                    
                    <Grid item xs={6} sm={6} md={6} >
                        <div className="sent-digest">

                            Your new assignment is ready to be assigned, are you ready for that?
                        </div>
                    </Grid >
                    </Grid>
                    <Grid container className="message-received">
                    
                    <div>
                        <div className="received-digest">
                        Thanks a Lot Sir
                            </div>
                    </div >
                    <Avatar
                    
                    src='ryan.jpg'
                    alt="ryan"
                    sx={{ width: 25, height: 25 }}
                />
                    </Grid>

                    <Grid container className="message-sent">
                    

                    <Avatar
                    
                        src='boss.jpg'
                        alt="boss"
                        sx={{ width: 25, height: 25 }}
                    />
                    
                    <Grid item xs={6} sm={6} md={6} >
                        <div className="sent-digest">

                            very Good
                        </div>
                    </Grid >
                    </Grid>
                    <Grid container className="message-received">
                    
                    <div>
                        <div className="received-digest">
                        The assignment has been completed and submitted sir
                            </div>
                    </div >
                    <Avatar
                    
                    src='ryan.jpg'
                    alt="ryan"
                    sx={{ width: 25, height: 25 }}
                />
                    </Grid>

                    <Grid container className="message-sent">
                    

                    <Avatar
                        src='boss.jpg'
                        alt="boss"
                        sx={{ width: 25, height: 25 }}
                    />
                    
                    <Grid item xs={6} sm={6} md={6} >
                        <div className="sent-digest">

                            Hi, good morning
                        </div>
                    </Grid>
                    </Grid>
                    <Grid container className="message-received">
                    
                    <div>
                        <div className="received-digest">
                        Good Morning Sir 
                            </div>
                    </div >
                    <Avatar
                        src='ryan.jpg'
                        alt="ryan"
                        sx={{ width: 25, height: 25 }}
                />
                    </Grid>


                    <Grid container className="message-sent">
                    

                    <Avatar
                        src='boss.jpg'
                        alt="boss"
                        sx={{ width: 25, height: 25 }}
                    />
                    
                    <Grid item xs={6} sm={6} md={6} >
                        <div className="sent-digest">

                            Hi, good morning
                        </div>
                    </Grid>
                    </Grid>
                    <Grid container className="message-received">
                    
                    <div>
                        <div className="received-digest">
                        Good Morning Sir 
                            </div>
                    </div >
                    <Avatar
                    
                    src='ryan.jpg'
                    alt="ryan"
                    sx={{ width: 25, height: 25 }}
                />
                    </Grid>


                    


                    
                </Paper>
            </Grid>
            <Grid item className="message-box">
            <VoiceIcon/>
                <input  className='message-input' placeholder=" Write Something... "/>
            
            <div className='message-attach'>

                <AttachIcon/>
            
            </div>
            <div className='message-attach'>

            <Cameraicon/>
            </div>
            <div className='message-attach'>

            <EmojiIcon/>
            </div>

            <div className='send-button'>
            <SendRoundedIcon/>
            </div>
            </Grid>
                
        </Grid>
         </div> );
}

export default Chat;