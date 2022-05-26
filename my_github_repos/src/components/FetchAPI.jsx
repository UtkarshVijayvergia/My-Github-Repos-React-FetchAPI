import React, { useState, useEffect } from 'react'
import moment from "moment";
import "./projects.css"


const Readme2 = () => {
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


    function sortFunction(a,b){  
        var dateA = new Date(a.created_at).getTime();
        var dateB = new Date(b.created_at).getTime();
        return dateA < dateB ? 1 : -1;  
    }; 


    let myStyle = {
        "paddingRight": "30px",
        "paddingLeft": "30px",
        // "height":"700px",
        
    }


    let mydisc = {
        "display": "block",
        "justifyContent": "right",
        "marginLeft": "-15px",
        "marginRight": "-15px",
        "height":"130px",
    }


    let myname = {
        "marginLeft": "-2px",
        "marginRight": "-2px",
        "height": "60px",
    }


    let mytag = {
        "justifyContent": "center",
        "textAlign": "center",
        "background": "#ddf4ff",
        "fontSize": "12px",
        "fontWeight": "600",
        "lineHeight": "20px",
        "padding": "3px 10px",
        "margin": "3px 0 2px 2px",
        "borderRadius": "30px",
        "display": "inline-block", 
        "color":"#0969da",
    }

    let mydate = {
        "margin": "-11px -11px -11px -11px ",

    }


    return (
        <div><br />
            <h2>MY PROJECTS</h2>
            <div className='container mt-5'>
                <div className='row text-center'>

                    {
                        users.sort(sortFunction).map((curr) => {
                            if(curr.name !== 'PageIt-client' && curr.name !== 'PageIt-server' && curr.name !== 'Software-testing' && curr.name !== 'php-jwt' && curr.name !== 'Software-Engineering' && curr.name !== 'Coursera---HTML-CSS-and-Javascript-for-Web-Developers' && curr.name !== 'Cryptonite' && curr.name !== 'All-in-one-Linked-List' ){
                                return <div className="col-10 col-md-3 mt-5" style={myStyle} key={ curr.id }>
                                    <div className="card">
                                        <div className="d-flex align-items-center imagesizer_outer">
                                            {
                                                (curr.name !== 'Car-sale-and-usage-analysis' && curr.name !== 'To-do-list-React' && curr.name !== 'Admin-panel-with-Django-MySQL' && curr.name !=='Project-Showcase' && curr.name!=='Expense-Manager' && curr.name!=='php-mysql-form-filler')?
                                                <img src={require(`../components/images/sample.jpg`)} alt={curr.name} className="rounded imagesizer" width="100%" height="auto" ></img>
                                                :
                                                <img src={require(`../components/images/${curr.name}.jpg`)} alt={curr.name} className="rounded" width="100%" height="auto" ></img>
                                            }
                                        </div>
                                        <br />
                                        <div className="d-flex">
                                            <div className="ml-3 w-100">
                                                <h3 className="mb-0 mt-0 textLeft" style={myname}>{ curr.name }</h3>
                                                <div className='p-4'>
                                                    <span className="text-left" style={mydisc}>
                                                        { 
                                                            (curr.description == null)?
                                                            <span>left to update</span>: curr.description
                                                            
                                                        }
                                                    </span>
                                                </div>

                                                <div className='tagHeight'>
                                                    {
                                                        curr.topics.map((topics_curr, index) => {
                                                            return <>
                                                                <div key={index} className="tags" style={mytag}>
                                                                    {curr.topics[index]}
                                                                </div>
                                                                &nbsp;
                                                            </>
                                                        })
                                                    }
                                                </div>

                                               <br />
                                               <hr />

                                                <div className="text-left" style={mydate}>
                                                    Created on: { moment(curr.created_at, 'YYYY/MM/DD').format('MMM')} {moment(curr.created_at).utc().format('YYYY') }
                                                </div>

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
        </div>
    )
}

export default Readme2