
import React, { useEffect } from "react";
import {Card} from './context';
import { useUser } from "./context";

function Balance() {

    const [balance, setBalance] = React.useState(0);

    const {user,setUser} = useUser();

    useEffect(() => {
        if(user && user.balance){
          setBalance(user.balance)
        console.log(balance)
        }
      }, []);                    // Runs when user changes

      //setUser(prevUser => ({ ...prevUser, balance: user.balance }));

    return (<>
       
        <Card 
        bgcolor  ="info"
        txtcolor ="black"
        cardWidth="50"
        header   ="Balance"
        title    ="Your account balance"
        text     ={(<div><img src="bank2.png" className="img-fluid" alt="Responsive bank" 
                   style={{width: "130px", height:"130px"}} />
                   </div>)} 
        body     ={<div className="container" style={{margin: "40px 0px"}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="col-lg-7" style={{float: "left"}}>
                                <h5 >Balance </h5>       
                            </div>    
                            <div className="col-lg-5" style={{float: "right"}}>              
                                <h5><span style={{borderRadius: "8%",padding: "2px 5px",border: "1px groove #8080802e",background: "#8080802e"}}>
                                {balance}
                                </span></h5>
                                <span style={{fontSize: "12px"}}>current balance</span>
                            </div>   
                        </div>
                    </div>
                  </div>}   
    />
    </>
    )
}

export default Balance;