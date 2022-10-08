import SENDGRID_API_KEY from './.env'
const express=require("express")
const bodyParser = require("body-parser")
const cors=require("cors")
require("dotenv").config();
const sgMail=require("@sendgrid/mail")
sgMail.setApiKey(SENDGRID_API_KEY);
const sendMail=async(msg)=>{
    try{
        await sgMail.send(msg)
        console.log("message sent")

    }catch(error){
        console.log('error',error)
    }
}



const app=express()


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cors())
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.post('/',(req,res)=>{

    const EmailID=req.body.EmailID;
    const fromId=req.body.FromId;
    const Subject=req.body.Subject;
    const Text=req.body.Text;
    sendMail({
        to:EmailID,
        from:"ekambehl@gmail.com",
        subject:"Subject",
        text:"Thanks for subscribing to our news letter",
    });
    

    res.send("Thanks for subscribing")
    
    console.log("POST")
})



app.listen(8080,(req,res)=>{
    console.log("Server is running")
})