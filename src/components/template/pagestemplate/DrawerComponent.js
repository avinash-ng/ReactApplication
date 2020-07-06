import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '../../molecules/Toolbar/ToolBar';
import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import ReactDOM from 'react-dom';
import { useAuth0 } from "../../../react-auth0-spa"
import Button from "@material-ui/core/Button"
import history from "../../../utils/history"
// import Title from "../../atoms/Title/Title"
import sinon from 'sinon'
import './DrawerComponent.css'
import MainListItems from '../../molecules/List/MainListItems';
import ListWithSubMenu from '../../organisms/ListWithSubMenu/ListWithSubMenu';
const drawerWidth = 240;




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 'inherit'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    marginTop: '64px',
    flexGrow: 1,
    height: 'inerit',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const clicked = (text) => {
  var loweredText = "/" + text.toLowerCase();

  history.push(loweredText);
  // ReactDOM.render(, document.getElementById("content"));
}





export default function PermanentDrawerLeft({ children }) {
  
  const classes = useStyles();
  //hardcode user name
  
  // var userName = user===undefined? 'avinash': user.name
  const { user, logout, isAuthenticated } = useAuth0();
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  }
  const hoverHandler = () => {
    document.getElementsByClassName('list-div')[0].style.display = ''
  }
  const leaveHandler = () => {
      document.getElementsByClassName('list-div')[0].style.display = 'none'
  }


    return (
       
      <div className={classes.root} >
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
          <ToolBar style={{ marginLeft: '1100px', width: '75px', backgroundColor: 'white' }} name={user.name} buttonName="logout" variant="contained" onClick={logout}/>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
          <List>
           
          {/* {['Home', 'About', 'Contact', 'Gallery'].map((text, index) => (
            <ListItem button style={{marginLeft: '0px'}} key={text} onClick={() => clicked(text)}>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
            
              <MainListItems clicked={clicked}/>
              {/* <div className="dropdown">
              <ListItem button key='Image' className="dropbtn">
                <ListItemText primary={'Image'} />
                </ListItem>
                <div className="dropdown-content">
                  <a href="/edit">Edit</a>
                  <a href="/delete">Delete</a>
                  <a href="/upload">Upload</a>
                  </div>
                </div>
              */}
            <ListWithSubMenu />
              </List> 
          

        <Divider />
          
        {/* <div className="list-div">
            <ul>
              <li>
                <Button> Edit </Button>
              </li>
              <li>
                <Button> Delete </Button>
              </li>
              <li>
                <Button>  </Button>
              </li>
            </ul>    
        </div> */}
          
          
        
      </Drawer>
      <main className={classes.content} id="main">
        {/* <div className={classes.toolbar} /> */}
        
          <div id="content"> {children}</div>
      </main>
    </div>
  );
}
