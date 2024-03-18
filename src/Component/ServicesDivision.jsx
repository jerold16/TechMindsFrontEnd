import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import TitleBanner from './TitleBanner'
import { Col, Image, Row } from 'react-bootstrap'
import MiniNav from '../NavBar/MiniNav'
import LogoNav from '../NavBar/LogoNav'
import MainNav from '../NavBar/MainNav'
import ContactLanding from './ContactLanding'
import { contents } from './ServiceContent'
import DarkNav from '../NavBar/DarkNav'
import axios from 'axios'
import { Helmet } from 'react-helmet'

const ServicesDivision = () => {
    let {service} =useParams()
    let navigate=useNavigate()
    let [servicecontent,setcontent]=useState({})
    let [anime,setanime]=useState("")
    let [cards,setcards]=useState([])
    let [points,setpoints]=useState([])
    let [img,setimg]=useState("../assest/logodesign.jpeg")
    let [relatedblog,setrealtedblog]=useState([])
    let [similarservice,setsimilarservice]=useState([])
    let fetchblog = (category)=>{
      axios.get(`https://backendapi.meridatechminds.com/api/datas/${category}/`)
      .then((response)=>{
        setrealtedblog(response.data)
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    useEffect(()=>{
      setanime("animate__fadeIn");
      window.scrollTo(0, 0);
      const element = document.querySelector('.durationani');
      element.style.setProperty('--animate-duration', '2s');
     setTimeout(() => {
        setanime("")
     }, 2000);
    
     let find=()=>{
      contents.map((content)=>{
        let splited=content.title.split("").filter((a)=>{
                 return a!=" ";
        })
        let joined=splited.join("")
        if(joined.toLowerCase()===service.toLowerCase()){
          setcontent(content)
          setcards(content.points1)
          setpoints(content.points2)
          setimg(content.img)
          fetchblog(content.category)
          setsimilarservice(contents.filter((cont)=>{
              return cont.category==content.category
            }))
          console.log(similarservice);
        } })
    }
    if (service && contents.length > 0) {
      find();
    }
    
    },[service,contents])
  return (
    <div className={`${anime} animate__animated transi durationani`}>
      <Helmet>
  <title>{`${servicecontent.metatitle}`} </title>
  <meta name="description" content={servicecontent.metadescription}/>
  <meta name='keywords' content={servicecontent.keywords}/>
  <link rel="canonical" href={`https://meridatechminds.com/service/${service}`} />
</Helmet>
      <MiniNav/>
        {/* <LogoNav/> */}
        <MainNav/>
        <DarkNav/>
        <TitleBanner data={servicecontent.title} img={img}/>
        <h2 className='h-20'></h2>
        <Row className='container justify-around mx-auto mb-20'>
            <Col lg={7}>            
            <img className='rounded-3xl' src={img} alt={servicecontent.title} />
            {/* <p className='text-black mt-10'>" Extremely painful or again is there anyone who loves or case pursues or 
            desires these cases dislike perfectlys imple and to distinguish..... "</p> */}
            <h1 className='fontfam fw-bold fs-3 mt-5'>{servicecontent.title} </h1>
           <p className='mulish text-slate-600'>{servicecontent.para1} <a target='_blank' className='text-decoration-none fw-bolder text-slate-600' href={`${servicecontent.alink}`}>{servicecontent.link}</a>{servicecontent.para11} </p>
            {/* Card */}
            <div className=' flex flex-wrap my-5 justify-between gap-3'>
              {
               cards.map((card)=>{
                  return(
<div  className='p-5 px-4 w-[25rem] md:w-[20rem] lg:w-[15rem] mx-auto xl:w-[22rem] rounded-t-3xl rounded-s-3xl bg-slate-100'
                                  style={{
                                  borderRadius : "20px,20px, 20px,0px",
                                   }}>
        <div id='three-rounded' className='w-14 float-right h-14 flex
         align-items-center justify-center bg-slate-800'>
                    <p className='text-white text-2xl pt-3'>{card.id}</p>
            </div>
            <img className='w-10 h-10' src="../assest/zigzag.png" alt="zigzag" />
            
        <div className='my-4 fontfam fw-semibold text-2xl text-start w-4/5'>
           {card.title}
        </div>
      
        <div className='mulish text-start'> {card.point}
        </div>
      </div>
                  )
                })
              }

            </div>
            
            
           {/* Card end */}
               <h2 className='text-black fontfam fw-semibold text-3xl'>
                {servicecontent.approch}</h2>
               <p className='text-lg mulish'> {servicecontent.para2}</p>
               {
                points.map((point)=>{
                  return(
                    <div className='flex my-2'>
                    <img className='w-8 h-8' src="../assest/check-mark.png" alt="Check_mark" />
                    <div className='ms-4 flex flex-col text-slate-900'>
                    <h2 className=' text-xl fontfam fw-semibold'>{point.title}</h2>
                    <span className='text-slate-500 mulish text-base my-2 fw-normal sm:w-3/5 block'>
                    {point.point}
                    </span>
                    </div>
                </div>
                  )
                })
               }
                   
            </Col>

            <Col lg={4} className='mx-auto mt-5 mt-lg-0'>
                <div className='bg-slate-100 trnasi fw-semibold mb-5 transi shadow rounded-s-3xl rounded-t-3xl p-4 mx-auto'>
                
                       {
                        similarservice!==null ? similarservice.map((content)=>{
                          let splited=content.title.split("").filter((a)=>{
                            return a!=" ";
                   })
                   let joined=splited.join("")
                          return(
                                <p onClick={()=>navigate(`/service/${joined}`)} 
                                  className="hover:text-slate-100 transi hover:bg-violet-600 cursor-pointer rounded-s-3xl rounded-t-3xl bg-slate-50 p-3">
                                 {content.title}
                                 </p>
                          )
                        }): ""
                       }                
                </div>
                <div className='bg-slate-100 shadow rounded-s-3xl rounded-t-3xl p-4 mx-auto'>
                <p className='text-xl text-center fw-semibold my-2'>Related Blogs</p>
                <hr />
                {
                  relatedblog.length>0 ? relatedblog.map((blog)=>{
                    return(
                      <div onClick={()=>navigate(`/blogs/${blog.slug}`)} id='post1' className='cursor-pointer  align-items-center flex gap-2'>
                  <img className='w-25 h-16 bg-center rounded' src={blog.img} alt={blog.Main_Title}/>
                  <div className='blclr w-[200px] mx-auto'> {blog.Main_Title}
                  <p 
                   className='text-slate-950 transi hover:text-violet-600'>
                      Here are some tips for {blog.Main_Title}</p></div>
              </div>
                    )
                  }) : fetchblog("BlockChain")
                }
                {/* <div id='post1' onClick={()=>navigate("/service/Website Development")} className='cursor-pointer  align-items-center flex gap-2'>
                    <img className='w-25 h-16 bg-center rounded' src={require("../../assest/smlpic.jpeg")} alt="" />
                    <div className='blclr text-lg w-[200px] mx-auto'> Software consulting 
                    <p className='text-slate-950 transi text-lg hover:text-violet-600'>
                        Here are some tips for Website Development</p></div>
                </div>
                <div id='post2' onClick={()=>navigate("/service/Content Creation")} className='cursor-pointer align-items-center flex gap-2'>
                    <img className='w-25 h-16 bg-center rounded' src={require("../../assest/smlpic2.jpeg")} alt="" />
                    <div className='blclr text-lg w-[200px] mx-auto'> Branding 
                    <p className='text-slate-950 transi text-lg hover:text-violet-600'>
                        Look here for a Content Creation tips.</p></div>
                </div>
                <div id='post3' onClick={()=>navigate("/service/Startups")} className='cursor-pointer flex align-items-center gap-2'>
                    <img className='w-25 h-16 bg-center rounded ' src={require("../../assest/smlpic3.png")} alt="" />
                    <div className='blclr text-lg w-[200px] mx-auto'> Business 
                    <p className='text-slate-950 transi text-lg hover:text-violet-600'>
                        Confused where to start your Business?</p></div>
                </div> */}
                    
                </div>
                {/* Giving Wings */}
                <div className='p-4 bg-violet-600 rounded-t-3xl my-4 rounded-s-3xl'>
                    <p className='text-white text-3xl fontfam fw-bolder '>It's never too late or too early to get started</p>
                      <p className='text-white'>Get started now</p>
                      <button onClick={()=>navigate("/contact")} id='three-rounded' className='px-4 text-slate-50 hover:text-blue-950  hover:bg-slate-50 transi fw-semibold p-3 bg-pink-600'>
             Reach Us
       </button>
                    <img className="rounded-t-full rounded-s-full w-52 ms-auto"  src="../assest/news-20-310x270.jpg" alt="News" />
                </div>
            </Col>
        </Row>
        <ContactLanding/>
    </div>
  )
}

export default ServicesDivision