import React from 'react' 
import { ListItem, ListItemText } from '@material-ui/core' 
const MainListItems = (props) => {
    var menus = ['Home', 'About', 'Contact', 'Gallery']
    return (
        
            menus.map((text, index) => (
                <ListItem button style={{ marginLeft: '0px' }} key={text} onClick={() => props.clicked(text)}>
                    <ListItemText primary={text} />
                </ListItem>
            ))
        )
}
export default MainListItems