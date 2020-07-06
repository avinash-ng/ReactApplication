import React from 'react' 
import { ListItem, ListItemText } from '@material-ui/core'
import Anchor from '../../atoms/Anchor/Anchor'
// import './ListWithSubMenu.css'
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({

    dropbutton: {
        marginLeft: '35 px',
        fontFamily: 'roboto',
        fontSize: '1rem',
        letterSpacing: '0.00938em',
        marginLeft: '-120px'
    }
}))
const ListWithSubMenu = () => {
    const classes = useStyles()
    return (
        <div className="dropdown">
            <ListItem  button key='Image' className="dropbtn" className={classes.dropbutton}>
                <ListItemText primary={'Image'} />
            </ListItem>
            <div className="dropdown-content" style={{marginLeft: '-110px'}}>
                {/* <a href="/edit">Edit</a>
                <a href="/delete">Delete</a>
                <a href="/upload">Upload</a> */}
                <Anchor href="/edit" name="Edit"></Anchor>
                <Anchor href="/delete" name="Delete"></Anchor>
                <Anchor href="/upload" name="Upload"></Anchor>
            </div>
        </div>
              
    )
}
export default ListWithSubMenu;