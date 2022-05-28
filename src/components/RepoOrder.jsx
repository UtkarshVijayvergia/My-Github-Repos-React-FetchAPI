import React, { useState, useEffect } from 'react'
import FetchAPI from './FetchAPI';


const RepoOrder = () => {

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

    // let nums = Object.keys(users).length;
    // console.log(nums);
    // console.log(users);
    

    return (
        <div><br />
            <h2>MY PROJECTS</h2>
            <div className='container mt-5'>
                <div className='row text-center'>
                    {
                        users.sort(sortFunction).map((curr) => {
                            if(curr.name !== 'PageIt-client' && curr.name !== 'PageIt-server' && curr.name !== 'Software-testing' && curr.name !== 'php-jwt' && curr.name !== 'Software-Engineering' && curr.name !== 'Coursera---HTML-CSS-and-Javascript-for-Web-Developers' && curr.name !== 'Cryptonite' && curr.name !== 'All-in-one-Linked-List' ){
                                return <FetchAPI/>
                            }    
                        })
                    }
                </div>
            </div>
        </div>
    )
}



export default RepoOrder