
import React from "react";
import {Card} from './context';
import { useNavigate } from 'react-router-dom';
//import { UserContext } from '../App';


function AllData() {

    //const ctx = React.useContext(UserContext)
    //console.log(JSON.stringify(ctx.users));
    const [data, setData] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
      //fetch all accounts from API
      fetch('/account/all').then(response => response.json())
      .then(data => {
        //console.log(data);
        setData(data);
      })
    }, []);

    function closeUserInfo() {
      navigate('/login');
    }
    
    return (
        <div className="container">
        <Card 
        bgcolor  ="info"
        txtcolor ="black"
        cardWidth="100"
        header   ="Data Summary" 
        title    ={<div>USER INFORMATIONS<button className="btn btn-danger" 
                  style={{position: 'absolute',right: '52px',top: '7px',color: '#212529',padding: '3px 10px'}} onClick={closeUserInfo}>X</button></div>}
        body     ={<div className="container" style={{paddingTop: "10px"}}>
                        <div className="row">
                         <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">ID</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Balance</th>
                              </tr>
                            </thead>
                            <tbody>
                             {data.map((user)=>
                              <tr>    
                                <td>{user._id}</td>             
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>${user.balance}</td>
                              </tr> )} 
                            </tbody>
                          </table>           
                        </div>
                  </div>}   
               />
       
        </div>
    )
}

export default AllData;