import React, { useState, useEffect } from 'react'
// const { base64decode } = require('nodejs-base64');

const FetchAPI = () => {



    const [users, setUsers] = useState([])

    const getusers = async () => {
        try{
            const response = await fetch('https://api.github.com/users/UtkarshVijayvergia/repos')
            setUsers(await response.json());
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getusers()
    }, [])




    let x = 'Admin-panel-with-Django-MySQL'

    const [files, setfiles] = useState([])
    const getfiles = async (x) => {
        try{
            const response2 = await fetch('https://api.github.com/repos/UtkarshVijayvergia/Admin-panel-with-Django-MySQL/contents/README.md');
            // console.log(response2.json());
            setfiles(await response2.json());
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getfiles()
    }, [])

    // console.log(files.content)



    // const [, name2] = useState('utkarsh');   

    // const toggler = () => {
    //     if(name1 === 'utkarsh'){
    //     name2('vijayvergia');
    //     // console.log(name1);
    //     }
    //     else{
    //     name2('utkarsh')
    //     // console.log(name1);
    //     }
    // }



    

    // async function getreadme(x){        
    //     try{
    //         let response = await fetch('https://api.github.com/repos/UtkarshVijayvergia/' + x + '/contents/README.md')
    //         let data = await response.json();
    //         // let meta = await data.content
    //         // console.log(data.content);
    //         return data
    //     }
    //     catch(error){
    //         // console.log(error);
    //     }
    // }




    // const currentloginid = async (x) => {
    //     const response = await fetch('https://api.github.com/repos/UtkarshVijayvergia/' + x + '/contents/README.md')
      
    //     const data = await response.json()
        
    //     console.log(JSON.stringify(data))
      
    //     return JSON.stringify(data)
    // }


    // currentloginid(x)

    // console.log(getreadme(x));
  




    // function b64_to_utf8(str) {
    //     // Going backwards: from bytestream, to percent-encoding, to original string.
    //     return decodeURIComponent(atob(str).split('').map(function(c) {
    //         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    //     }).join(''));
    // }


    function b64_to_utf8( str ) {
        str = str.replace(/\s/g, '');    
        return decodeURIComponent(encodeURIComponent(window.atob(str)));
    }



    return (
        <div><br />
            <h2>MY PROJECTS</h2>
            <div className='container-fluid mt-5'>
                <div className='row text-center'>


                    {
                        users.map((curr) => {
                            if(!curr.fork){
                            return <div className="col-10 col-md-4 mt-5" key={ curr.id }>
                                    <div className="card p-2">
                                        <div className="d-flex align-items-center">
                                            
                                            {/* <div className="image"> 
                                                <img src="" className="rounded" width="155" />
                                            </div> */}
                                            
                                            <div className="ml-3 w-100">
                                                <h4 className="mb-0 mt-0 textLeft">{ curr.name }</h4>
                                                <span className="text-left">{ curr.description }</span>
                                                <br /><br />
                                                {/* <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats"> */}

                                                    {/* {
                                                        [files].map((inner_curr) => {
                                                            return <div key={inner_curr.url}><p>{String(inner_curr.content)}</p></div>
                                                        })
                                                    } */}

                                                {/* </div> */}
                                            
                                            </div>
                                        
                                        </div>
                                    </div>
                                    <br /><br /><br />
                                </div>        
                            }
                        })
                    }
                    
                </div>
            </div>



            <br /><br /><br /><hr /><br /><br />

        

            <h3>FORKED PROJECTS</h3>
            <div className='container-fluid mt-5'>
                <div className='row text-center'>


                {
                        users.map((curr) => {
                            if(curr.fork){
                            return <div className="col-10 col-md-4 mt-5" key={ curr.id }>
                                    <div className="card p-2">
                                        <div className="d-flex align-items-center">

                                            <div className="ml-3 w-100">
                                                <h4 className="mb-0 mt-0 textLeft">{ curr.name }</h4>
                                                <span className="text-left">{ curr.description }</span>
                                            </div>
                                        
                                        </div>
                                    </div>
                                    <br /><br /><br />
                                </div>        
                            }
                        })
                    }
                                
                </div>
            </div>
        </div>
    )
}

export default FetchAPI