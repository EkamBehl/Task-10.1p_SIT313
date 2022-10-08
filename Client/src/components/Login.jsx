import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom';

import Input from './Input'
import './Login.css'
import { createUserDocFromAuth,signInAuthUserWithEmailAndPassword } from '../Utils/Firebase';
import { UserContext } from '../context/user.context';
export default function Login() {
    const {setCurrentUser}= useContext(UserContext)
    const [contact, setContact] = useState({email:'',password:''});
    
    const handleSubmit=async (event)=>{
        event.preventDefault();
        
        try{
            const {user}=await signInAuthUserWithEmailAndPassword(email,password)
            setCurrentUser(user);
            const userDocRef=createUserDocFromAuth(user);
            alert("logged in!!");
            window.location.href="/";
        }
        catch(error){
            alert('incorrect password or email!!');
            console.log("error in login",error.message)
        }
        

    }
    const {email,password}=contact;
   

    
    
    const handleChange=(e)=>{
        const {name,value} =e.target
    
        setContact((preVal)=>{
            
            return{
                ...preVal,
                [name]:value
            }
        })
        
        

    }
    
    return (
        <div className='login'>
            <div className='title'>
                LOGIN

            </div>
            
                <Input 
                        title="Your email"
                        name='email'
                        type='text'
                        placeholder='email'
                        onChange={handleChange}
                        value={contact.email}
                        
                    />


           
                
            
            
                <Input 
                    name='password'
                    type='password'
                    placeholder='password'
                    onChange={handleChange}
                    value={contact.password}
                
                />
                
                <button 
                    type='submit'
                    onClick={handleSubmit}
                >Login </button>
                <div className='link'>
                <Link to ="/signup">SignUp</Link>


                </div>
                
        
            



            
            
        </div>
    )
}
