import React, { useEffect, useState } from 'react';
import DrawerComponent from "../../template/pagestemplate/DrawerComponent"
import axios from 'axios'
// import "./GalleryComponent.css"
// import Image from "../../atoms/Image/Image"
// import HTMLButton from "../../atoms/Button/Button"
// import ImageEditable from "../../molecules/image/ImageEditable"
import ImageOrganism from '../../organisms/image/ImageOrganism';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    imageDiv: {
        width: '500px',
        height: '500px',
        float: 'left'
    }
}))

export const ContentComponent = (props) => {
    console.log("making request...")
    const classes = useStyles();
    const [images, updateImages] = useState([])
    const [value, updateValue] = useState('')
    const [clickedHeading, updateClickedHeading] = useState('')
    const [objectToBeChanged, updateObjectToBeChanged] = useState('')


    useEffect(() => {
        console.log("Inside useEffect...")
        axios({
            method: "GET",
            url: "http://localhost:3001/image",
            params: {
                id:2,
            },
            responseType: "json",
        }).then(response => {
            console.log(response)
            response.data.map(eachObject => ( eachObject.selected=false, updateImages(images => [...images, eachObject])))
        })
        props.updateState(true)
    }, [])

    const changeHeading = (obj, index) => {
        console.log(obj)
        console.log("is clicked...", index)
        var imagesCopy = [...images];
        imagesCopy[index].selected = true;
        updateImages(imagesCopy)
        // // updateClickedHeading(obj.name)
        console.log(obj)
        updateObjectToBeChanged({ ...objectToBeChanged, ...obj })
        // console.log("Inside change heading ", objectToBeChanged)
        // console.log(obj.name)
    }

    const confirmEdit = (each, index) => {

        var newFileName = document.getElementsByClassName("h3-image-tag")[index].innerHTML.split('.png')[0]
        var oldFileName = objectToBeChanged.name.split('.png')[0]
        console.log("New file name is ", newFileName, " old file name is ", oldFileName)
        console.log("Confirmed changes....")
        axios.patch("http://localhost:3001/image", {
            oldFileName: oldFileName,
            newFileName: newFileName,
        })
        var imagesCopy = [...images];
        imagesCopy[index].selected = false;
        updateImages(imagesCopy)
        updateObjectToBeChanged(null)
        window.location.reload();

    }
    
    return (
        <div>
            <ul style={{listStyleType: 'none'}}>
                {images.map((each, index) => (
                    <li key={index}>
                        {console.log("selected is " ,each.selected)}
                {/* <div className="img-div">
                            <Image altText="Loading error...." imageName={"http://localhost:3001/uploads/" + each.name}></Image>
                            <br />
                            <ImageEditable className="h3-image-tag" headingOnClicked={() => changeHeading(each, index)} object={each} buttonName="Rename" buttonOnClicked={()=> confirmEdit(each, index)}></ImageEditable>           
                </div> */}
                        <ImageOrganism divClassName="img-div" className={classes.imageDiv} imgClassName="h3-image-tag" imgAltText="Loading error..."
                            headingOnClicked={() => changeHeading(each, index)} object={each} buttonName="Save" buttonOnClicked={() => confirmEdit(each, index)}
                        ></ImageOrganism>
                </li>
            ))}
            </ul>
        </div>
    )

}
const GalleryComponent = () => {
    const [value, updateValue] = useState(false)
    const updateState = () => {
        updateValue(!value)
    }
    return (

        <div>
            <DrawerComponent> <ContentComponent updateState={updateState}/> </DrawerComponent>

        </div>
    )
}
export default GalleryComponent;





// value = { value } onChange = {(e) => onChangeHandler(each)}
{/* <div className="tag-div" contentEditable="true" suppressContentEditableWarning={true}> */ }
{/* <h3 className = "h3-image-tag" style={{ width: '450px' }}  onClick={() => changeHeading(each, index)} >{each.name}</h3> */ }
{/* <ImageTag className="h3-image-tag" onClicked={() => changeHeading(each, index)} object={each}></ImageTag> */ }
{/* {each.selected ? <HTMLButton buttonName="Rename" onClicked={() => confirmEdit(each, index)}></HTMLButton> : ""}  */ }

{/* </div> */ }