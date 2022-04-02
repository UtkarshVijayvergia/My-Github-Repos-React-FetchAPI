import React, { useState, useEffect } from 'react'
// const { base64decode } = require('nodejs-base64');

const FetchAPI = () => {



    // const [users, setUsers] = useState([])

    async function getuser(){
        try{
            let response = await fetch('https://api.github.com/users/UtkarshVijayvergia/repos');
            let data = await response.json();
            let meta = await data[0].name
            console.log(meta);
            return data
        }
        catch(error){
            console.log(error);
        }
    }

    getuser()
//   .then(data => console.log(data)); 



    // useEffect(() => {
    //     getusers()
    // }, [])






    // const [files, setfiles] = useState([])
    // const getfiles = async () => {
    //     try{
    //         const response2 = await fetch('https://api.github.com/repos/UtkarshVijayvergia/Admin-panel-with-Django-MySQL/contents/README.md');
    //         console.log(response2.json());
    //         setfiles(await response2.json());
    //     }
    //     catch(error){
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     getfiles()
    // }, [])







    // function b64_to_utf8(str) {
    //     // Going backwards: from bytestream, to percent-encoding, to original string.
    //     return decodeURIComponent(atob(str).split('').map(function(c) {
    //         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    //     }).join(''));
    // }



    return (
        <div><br />
            <h2>MY PROJECTS</h2>
            <div className='container-fluid mt-5'>
                <div className='row text-center'>


                    
                                
                </div>
            </div>
        </div>
    )
}

export default FetchAPI