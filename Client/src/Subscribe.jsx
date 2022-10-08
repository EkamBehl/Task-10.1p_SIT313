import React from 'react'
import './Subscribe.css'

const handleSubmits=async (value)=> {
  await fetch('http://localhost:8080/',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({
        EmailID:value,
        Text:"thanks For subscribing!!",
        FromId:"ekambehl.10@gmail.com",
        Subject:"Subscribe to our newsletter"


    })
    

  }).then(response =>response.json()).then(data=>JSON.parse(data)).catch(err=>{
    console.log("Error"+err)
  })
}
export default function Subscribe() {
  return (
   <div>
    <div className="SignUp">
        <span className='text'> SIGN UP FOR DAILY INSIDER</span>
        <span className="EmailInput"><input id='subs' type="email"></input></span>
        <span className='button'><button type="submit" onClick={()=>{
            
            handleSubmits(document.getElementById('subs').value);
            console.log(document.getElementById('subs').value)
            console.log("trying");

        }}

        >Subscribe</button></span>
    </div>
   </div>
  )
}