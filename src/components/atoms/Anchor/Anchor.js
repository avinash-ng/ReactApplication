import React from 'react'

const Anchor = (props) => {
    return (
        <a href={props.href}>{props.name}</a>
    )
}
export default Anchor