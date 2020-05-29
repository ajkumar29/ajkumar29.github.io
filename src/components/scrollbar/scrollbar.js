import React, {useEffect} from 'react'
import './scrollbar.css'

export default function Scrollbar({children}) {
    useEffect(() => {
        let progress = document.getElementById('progressbar')
        let totalHeight = document.body.scrollHeight - window.innerHeight;
        window.onscroll = function(){
            let progressHeight = (window.pageYOffset/totalHeight) * 100;
            progress.style.height = progressHeight + "%"
        }
    })

    return (
        <React.Fragment>
            <div id="progressbar"/>
            <div id="scrollPath"/>
            {children}
        </React.Fragment>
        
    )
}
