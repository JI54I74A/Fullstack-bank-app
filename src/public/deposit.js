
import React, { useEffect } from "react";
import {Card} from './context';
import { useUser } from './context';

function Deposit(props) {

    const [deposit,setDeposit]  = React.useState('');
    const [status,setStatus]    = React.useState('');
    const [balance, setBalance] = React.useState(0);
    //const [data, setData] = React.useState([]);
    
    const {user, setUser} = useUser();
  
    
   useEffect(() => {
     if(user && user.balance){
        setBalance(user.balance)
      console.log(user.balance)
      }
    }, [handleDeposit]);                  // Runs when user changes
    
  async function handleDeposit() {
    
         console.log(deposit)
         if(deposit <0) {
            alert('Error: please enter a positive amount');
            setStatus('Deposit amount can not be negative')
            setTimeout(()=> setStatus(''),4000); 
            return
         }      
         console.log(user._id)

        const url = `/account/deposit/${user._id}/${deposit}`;
       try {
           console.log(url);
           console.log(user._id);
            var res = await fetch(url);
            var data = await res.json();
            console.log(data);
      /*  // After the deposit, fetch the updated user data from server
           const updatedDataRes = await fetch(`/account/balance/${user._id}`);
           const updatedData    = await updatedDataRes.json();
           console.log(updatedData.balance); 
           setBalance(updatedData.balance);*/

           if (data.newBalance !== undefined) {

              setUser(prevUser => ({ ...prevUser, balance: data.newBalance })); // Update balance from server response
             // setBalance(user.balance)
              console.log("Updated Balance:", data.newBalance);
              console.log(balance); 
          }
         

            setDeposit('');
            setStatus("Successfully Deposited $" + deposit)
            setTimeout(()=> setStatus(''),4000); 
            
       } catch (error) {
        console.error("Error during deposit:", error);
        setStatus('An error occurred during the deposit');
        setTimeout(() => setStatus(''), 4000);
       }
       

       
    }
   

    return (
        <>
        <Card 
            bgcolor  ="info"
            txtcolor ="black"
            cardWidth="50"
            header   ="Deposit"
            status   ={status}
            title    ="Deposit money to your account"
            text     ={(<div><img src="bank2.png" className="img-fluid" alt="Responsive bank" 
                       style={{width: "130px", height:"130px"}} />
                       </div>)} 
            body     ={<div className="container" style={{marginTop: "40px"}}>
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
                            <div  className="col-lg-12" style={{paddingTop: "30px"}}>
                                <h6>Deposit Amount</h6>
                                <input type="number" className="form-control" id="deposit" placeholder="Deposit Amount" value={deposit}
                                onChange={e=>setDeposit(e.currentTarget.value)}></input><br/>
                                <button type="submit" className="btn btn-info" onClick={handleDeposit} disabled={!deposit}>Deposit</button>
                            </div>
                        </div>
                      </div>}   
        />
        </>
    )
}

//${ctx.users.map((user,i)=> user.balance)}

export default Deposit;