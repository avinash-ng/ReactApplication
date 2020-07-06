import React from 'react'
import Option from "../../atoms/ListOption/Option"

const DropDownList = props => {
    return (

        <div>
            <select id={props.compId} name={props.compName}>
                <Option value={props.values[0]} name={props.names[0]}></Option>
                <Option value={props.values[1]} name={props.names[1]}></Option>
                <Option value={props.values[2]} name={props.names[2]}></Option>
            </select>
        </div>
    )
}
export default DropDownList