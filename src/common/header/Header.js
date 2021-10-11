import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import Button from '@material-ui/core/Button';
import {useState} from 'react';
import { Link } from "react-router-dom";

const Header = (props) =>
{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //Modal
    

    // const renderModal = () =>{
    //     return (<LoginRegisterModal></LoginRegisterModal>);
    // }

    //Modal end

    const renderButton = () =>{
        if(isLoggedIn){
            return(<Button variant="contained" color="default" >LOGOUT</Button>);
        }
        else{
            return(
                <Link to={"/loginRegisterModal"}>
                    <Button variant="contained" color="default" onClick={()=>setIsLoggedIn(true)}>LOGIN</Button>
                    </Link>
                );
        }
    }

    const renderBookButton = () =>{
        console.log(props.movieId);
        let movieId = props.movieId;
        if(props.enableButton){
            return(

                <Link to={"/bookshow/" + movieId}>
                    <Button variant="contained" color="primary" >BOOK SHOW</Button>
                </Link>
            );
        }
    }

    return(
         <div className="header">
             <img src={logo} className="logo rotating" alt="MovieApp"/>
             <div className="button">
             <div >
                 {
                 renderBookButton()
                 }
            </div>
            <span>" "</span>
             <div >
                 {
                    renderButton()
                 }
             </div>
             </div>

         </div>
    )
}


export default Header;