
import React from "react";
import Balance from "./balance";
import { createContext, useContext } from 'react';

    const UserContext = createContext();

    export const UserProvider = ({children}) => {   //children:prop allows the component to wrap other components, to access the context.
        const [user, setUser] = React.useState(null);

        return (
            <UserContext.Provider value={{user,setUser}}> 
            {children} </UserContext.Provider>
        )
    } 
    export const useUser = () => {
        return useContext(UserContext);
    }
   
   /* data.map((user,id,i)=> {
        if(user._id==='67084bcf12fb180fe6f6069a')    
        userBalance =  user.balance   
        console.log(userBalance);                               
        return userBalance;
        
        }
    )*/

function Card(props) {
        function classes() {
            const bg     = props.bgcolor ? ' bg-' + props.bgcolor : ' ' ;
            const txt    = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
            const cWidth = props.cardWidth ? ' w-' + props.cardWidth: ' ';

            return 'card mb-3' + bg + txt + cWidth;
        }
    return (
        <div className="container">
            <div className="row"> 
                <div className="col-lg-12" style={{justifyContent: "center",display: "flex"}}>  
                    <div className={classes()} style={{marginTop:"165px",textAlign: "center",minWidth: "18rem"}}>
                        <div className= "card-header" style={{fontWeight: "500",color:"rgb(243 206 94)",fontSize: "18px",fontFamily:"Rubik"}}>{props.header}</div>
                            <div className="card-body card-body-style" style={{background: "white"}}>
                                {props.title && (<h5 className="card-tile card-tile-style">{props.title}</h5>)}
                                {props.text && (<div className="card-text">{props.text}</div>)}
                                {props.body}
                                {props.status && (<div id="createStatus" style={{fontWeight: "500",fontSize: "15px",paddingTop: "10px",color: "#f11558"}}>{props.status}</div>)}
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export  {Card};