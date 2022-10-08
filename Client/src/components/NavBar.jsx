import React from 'react'
import Input from './Input'
import { Link, Outlet } from 'react-router-dom'
import{Navbar,Nav,NavDropdown} from 'react-bootstrap'
import { logOutUser } from '../Utils/Firebase'
import { auth } from '../Utils/Firebase'

import {logOutFunc} from '../Utils/Firebase'

function logout(){
  
 
  auth.signOut();
}

export default function NavBar() {

  return (
    <div style={{backgroundColor:'grey', 'width':'100%',paddingRight:'30px'}}>
        <div>
            
      
            DEV@Deakin
            <input style={{maxWidth:'300px'}} 
                type='text'
                placeholder='search'
            />
            <span style={{paddingLeft:'30px'}}>
              <Link to='/'>Post</Link>
            </span>
            <span style={{paddingLeft:'30px'}}>
            <Link to='/login'>Login</Link>
            </span>
            
            <Link style={{paddingLeft:'30px'}} id='logOut' onClick={logout}>Log Out</Link>
            
         
           
            
            
            <Outlet/>
            
        </div>
    </div>
  )
}
