import React, { Fragment }  from 'react';
import DrawerComponent from "../../template/pagestemplate/DrawerComponent"
import { useAuth0 } from '../../../react-auth0-spa';
import ProfilePic from '../../atoms/ProfilePicture/ProfilePic';
import Label from '../../atoms/Label/Label';
// import './AboutComponent.css'
import history from '../../../utils/history'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    briefcontent: {
        marginTop: '-500px',
        marginLeft: '500px',
        width: '750px',
    },
    span: {
        fontSize: '20px'
    },
    image: {
        marginLeft: '0px',
        width: '300px',
        height: '250px',
        paddingTop: '0px'
    },
    button: {
        border: 'none',
        outline: '0',
        display: 'inline - block',
        padding: '8px',
        color: 'white',
        backgroundColor: '#000',
        textAlign: 'center',
        cursor: 'pointer',
        width: '300px',
        fontSize: '18px'
    },
    title: {
        color: 'grey',
        fontSize: '18px',
    },
    card: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        maxWidth: '300px',
        marginLeft: '100px',
        textAlign: 'center',
        fontFamily: 'arial',
    },
    anchor: {
        textDecoration: 'none',
        fontSize: '22px',
        color: 'black'
    }
}))

const ContentComponent = () => {
    const classes = useStyles();
    const { loading } = useAuth0() || true;
    const {user} = useAuth0() || {name: 'avinash'}

    if (loading || !user) {
        return <div>Loading...</div>;
    }
    const handleClick = () => {
        history.push('/contact')
    }

    return (
        <div className="entire-content">



            <div className="card" className={classes.card}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <img className={classes.image} src={user.picture} alt="John" />
                <h1>{user.name}</h1>
                <p className="title" className={classes.title}>Student</p>
                <p style={{fontSize: '18px'}}>Vishnu Institute Of Technology</p> 
                <div style={{ margin: '24px 0' }}>
                    <Link className={classes.anchor} to="#" style={{marginRight: '10px'}}><i className="fa fa-dribbble"></i></Link> 
                    <Link className={classes.anchor} to="#" style={{marginRight: '10px'}}><i className="fa fa-twitter"></i></Link>  
                    <Link className={classes.anchor} to="www.facebook.com" style={{marginRight: '10px'}}><i className="fa fa-linkedin"></i></Link>  
                    <Link className={classes.anchor} to="#"><i className="fa fa-facebook"></i></Link>  
                </div>
                <button style={{ marginLeft: '0px' }} className={classes.button} onClick={handleClick}>Contact</button>
            </div>

            <div className="brief-content" className={classes.briefcontent}>
                <h1>Brief About Me</h1>
                <span classname={classes.span}>Hi i am Avinash Kolaparthi. 
                
                </span>
                <div className="place-info">
                    <h2>Where do i live </h2>
                    <span classname={classes.span}>I am living in Bhimavaram.</span>
                </div>
                <div className="study-info">
                    <h2>Study Info</h2>
                    <span classname={classes.span}>I am in final year final semester bachelor degree studying in vishnu institute of Technology.
                    </span>
                </div>
            </div>

        </div>
    );
}
const AboutComponent = () => {
    
    return (
        
        <DrawerComponent > <ContentComponent /> </DrawerComponent>   
            
        
    )
}
export default AboutComponent;