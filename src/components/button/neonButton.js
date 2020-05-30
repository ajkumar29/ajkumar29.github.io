import React, {useEffect} from 'react'
import './neonButton.css'

export default function NeonButton({children, color}) {

    useEffect(() => {
        document.getElementById(`containerButton_${color}`).style.setProperty('--main-color', color)
    }, [])

    return (
        <div class="containerButton" id={`containerButton_${color}`}>
            <a>{children}</a>
        </div>

    )
}