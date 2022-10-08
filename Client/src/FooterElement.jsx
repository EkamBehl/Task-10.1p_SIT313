import React from 'react'

const footer=()=> {
  return (
    
    <div>

        <div className="container">
            <div className ="row">
                <div className="footer-col">
                    <h4>
                        Explore
                    </h4>
                    <ul>
                        <li><a >Home</a></li>
                        <li><a >Questions</a></li>
                        <li><a >Articles</a></li>
                        <li><a >Tutorials</a></li>

                    </ul>

                </div>
                <div className="footer-col">
                    <h4>
                        Support
                    </h4>
                    <ul>
                        <li><a >FAQs</a></li>
                        <li><a >Help</a></li>
                        <li><a >Contact Us</a></li>
                        <li><a >FAQs</a></li>
                    </ul>

                </div>
                <div className="footer-col">
                    <h4>
                        Stay Connected
                    </h4>
                    <div className="social">
                    
                        <a ><i className="fab fa-facebook-f"></i></a>
                    
                    </div>
                    

                </div>

            </div>

        </div>
        

    </div>
  )
}
export default footer