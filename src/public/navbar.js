
import React, { useEffect } from "react";
import $ from 'jquery'; 
import { Tooltip } from 'react-tooltip';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useUser } from "./context";


function NavBar({loggedIn, setLoggedIn}) {

    const { user } = useUser();

    useEffect(() => {
        console.log("User updated:", user);
    }, [user]);


    console.log(user)
    $(document).ready(function(){

      $('.nav-link, user-hover').click(function(e) {
          //e.preventDefault();
          $('.nav-link, user-hover').removeClass('active');
          $(this).addClass('active');
        });
    });


    function Logout() {
        setLoggedIn(false);
    }
     /*
     <li className="nav-item">
                            <a className="nav-link nav-link-style" id="register" href="#/createaccount/"  
                            data-tooltip-id="my-tooltip" data-tooltip-content="Create account for new user"
                            data-tooltip-place="bottom">Create Account</a>
                        </li>*/
  return (
      <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light" style={{backgroundColor: "#0C243C",padding: "0.8rem 1rem"}}>
              <div className="container-fluid">
                  
                  <button className="navbar-toggler navbar-toggler-style" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <div className="col-lg-12"> 
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                      {loggedIn ? ( <>
                        <a className="navbar-brand nav-link mb-0 nav-link-style active" id="home" href="#/home"  aria-current="page" 
                            data-tooltip-id="my-tooltip" data-tooltip-content="Bank services home page" data-tooltip-place="bottom"
                            style={{fontSize: "18px"}}>ONLINE BANKING</a>
                        <li className="nav-item">
                            <a className="nav-link nav-link-style" id="deposit" href="#/deposit/"  
                            data-tooltip-id="my-tooltip" data-tooltip-content="Deposit money into your account"
                            data-tooltip-place="bottom">Deposit</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-style" id="withdraw" href="#/withdraw/"  
                            data-tooltip-id="my-tooltip" data-tooltip-content="Withdraw money from your account"
                            data-tooltip-place="bottom">Withdraw</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-style" id="balance" href="#/balance/"  
                            data-tooltip-id="my-tooltip" data-tooltip-content="Check your available balance"
                            data-tooltip-place="bottom">Balance</a>
                        </li>
                        <li className="nav-item" style={{position: "absolute",right: "110px"}}>
                            <a className="nav-link nav-link-style" id="logout" href="#/login/" onClick={Logout}  
                            data-tooltip-id="my-tooltip" data-tooltip-content="Logging out from the account"
                            data-tooltip-place="bottom"><i class="fa-regular fa-user user-hover" 
                            style={{color: "#e5f4f7", paddingRight: '10px'}}></i> Log Out  </a>
                        </li>
                        <div style={{position: "absolute",right: "126px", top:"30px",color:'#dc3588',fontSize: '14px', fontWeight: '600'}}>
                            {user?.name || ''}</div>
                         </>
                    ) : ( <>
                        <a className="navbar-brand nav-link mb-0 nav-link-style active" id="home"  aria-current="page" 
                            data-tooltip-id="my-tooltip" data-tooltip-content="Bank services home page" data-tooltip-place="bottom"
                            style={{fontSize: "18px"}}>ONLINE BANKING</a>
                        <li className="nav-item">
                            <a className="nav-link nav-link-style" id="alldata" href="#/alldata/"  
                            data-tooltip-id="my-tooltip" data-tooltip-content="Transaction details"
                            data-tooltip-place="bottom">Admin</a>
                        </li>
                        <li className="nav-item" style={{position: "absolute",right: "110px"}}>                            
                            <a className="nav-link nav-link-style" id="login" href="#/login/" 
                            data-tooltip-id="my-tooltip" data-tooltip-content="Login to existing user account"
                            data-tooltip-place="bottom"><i class="fa-regular fa-user user-hover" 
                            style={{color: "#e5f4f7", paddingRight: '10px'}}></i>Login</a>  
                        </li> </>
                     ) }
                        <Tooltip id="my-tooltip" className="tooltip-style" />
                    </ul>
                  </div> 
                  </div>
              </div>
          </nav>
      </div>
  )
}

export default NavBar; 