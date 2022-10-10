import React from 'react'
import Navbar from "./Component/Navbar";
import SideBar from "./Component/Sidebar";
import Bigside from "./Component/BigSide";
import "./App.css";
const App = () => {
  return (
    <>
    <Navbar/>
    <div className="appclass">
      
    <SideBar/>
    
    <Bigside/>
    
    </div>
  
    </>
  )
}

export default App

