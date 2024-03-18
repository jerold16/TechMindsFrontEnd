import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';

const Body2Landing = () => {
    let navigate =useNavigate()
    let content = [
        {
            "id":1,
            "title" : "EdTech",
            "content" : "Elevate your institution's capabilities through our tailored technology solutions designed to meet the evolving needs of the educational landscape.",
            "point" : [
                'Empower the Future of Education.',
                'Custom Software Development to enhance learning experiences.'
            ]
        },
        {
            "id":2,
            "title" : "Real Estate",
            "content" : "Revolutionize the real estate landscape with our bespoke software solutions, offering advanced tools for property management, streamlined transactions, and data-driven decision-making.",
            "point" : [
                'CRM Integrations',
                'Innovative Proptech Solutions'
            ]
        },
        {
            "id":3,
            "title" : "E-Commerce",
            "content" : "Delivering robust platforms that optimize user experience, enhance security, and drive online sales.",
            "point" : [
                'Scalable e-commerce platforms.',
                'Fuel the growth of your online retail business'
            ]
        },
        {
            "id":4,
            "title" : "FMCGs",
            "content" : "Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.",
            "point" : [
                'Boost efficiency and agility',
                'Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.'
            ]
        },
        {
            "id":5,
            "title" : "Business",
            "content" : "Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.",
            "point" : [
                'Boost efficiency and agility',
                'Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.'
            ]
        },
        {
            "id":6,
            "title" : "Health Care",
            "content" : "Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.",
            "point" : [
                'Boost efficiency and agility',
                'Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.'
            ]
        },
        {
            "id":7,
            "title" : "Electronics",
            "content" : "Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.",
            "point" : [
                'Boost efficiency and agility',
                'Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.'
            ]
        },
        {
            "id":8,
            "title" : "Hospitality",
            "content" : "Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.",
            "point" : [
                'Boost efficiency and agility',
                'Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.'
            ]
        },
        {
            "id":9,
            "title" : "Manufaturing",
            "content" : "Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.",
            "point" : [
                'Boost efficiency and agility',
                'Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.'
            ]
        },
        {
            "id":10,
            "title" : "Telecom",
            "content" : "Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.",
            "point" : [
                'Boost efficiency and agility',
                'Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.'
            ]
        },
        {
            "id":11,
            "title" : "Mining",
            "content" : "Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.",
            "point" : [
                'Boost efficiency and agility',
                'Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.'
            ]
        }
    ]
    let [title,settitle]=useState(content[0].title);
    let [text,settext] = useState(content[0].content);
    let [points,setpoints] = useState(content[0].point);
    let [anime,setanime]=useState("")
    let changecontent=(id)=>{
       content.forEach((cont)=>{
        if(cont.id==id){
            settitle(cont.title);
            settext(cont.content);
            setpoints(cont.point);
            setanime("animate__fadeIn");
            const element = document.querySelector('.durationani');
            element.style.setProperty('--animate-duration', '2s');
            setTimeout(()=>{
              setanime("")
            },2500)
        }
       })
    }
    let [step1,set1]=useState(false)
    let [step2,set2]=useState(false)
    let [step3,set3]=useState(false)
  return (
   <>
   <section id='industry' style={{
    backgroundPosition : 'center' ,
    backgroundSize : 'cover',
    backgroundAttachment : 'fixed'
}}
    className='container indsbg rounded-3xl my-10'>
            <Row className='d-flex flex-column pt-5 flex-md-row justify-center px-10'>
                <Col lg={6} style={{background : 'rgb(46,53,64)',
               opacity:'0.9' }}
                className='px-5 py-10 rounded-ss-3xl'>
                   <div>
                   <p className='fw-bold text-pink-700 fontfam'>WE WORK FOR</p>
                    <p className='text-white fw-bold text-3xl md:text-5xl mb-10 fontfam'>Industries We Served</p>
                   <div className='scrolling-list-container overflow-y-scroll h-[370px]'>
                    {
                        content.map((con,index)=>{
                            if(index==0){
                            let change=document.getElementById("activebtn")
                            console.log(change);
                            }
                            return(
                                <div className='w-10/12'>
                                    <button onClick={()=>changecontent(con.id)} id='activebtn'
                                       className={`w-100
                                       rounded-t-3xl p-2 pt-3 ${con.title==title ? "rounded-s-xl bg-slate-50 font-semibold text-slate-950" :""}
                                       my-2 border-bottom text-slate-50 text-start `}>
                                        
                                       <p
                                        className='text-lg md:text-xl mulish'>{con.title}</p>
                                    </button>   
                                </div>
                            )
                        })
                    }
                    </div>
                   </div>
                </Col>
                <Col lg={4}
                id='anime'
                className={`bg-white durationani  h-fit mt-5  mt-lg-auto rounded-tr-3xl p-4 d-flex justify-center`}>
                    <div className={`w-11/12 durationani animate__animated ${anime}`}>
                    <p className='text-2xl font-sans fw-semibold my-3'>
                        {title}
                    </p>
                    <hr />
                    <p className='pt-2 text-lg text-slate-700'>
                       {text}
                    </p>
                    {
                        points.map((point)=>{
                            return(
                                <p className='flex gap-3'>
                                <img className='w-8 h-8 align-item-center' src='../assest/arrowicon.png' alt="ArrowIcon" />
                                <p className=''>{point}</p>
                            </p> 
                            )
                        })
                    }
                    {/* <button id='three-rounded' onClick={()=>{navigate(`/service/${title}`)}} className='px-4  btn-change text-white fw-semibold p-3 bg-violet-700'>
                   Explore More
       </button> */}
                    </div>
                </Col>
            </Row>


    </section>
    {/* How we Works */}
    <div className='bg-slate-100'>
    <div className='container text-center '>
        <div className='h-10'></div>
         <p className='text-clr fw-bold '>HOW WE WORKS</p>
         <p className='text-5xl fw-semibold mb-5'>We Plan for your Growth</p>
        <Row className='justify-around m-sm-0'>
            <Col sm={8} md={5} lg={3} className='flex flex-col p-5 py-2 p-md-0'
            onMouseEnter={()=>{set1(true) }}
            onMouseLeave={()=>set1(false)}
            >
          <div id='img-container' className=' mx-auto'>  
                     <div id='icon' className='d-flex opacity-90 z-2 position-relative top-12 -left-10'>
                      <div id="three-rounded" className='violetclr flex justify-center align-items-center w-24 h-24'>
                       <img width={55} className='' src='../assest/coworking.png' alt="Co-Worker" />
                      </div>                    
</div> 
{/* icon ending */}
                
                     <img className='z-1 position-absolute' src='../assest/working-1.jpg' alt="People" />
                   <div id='three-rounded' className=' border border-black transform rotate-12 w-48 h-48'> </div>
                </div>
                <div id='contentarea' className='mt-5 transi text-start'>
                       <p className='fw-semibold text-2xl fontfam '>Connecting with you</p>
                       <p className='text-lg mulish'>We prioritize cultivating enduring partnerships to guarantee sustained support for your business over the long term.
                       </p>
                        <p className='text-clr transi border-bottom border-blue-700 text-lg fw-bold my-3'>
                           <span style={{color : step1? "rgb(10,102,217)" : "rgb(203,213,225)",
                               }}
                            className="text-7xl transi">
                            01</span><span className='mulish'> st step </span></p>
                </div>
            </Col>
            <Col sm={8} md={5} lg={3} className='flex p-5 py-2 p-md-0 position-relative lg:bottom-20 flex-col'
            onMouseEnter={()=>set2(true)}
            onMouseLeave={()=>set2(false)}
            >
          <div id='img-container' className='mx-auto'>  
                     <div id='icon' className='d-flex opacity-90 z-2 position-relative top-12 -left-10'>
                      <div id="three-rounded" className='violetclr flex justify-center align-items-center w-24 h-24'>
                       <img width={55} className='' src='../assest/paper.png' alt="Paper" />
                      </div>                    
</div> 
{/* icon ending */}
                
                     <img className='z-1 position-absolute' src='../assest/working-2.jpg' alt="People-working" />
                   <div id='three-rounded' className=' border border-black transform rotate-12 w-48 h-48'> </div>
                </div>
                <div id='contentarea' className='mt-5 transi text-start'>
                       <p className='fw-semibold text-2xl fontfam'>Planning</p>
                       <p className='text-lg mulish'>Upon grasping your key requirements, our team promptly initiates focused strategy development tailored to your specifications.
                       </p>
                        <p className='text-clr transi border-bottom border-violet-700 text-lg fw-bold my-3'>
                           <span style={{color : step2? "rgb(10,102,217)" : "rgb(203,213,225)",
                               }}
                            className="text-7xl      transi">
                            02</span> <span className='mulish'> nd step </span></p>
                </div>
            </Col>
            <Col sm={8} md={5} lg={3} className='flex p-5 py-2 p-md-0 flex-col'
            onMouseEnter={()=>{set3(true)
            
            }}
            onMouseLeave={()=>set3(false)}
            >
          <div id='img-container' className='mx-auto'>  
                     <div id='icon' className='d-flex opacity-90 z-2 position-relative top-12 -left-10'>
                      <div id="three-rounded" className='violetclr flex justify-center align-items-center w-24 h-24'>
                       <img width={55} className='' src='../assest/research.png' alt="Research" />
                      </div>                    
</div> 
{/* icon ending */}
                
                     <img className='z-1 position-absolute' src='../assest/working-3.jpg' alt="Execution" />
                   <div id='three-rounded' className=' border border-black transform rotate-12 w-48 h-48'> </div>
                </div>
                <div id='contentarea' className='my-5 transi text-start'>
                       <p className='fw-semibold text-2xl fontfam'>Execution</p>
                       <p className='text-lg mulish'>After crafting our strategy, we provide a transparent overview of our process. and how our service adeptly addresses challenges.</p>
                        <p className='text-clr transi text-lg fw-bold border-bottom border-violet-700 my-3'>
                           <span style={{color : step3? "rgb(10,102,217)" : "rgb(203,213,225)",
                               }}
                            className="text-7xl transi">
                            03</span> <span className='mulish'> rd step </span></p>
                </div>
            </Col>
        </Row>
        </div>
        <div className='d-flex flex-col align-items-center sm:flex-row justify-center gap-3'>
        <p className='fw-semibold text-lg flex'>Let's Revolutionize your Business!</p>
         {/* <Link className='text-decoration-none text-slate-800'> 
         <p className='text-lg hover:text-violet-950 fw-semibold '> ! Appointment</p>
          </Link> */}
        </div>
    </div>
    {/* End */}
   </>
  )
}

export default Body2Landing