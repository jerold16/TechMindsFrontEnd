import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import TitleBanner from './TitleBanner'
import { Col, Image, Row } from 'react-bootstrap'
import MainNav from '../NavBar/MainNav'
import LogoNav from '../NavBar/LogoNav'
import MiniNav from '../NavBar/MiniNav'
import ContactLanding from './ContactLanding'
import DarkNav from '../NavBar/DarkNav'
import { Helmet } from 'react-helmet'

const Catogeries = () => {
    let navigate =useNavigate();
    let {catogery}=useParams();
    let [anime,setanime]=useState("")
    let recentblogs=JSON.parse(sessionStorage.getItem("recentblog"))
    useEffect(()=>{
        setanime("animate__fadeIn");
        window.scrollTo(0, 0);
        const element = document.querySelector('.durationani');
        element.style.setProperty('--animate-duration', '2s');
       const timer= setTimeout(() => {
           setanime("") 
        }, 2000);
        return ()=>{
          clearInterval(timer)
        }
        // console.log(anime);
      },[catogery])
    let title = catogery[0].toUpperCase()+catogery.slice(1);
    let [datas,setdatas]=useState([])
    let [show,setshow] =useState(false)
    useEffect(()=>{
       const fetcategory=async ()=>{
       await axios.get(`https://backendapi.meridatechminds.com/api/datas/${catogery}/`)
        .then((response)=>{
            // console.log(response.data);
            setdatas(response.data);
            setshow(true)
            // window.location.reload()
        })
        .catch((err)=>{
            
            setdatas([])
        })
       }
         
       fetcategory()
    },[catogery])
    //  console.log(datas);
  return (
    <div className={`${anime} animate__animated transi durationani `} >
       <Helmet>
<title>Caregories</title>
<meta name="description" content="Categories of Blog in the Tech Minds"/>
<link rel="canonical" href={`https://meridatechminds.com/catogery/${catogery}`} />
</Helmet>
        <MiniNav/>
        {/* <LogoNav/> */}
        <MainNav/>
        <DarkNav/>
          <TitleBanner img={"../assest/banner13.jpeg"} data={title}/>
          <h2 className='h-20'></h2>
        <Row className='container justify-around mx-auto mb-20'>
        <Col lg={7}>
           {show && datas.length>0 ? 
            datas.map((data)=>{
                let date=""+data.created_at;
                  let months=["","January","February","March","April","May","June","July",
                "August","September","October","November","December"]
                  let year=date.slice(0,4)
                  let month=""+(months.slice(Number(date.slice(5,7)),Number(date.slice(5,7))+1))
                //   console.log(Number(date.slice(5,7))+1);
                  let dte=date.slice(8,10)
                return(
                    <div className='border-2 shadow rounded-3xl my-4 p-4'>
           <p className='rounded-s-3xl rounded-t-3xl bg-slate-100 text-clr w-fit p-2 capitalize'><img className='inline mx-3' src="../assest/e7b9b29c4fdd4d4ec28699064fe80204.png" alt="Profile" />
             {data.Category}</p>
             <p className='fontfam text-[18px] fw-bolder'>On <span className='text-slate-600'>
                               {month} {dte}, {year}</span> </p>
         <div className=''>   
         {/* <p className='h-fit w-fit p-2 px-4 text-3xl flex  justify-content-center align-items-center
          bg-slate-900 text-white rounded-s-3xl rounded-t-3xl m-3'>
           </p> */}
           <h1 className='text-2xl fontfam fw-bolder'
           >{data.Main_Title} </h1>
            <p className='text-slate-600'>
                {data.Paragraph1}
            </p>
        </div>
            {/* <img src={require("../../assest/news-25.jpg")} alt="" /> */}
           <Image className='mx-auto rounded-lg' src={data.img} alt={data.slug} ></Image>
       <button onClick={()=>navigate(`/blogs/${data.slug}`)}
             className='hover:text-violet-600 flex gap-3 text-xl my-8 transi fw-semibold'>
                Explore More  </button>
           </div>
                )
            }) : 
            <h1 className='h1 mx-auto'>Sorry no Data is present in this category Now!Check Other category.</h1>
           }       
            </Col>   
            <Col lg={4} className='mx-auto mt-5'>
                <div className='bg-slate-100 shadow my-4 rounded-s-3xl rounded-t-3xl p-4 mx-auto'>
                    <p className='text-xl text-center fw-semibold my-2'>Categories</p>
                    <hr />
                    <p onClick={()=>{
                        navigate(`/catogery/CloudComputing`)
                    }} className="hover:text-violet-600 cursor-pointer">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" height="17" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" 
                         class="inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> CloudComputing </p>
                    <hr />
                    <p onClick={()=>{
                        navigate(`/catogery/Internet_of_things`)
                    }} className="hover:text-violet-600 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" height="17" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" 
                         class="inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> Internet_of_things </p>
                    <hr />
                    <p onClick={()=>{
                        navigate(`/catogery/BlockChain`)
                    }} className="hover:text-violet-600 cursor-pointer">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" height="17" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" 
                         class="inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>BlockChain</p>
                    <hr />
                    <p onClick={()=>{
                        navigate(`/catogery/DigitalMarketing`)
                    }} className="hover:text-violet-600 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" height="17" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" 
                         class="inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> Digital Marketing </p>
                    <hr />
                    <p onClick={()=>{
                        navigate(`/catogery/Investment`)
                    }} className="hover:text-violet-600 cursor-pointer">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" height="17" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" 
                         class="inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>Investment </p>
                    <hr />
                    <p onClick={()=>{
                        navigate(`/catogery/management`)
                    }} className="hover:text-violet-600 cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" height="17" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" 
                         class="inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> Management </p>
                </div>
                <div className='bg-slate-100 shadow rounded-s-3xl rounded-t-3xl p-4 mx-auto'>
                <p className='text-xl text-center fw-semibold my-2'>Popular Post</p>
                <hr />
                {    //w-25 h-16 try this later
                    recentblogs!=null ?
                    recentblogs.map((rcblog)=>{
                        return(
                            <div id='post1' className='cursor-pointer my-4 flex gap-2'>
                    <img className='w-auto rounded h-16 bg-center '
                     src={`${rcblog.img}`} alt={rcblog.Main_Title} />
                    <div className='text-violet-700 text-lg w-[200px] mx-auto'> {rcblog.Category} 
                    <p onClick={()=>navigate(`/blogs/${rcblog.slug}`)}
                    className='text-slate-950 transi text-lg hover:text-violet-600'>
                       {rcblog.Main_Title}</p></div>
                </div>
                        )
                    }) : ""
                }  
     
                </div>
                {/* Giving Wings */}
                <div className='p-4 bg-violet-600 rounded-t-3xl my-4 rounded-s-3xl'>
                <p className='text-white text-3xl fontfam fw-bolder '>It's never too late or too early to get started</p>
                      <p className='text-white'>Get started now</p>
                      <button onClick={()=>navigate("/contact")} id='three-rounded' className='px-4 text-slate-50 hover:text-blue-950  hover:bg-slate-50 transi fw-semibold p-3 bg-pink-600'>
             Reach Us
       </button>
                    <img className="rounded-t-full rounded-s-full w-52 ms-auto"  src="../assest/news-20-310x270.jpg" alt="Person" />
                </div>
            </Col>
        </Row>
        <ContactLanding/>
    </div>
  )
}

export default Catogeries