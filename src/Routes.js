import React from "react";
import {

    Route,
} from "react-router-dom";
import HomeComponent from "./components/pages/home/HomeComponent";
import GalleryComponent from "./components/pages/gallery/GalleryComponent";
import AboutComponent from "./components/pages/about/AboutComponent";
import NavBar from "./components/pages/NavBar"
import ContactComponent from "./components/pages/contact/ContactComponent"
import PrivateRoute from "./components/pages/routeprotect/PrivateRoute"
import GalleryHandlingComponent from "./components/pages/handlegallery/GalleryHandlingComponent"
import EditComponent from "./components/pages/handlegallery/EditComponent"
import UpdateComponent from "./components/pages/handlegallery/UpdateComponent"
import DeleteComponent from "./components/pages/handlegallery/DeleteComponent"

const Routes = () => {
    return (
        <>
            <Route exact path="/" component={NavBar}></Route>
            <PrivateRoute path="/home" component={HomeComponent}></PrivateRoute>
            <PrivateRoute path="/gallery" component={GalleryComponent}></PrivateRoute>
            <PrivateRoute path="/about" component={AboutComponent}></PrivateRoute>
            <PrivateRoute path="/contact" component={ContactComponent}></PrivateRoute>
            <PrivateRoute path="/image" component={GalleryHandlingComponent}></PrivateRoute>
            <PrivateRoute path="/edit" component={EditComponent}></PrivateRoute>
            <PrivateRoute path="/upload" component={UpdateComponent}></PrivateRoute>
            <PrivateRoute path="/delete" component={DeleteComponent}></PrivateRoute>
        </>
    )
}

export default Routes;