import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import MiniNav from '../NavBar/MiniNav'
import MainNav from '../NavBar/MainNav'
import DarkNav from '../NavBar/DarkNav'
import ContactLanding from './ContactLanding'
import TitleBanner from './TitleBanner'
import { Button, Modal } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Careers = () => {
  let navigate=useNavigate()
    let [show,setshow]=useState(false)
    let [jobpost,setjobpost]=useState([])
    let [name,setname]=useState("")
    let [email,setemail]=useState("")
    let [phone,setphone]=useState("")
    let [Message,setmessage]=useState("")
    let [title,settitle]=useState("")
    let [resume,setFile]=useState(null)

    let [anime,setanime]=useState("")
    useEffect(()=>{
        setanime("animate__fadeIn");
        window.scrollTo(0, 0);
        const element = document.querySelector('.durationani');
        element.style.setProperty('--animate-duration', '4s');
        let fetchpost=async ()=>{
          await axios.get(`https://backendapi.meridahr.com/api/job_description/`)
          .then((response)=>{
            console.log(response.data);
            setjobpost(response.data);
            sessionStorage.setItem("careers",JSON.stringify(response.data))
          })
          .catch((err)=>{
            console.log(err);
          })
        }
        fetchpost()
      },[])
      let submitform=async (e)=>{
        e.preventDefault()
        let value={name,email,phone,resume,Message,title}
       console.log();
       const formDataToSend = new FormData();
    
    // Append each form field to the FormData object
    Object.keys(value).forEach((key) => {
      formDataToSend.append(key, value[key]);
    });
      await axios.post(`https://backendapi.meridahr.com/api/details`,formDataToSend)
       .then((response)=>{
        alert("Your request has been submited")
        navigate("/careers")
        console.log(response.data);
       })
       .catch((err)=>{
        console.log(err);
       })

      }
  return (
    <div className={`${anime} animate__animated transi durationani `}>
    <Helmet>
<title>Careers</title>
<meta name="description" content="Careers of the Tech Minds"/>
<link rel="canonical" href="https://meridatechminds.com/careers" />
</Helmet>
      <MiniNav/>
      <MainNav/>
      <DarkNav/>
      <TitleBanner data={"Careers"} img={"../assest/banner17.jpeg"} />
       <div className={`flex ${anime} animate__animated transi durationani
         flex-wrap mx-auto mt-3  container-lg gap-3 justify-around`}>
       
        { jobpost.length >0 ?
                jobpost.map((job)=>{
                  return(
                    <div className='p-4 border-2 flex flex-col justify-between w-[20rem]'>
                    <p className='fw-bolder text-lg fontfam'>Job Title : <span className='mulish text-base'>
                      {job.Title}</span> </p>
                    <p className='fw-bolder fontfam text-lg'>Experience : <span className='mulish text-base'>
                     {job.Experience}</span> </p>
                   <p className='fw-bolder fontfam text-lg'>Job Description : <span className=' mulish text-base'>
                    {job.Job_Discription.slice(0,50)}
                    </span>
                    <Link 
                    onClick={(e) => {
                      e.preventDefault(); // Update the jobtitle state
                      sessionStorage.setItem("title",job.Title)
                      navigate(`/careers/${job.Title.replace(/\s/g, "")}`); // Navigate programmatically
                    }}
                    to={`/careers/${job.Title.replace(/\s/g,"")}`} 
                    className=' text-slate-900'> read more</Link> </p>
                 <a href='https://interview.meridatechminds.com/register' target='_blank'
                 className='p-3 text-decoration-none w-fit bg-blue-500 rounded-t-3xl rounded-s-3xl text-slate-50'>Apply now
                 </a>
                 </div>
                  )
                })  : <div>
                  No Job are available as of now!!! Thank you for Visiting!!
                </div>
        }
      
        </div>

       
       <Modal
       show={show}
       onHide={() => setshow(false)}
      size="lg"
      // aria-labelledby="contained-modal-title-vcenter"
      className='mx-auto'
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Dear Applicant
        </Modal.Title>
      </Modal.Header>
      <div className='container p-4 p-sm-0'>
        <h4 className='mx-auto mt-2 mt-sm-3 text-center'>Personal Information</h4>
        <form  className=' md:w-fit mx-auto rounded-s-3xl rounded-tr-3xl mt-4 mb-2 ' action="">
                     <div className='d-flex flex-col flex-sm-row'>
                     <div className='d-flex flex-col'>
                          <input required  type="text" className='p-3 text-slate-500 border-1 border-slate-400 rounded-s-2xl rounded-tr-2xl text-lg m-1 focus:outline-violet-600 '  placeholder='Name *' onChange={(e)=>setname(e.target.value)} value={name} /> 
                          <input required type="email" className='p-3  text-slate-500 border-1 border-slate-400 rounded-s-2xl rounded-tr-2xl text-lg m-1 focus:outline-violet-600 ' placeholder='Email *'  onChange={(e)=>setemail(e.target.value)} value={email} />
                          <input required type="Phone" className='p-3  text-slate-500 border-1 border-slate-400  rounded-s-2xl rounded-tr-2xl text-lg m-1 focus:outline-violet-600 ' placeholder='Phone *'  onChange={(e)=>setphone(e.target.value)} value={phone} />
                      </div>
                      <div className='d-flex flex-col'>
                        {/* <select value={subjects} onChange={(e)=>setsubject(e.target.value)} name="Subject" id="selectdrop"
                        className='border-1 border-slate-400 p-3 text-slate-500 cursor-pointer  rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-violet-600'>
                            <option value="Subject"> Subject</option>
                            <option value="Software consulting">Software Consulting</option>
                            <option value="Digital Marketing"> Digital Marketing</option>
                            <option value="Branding">Branding</option>
                            <option value="Business Consulting">Business Consulting</option>

                        </select> */}
                          <input required type="file" 
                          className='p-3 cursor-pointer sm:w-11/12  text-slate-500 border-1 border-slate-400  rounded-s-2xl rounded-tr-2xl text-lg m-1 focus:outline-violet-600 ' 
                          placeholder=''  onChange={(e)=>setFile(e.target.files[0])}/>
                        
                        <textarea name="Message" placeholder='Message' value={Message}  onChange={(e)=>setmessage(e.target.value)}
                        className='p-3 border-1 border-slate-400  text-slate-500  rounded-s-2xl rounded-tr-2xl 
                        text-lg m-2 focus:outline-violet-600 '
                         id="" cols="20" rows="5">

                        </textarea>
                      </div>
                     </div>
                     <p id='errormessage'></p>
                     <button id='three-rounded' onClick={submitform} 
                     className='px-4 text-white w-50 float-end me-2  my-3 btn-change fw-semibold p-3 bg-violet-700'>
                      Submit Application
                        </button>
                  </form>
      </div>
     
    </Modal>
      <ContactLanding/>
    </div>
  )
}

export default Careers