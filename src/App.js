import { Avatar, Paper, Typography, Grid, Item, Hidden } from "@mui/material";
import User from "./components/user";
import Friends from "./components/friends";
import Chat from "./components/chat";
import './styles/friends.css'
function App() {
  return (
    <div className="App">
      <Paper elevarion={12}>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={4} md={3}>
            <Paper elevarion={12} style={{height:"100%"}}>
                <Friends/>
              
            </Paper>
          </Grid>
          <Grid item xs={8} sm={8} md={6}>
            {/* <Paper elevarion={12}> */}

              <Chat/>
            
          </Grid>
          <Hidden smDown xsDown mdDown>

          <Grid item xs={0} sm={0} md={3}>
            <Paper elevarion={12}>
              <User/>
            </Paper>
          </Grid>
          </Hidden>
          
        </Grid>
      </Paper>
    </div>
  );
}

export default App;
