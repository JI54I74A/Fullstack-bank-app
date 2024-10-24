
import React from "react";
import {Card} from './context';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {App} from '../App.js';
import { useNavigate } from "react-router-dom";
import {Home} from './home.js';
import { useUser } from "./context";

//import { UserContext } from 'react';
//setLoggedIn(false);
function Login({setLoggedIn}) {
    
    const [emaillogin,setEmaillogin] = React.useState('');
    const [passwordlogin,setPasswordlogin] = React.useState('');
    const [status,setStatus] = React.useState('');
    const navigate = useNavigate(); // Hook to navigate programmatically
    //const ctx = React.useContext(UserContext);
    const {setUser} = useUser();

    setLoggedIn(false);

    function validate(field,label) {
        if (!field && field.length === 0){
            setStatus('Please provide ' + label);
            setTimeout(()=> setStatus(''),3000);  //delaying displaying status
            return false;
        }
        let emilMatch = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if(!emilMatch.test(emaillogin)){
            setStatus('you have entered invalid email');
            setTimeout(()=> setStatus(''),3000); 
            return
        }
        if(passwordlogin.length<8 && passwordlogin.length >0){
            console.log(emaillogin,passwordlogin);
            setStatus('Password must have at least 8 characters');
            setTimeout(()=> setStatus(''),3000); 
            return false;
           }
         
        return true;
    }
    function handleCreate() {
        console.log(emaillogin,passwordlogin);
        if (!validate(emaillogin, 'email')) return;
        if (!validate(passwordlogin, 'password')) return;

        const url = `/account/login/${emaillogin}/${passwordlogin}`;
       (async () => {
            var res = await fetch(url);
            var loginUserData = await res.json();
            console.log(loginUserData);

            if(emaillogin === loginUserData.email && passwordlogin === loginUserData.password) {
                setLoggedIn(true);
                setUser(loginUserData);       //Set user data in context
               // window.location.href = "/";
               navigate('/home', { state: { user: loginUserData}});
            }
            else if(emaillogin === loginUserData.email && passwordlogin !== loginUserData.password){
                setStatus('Incorrect Password')
            }
            else {
                setStatus(`Your account is not registered with us, please create an account!`)
            }
       }) ();
        
        //window.location.href = "/"; //navigate to home
        //ctx.users.push({email,password,balance:100});
    }
    return (
        <Card 
            bgcolor  ="info"
            txtcolor ="black"
            header   ="Login"
            status   ={status}
            title    ="Welcome to Online Bank Services"
            text     ={(<div><img src="bank2.png" className="img-fluid" alt="Responsive bank" 
                       style={{width: "130px", height:"130px"}} />
                       </div>)} 
            body     ={<>
                        Email<br/>
                        <input type="input" className="form-control" id="email" placeholder="Enter email" value={emaillogin}
                        onChange={e=>setEmaillogin(e.currentTarget.value)}></input><br/>
                        Password<br/>
                        <input type="password" className="form-control" id="password" placeholder="Enter password" value={passwordlogin}
                        onChange={e=>setPasswordlogin(e.currentTarget.value)}></input><br/>
                        <button type="submit" className="btn btn-info" style={{marginBottom: '13px'}} onClick={handleCreate}>Login</button><br/>
                        <a href='/#/createaccount/' className="enroll-style" style={{textDecoration: 'none !important'}}>
                        Not Enrolled? Create an accound Now <i class="fa-solid fa-angle-right"></i> </a>
                     </>}   
        />
    )
}

export default Login;