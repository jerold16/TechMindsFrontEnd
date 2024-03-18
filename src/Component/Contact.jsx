
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import TitleBanner from './TitleBanner'
import MiniNav from '../NavBar/MiniNav'
import LogoNav from '../NavBar/LogoNav'
import MainNav from '../NavBar/MainNav'
import ContactLanding from './ContactLanding'
import axios from 'axios'
import DarkNav from '../NavBar/DarkNav'
import ReactGA from "react-ga4"
import { Helmet } from 'react-helmet'
const Contact = () => {
    let navigate=useNavigate()
    let [anime,setanime]=useState("")
    let [first_name,setfname]=useState("")
    let [last_name,setlname]=useState("")
    let [company,setcompany]=useState("")
    let [phone,setphone]=useState("")
    let [email,setemail]=useState("")
    let [interested,setinterested]=useState("")
    let [message,setmessage]=useState("")
    let [check,setcheck]=useState(false)
    useEffect(()=>{
      setanime("animate__fadeIn");
      window.scrollTo(0, 0);
      const element = document.querySelector('.durationani');
      element.style.setProperty('--animate-duration', '4s');
      createcaptcha()
    },[])
    let [captcha,setcaptcha]=useState("")
    let [entercap,setentercap]=useState("")
    let createcaptcha=()=>{
      const lowercaseAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      const uppercaseAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      const allCharacters = [...lowercaseAlphabets, ...numbers, ...uppercaseAlphabets, ...numbers];
      let temp=""
      for (let index = 0; index <6; index++) {
        let random=Math.floor(Math.random()*72)
        temp+=allCharacters[random]
      }
      setcaptcha(temp)
    }
    let Submithandle=async (e)=>{
      e.preventDefault()
      let nameregrex=/^[a-zA-Z]{3,}$/
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      let num=/^[0-9]{10}$/
      let errorcap=document.getElementById("errorcaptcha")
      if(captcha==entercap){
        errorcap.innerHTML=""
      if(nameregrex.test(first_name)&&emailRegex.test(email)&&num.test(phone)&&check){
        let obj={first_name,last_name,company,phone,email,interested,message}
      await  axios.post(`https://backendapi.meridatechminds.com/api/contacts`,obj)
        .then((response)=>{
          alert("message sended")
        })
        .catch((err)=>{
          console.log(err);
        })
        ReactGA.event({
          category: "Contact clicked",
          action: "Contact has been filled from contact page",
          label: "Contact info", // optional
          value: 99, // optional, must be a number
          nonInteraction: true, // optional, true/false
          transport: "xhr", // optional, beacon/xhr/image
        });
      }
      else{
        if(!nameregrex.test(first_name)){
          let error= document.getElementById("errorname")
          error.innerHTML="* Enter the proper name"
        }
        else{
          let error= document.getElementById("errorname")
          error.innerHTML=""
        }
        if(!emailRegex.test(email)){
          let error= document.getElementById("errormail")
          error.innerHTML="* Enter the proper Mail"
        }
        else{
          let error= document.getElementById("errormail")
          error.innerHTML=""
        }
        if(!num.test(phone)){
          let error= document.getElementById("errorphone")
          error.innerHTML="* Enter the proper Number"
        }
        else{
          let error= document.getElementById("errorphone")
          error.innerHTML=""
        }
        if(!check){
          let error= document.getElementById("errorcheck")
          error.innerHTML="* Please check the box"
        }
        else{
          let error= document.getElementById("errorcheck")
          error.innerHTML=""
        }
      }}
      else{
           errorcap.innerHTML="Enter the correct captcha"
      }
      
    }
  return (
    <section id='' className={`${anime} animate__animated transi durationani `}>
      <Helmet>
  <title>Get in Touch: | Merida Tech Minds</title>
  <meta name="description" content=" Whether you have inquiries, feedback, or collaboration ideas, we're here to listen and assist. Make contact with ease and discover the responsive, personalised service you deserve. "/>
  <meta name='keywords' content='collaboration, personalised service'/>
  <link rel="canonical" href="https://meridatechminds.com/contact" />
</Helmet>
      <MiniNav/>
        {/* <LogoNav/> */}
        <MainNav/>
        <DarkNav/>
       <TitleBanner img={"../assest/contactbannerp.jpeg"} data={"Contact"}/>
        {/* Contact form */}
        <div className=' py-20 bg-slate-100'>
          <Row className='container flex justify-around mx-auto'>
            <Col lg={3} xl={4} className='p-3'>
              <p className='text-violet-700 text-lg fw-semibold'>Contact</p>
              <p className='text-4xl xl:text-5xl mb-4 fw-semibold'>Contact us
for Top-Notch Service.</p>
<p className='mt-4'>
<a href="https://www.google.com/maps/place/Merida+Tech+Minds(OPC)+Pvt.+Ltd./@12.92875,77.5827903,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae15adfc868c21:0xfa8b6c9cbfe474ad!8m2!3d12.92875!4d77.5853652!16s%2Fg%2F11qbh0hp7f?entry=ttu" target='_blank' id='three-rounded'
 className='px-4 text-decoration-none btn-change text-white fw-semibold p-3 bg-violet-700'>
                  Our Locations
       </a></p>
            </Col>
            <Col lg={4} xl={3} className='bg-white my-4 my-lg-0 shadow-2xl rounded-3xl'>
            <div className='px-3 mt-3 flex border-bottom justify-between'>
                    <div>
                      <p className='fw-semibold text-2xl'>Support</p>
                      <p className='text-lg text-slate-500'>From our expert team</p>
                    </div>
                    <img className="w-16 h-16 mt-auto" src="../assest/talk.png" alt="" />
              </div>
              <div id='phone' className='flex my-4'>
              <img className='w-12 h-12' src="../assest/call.png" alt="Call" />
                 <div className='ms-4'>
                     <p className='text-black fw-semibold'>PHONE</p>
                     <p className='text-slate-600'>
                      Contact : <span className='cursor-pointer'> 8904599283 </span>
                     </p>
                     {/* <p className='text-slate-600'>
                     Operation: <span className='cursor-pointer'> (+41)-888.22.333 </span>
                     </p> */}
                 </div>
              </div>
              <div id='email' className='flex'>
              <img className='w-12 h-12' src="../assest/open.png" alt="Open" />
                 <div className='ms-4 mb-3'>
                     <p className='text-black fw-semibold'>EMAIL</p>
                     <a href='https://mail.google.com/mail/u/0/#sent/QgrcJHrtvWsjvzmmmLRMHtJMfRbgRgMWkRL?compose=GTvVlcSDZctpRQrtSnGlrzSKGMJCCTZzNhxTRTnFGGvmXTghqQlQjhrzZXKxkfChKHtNKGvsbdZTj' target='_blank' className='text-slate-600 text-decoration-none cursor-pointer'>
                      info@meridatechminds.com
                     </a>
                    
                 </div>
              </div>
            </Col>
            <Col lg={4} xl={3} className='bg-white shadow-2xl rounded-3xl'>
             
            <div className='px-3 mt-3 flex border-bottom justify-between'>
                    <div>
                      <p className='fw-semibold text-2xl'>Address</p>
                      <p className='text-lg text-slate-500'>To visit our company</p>
                    </div>
                    <img className="w-20 h-20 mt-auto" src="../assest/smart-city (1).png" alt="Smart-city" />
              </div>
              <div id='phone' className='flex mt-3'>
              <img className='w-12 h-12' src="../assest/address.png" alt="Address" />
                 <div className='ms-4'>
                     <p className='text-black fw-semibold'>ADDRESS</p>
                     <p className='text-slate-600'>
                     20-2 ,Keshava Krupa Building 2nd Floor, 30th cross, 10th Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka 560011
                     </p>
                 </div>
              </div>
              <div id='email' className='flex'>
              <img className='w-12 h-12' src="../assest/time.png" alt="Time" />
                 <div className='ms-4'>
                     <p className='text-black fw-semibold'>OFF.HOURS</p>
                     <p className='text-slate-600 cursor-pointer'>
                      MON - SAT: 9am - 6pm
                     </p>
                    
                 </div>
              </div>
            </Col>
          </Row>

        </div>
        {/* Form */}
        <div className=''>
           <Row className='container flex justify-between flex-col flex-lg-row rounded-3xl bg-slate-900 p-4 py-20 mx-auto'>
            <Col lg={4}>
              <p className='text-pink-700 fw-semibold'>DROP A LINE</p>
              <p className='text-5xl fw-semibold text-white'>Let’s Talk!...
Send Your Message</p>
              <p className='text-slate-400 text-lg'>Fill in the form and let us know what you need.</p>
            </Col>
            <Col lg={5} className='mx-auto'>
              <form action="">
                <div id='name' 
                className='text-white justify-between flex flex-col md:flex-row fw-semibold'>
                   <div>
                   First Name <span id='errorname' className='fw-light text-red-500'> </span>
                   <input required  type="text" value={first_name} onChange={(e)=>setfname(e.target.value)}
                   className='p-3 text-slate-500 focus:border-none w-full md:w-auto block mt-4 rounded-s-2xl bg-inherit border-2 border-slate-600 rounded-tr-2xl m-2 focus:outline-none focus:outline-pink-700 ' 
                   placeholder='Enter your first name' />
                   </div>
                   <div>
                   Last Name
                   <input required  type="text" value={last_name} onChange={(e)=>setlname(e.target.value)}
                   className='p-3 text-slate-500 focus:border-none w-full md:w-auto block mt-4 rounded-s-2xl bg-inherit border-2 border-slate-600 rounded-tr-2xl m-2 focus:outline-none focus:outline-pink-700 ' 
                   placeholder='Enter your last name' />
                   </div>
                   
                </div>
                <div id='name' className='text-white flex flex-col md:flex-row justify-between fw-semibold'>
                   <div>
                   Company
                   <input required  type="text" value={company} onChange={(e)=>setcompany(e.target.value)}
                   className='p-3 text-slate-500 focus:border-none block w-full md:w-auto mt-4 rounded-s-2xl bg-inherit border-2 border-slate-600 rounded-tr-2xl m-2 focus:outline-none focus:outline-pink-700 ' 
                   placeholder='Enter your Company name' />
                   </div>
                   <div>
                   Phone <span id='errorphone'  className='fw-light text-red-500'> </span>
                   <input required  type="tel" pattern='[0-9]' value={phone} onChange={(e)=>setphone(e.target.value)}
                   className='p-3 text-slate-500 focus:border-none block  w-full md:w-auto mt-4 rounded-s-2xl bg-inherit border-2 border-slate-600 rounded-tr-2xl m-2 focus:outline-none focus:outline-pink-700 ' 
                   placeholder='Phone num' />
                   </div>
                   
                </div>
                <div className='text-white'>
                   Email Address <span id='errormail'  className='fw-light text-red-500'> </span>
                   <input required  type="text" value={email} onChange={(e)=>setemail(e.target.value)}
                   className='p-3 text-slate-500 focus:border-none w-full block mt-4 rounded-s-2xl bg-inherit border-2
                    border-slate-600 rounded-tr-2xl m-2 focus:outline-none focus:outline-pink-700 ' 
                   placeholder='Enter your Address' />
                   </div>
                   <div className='text-white'>Are you interested in?
                   <select name="" id="selectdrop" value={interested} onChange={(e)=>setinterested(e.target.value)}
                   
                        className=' p-3 text-slate-500 focus:border-none border-2 focus:outline-none border-slate-500 w-full  cursor-pointer block bg-inherit  rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-pink-600'>
                            <option value="Business Consulting">Business Consulting</option>
                            
                            <option value="Software Consulting">Software Consulting</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Branding">Branding</option>

                        </select>
                      </div>
                      <div className='text-white'>
                        Message
                        <textarea name="Message" placeholder='Message' value={message} onChange={(e)=>setmessage(e.target.value)}
                        className='p-3 block focus:border-none bg-inherit focus:outline-none w-full border-2 border-slate-600  text-slate-500  rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-pink-600 '
                         id="" cols="20" rows="5">

                        </textarea>
{/* Captcha */}
                  <div className='d-flex flex-col flex-sm-row align-items-center justify-between'>
                    <div className='d-flex'>
                     <p className='text-slate-900'>{
                     captcha.split("").map((w)=>{ 
                      return(
                        <span style={{fontFamily:"Palatino"}}
                         class='mx-2 text-slate-100'>{w}</span>
                      )
                     })
                     } </p>
                     <img onClick={createcaptcha} 
                     className='w-[30px] h-[30px] inline cursor-pointer mx-2 ' 
                     src="../assest/refresh.png" alt="refresh" /> 
                    </div> 
                    <input required  type="text"  value={entercap}  onChange={(e)=>setentercap(e.target.value)}
                   className='p-3 text-slate-500 focus:border-none w-full md:w-auto block mt-4 rounded-s-2xl bg-inherit border-2 border-slate-600 rounded-tr-2xl m-2 focus:outline-none focus:outline-pink-700 ' 
                   placeholder='Enter Captcha *' />

                    </div>
                  <p id='errorcaptcha' className='h-[25px] text-red-500'></p>

                        <div className='text-slate-400'> 
                        <input type="checkbox" onClick={()=>setcheck(!check)}  className='cursor-pointer w-[50px]'/>
                        Click here to confirm you have read our privacy policy* <span id='errorcheck' className='text-red-500 fw-light'> </span>
                        </div>
                      </div>
                      <button onClick={Submithandle} id='three-rounded' className='px-4 my-5 btn-change text-white fw-semibold p-3 bg-violet-700'>
                  Send Message
       </button>
              </form>
            </Col>
           </Row>
        </div>
        <ContactLanding/>
        </section>
  )
}

export default Contact