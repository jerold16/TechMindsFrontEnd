import React, { useEffect, useState } from 'react'
import MiniNav from '../NavBar/MiniNav'
import LogoNav from '../NavBar/LogoNav'
import MainNav from '../NavBar/MainNav'
import ContactLanding from './ContactLanding'
import TitleBanner from './TitleBanner'
import DarkNav from '../NavBar/DarkNav'
import { Col } from 'react-bootstrap'
import { testimonialdata } from './Data'
import { Helmet } from 'react-helmet'

const Testimonial = () => {
    let [anime,setanime]=useState("")
    useEffect(()=>{
      setanime("animate__fadeIn");
      window.scrollTo(0, 0);
      const element = document.querySelector('.durationani');
      element.style.setProperty('--animate-duration', '4s');
    },[])
    const testimonial=testimonialdata;
  return (
    <div className={`${anime} animate__animated transi durationani `} >
      <Helmet>
  <title> Voices of Satisfaction | Merida Tech Minds</title>
  <meta name="description" content="Join the voices of those who have experienced our services and discover why their satisfaction is the true measure of our success."/>
  <meta name='keywords' content='success'/>
  <link rel="canonical" href="https://meridatechminds.com/testimonial" />
</Helmet>
        <MiniNav/>
        {/* <LogoNav/> */}
        <MainNav/>
        <DarkNav/>
        <TitleBanner img={"../assest/banner16.jpeg"} data={"Testimonial"}/>
        <h1 className='d-none'>Comments of the sucessful CEO on our works </h1>
        <div  className='container flex justify-around my-40 gap-3 flex-wrap'>
           {
            testimonial.map((data)=>{
             return(
              <Col lg={5} className=' bg-slate-200 rounded-3xl p-4'>
                    <p className='text-blue-600 fontfam fw-bold'>{data.title} </p>
                    <p className='mulish'>{data.para} </p>
                    <div className='flex gap-5'>
                      <div className=''>
                        <p className='text-2xl fontfam fw-bold text-blue-600'>{data.name} </p>
                        <p className='mulish'>{data.posting} </p>
                      </div>
                      <img className='rounded-lg' width={80} src={data.img} alt={data.name} />
                    </div>
              </Col>
             )
            })
           }
        </div>
        <ContactLanding/>
    </div>
  )
}

export default Testimonial