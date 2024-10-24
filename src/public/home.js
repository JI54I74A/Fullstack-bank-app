
import React from "react";
import {Card} from './context';
import {login} from './login';
import { useUser } from "./context";
//import { useLocation } from "react-router-dom";
//import { UserContext } from 'react';

function Home() {
    //const ctx = React.useContext(UserContext);
    //const location = useLocation();
    //const user     = location.state ? location.state.user : {};; // Default to an empty object if state is undefined

    const { user } = useUser();

    console.log(user)

    return (
       <Card 
            bgcolor="info"
            txtcolor="black"
            cardWidth="50"
            header="Chase your dream with us!"
            title={`Hi ${user.name}, Welcome to Online Bank Services`}
            text="You can use this bank"
            body={(<div  style={{margin: "30px 0px"}}>                    
                        <img src="bank2.png" className="img-fluid" alt="Responsive bank" 
                        style={{width: "130px", height:"130px"}} />                    
                    </div>)}    
       />
    )
}

export default Home;