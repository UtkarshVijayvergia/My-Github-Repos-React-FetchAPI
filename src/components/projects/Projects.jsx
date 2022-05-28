import React from 'react'
import OngoingProjects from './ProjectComponents/OngoingProjects'
import OtherProjects from './ProjectComponents/OtherProjects'
import TopProjects from './ProjectComponents/TopProjects'

const Projects = () => {
  return (
    <div>
      <br />
      
      <h2>ONGOING PROJECTS</h2>
      <OngoingProjects />
      <hr className='container' />
      <br />

      <h2>MY PROJECTS</h2>
      <TopProjects />
      <hr className='container' />
      <br />

      <h2>OTHER PROJECTS</h2>
      <OtherProjects/>


    </div>
  )
}

export default Projects
