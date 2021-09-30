import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import Button from '@material-ui/core/Button';
import {useState} from 'react';

const Header = () =>
{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const renderButton = () =>{
        if(isLoggedIn){
            return(<Button variant="contained" color="default" >LOGOUT</Button>);
        }
        else{
            return(<Button variant="contained" color="default" onClick={()=>setIsLoggedIn(true)}>LOGIN</Button>);
        }
    }

    return(
         <div className="header">
             <img src={logo} className="logo rotating"/>
             <div className="button">
                 {
                    renderButton()
                 }
             </div>

         </div>
    )
}


export default Header;