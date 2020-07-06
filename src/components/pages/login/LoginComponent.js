import React from 'react'
// import "./LoginComponent.css"
import { useAuth0 } from '../../../react-auth0-spa'
import { Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        backgroundImage: "URL(../../../static/images/login-background.jpg)",
        height: '980 px',
        border: '1 px solid red',
    },
    headDiv: {
        height: '100px',
    },
    buttonDiv: {
        marginTop: '300px',
        fontSize: '25px',
        marginLeft: '0 %'
    }

}))
const LoginComponent = () => {
    const classes = useStyles();
    const { loginWithRedirect } = useAuth0()
    return (
        
        <div className="main-div" className={classes.mainDiv}>

            <div className="head-div" className={classes.headDiv}>
                <h1>Simple PortFolio Website</h1>
            </div>
            <div className="button-div" className={classes.buttonDiv}>
                <Button onClick={() => loginWithRedirect()} variant="contained" style={{width: '200px', fontSize: "20px", color:'red'}}>Authenticate</Button>
            </div>
        </div>
        
    )
}
export default LoginComponent;