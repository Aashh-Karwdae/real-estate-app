import React from 'react';
import "./Header.css";
import { IoSearch } from "react-icons/io5";
import {Link} from "react-router-dom";


export default function Header() {
  return (
    <div className='fheader'>
     <Link className="Header" to='/Home'><h1 className='HdrHeading'>Aashh<span className='secheading'>EstateDeal</span></h1></Link>
     <form>
    <div className='serachbar'>
      <input type='text' placeholder='Search...' className='SearchInput'/>
       <IoSearch className='SearcIcon'/>
    </div>
    </form>
    <div className='Pages'>
      
      <Link to="/Home" className='page'><span className='page'>Home</span></Link>
      <Link to="/About" className='page'><span className='page'>About</span></Link>
      <Link  to="/SignIn" className='page'><span className='page'>Sign in</span></Link>
      
    
      
    
    </div>
    </div>
  )
}
