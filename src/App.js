import React from 'react';
import { HashRouter, Route,  Routes, Navigate } from "react-router-dom";
import './index.css';
import './App.css';
import AllData from './public/alldata';
import CreateAccount from './public/createaccount';
import Deposit from './public/deposit';
import Home from './public/home';
import Login from './public/login';
import Withdraw from './public/withdraw';
import NavBar from './public/navbar';
import Balance from './public/balance';
import { UserProvider, useUser } from './public/context';
import {createContext} from "react";



//export const UserContext = createContext(null);

function App() {

  const [loggedIn,setLoggedIn] = React.useState('false');


  return (
    <HashRouter>
            
           
        <UserProvider>
           <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                <Routes>
                  <Route path="/"  element={<Navigate to="/login" />} />
                  <Route path="/createaccount/*" element={<CreateAccount setLoggedIn={setLoggedIn}/>} />
                  <Route path="/login/*" exact element={<Login setLoggedIn={setLoggedIn} />} />
                  <Route path="/deposit/*"  element={ <Deposit/>} />
                  <Route path="/withdraw/*"  element={<Withdraw />} />
                  <Route path="/balance/*"  element={<Balance /> } />
                  <Route path="/alldata/*"  element={<AllData />} />
                  <Route path="/home/*" element={<Home />} /> {/* Fallback route */}
                </Routes>
        </UserProvider>
        </HashRouter>   
  );
}

export default  App;
