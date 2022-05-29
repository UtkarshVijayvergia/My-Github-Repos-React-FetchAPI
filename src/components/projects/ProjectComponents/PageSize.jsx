import React from 'react'
import { useState } from 'react';   // for using useState hook
import { useEffect } from 'react';   // for using useEffect hook
import TopProjects from './TopProjects';


const PageSize = () => {


    const [ScreenWidth, setScreenWidth] = useState(window.innerWidth)

    const actual_width = () => {
        // console.log(window.innerWidth);
        setScreenWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", actual_width)
        
        return () => {
            window.removeEventListener("resize", actual_width)
        }
    })
    




    const [ScreenHeight, setScreenHeight] = useState(window.innerHeight)

    const actual_height = () => {
        setScreenHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener("resize", actual_height)
        
        return () => {
            window.removeEventListener("resize", actual_height)
        }
    })





    return (
        <div>
            {/* <br /><br />
            <center>
                <h2>Size of the screen is</h2> */}
                <TopProjects ScreenWidth={1234}/>
                <h2>{ ScreenWidth } X { ScreenHeight }</h2>
            {/* </center> */}
            
        </div>
    )
}
// export {ScreenWidth};

export default PageSize;