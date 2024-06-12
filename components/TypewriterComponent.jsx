"use client"

import { Typewriter } from "react-simple-typewriter";

export const TypewriterComponent = ({ words }) => {
    return (
        <Typewriter
            words={words}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1500}
        />
    )
}