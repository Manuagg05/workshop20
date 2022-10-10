import React from 'react'
import  "./navbar.css";


import {MdTagFaces,MdNotifications} from "react-icons/md";

const Navbar = () => {
  return (
    <>
    
    <nav className="main-nav">
        {/*first logo */}
        <div className="logo">
           <img src="./images/logow.png" alt="manu aggarwal"/>
        </div>
        {/*second logo */}
        <div className="menu-link">
          <ul className="ul">
          
           <li className="menudiv">
            <a href="#">Patient</a>
            </li>
           <li className="menudiv">
            <a href="#" >Calender</a>
            </li>
            <li className="menudiv">
            <a href="#" >Users</a>
            </li >
            <li className="menudiv">
            <a href="#" >Billing</a>
            </li>
         </ul>

        </div>
        {
            /*space*/
        }
        <div className="space" ></div>
    {/*notification */}
    <div className="notification">

         <ul className="noti-desktop">
            
            <li>
                <a  className="notlogo"href="#" target="_blank">
                   <MdNotifications/>
                </a>
               

            </li>
            <li>
                <a className="notlogo" href="#" target="_blank">
                   <MdTagFaces/>
                </a>

            </li>

        </ul>

    </div>
</nav>
<div  className="thin"></div>
    </>
  )
}

export default Navbar