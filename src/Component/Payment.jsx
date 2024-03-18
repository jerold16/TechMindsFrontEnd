import axios from 'axios'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

const Payment = () => {
  let [amount,setprice]=useState(0)
  let [name,setname]=useState("")
  let [email,setemail]=useState("")
  let [phone,setphone]=useState("")
  let [purpose,setpupose]=useState("")
  let submit= (e)=>{
    e.preventDefault();
    let nameregrex=/^[a-zA-Z ]{3,}$/
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let num=/^[0-9]{10}$/
    let purposerex=/^[a-zA-Z0-9 ]{3,}$/
    let amtrex=/^[0-9]{1,}$/
    let errorname=document.getElementById("errorname");
    let erroremail=document.getElementById("erroremail");
    let errorphone=document.getElementById("errorphone");
    let erroramnt=document.getElementById("erroramnt");
    let errorpur=document.getElementById("errorpur");
    if(nameregrex.test(name)&&emailRegex.test(email)&&num.test(phone)&&purposerex.test(purpose)&&amtrex.test(amount)){
      errorname.innerHTML="";
      erroramnt.innerHTML="";
      errorpur.innerHTML="";
      erroremail.innerHTML="";
      errorphone.innerHTML="";
      axios.get(`https://payment.meridatechminds.com/phonepay/pay/${amount}/`)
      .then((response)=>{
        
        let obj={name,email,phone,amount}
        axios.post(`https://payment.meridatechminds.com/phonepay/details`,obj)
      .then((res)=>{
          })
         .catch((err)=>{
            console.log(err);
        })
          console.log(response.data.redirect_url);
          var link = document.createElement("a");
  
  // Set the href attribute
  link.href = response.data.redirect_url;
  window.location.href = link.href;
          // alert("Successful")
      })
      .catch((error)=>{
       
          console.log(error);
          // alert("error")
      })   
    
    }
    else{
      if(amount==0){
        if(amount==0){
         erroramnt.innerHTML="* Fill the field"
        }
        else
        erroramnt.innerHTML="* Enter the Amnt properly"
      }
      else
       erroramnt.innerHTML=""
       if(!nameregrex.test(name)){
         if(name==""){
          errorname.innerHTML="* Fill the field"
         }
         else
         errorname.innerHTML="* Enter the name properly"
       }
       else
        errorname.innerHTML=""
     if(!num.test(phone)){
          if(phone==""){
           errorphone.innerHTML="* Fill the field"
          }
          else
          errorphone.innerHTML="* Enter the phone properly"
        }
        else
         errorphone.innerHTML=""
      if(!emailRegex.test(email)){
          if(email==""){
           erroremail.innerHTML="* Fill the field"
          }
          else
          erroremail.innerHTML="* Enter the email properly"
        }
        else
         erroremail.innerHTML=""
         if(!purposerex.test(purpose)){
          if(purpose==""){
           errorpur.innerHTML="* Fill the field"
          }
          else
          errorpur.innerHTML="* Enter the purpose properly"
        }
        else
         errorpur.innerHTML=""
    }
    
  }
 let send=(e)=>{
  e.preventDefault()
  let obj={name,email,phone,amount}
  console.log(obj);
  axios.post(`https://payment.meridatechminds.com/phonepay/details`,obj)
  .then((response)=>{
  })
  .catch((err)=>{
    console.log(err);
  })
 }
  return (
    <div id='bgpaychange' className=''>
       <Helmet>
  <title>Payment - Software Consulting | Digital Marketing | Branding | Business Consulting</title>
  <meta name="description" content="Empowering businesses to thrive through innovative software solutions, effective digital marketing strategies, branding, and expert consulting services."/>
  <meta name='keywords' content='software solutions, digital marketing strategies, branding, consulting services'/>
  <link rel="canonical" href="https://meridatechminds.com/payment" />
    </Helmet>
        <Row  className='container mx-auto h-[100vh]'>
            <Col md={6} className='align-items-center my-auto'>
              <div className='mx-auto lg:w-4/5'>
              <img className='w-[150px] ' src="../assest/merida-logo.png" alt="Logo" />
                <p className='text-2xl fw-semibold  fontclr my-4'>About Merida</p>
                <p className='fontclr fw-semibold'>Contact us</p>
                <a className='text-decoration-none my-1 cursor-pointer text-black'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi mx-2 inline bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
</svg> info@meridatechminds.com</a>
<a className='text-decoration-none block cursor-pointer none my-1 text-black'>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi inline mx-2 bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg> +91 8904599283
</a>
            <div>
              <p className='fontclr fw-semibold'>Terms & Conditions:</p>
              <p className=''>
              You agree to share information entered on this page with MeridaTechMinds.
              </p>
            </div>
              </div>

            </Col>
            <Col md={6} className='align-items-center my-auto'>
              <form className='shadow-xl bg-white p-4'>
                <p className='text-2xl fw-semibold  fontclr my-4'>Payment Details</p>
                <div className='w-[100%] flex flex-col md:flex-row gap-2 sm:items-center justify-between mb-1 mt-4'>
                  <label htmlFor="">Amount</label>
                  <input type="number" pattern='[0-9]' onChange={(e)=>setprice(e.target.value)} className='p-2 border border-slate-200 focus:outline-blue-400' placeholder='&#x20B9; Enter the amount' />
                </div>
                <span id='erroramnt' className='float-end h-[40px] p-2 text-red-600'></span>
                <div className='w-[100%] flex flex-col md:flex-row gap-2 sm:items-center justify-between mb-1 mt-4'>
                  <label htmlFor="">Name</label>
                  <input type="text" onChange={(e)=>setname(e.target.value)}  className='p-2 border border-slate-200 focus:outline-blue-400' />
                </div>
                <span id='errorname' className='float-end h-[40px] p-2 text-red-600'></span>
                <div className='w-[100%] flex flex-col md:flex-row gap-2 sm:items-center justify-between mb-1 mt-4'>
                  <label htmlFor="">Email</label>
                  <input type="email" onChange={(e)=>setemail(e.target.value)} className='p-2 border border-slate-200 focus:outline-blue-400'  />
                </div>
                <span id='erroremail' className='float-end h-[40px] p-2 text-red-600'></span>
                <div className='w-[100%] flex flex-col md:flex-row gap-2 sm:items-center justify-between mb-1 mt-4'>
                  <label htmlFor="">Phone</label>
                  <input type="number" onChange={(e)=>setphone(e.target.value)} className='p-2 border border-slate-200 focus:outline-blue-400'  />
                </div>
                <span id='errorphone' className='float-end h-[40px] p-2 text-red-600'></span>
                <div className='w-[100%] flex flex-col md:flex-row gap-2 sm:items-center justify-between mb-1 mt-4'>
                  <label htmlFor="">Purpose</label>
                  <input type="text" onChange={(e)=>setpupose(e.target.value)} className='p-2 border border-slate-200 focus:outline-blue-400'  />
                </div>
                <span id='errorpur' className='float-right h-[40px] p-2 text-red-600'></span>
                <div className='flex justify-between px-2 mt-5'>
                  <div>

                  </div>
                  <button onClick={submit} className='p-3 rounded w-3/5 text-slate-50 fw-semibold bg-blue-800'>Pay  &#x20B9; {amount} </button>
                </div>
              </form>
            </Col>
        </Row>
    </div>
  )
}

export default Payment