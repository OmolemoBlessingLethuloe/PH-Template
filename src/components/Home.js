import React from 'react';
import AppIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';
import logo from '../images/googlelogo.png'
import './Home.css';
import Search from './Search';


const Home = () => {
  return (
    <div className="home">
        <div className="home-header">
            <div className="home-header-left">
                <p>About</p>
                <p>Store</p>
            </div>
            <div className="home-header-right">
                <p>Gmail</p>
                <p>Images</p>
                <AppIcon/>
                <Avatar/>
            </div>
        </div>
        <div className="home-body">
                <h1 style={{color:"blue", fontSize:"80px", fontWeight:"bolder"}}>P<span style={{color:"red"}}>h</span><span style={{color:"orange"}}>u</span><span>m</span><span style={{color:"green"}}>u</span><span style={{color:"red"}}>d</span><span style={{color:"orange"}}>z</span><span style={{color:"blue"}}>o</span>
                <span style={{color:"red"}}>N</span><span style={{color:"green"}}>t</span><span style={{color:"blue"}}>h</span><span style={{color:"orange"}}>a</span><span style={{color:"red"}}>n</span><span style={{color:"blue"}}>g</span><span style={{color:"green"}}>e</span><span style={{color:"orange"}}>n</span><span style={{color:"red"}}>i</span>
                </h1>
                {/* <img src={logo} alt="googlelogo" width="300" height="100"/> */}
                <div className="home-input-container">
                    <Search/>
                </div>
        </div>
    </div>
  )
}

export default Home