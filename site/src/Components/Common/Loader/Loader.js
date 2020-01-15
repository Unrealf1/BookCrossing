import React from 'react'
import "./Loader.css"

export default () =>
    <div style={{display: 'flex', justifycontent: 'center', margin: '.5rem'}}>
    <div className="lds-ripple">
        <div></div>
        <div></div>
    </div>
    </div>