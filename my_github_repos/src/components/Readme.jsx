import React, { useState, useEffect } from 'react'

const FetchAPI = () => {

    const [files, setfiles] = useState([])

    const getfiles = async () => {
        const response2 = await fetch('https://api.github.com/repos/UtkarshVijayvergia/To-do-list-React/contents/README.md');
        setfiles(await response2.json());
        // console.log(files);
    }

    useEffect(() => {
        getfiles()
    }, [])


   
    // console.log(typeof(Object.assign({}, files)));


  return (
    <div><br />
        <h2>MY PROJECTS</h2>
        {
            [files].map((inner_curr) => {
                return <div><p>{inner_curr.content}dwd</p></div>
            })
        }
    </div>
  )
}

export default FetchAPI