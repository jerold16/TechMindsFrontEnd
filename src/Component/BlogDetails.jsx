import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import TitleBanner from './TitleBanner'
import { Col, Image, Row } from 'react-bootstrap'
import axios from 'axios'
import MiniNav from '../NavBar/MiniNav'
import LogoNav from '../NavBar/LogoNav'
import MainNav from '../NavBar/MainNav'
import ContactLanding from './ContactLanding'
import DarkNav from '../NavBar/DarkNav'
import { Helmet } from 'react-helmet'
const BlogDetails = () => {
    const {id} = useParams();
    let navigate=useNavigate();
    let link=window.location.href
    // console.log(link.indexOf("blogs/")+7);
    // console.log(link.slice(link.indexOf("blogs/")+6));
    let id2=link.slice(link.indexOf("blogs/")+6);
    console.log(id2);
    let recentblogs=JSON.parse(sessionStorage.getItem("recentblog"))
    let [anime,setanime]=useState("")
    let [boolean, setboolean] =useState(false)
    let [blog,setblog]=useState({})  
    let [poiints,setpoints]=useState(["No points updated"])
    useEffect(()=>{
        setanime("animate__fadeIn");
        window.scrollTo(0, 0);
        const element = document.querySelector('.durationani');
        element.style.setProperty('--animate-duration','4s');
        const fetch = async ()=>{
        await axios.get(`https://backendapi.meridatechminds.com/api/data/${id2}`)
        .then((response)=>{
            setblog(response.data);
            setboolean(true);
            setpoints(response.data.points);
        })
        .catch((err)=>{
            console.log("hellow");
              console.log(err);
        })
        }
        fetch()
      },[id])
      console.log(blog);
      let p1=""+blog.Paragraph1;
      let po1=p1.slice(0,p1.indexOf(".")+1)
      let po2=p1.slice(p1.indexOf(".")+1)
      let date=""+blog.created_at;
      let months=["","January","February","March","April","May","June","July",
      "August","September","October","November","December"]
      let year=date.slice(0,4)
      let month=""+(months.slice(Number(date.slice(5,7)),Number(date.slice(5,7))+1))
      console.log(Number(date.slice(5,7))+1);
      let dte=date.slice(8,10)
      let [name,setname]=useState("")
      let [email,setemail]=useState("")
      let [comment,setcomment]=useState("")
      let coment=async ()=>{
        let obj={name,email,comment}
        await axios.post(`https://backendapi.meridatechminds.com/api/comments`,obj)
        .then(()=>{
            alert("comment has been added")
        })
        .catch((err)=>{
            console.log(err);
        })
      }
  return (
    <div className={`${anime} animate__animated transi durationani`}>
      <Helmet>
  <title> {`${blog.Main_Title}`} </title>
  <meta name="description" content="Merida Tech Minds - the leading software development and digital marketing agency in bengaluru with a team experience of over 2 decades in the industry."/>
  <meta name='keywords' content='software development, digital marketing agency, branding, consulting services, software development and digital marketing agency in bengaluru, digital marketing agency in bengaluru'/>
  <link rel="canonical" href={`https://meridatechminds.com/blogs/${id}`} />
</Helmet>
      <MiniNav/>
        {/* <LogoNav/> */}
        <MainNav/>
        <DarkNav/>
          <TitleBanner img={blog.img} data={blog.Main_Title}/>
         
        <h2 className='h-20'></h2>
        <Row className='container justify-around mx-auto mb-20'>
            <Col lg={7}>
            <p className='rounded-s-3xl rounded-t-3xl bg-slate-100 text-clr w-fit p-2 capitalize'>
                <img className='inline mx-3' src="../assest/e7b9b29c4fdd4d4ec28699064fe80204.png" alt="Profile" /> 
                {blog.Category} </p>
            
            <p className='fontfam text-[18px] fw-bolder'>On <span className='text-slate-600'>
             {month} {dte}, {year}</span>
            </p>
            <h1 className='text-3xl fontfam fw-bolder'>
            {blog.Main_Title}
            </h1>
         <div className='flex align-items-center'>   
         {/* <p className='h-fit w-fit p-2 px-4 text-3xl flex  justify-content-center align-items-center
          bg-slate-900 text-white rounded-s-3xl rounded-t-3xl m-3'>
            {boolean && blog.Main_Title[0]}</p> */}
           
           
        </div>
            <p className='text-slate-600'>{po1+" "+ po2}
            </p>
            <img className='rounded-3xl' src={blog.img} alt={blog.Main_Title} />
            
            {/* <p className='text-xl md:text-4xl fontfam fw-bolder my-10'>{blog.Sub_Title} </p> */}
            <p className='text-slate-600 my-4 mulish'>{blog.Paragraph2} 
            </p>
            
            {
                blog.Points_Heading!=null ? <p className='text-black fontfam fw-bolder text-xl '>
                {blog.Points_Heading}
             </p> : ""  
            }
            
             
             {
                poiints.length>1
                ? <div className='flex flex-wrap'>
                {
                     poiints.map((data,index)=>{
                        return(
                <p className='text-slate-600 w-full sm:w-1/2 flex gap-2'> 
                 <svg className='' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
                <p className='w-10/12'>{data.point} </p> </p>                          
                        )
                    })
                }

            </div> :" "
             }

            
            {/* highlights */}
           {
            blog.Highlight!=undefined && blog.Highlight!=null
            ?
            <div className='p-4 rounded-t-3xl flex rounded-s-3xl bg-slate-800'>
            <img className='w-16 h-16 d-none d-sm-block' src="../assest/quote(1).png" alt="Quote" />
            <div className='p-4 text-white text-xl'>
                  <p className='fontfam fw-bold'>
                  {blog.Highlight}</p>
                  
            </div>
        </div> : ""
           }


            <button onClick={()=>{
                navigate("/blogs")
            }} className='hover:text-violet-600 flex gap-3 mx-auto my-16 fw-semibold'>
                <img src="../assest/navicon.png" alt="Navicon" />
                Back to blog post</button>
                {/* Comments form */}
                <form action="" className=''>
                    <p className='text-2xl md:text-4xl'>Leave A Comment</p>
                    <div className='flex felx-col flex-lg-row'>
                    <input required  type="text" value={name} onChange={(e)=>setname(e.target.value)} className='p-3 w-full text-slate-500 rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-violet-600 ' placeholder='Name ' />
                    <input required  type="email" value={email} onChange={(e)=>setemail(e.target.value)} className='p-3 w-full text-slate-500 rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-violet-600 ' placeholder='Email' />

                    </div>
                    <textarea value={comment} onChange={(e)=>setcomment(e.target.value)} name="Message" placeholder='Message'
                        className='p-3  text-slate-500 w-full  rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-violet-600 '
                         id="" cols="20" rows="5">

                        </textarea>
                        <button onClick={()=>coment()} id='three-rounded'
                         className='px-4 text-slate-50 hover:bg-pink-600 transi fw-semibold p-3 bg-violet-600'>
            Post Comment
       </button>
        </form>
            </Col>   
            <Col lg={4} className='mx-auto mt-5'>
                <div className='bg-slate-100 shadow my-4 rounded-s-3xl rounded-t-3xl p-4 mx-auto'>
                    <p className='text-xl text-center fw-semibold my-2'>Categories</p>
                    <hr />
                    <p onClick={()=>{
                        navigate(`/catogery/BlockChain`)
                    }} className="hover:text-violet-600 cursor-pointer">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" height="17" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" 
                         class="inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> BlockChain </p>
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
                        navigate(`/catogery/CloudComputing`)
                    }} className="hover:text-violet-600 cursor-pointer">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" height="17" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" 
                         class="inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>CloudComputing </p>
                    <hr />
                    <p onClick={()=>{
                        navigate(`/catogery/Internet_of_things`)
                    }} className="hover:text-violet-600 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" height="17" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" 
                         class="inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>Internet_of_things </p>
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
                {
                    recentblogs!=null ? 
                    recentblogs.map((rcblog)=>{
                        return(
                            <div id='post1' className='cursor-pointer my-4 flex gap-2'>
                    <img className='w-auto h-16 bg-center '
                     src={`${rcblog.img}`} alt={rcblog.slug} />
                    <div className='text-violet-700 text-lg w-[200px] mx-auto'> {rcblog.Category} 
                    <p onClick={()=>navigate(`/blogs/${rcblog.slug}`)}
                    className='text-slate-950 transi text-lg hover:text-violet-600'>
                       {rcblog.Main_Title}</p></div>
                </div>
                        )
                    }) : " "
                }           
                    
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

export default BlogDetails