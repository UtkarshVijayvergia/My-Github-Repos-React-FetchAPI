import React, { useState, useEffect } from 'react'

const FetchAPI = () => {

    const [users, setUsers] = useState([])

    const getusers = async () => {
        const response = await fetch('https://api.github.com/users/UtkarshVijayvergia/repos');
        setUsers(await response.json());
    }

    useEffect(() => {
        getusers()
    }, [])



  return (
    <div><br />
        <h2>MY GITHUB REPOSITORIES</h2>
        <div className='container-fluid mt-5'>
            <div className='row text-center'>


                {
                    users.map((curr) => {
                        return <div className="col-10 col-md-4 mt-5" key={ curr.id }>
                                <div className="card p-2">
                                    <div className="d-flex align-items-center">
                                        
                                        <div className="image"> 
                                            <img src="" className="rounded" width="155" />
                                        </div>
                                        
                                        <div className="ml-3 w-100">
                                            <h4 className="mb-0 mt-0 textLeft">{ curr.name }</h4>
                                            <span className="text-left">{ curr.description }</span>
                                            
                                            <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                <div className="d-flex flex-column">
                                                    <span className="articles">Articles</span> 
                                                    <span className="number1">38</span> 
                                                </div>
                                                
                                                <div className="d-flex flex-column">
                                                    <span className="followers">Followers</span> 
                                                    <span className="number2">980</span> 
                                                </div>
                                                
                                                <div className="d-flex flex-column">
                                                    <span className="rating">Rating</span> 
                                                    <span className="number3">8.9</span> 
                                                </div>
                                            
                                            </div>
                                        
                                        </div>
                                    
                                    </div>
                                </div>
                                <br /><br /><br />
                            </div>
                            
                        
                    })
                }

                            
            </div>
        </div>
    </div>
  )
}

export default FetchAPI