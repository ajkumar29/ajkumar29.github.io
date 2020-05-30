import React from 'react'
import './glitchText.css'

export default function GlitchText({text}) {
    return (
        <div class="content">
            <h1 class="text" data-text={text}>{text}</h1>
        </div>
    )
}
