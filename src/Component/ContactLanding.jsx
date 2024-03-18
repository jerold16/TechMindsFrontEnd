import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ContactLanding = () => {
   let cp= "(OPC) Pvt.Ltd"
  return (
    <div>
        
        
       {/* Copyright */}
       <Container>
        <div className='h-10'></div>
          <Row className=''>
            <Col lg={6} className='align-items-center my-3 mb-5 d-none d-md-block'>
              <img width={330} src="../assest/png-01.png" alt="Logo" />
              {/* <p className='my-4 text-lg fontfam fw-semibold'>
              <Link className='text-clr text-decoration-none'>
                <span className='hover:underline fw-semibold fontfam block text-2xl font-sans my-2'> 
                Merida Tech Minds {cp} .</span>
                 </Link>
              </p> */}
              {/* <p className='text-slate-600 fontfam fw-semibold text-lg'>
              Provides advice & guidance to clients
               regarding their investments & manage their investment portfolios.
              </p> */}
            </Col>
            <Col className=''>
               <div className='flex justify-between'>
               <div className='md:w-3/5'>
               <p className='text-2xl fw-semibold fontfam'>NewsLetter</p>
               <p className='text-slate-600 text-lg fontfam fw-semibold'>
               By submitting this form, 
               you consent to receive marketing updates from Merida.
               </p>
               </div>
               <div className='d-none d-md-block'> 
               <img  src="../assest/icon-8.png" alt="Icon" />
               </div>
               </div>
               <div className='flex  align-items-center justify-around'>
               <input required type="email" className='p-3 md:w-3/5  text-slate-500 border-2 border-slate-200  rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-violet-600 ' placeholder='Email address..' />
               <button id='three-rounded' 
                     className='px-4 text-white md:w-1/5 btn-change fw-semibold p-3 bg-violet-700'>
                      <img className='mx-auto' width={30} src="../assest/paper-plane.png" alt="Paper-Plane" />
                        </button>
               </div>
            </Col>
          </Row>
          <Row className='my-4 justify-between'>
            <Col lg={3} className='mt-2'>
              <p className='text-2xl fw-semibold'>Office Location</p>
              <hr />
              {/* <p className='text-lg md:w-4/5 fw-semibold'>
              Over 30 Offices in more
than 16 Countries
              </p> */}
              <p className='text-lg fw-semibold'>Head Office</p>
              <p className=' mulish md:w-4/5 text-slate-500'>
       <span className='text-black text-base fw-semibold mulish'>   Merida Tech Minds {cp}</span>  <span className='block'>
         20-2 ,Keshava Krupa Building 2nd Floor, 30th cross, 10th Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka 560011
           </span>  </p>
              <Link target='_block' to='https://g.co/kgs/vgDdWeC' className='text-decoration-none flex gap-2 text-lg fw-semibold text-slate-900 transi hover:text-violet-600'>
                <img width={30} src='../assest/map.png' alt="Map" />
                Google map</Link>
            </Col>
            <Col lg={3} className='mt-2'>
               <p className='text-2xl fw-semibold'>Company</p>
               <hr />
               <div className='text-slate-400'>
                <Link to={"/"} hrefLang='#home' className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className='flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>  Home
                </p>
                </Link>
                <Link to={"/about"} className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className='flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> About us
                </p>
                </Link>
                <Link to={"/blogs"} className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className='flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> Blogs
                </p>
                </Link>
                <Link to={"/service"} className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className='flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>  Services
                </p>
                </Link>
                <Link to={"/ourteam"} className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className='flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> Our team
                </p>
                </Link>
                <Link to={"/contact"} className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className='flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>  Contact
                </p>
                </Link>
                <Link to={"/careers"} className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className='flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>  Careers
                </p>
                </Link>
               </div>
            </Col>
            <Col lg={3} className='mt-2'>
               <p className='text-2xl fw-semibold'>Industries</p>
               <hr />
               <div className='text-slate-400'>
                <a href="#industry" className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className='flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>   EdTech
                </p>
                </a>
                <a href="#industry" className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className='flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>  Real Estate
                </p>
                </a>
                <a href="#industry"  className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className='flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>  E-Commerce
                </p>
                </a>
                <a href="#industry"  className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className='flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> FMCGs
                </p>
                </a>
                <a href="#industry"  className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className='flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> Health Care
                </p>
                </a>
                <a href="#industry"  className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className='flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> Electronics
                </p>
                </a>
                <a href="#industry"  className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className='flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> Business
                </p>
                </a>

                {/* <Link to={"/service/Manufacturing"} className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className='flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> Manufacturing
                </p>
                </Link>
                <Link to={"/service/Market Research"} className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className='flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> Market Research
                </p>
                </Link> */}
               
               </div>
            </Col>
            <Col lg={3} className='mt-2'>
            <p className='text-2xl fw-semibold'>Affiliate Businesses</p>
               <hr />
               <a href='https://skilllearningacademy.com/' target='_blank' className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className='flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> EduTech
                </p>
                </a>
                <a href='https://meridahr.com/' target='_blank' className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className='flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> HR Consulting
                </p>
                </a>
                <a href='https://fortunetradingacademy.com/' target='_blank' className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className='flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> Trading
                </p>
                </a>
                <a href='https://fortunetradingacademy.com/' target='_blank' className='text-decoration-none text-slate-500 transi hover:text-violet-600'>
                <p className='flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> Learning Management System
                </p>
                </a>
            </Col>
          </Row>
          
       </Container>
       <div className='h-10'>
         </div>
       <div className='bg-slate-950 mt-5'>
       <Row className='container mx-auto p-3'>
            <Col lg={9} xl={7} className='flex mx-auto flex-col md:flex-row align-items-center gap-3 justify-between'>
              <Link to={"/condition"} className='text-decoration-none text-lg hover:text-white transi text-slate-400'>
              <p className='my-3 text-lg fontfam text-slate-400 fw-semibold'> Terms & conditions</p>
              </Link>

              <Link to={"/terms&condition"} className='text-decoration-none text-lg hover:text-white transi text-slate-400'>
              <p className='my-3 text-lg fontfam text-slate-400 fw-semibold'> Privacy policy</p>
              </Link>
              <p className='my-3 text-lg fontfam text-slate-400 fw-semibold'>
              Merida Tech Minds {cp}  © 2023 
              </p>
            </Col>
            <Col lg={4} xl={4} className='mt-4 mx-auto'>
               <a href="#home"
                className='text-white mx-auto mx-xl-0 ms-xl-auto  w-fit fw-semibold gap-2 text-lg fontfam text-decoration-none flex'> Back to top
               <img width={20} height={10} src="../assest/up-arrow.png" alt="Up-arrow" />             
               </a>
            </Col>
          </Row>
       </div>
    </div>
  )
}

export default ContactLanding