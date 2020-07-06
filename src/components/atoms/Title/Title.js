import React from 'react'
import { Typography } from '@material-ui/core'
import { useAuth0 } from '../../../react-auth0-spa'

const Title = (props) => {
    
    return (
        // <h6> Hi {props.title} Welcome</h6>
        <Typography variant="h6" noWrap>
                Hi {props.name}      
        </Typography>
    )
}

export default Title;