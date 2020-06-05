import React, {useEffect} from 'react'
import './neonButton.css'

export default function NeonButton(props) {
    const {children,id, color} = props

    useEffect(() => {
        console.log(props)
        document.getElementById(`containerButton_${id}`).style.setProperty('--main-color', color)
    }, [])
    return (
        <div className="containerButton" id={`containerButton_${id}`}>
            <a id="neonButton">{children}</a>
        </div>

    )
}