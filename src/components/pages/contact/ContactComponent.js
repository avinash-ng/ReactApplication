import React, {useState} from 'react';
import {useAuth0} from '../../../react-auth0-spa'
// import './style.css'
import DrawerComponent from "../../template/pagestemplate/DrawerComponent"
// import './ContactPage.css'
import Label from "../../atoms/Label/Label"
import {makeStyles} from '@material-ui/core/styles'
import axios from 'axios';
// import Input from "../../atoms/Button/Button"

const useStyles = makeStyles((theme) => ({
    input: {
        width: '500px',
        height: '40px'
    },
    contactform: {
        border: '2px solid black',
        backgroundColor: 'silver',
        width: '600px',
        marginLeft: '500px',
        borderRadius: '10px'
    },
    button: {
        marginBottom: '20px',
        width: '100px',
        marginLeft: '0px',
        backgroundColor: 'black',
        color: 'white',
        fontSize: '20px'

    },
    div: {
        marginTop: '20px',
        marginBottom: '20px',
    },
    textarea: {
        width: '500px',
        height: '60px'
    },
    
}))

const ContentComponent = () => {
    const { user } = useAuth0() || {}
    
    const classes = useStyles();
    
    var values = ["india", "russia", "venezuela"]
    var names = ["India", "Russia", "Venezuela"]
    const [mail, updateMail] = useState()
    const mailId = user === undefined ? '16pa1a0576@vishnu.edu.in': user.mail
    var isInvalid = mailId !== mail || mail === '';

    const changeHandler = (e) => {
        updateMail(e.target.value)
    }
    const submit = () => {
        var data = {
            email: document.getElementsByClassName('fname')[0].value,
            message: document.getElementsByClassName('message')[0].value,
            password: document.getElementsByClassName('password')[0].value
        }
        axios.post('http://localhost:3001/sendmail', data).then(response => alert("mail sent successfully"))
    }
    return (
        <React.Fragment>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <div className="content-comp"> 
                <h1>Get In Touch With Us</h1>
                <h2>If you have any queries please feel free to contact us.</h2>
                <form className="contact-form" onSubmit={submit} className={classes.contactform}>
                    <div className="name-section">
                    
                        <div className="firstname" className={classes.div}>   
                            <label style={{paddingLeft: '-10px' , fontSize: '18px'}}>First Name </label> <br/>
                            <input className="fname" type="text" className={classes.input} required></input> <br/>
                        </div>

                        <div className="lastname" className={classes.div}>
                            <label style={{fontSize: '18px'}}>Last Name </label><br />
                            <input className="lname" type="text" className={classes.input} required></input><br />
                        </div>

                        <div className="email" className={classes.div}>
                            <label >Email   </label><br />
                            <input className="mail" className={classes.input} value={mail} onChange={changeHandler} type="email" required /><br />
                        </div>
                        
                        <div className="messaging-div" className={classes.div}>
                            <label style={{ fontSize: '18px' }}>leave a message</label> <br/>
                            <textarea className="message" className={classes.textarea} id="subject" name="subject" placeholder="Write something.." defaultValue="you have to write something" required></textarea><br/>
                        </div>

                        <div> 
                            <button className='button' className={classes.button} disabled={isInvalid} type="submit" >Submit</button> 
                        </div>
                    </div>
                </form>
            </div>
            
            
        </React.Fragment>
    )
}
const AboutComponent = () => {
    
    return (
        
        <div>
            <DrawerComponent > <ContentComponent /> </DrawerComponent>   
            
        </div>
    )
}
export default AboutComponent;


