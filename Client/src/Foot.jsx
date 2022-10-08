import React from 'react'
import './Foot.css'
export default function Foot() {
  return (
   <div>
    <footer className='footer'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"></link>
    <div className="container">
        <div className ="row">
            <div className="col">
                <h4>
                    Explore
                </h4>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Questions</a></li>
                    <li><a href='/'>Articles</a></li>
                    <li><a href='/'>Tutorials</a></li>

                </ul>

            </div>
            <div className="col">
                <h4>
                    Support
                </h4>
                <ul>
                    <li><a href='/'>FAQs</a></li>
                    <li><a href='/'>Help</a></li>
                    <li><a href='/'>Contact Us</a></li>
                    <li><a href='/'>FAQs</a></li>
                </ul>

            </div>
            <div className="col">
                <h4>
                    Stay Connected
                </h4>
                <div className="social">
                
                    <a href='/'><i className="fab fa-facebook-f"></i></a>
                    <a href='/'><i className="fab fa-twitter"></i></a>
                    <a href='/'><i className="fab fa-instagram"></i></a>
                
                </div>
                

            </div>

        </div>

    </div>
    <div >
        <div className='end'>
            <h4>DEV@DEAKIN 2022</h4>
            <br/>
            <div className="endp">
                <span>
                <li>
                    <a href='/'>Privacy Policy</a> 
                    <a href='/'>Terms</a>
                    <a href='/'>Code Of Conduct</a> </li>
                </span>
                
                
                
               
                

            </div>
        </div>
    
    </div>
    
    </footer>
    </div>

  )
}
