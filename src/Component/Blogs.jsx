import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import BeliveUs from './BeliveUs'
import Pagination from './Pagination'
import TitleBanner from './TitleBanner'
import axios from 'axios'
import MiniNav from '../NavBar/MiniNav'
import LogoNav from '../NavBar/LogoNav'
import MainNav from '../NavBar/MainNav'
import ContactLanding from './ContactLanding'
import DarkNav from '../NavBar/DarkNav'
import { Helmet } from 'react-helmet'

const Blogs = () => {
    let [anime,setanime]=useState("")
      useEffect(()=>{
        setanime("animate__fadeIn");
        window.scrollTo(0, 0);
        const element = document.querySelector('.durationani');
        element.style.setProperty('--animate-duration', '4s');
      },[])
     
      let [webblogs,setblogs]=useState([])
      let [boolean,setboolean]=useState(false)
      useEffect(()=>{
            const fetch=async  ()=>{
             await axios.get("https://backendapi.meridatechminds.com/api/blog/")
             .then((response)=>{
                 console.log(response.data);
                 setblogs(response.data);
                 let recentdata=response.data.slice(0,3)
                 sessionStorage.setItem("recentblog",JSON.stringify(recentdata))
             })
             .catch((err)=>{
                 console.log(err);
             })
             if(webblogs.length>0){
              setboolean(true)
            }
            } 
            fetch()
      },[])
  return (
    <div className={`${anime} animate__animated transi durationani `}>
        <Helmet>
  <title>Insights & Inspiration | Merida Tech Minds</title>
  <meta name="description" content=" Delve into a wealth of knowledge, inspiration, and expert perspectives on our blog. Uncover insightful articles, industry trends, and thought-provoking content that fuels your curiosity."/>
  <meta name='keywords' content='blog, industry trends, insightful articles'/>
  <link rel="canonical" href="https://meridatechminds.com/blogs" />
</Helmet>
        <MiniNav/>
        {/* <LogoNav/> */}
        <MainNav/>
        <DarkNav/>
        <TitleBanner img={"../assest/banner10.jpeg"} data={"Blog"}/>
        {/* Grid View */}
        <h1 className='h-20'></h1>
         <Pagination data={webblogs.reverse()}/> 
        
        
        {/* Belive us */}

       <BeliveUs/>
       {/*  */}
       <ContactLanding/>
    </div>
  )
}

export default Blogs