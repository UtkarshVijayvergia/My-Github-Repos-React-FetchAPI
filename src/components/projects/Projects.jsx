import React from 'react'
import OngoingProjects from './ProjectComponents/OngoingProjects'
import OtherProjects from './ProjectComponents/OtherProjects'
import TopProjects from './ProjectComponents/TopProjects'
import { useState } from 'react';   // for using useState hook
import { useEffect } from 'react';   // for using useEffect hook



const Projects = () => { 
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

  let bg = {
      "backgroundColor": "#bbf9e6",
  }


  return (
    <div style={bg}>
      <br />
      
      <h2>ONGOING PROJECTS</h2>
      <OngoingProjects ScreenWidth={ScreenWidth} />
      <hr className='container' />
      

      <h2>MY PROJECTS</h2>
      <TopProjects  ScreenWidth={ScreenWidth }/>
      <hr className='container'/>
      

      <h2>OTHER PROJECTS</h2>
      <OtherProjects ScreenWidth={ScreenWidth} />
      <br /><br /><br /><br /><br /><br />


    </div>
  )
}

export default Projects
