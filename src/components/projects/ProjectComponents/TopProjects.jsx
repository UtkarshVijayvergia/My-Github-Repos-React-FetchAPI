import React, { useState, useEffect } from 'react'
import moment from "moment";
import "./projects.css"
import { Button, Collapse } from 'react-bootstrap';


const TopProjects = () => {
    const [open, setOpen] = useState(false);

    let mydisc = {
        "display": "block",
        "justifyContent": "right",
        "marginLeft": "-15px",
        "marginRight": "-15px",
        "height":"130px",
    }

    let myStyle = {
        "paddingRight": "30px",
        "paddingLeft": "30px",        
    }


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
                        if(curr.name === 'Project-Showcase' || curr.name === 'Car-sale-and-usage-analysis' || curr.name === 'Bennett-Bulletin'){
                            return (<div className="col-10 col-md-3 mt-5" style={myStyle} key={ curr.id }>
                                <div className="card card-colour">

                                    <Button variant="light"
                                        onMouseEnter={() => setOpen(!open)}
                                        onMouseLeave={() => setOpen(!open)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}>
                                        
                                        <a target="_blank" rel="noopener noreferrer" href={`https://github.com/UtkarshVijayvergia/${curr.name}/`}>
                                            <div className="d-flex align-items-center imagesizer_outer">
                                            {
                                                (curr.name !== 'Car-sale-and-usage-analysis' && curr.name !=='Project-Showcase')?
                                                <img src={require(`../images/sample.jpg`)} alt={curr.name} className="rounded imagesizer dropdown" width="100%" height="auto" ></img>
                                                :
                                                <img src={require(`../images/${curr.name}.jpg`)} alt={curr.name} className="rounded dropdown" width="100%" height="auto" ></img>
                                            }
                                            </div>
                                        </a>
                                    
                                    
                                        <div className="d-flex dropdown">
                                            <div className="ml-3 w-100 dropdown-content">
                                                <a id='alink' target="_blank" rel="noopener noreferrer" href={`https://github.com/UtkarshVijayvergia/${curr.name}/`}>
                                                    {
                                                        (curr.name === 'Car-sale-and-usage-analysis')?
                                                        <center><h3 className="mb-0 mt-0 textLeft myname-exception">{ curr.name }</h3></center>
                                                        :
                                                        <center><h3 className="mb-0 mt-0 textLeft myname">{ curr.name }</h3></center>
                                                    }
                                                </a>
                                            </div>
                                        </div>
                                    </Button>
                                    <Collapse in={open}>
                                        <div id="example-collapse-text">
                                            {/* <div class="collapse" id="collapseExample"> */}
                                                <div className='p-4'>
                                                    <div className="text-left" style={mydisc}>
                                                        { 
                                                            (curr.description == null)?
                                                            <span>left to update</span>: curr.description
                                                            
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
                                                <br />
                                                <hr />
                                                <div className="text-left mydate">
                                                    Created on: { moment(curr.created_at, 'YYYY/MM/DD').format('MMM')} {moment(curr.created_at).utc().format('YYYY') }
                                                </div>
                                            </div>
                                        {/* </div> */}
                                    </Collapse>

                                            <br />
                                        
                                </div>
                                <br /><br /><br />
                            </div>
                            )
                        }    
                    })
                }
                {/* <Button
                    onMouseEnter={() => setOpen(!open)}
                    onMouseLeave={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    click
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </Collapse> */}
            </div>
        </div>
    )
}



export default TopProjects