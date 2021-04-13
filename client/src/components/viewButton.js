import React from 'react'

function ViewButton(props) {
    return(
        <a {...props}>
            {props.children}
        </a>
    )
}

export default ViewButton