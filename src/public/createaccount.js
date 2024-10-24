
import React, {useEffect} from "react";
import {Card} from './context';
import { useNavigate } from "react-router-dom";
import { useUser } from "./context";

function CreateAccount({setLoggedIn}) {
    
    const [show,setShow] = React.useState('true');
    const [status,setStatus] = React.useState('');
    const [newUserData, setNewUserData] = React.useState(null);

    const { user } = useUser();
    
    return (
        <Card 
            bgcolor="info"
            txtcolor="black"
            header="Create Account"
            status={status}
            title="Get Started"
            text={(<img src="bank2.png" className="img-fluid" alt="Responsive bank" 
                style={{width: "130px", height:"130px"}} />)}
            body={ show ? <CreateForm setShow={setShow} setStatus={setStatus} setLoggedIn={setLoggedIn} setNewUserData={setNewUserData}/> 
            :  <CreateMsg setShow={setShow} setLoggedIn={setLoggedIn} newUserData={newUserData} /> }    
       />
    )
    
}

function CreateForm(props) {

    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const navigate = useNavigate();
    const {setUser} = useUser();
   
    //const ctx = React.useContext(UserContext);
    props.setLoggedIn(false);
   
    function validate(field,label) {
        if (!field && field.length === 0){
            props.setStatus('Please provide ' + label);
            setTimeout(()=> props.setStatus(''),3000);  //delaying displaying status
            return false;
        }
        let emilMatch = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if(!emilMatch.test(email)){
            props.setStatus('you have entered invalid email');
            setTimeout(()=> props.setStatus(''),3000); 
            return
        }
        if(password.length<8 && password.length >0){
            console.log(name,email,password);
            props.setStatus('Password must have at least 8 characters');
            setTimeout(()=> props.setStatus(''),3000); 
            return false;
           }
         
        return true;
}
    function handleCreate() {
        console.log(name,email,password);
        if (!validate(name, 'name')) return;
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;

        //const uname= props.name        
        //ctx.users.push({uname,email,password,balance:0});
       // console.log(ctx.users)
       
       const url = `/account/create/${name}/${email}/${password}`;
       (async () => {
            var res = await fetch(url);
            var newUserData = await res.json();
            console.log(newUserData);

            props.setLoggedIn(true);

            setUser(newUserData); 

            props.setNewUserData(newUserData)
           
           // navigate('/home', { state: { user: newUserData}}); 

       }) ();
        props.setShow(false);     
    }

  return (
            <>
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} 
                onChange={e=>setName(e.currentTarget.value)}></input><br/>
                Email<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email}
                onChange={e=>setEmail(e.currentTarget.value)}></input><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password}
                onChange={e=>setPassword(e.currentTarget.value)}></input><br/>
                <button type="submit" className="btn btn-info" onClick={handleCreate} disabled ={!name && !email && !password}>
                Create Account</button>
                        
            </>
  )
}

function CreateMsg(props) {

    function clearForm() {
        //props.setName('');
        //props.setEmail('');
        //props.setPassword('');
        props.setShow(true);
    }
    
 return (
            <>  
                <h6 style={{color:"#f11558", padding: "12px"}}>Successsfully created a new account</h6>                                            
                <h5 style={{color: "#5b5555",paddingBottom:"15px"}}>Hi {props.newUserData?.name || ''}, We're so glad you've joined us!</h5>
                <button type="submit" className="btn btn-info" onClick={clearForm}>Add another account</button>
            </>
 )
}
export default CreateAccount;