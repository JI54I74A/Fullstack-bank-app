
import React, { useEffect } from "react";
import {Card} from './context';
import { useUser } from './context';

function Withdraw(props) {

    const [withdraw,setWithdraw] = React.useState('');
    const [status,setStatus]     = React.useState('');
    const [balance,setBalance]   = React.useState(0);
    
    const {user, setUser} = useUser();
    
    useEffect(() => {
      if(user && user.balance){
        setBalance(user.balance)
      console.log(balance)
      }
    }, [handleWithdraw]); 


   async function handleWithdraw() {
        console.log(withdraw);

        if(withdraw <0) {
            alert('Error: please enter a positive amount');
            setStatus('Amount to be withdrawn can not be negative')
            setTimeout(()=> setStatus(''),4000); 
            return
        }
        
        if(withdraw > balance){
            alert('Error: Insufficient Balance');
            setStatus("Amount to be withdrawn should not be greater than current balance");
            setTimeout(()=> setStatus(''),4000); 
            return;
        }
        const url = `/account/withdraw/${user._id}/${withdraw}`;
        try {
             var res = await fetch(url);
             var data = await res.json();
             console.log(data);
 
             if (data.newBalance !== undefined) {
                setUser(prevUser => ({ ...prevUser, balance: data.newBalance }));
           }
 
             setWithdraw('');
             setStatus("Withdrawed $" + withdraw);
             setTimeout(()=> setStatus(''),4000); 
             
        }catch (error){
            console.error("Error during withdraw:", error);
            setStatus('An error occurred during the withdraw');
            setTimeout(() => setStatus(''), 4000);
        };
        
    }

    return (
        <>
        <Card 
            bgcolor  ="info"
            txtcolor ="black"
            cardWidth="50"
            header   ="Withdraw"
            status   ={status}
            title    ="Withdraw money from your account"
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
                                <h6>Withdraw Amount</h6>
                                <input type="number" className="form-control" id="withdraw" placeholder="Withdraw Amount" value={withdraw}
                                onChange={e=>setWithdraw(e.currentTarget.value)}></input><br/>
                                <button type="submit" className="btn btn-info" onClick={handleWithdraw} disabled = {!withdraw}>Withdraw</button>
                            </div>
                         </div>
                     </div>}   
        />
        </>
    )
}

export default Withdraw;