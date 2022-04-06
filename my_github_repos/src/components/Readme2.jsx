import React, { useState, useEffect } from 'react'
// const { base64decode } = require('nodejs-base64');
// import axios from 'axios';
import moment from "moment";
import Image_dir from './Images';
import "../components/images/Admin-panel-with-Django-MySQL.jpg"


const Readme2 = () => {



    const [users, setUsers] = useState([])
    // const [content, setContent] = useState();
    // const [arr, setArr] = useState();
    // const [names, setName] = useState();
    // const [message, setMessage] = useState();

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


    function sortFunction(a,b){  
        var dateA = new Date(a.created_at).getTime();
        var dateB = new Date(b.created_at).getTime();
        return dateA < dateB ? 1 : -1;  
    }; 




    let image_var = 0 

    // var i = 1;

    // useEffect( () => {
    //     async function exper(){
    //         const temp = await axios.get(`https://api.github.com/users/UtkarshVijayvergia/repos`)
    //         // console.log(res.data.content);
    //         setArr(temp)
    //         setName(temp.data[i].name)
    //     }
    //     exper()
    // },[])

    // console.log(names);
    // console.log(arr);
    // console.log(typeof(arr));


    // let x = 'Admin-panel-with-Django-MySQL'

    // useEffect( () => {
    //     async function exp(){
    //         const res = await axios.get(`https://api.github.com/repos/UtkarshVijayvergia/${ names }/contents/README.md`)
    //         // console.log(res.data.content);
    //         setContent(res.data.content)
    //         setMessage(res.data.message)
    //     }
    //     exp()
    // })

    // console.log(message);

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

    let myStyle = {
        "paddingRight": "30px",
        "paddingLeft": "30px",
    }

    
    let tag_style = {
        // "padding":"1px",
        
        // "padding": "20px",
        // "width": "200px",
        // "height": "150px",
    }

    let inner_tag_style = {
        "borderRadius": "15px",
        "border": "2px solid #73AD21",
    }

    


    return (
        <div><br />
            <h2>MY PROJECTS</h2>
            <div className='container mt-5'>
                <div className='row text-center'>

                    {
                        users.sort(sortFunction).map((curr) => {
                            if(curr.name != 'php-jwt' && curr.name != 'Software-Engineering' && curr.name != 'Coursera---HTML-CSS-and-Javascript-for-Web-Developers' && curr.name != 'Cryptonite' && curr.name != 'All-in-one-Linked-List' ){
                                return <div className="col-10 col-md-3 mt-5" style={myStyle} key={ curr.id }>
                                    <div className="card p-2">
                                        
                                        
                                        
                                        

                                        <div className="d-flex align-items-center"> 
                                            <img src={require(`../components/images/Admin-panel-with-Django-MySQL.jpg`)} alt='sampl' className="rounded" width="100%" height="auto" ></img> 
                                        </div>
                                        
                                        <br />
                                        
                                        <div className="d-flex align-items-center">
                                            
                                            {
                                                
                                                // Image_dir.map((image_curr) => {
                                                //     return <div className="image"> 
                                                //         <img src={image_curr.image} className="rounded" width="155" />
                                                //     </div>
                                                // })

                                                
                                            }
                                            {/* <span>
                                                <img src={require(`../components/images/Admin-panel-with-Django-MySQL.jpg`)} alt='sampl' className="rounded" width="155" ></img> 
                                            </span> */}


                                             
                                            
                                            
                                            
                                            <div className="ml-3 w-100">
                                                
                                                <h4 className="mb-0 mt-0 textLeft">{ curr.name }</h4>
                                                <span className="text-left">
                                                    { 
                                                        (curr.description == null)?
                                                        <span>description</span>: curr.description
                                                        
                                                    }
                                                </span>

                                                <br /><br />



                                                {/* <span>{curr.topics.join(' ')}</span> */}

                                                {
                                                    curr.topics.sort(sortFunction).map((topics_curr, index) => {
                                                        return <span key={index}>
                                                                <div className="" style={tag_style}>
                                                                    <div className="" >
                                                                        <p style={inner_tag_style}>{curr.topics[index]}</p>
                                                                        
                                                                    </div>
                                                                
                                                            </div>
                                                            {/* &nbsp;&nbsp; */}
                                                        </span>
                                                    })
                                                }
                                                {/* <br /><br /><br /> */}
                                                {

                                                }

                                                {/* <div className="w3-tag w3-round w3-green" style={tag_style}>
                                                    <div className="w3-tag w3-round w3-green w3-border w3-border-white">
                                                        <p>{curr.topics.join(' ')}</p>
                                                    </div>
                                                </div> */}




                                                <br /><br />

                                                <span className="text-left">
                                                    Created on: { moment(curr.created_at, 'YYYY/MM/DD').format('MMM')} {moment(curr.created_at).utc().format('YYYY') }
                                                </span>

                                                <br />

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

            {/* <br /><br /><br /><hr /><br /><br />

            <h3>FORKED PROJECTS</h3>
            <div className='container-fluid mt-5'>
                <div className='row text-center'>

                 
                </div>
            </div> */}
        </div>
    )
}

export default Readme2