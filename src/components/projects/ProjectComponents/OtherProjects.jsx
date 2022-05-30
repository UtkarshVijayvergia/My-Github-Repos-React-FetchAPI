import React, { useState, useEffect } from 'react'
import moment from "moment";
import "./projects.css"
import { Button, Collapse } from 'react-bootstrap';


const OtherProjects = (props) => {
    const [open, setOpen] = useState(false);


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


    return (
        <div className='container mt-5'>
            <div className='row text-center'>
                {
                    users.sort(sortFunction).map((curr) => {
                        if(curr.name !== 'PageIt-client' && curr.name !== 'Bennett-Bulletin' && curr.name !== 'PageIt-server' && curr.name !=='Project-Showcase' && curr.name !== 'Car-sale-and-usage-analysis' && curr.name !== 'Software-testing' && curr.name !== 'php-jwt' && curr.name !== 'Software-Engineering' && curr.name !== 'Coursera---HTML-CSS-and-Javascript-for-Web-Developers' && curr.name !== 'Cryptonite' && curr.name !== 'All-in-one-Linked-List' ){
                            return (<div className="col-10 col-lg-4 col-md-6 col-sm-12 mt-2 myStyle" key={ curr.name }>
                                <div className="card card-prop">
                                    
                                    <Button variant="light"  className="collapse-colour"
                                        onMouseEnter={() => setOpen(!open)}
                                        onMouseLeave={() => setOpen(!open)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}>
                                    
                                        
                                        <a target="_blank" rel="noopener noreferrer" href={`https://github.com/UtkarshVijayvergia/${curr.name}/`}>
                                            <div className="d-flex align-items-center imagesizer_outer">
                                            {
                                                (curr.name !== 'To-do-list-React' && curr.name !== 'Admin-panel-with-Django-MySQL' && curr.name!=='Expense-Manager' && curr.name!=='php-mysql-form-filler')?
                                                <img src={require(`../images/sample.jpg`)} alt={curr.name} className="rounded imagesizer dropdown" width="100%" height="auto" ></img>
                                                :
                                                <img src={require(`../images/${curr.name}.jpg`)} alt={curr.name} className="rounded dropdown" width="100%" height="auto" ></img>
                                            }
                                            </div>
                                        </a>
                                    
                                        <div className="d-flex">
                                            <div className="ml-3 w-100">
                                                <a id='alink' target="_blank" rel="noopener noreferrer" href={`https://github.com/UtkarshVijayvergia/${curr.name}/`}>
                                                    {
                                                        (props.ScreenWidth<=1800 && curr.name === 'Admin-panel-with-Django-MySQL')?
                                                        <center><h3 className="mb-0 mt-0 textLeft myname-exception">{ curr.name }</h3></center>
                                                        :
                                                        <center><h3 className="mb-0 mt-0 textLeft myname">{ curr.name }</h3></center>
                                                    }
                                                    <br />
                                                </a>
                                            </div>
                                        </div>
                                    
                                        <Collapse in={open}>
                                            <div id="example-collapse-text">
                                                <div className='p-4'>
                                                    <div className="text-left">
                                                        { 
                                                            (curr.description == null)?
                                                            <span>Left to Update</span>
                                                            : 
                                                            curr.description
                                                        }
                                                    </div>
                                                </div>
                                                <div className='tagHeight'>
                                                    {
                                                        curr.topics.map((temp, index) => {
                                                            return (<>
                                                                <div key={ index } className="tags mytag">
                                                                    {curr.topics[index]}
                                                                </div>
                                                                &nbsp;
                                                            </>)
                                                        })
                                                    }
                                                </div>
                                                <hr />
                                                <div className="text-left mydate">
                                                    Created on: { moment(curr.created_at, 'YYYY/MM/DD').format('MMM')} {moment(curr.created_at).utc().format('YYYY') }
                                                </div>
                                            </div>
                                        </Collapse>
                                    </Button> 
                                </div><br /><br />
                            </div>
                            )
                        }    
                    })
                }
            </div>
        </div>
    )
}



export default OtherProjects