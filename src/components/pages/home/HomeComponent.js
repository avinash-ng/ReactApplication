import React from 'react';
import DrawerComponent from "../../template/pagestemplate/DrawerComponent"
export const ContentComponent = () => {
    return (
        <div>
            <div className="heading">
                <h1>Welcome to home page</h1>
            </div>
            <div className="content">
                <span style={{fontSize: '25px'}}>In this simple app i have provided some functionalities like authentication with auth0.
                I have used react as a front end and nodejs backend.
                And for sending email i used a dependency named nodemailer in the backend.
                I also stored images uploaded by the end user in the database with the help of another node dependency named multer. It is used for handling form data like images, files.
                For this applications the pattern followed is atomic design pattern, where the main elements are atoms, molecules, organisms, pages, templates.
                </span>
            </div>
        </div>
    )
}
const HomeComponent = () => {

    return (

        <div>
            <DrawerComponent> <ContentComponent/> </DrawerComponent>

        </div>
    )
}
export default HomeComponent;