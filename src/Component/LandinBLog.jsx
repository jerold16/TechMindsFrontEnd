import React, { useEffect, useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import Slider from 'react-slick';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { testimonialdata } from './Data';
import ReactGA from "react-ga4"
const LandinBLog = () => {
    let navigate=useNavigate()
    let [name,setname]=useState("")
    let [subjects,setsubject]=useState("")
    let [email,setemail]=useState("")
    let [phone,setphone]=useState("")
    let [message,setmessage]=useState("")
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
    useEffect(()=>{
      createcaptcha()
    },[])
    let submithandle= async (e)=>{
      e.preventDefault()
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const nameregex=/^[a-zA-Z]{3,}$/;
      const numregex=/^[0-9]{10}$/;
      let errormessage=document.getElementById("errormessage")
      errormessage.style.color="red";
      if(captcha==entercap){

    
      if(emailRegex.test(email)&&nameregex.test(name)&&numregex.test(phone)){
        let obj={name,subjects,email,phone,message}
        errormessage.innerHTML=""
        console.log(obj);
        await axios.post(`https://backendapi.meridatechminds.com/api/apointments`,obj )
        .then((response)=>{
          alert("Your response has been registered")
        })
        .catch((err)=>{
          console.log(err);
        })
        ReactGA.event({
          category: "Contact clicked",
          action: "Contact has been filled from Home Page",
          label: "Contact info", // optional
          value: 99, // optional, must be a number
          nonInteraction: true, // optional, true/false
          transport: "xhr", // optional, beacon/xhr/image
        });
      }
      else{
        if(!nameregex.test(name)&&!emailRegex.test(email)&&!numregex.test(phone)){
          errormessage.innerHTML="* Enter the Input correctly"
        }
        else if(!nameregex.test(name)){
              errormessage.innerHTML="* Enter the Name correctly"
        }
       else if(!emailRegex.test(email)){
          errormessage.innerHTML="* Enter the Email correctly"
        }
        else if(!numregex.test(phone)){
          errormessage.innerHTML="* Enter the Phone number correctly"
        }
        else {
          errormessage.innerHTML=""
        }
      }}
      else{
        errormessage.innerHTML="*Enter the Captcha correctly "
        createcaptcha()
      }
     
    }
    var settings = {
      dots: true,
      speed: 100,
      slidesToShow: 1,
      initialSlide: 0,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      arrows:false,
      autoplaySpeed: 1500,
      cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
     let arryobj=[
        {
            "title" : "Investment retired plan",
            "category" : "Investment",
            "photo" :"../assest/project-17-370x470.jpg"
        },
        {
            "title" : "Investment retired plan",
            "category" : "Investment",
            "photo" :"../assest/project-18-370x470.jpg"

        },
        {
            "title" : "Investment retired plan",
            "photo" :"../assest/project-20-370x470.jpg",
            "category" : "Money"
        },
        {
            "title" : "Investment retired plan",
            "photo" :"../assest/project-21-370x470.jpg",
            "category" : "Investment"
        },
        {
            "title" : "Investment retired plan",
            "photo" :"../assest/project-22-370x470.jpg",
            "category" : "Honey"
        },
        {
            "title" : "Investment retired plan",
            "photo" :"../assest/project-18-370x470.jpg",
            "category" : "Investment"
        }
     ]
     let tesitimonial=testimonialdata
  return (
    <div className='mt-10'>
        {/* <div id='CaseStudies' className=' bg-slate-100'>
            <div className='container pt-36'> 
           <p className='text-clr fw-semibold'>CASE STUDIES</p>
           <p className='text-4xl fw-semibold'>Thinking Forward for your Results</p>
           <Row className='mt-5 p-2'>
            <Col md={9} xl={2} className='p-4 h-fit shadow-lg rounded-3xl bg-white mt-3'>
             <button className='w-full'> <p className='text-slate-600 text-start fw-medium'>View All Recents</p>
                <hr /></button>  
                <button className='w-full'>    <p className='text-slate-600 text-start fw-medium'>Business</p>
                <hr /></button>  
                <button className='w-full'>    <p className='text-slate-600 text-start  fw-medium'>Consulting</p>
                <hr /></button>  
                <button className='w-full'>     <p className='text-slate-600 text-start fw-medium'>Innovative</p>
                <hr /></button>  
                <button className='w-full'>    <p className='text-slate-600 text-start fw-medium'>Investment</p>
                <hr /></button>  
                <button className='w-full'>    <p className='text-slate-600 text-start fw-medium'>Management</p>
                </button>  
            </Col>
            <Col xl={10} className='mt-3'>
            <Slider {...settings}>
                   {
                    arryobj.map((obj)=>{
                        return(
                <div className='position-relative w-auto h-auto'>
                  
                    //// <img  className='d-block w-[100%] rounded-3xl'
                     src={require(`/../assest/project-17-370x470.jpg`)} alt="" /> /////
                     <Image  className='d-block w-[100%] rounded-3xl' 
                     src={obj.photo} alt='missing'>

                     </Image>
                     <div  id='opchi'
                    className='position-absolute rounded-3xl d-flex align-items-end transi  p-3 md:p-5 justify-center top-0 left-0 w-[100%] h-[100%]'>
                        <div id='three-rounded'  className='bg-slate-100 py-3 rounded-t-3xl rounded-s-3xl w-full mp-3 px-4'>
                        <p className='text-violet-600'>{obj.category}</p>
                        <button onClick={()=>navigate(`/project/${obj.title}`)} className= 'lg:text-xl text-slate-900 transi text-start py-2 hover:text-violet-600'>
                            {obj.title}</button>
                        </div>
                    </div>
                   </div>
                         
                        )
                    })
                   }
                   </Slider>
            </Col>
           </Row>
            </div>

        </div> */}
        {/* Case study finied */}
        {/* Testimonial start */}
        <div style={{background : "rgb(10,102,217)"}} className='py-20 my-5'>
          <Row className='mx-auto container text-white'>
            <Col lg={6} className='my-2'>
               <p className='fw-semibold text-xl text-pink-400 fontfam '>Testimonials</p>
               <p className='text-4xl md:text-6xl lg:text-5xl fontfam fw-semibold'>Our Clients have been Extremely Satisfied by our Professionalism</p>
           <div className='flex'>
            <img   className='w-[50px] h-[50px] mx-4' src="../assest/icon-7.png" alt="Icon" />
            <p className='fw-semibold fontfam text-lg'>
            Avg.Rating 4.8/5 
            <p className='fontfam'>Based on 2,500 Client Reviews</p>
            </p>
           </div>
           {/* <button className='text-xl transi  hover:text-pink-400'>Read all reviews
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
           </button> */}

            </Col>
            <Col lg={6} className='my-2'>
              {/* text box */}
               {/* <div id='curly' className='p-3 flex flex-col flex-lg-row gap-3 w-4/5  rounded-t-3xl rounded-s-3xl bg-white'>
                 icon section
                  <div>
                    <div  className='violetclr rounded-t-full rounded-ee-full flex justify-center align-items-center w-14 h-14'>
                       <img width={30} className='' src={require('/../assest/quote.png')} alt="" />
                      </div> 
                  </div>
                  icon finish
                  text-area
                  <div className='mt-2'>
                    <p className='text-clr text-xl fw-semibold'>
                      Great Experience
                    </p>

                    <p className='text-slate-600 md:text-lg'>
                     Merida Team is really good at what they do and alway persuading the exellance in their speciality.
                 We have approached them for the assistance for our company and they have transformed our way of seeing the customer
                    and even a customer sight towards our company.
                    </p>
                    
                    <p className='text-black text-xl fw-semibold fontfam'>Balaji Balakrishnan</p>
                    <p className='text-clr text-lg mulish fw-bold'>Founder - Get support</p>
                  </div>
               </div> */}
               <Slider {...settings}>
               {    tesitimonial.map((commt)=>{
                return(
                
                  <div id='curly' className='p-3 bg-slate-50 gap-3 d-flex flex-sm-row flex-column w-4/5 
                   rounded-t-3xl rounded-s-3xl'>
                 
                       
                       <div  className='violetclr rounded-t-full rounded-ee-full flex
                        justify-center align-items-center w-14 sm:w-36 px-3 h-14'>
                       <img className='' width={40} src='../assest/quote.png' alt="Quote" />
                      </div> 
                  
              
                  <div className='mt-2'>
                    <p className='text-clr text-xl fw-semibold'>
                      {commt.title}
                    </p>

                    <p className='text-slate-600 md:text-lg'>
                    {commt.para}
                    </p>
                    
                    <div className='flex gap-3'>
                      <img className='w-[80px] bg-contain rounded'
                       src={commt.img} alt={commt.title} />
                   <div>
                   <p className='text-black text-xl fw-semibold fontfam'>{commt.name}</p>
                    <p className='text-clr text-lg mulish fw-bold'>{commt.posting}</p>
                      </div> </div>
                </div>
               </div>
                )
               })

}
               </Slider>
           
           
            </Col>
          </Row>
        </div>
        {/* Testimonial end */}
        {/* Blog Post */}
        {/* Appointment */}
        <Row id='three-rounded' className='container mx-auto py-3 bgbl flex justify-around '>
            <Col lg={6} id='appointmentform' className=' p-lg-4'>
                  <p className='text-pink-600 text-center text-sm-start ps-3 text-lg fw-semibold'>Appointment</p>
                  <p className='text-4xl fw-semibold  text-center text-sm-start ps-2  text-white'>Send your Proposal to us</p>
                  <form  className='bg-white md:w-fit mx-auto mx-sm-0 rounded-s-3xl rounded-tr-3xl p-4 mt-4 mb-2 ' action="">
                     <div className='d-flex flex-col flex-sm-row'>
                     <div className='d-flex flex-col'>
                          <input required  type="text" className='p-3 text-slate-500 border-1 border-slate-400 rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-violet-600 '  placeholder='Name *' onChange={(e)=>setname(e.target.value)} value={name} /> 
                          <input required type="email" className='p-3  text-slate-500 border-1 border-slate-400 rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-violet-600 ' placeholder='Email *'  onChange={(e)=>setemail(e.target.value)} value={email} />
                          <input required type="Phone" className='p-3  text-slate-500 border-1 border-slate-400  rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-violet-600 ' placeholder='Phone *'  onChange={(e)=>setphone(e.target.value)} value={phone} />
                      </div>
                      <div className='d-flex flex-col'>
                        <select value={subjects} onChange={(e)=>setsubject(e.target.value)} name="Subject" id="selectdrop"
                        className='border-1 border-slate-400 p-3 text-slate-500 cursor-pointer  rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-violet-600'>
                            <option value="Subject"> Subject</option>
                            <option value="Software consulting">Software Consulting</option>
                            <option value="Digital Marketing"> Digital Marketing</option>
                            <option value="Branding">Branding</option>
                            <option value="Business Consulting">Business Consulting</option>

                        </select>
                        <textarea name="Message" placeholder='Message' value={message}  onChange={(e)=>setmessage(e.target.value)}
                        className='p-3 border-1 border-slate-400  text-slate-500  rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-violet-600 '
                         id="" cols="20" rows="5">

                        </textarea>
                      </div>
                     </div>
{/* Captcha */}      
<div className='d-flex flex-col flex-sm-row align-items-center justify-between'>
                    <div className='d-flex'>
                     <p className='text-slate-900'>{
                     captcha.split("").map((w)=>{ 
                      return(
                        <span style={{fontFamily:"Palatino"}}
                         class='mx-2'>{w}</span>
                      )
                     })
                     } </p>
                     <img onClick={createcaptcha} 
                     className='w-[30px] h-[30px] inline cursor-pointer mx-2 ' 
                     src="../assest/refresh.png" alt="refresh" /> 
                    </div> 

                          <input required type="text" 
                          className='p-3  text-slate-500 border-1 border-slate-400  rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-violet-600 ' 
                          placeholder='Enter Captcha *'  onChange={(e)=>setentercap(e.target.value)} 
                          value={entercap} />

                    </div>

                     <p id='errormessage'></p>
                    
                    <button id='three-rounded' onClick={submithandle} 
                     className='px-4 text-white w-100 mt-3 btn-change fw-semibold p-3 bg-violet-700'>
                      Send Request
                        </button>
                  </form>
            </Col>
            <Col lg={4} className='flex flex-col px-5 my-5 md:my-0 justify-center gap-3'>
                  <img width={60} src="../assest/customer-service.png" alt="Service" />
                 
                 <div className='text-white'>
                 <p className=''>Office Hours </p>
                 <p className='fw-semibold text-lg font-sans'>Mon - Sat: 09am to 06pm</p>
                 </div>
                 <div className='text-white'>
                 <p className=''>Phone </p>
                 <Link className='text-white text-decoration-none'><p className='hover:underline fw-semibold text-lg font-sans'>
                  +91 8904599283</p>
                 </Link>
                 </div>
                 <div className='text-white'>
                 <p className=''>Email </p>
                 <Link target='_black' to={"https://mail.google.com/mail/u/0/#sent?compose=CllgCJvnJjjHVjvnBMkwHvqglQHbmZNMmkFhnkQfszxsDsRXqhlJphqQmDVHdHHfGdwrlBFnwCg"} className='text-white text-decoration-none'><p className='hover:underline fw-semibold text-lg font-sans'>
                  info@meridatechminds.com</p>
                 </Link>
                 <div className='d-flex w-44 justify-around align-items-center mt-4'>
                      <a href='https://www.facebook.com/MeridaTechMinds/' target='_blank'>
                      <img width={25} src="../assest/facebook-app-symbol.png" alt="FaceBook" />
                      </a>
                      <a href='https://twitter.com/MTechminds/' target='_blank'>
                      <img width={25} src="../assest/twitter.png" alt="Twitter" />
                      </a>
                      <a href='https://www.linkedin.com/company/merida-tech-minds/' target='_blank'>
                      <img  width={25} src="../assest/linkedin.png" alt="Linkedin" />
                      </a>
                      <a  href='https://www.instagram.com/meridatechminds_/' target='_blank'
 className='rounded-full text-white transi cursor-pointer p-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg></a>
                 </div>
                 </div>
            </Col>
        </Row>
    </div>
  )
}

export default LandinBLog