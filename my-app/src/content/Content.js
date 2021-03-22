import React from 'react'
import './Content.css'
import './Rowcontent'
import Rowcontent from './Rowcontent'
 function Content() {
    return (
        <div className="Content">
            <Rowcontent title='Featured' className="row" />
            <Rowcontent title='Movies' className="row" />
            <Rowcontent title='Shows' className="row" />
        </div>
    )
}

export default Content
