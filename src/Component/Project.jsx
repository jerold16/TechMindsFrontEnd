
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import BeliveUs from './BeliveUs'
import { Image } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import TitleBanner from './TitleBanner'
import MiniNav from '../NavBar/MiniNav'
import LogoNav from '../NavBar/LogoNav'
import MainNav from '../NavBar/MainNav'
import ContactLanding from './ContactLanding'
import DarkNav from '../NavBar/DarkNav'
import { porfolio } from './Data'
import { Helmet } from 'react-helmet'

const Project = () => {
    let navigate=useNavigate()
    
     let totalarry=porfolio
    let [arryobj,setarray]=useState(totalarry)
     let arrange=(category)=>{
         let newarry=totalarry.filter((obj)=>{
            return category==obj.category;
         })
        setarray(newarry)
     }
     const [itemOffset, setItemOffset] = useState(0);
    const [currentItems,setcurrentItems]=useState([]);
    const [pageCount,setPageCount] =useState(0);
    const itemsPerPage=6;
    let [anime,setanime]=useState("")
    useEffect(()=>{
        const endOffset = itemOffset + itemsPerPage;
        setcurrentItems(arryobj.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(arryobj.length / itemsPerPage));
        console.log("hellow");
    },[arryobj,itemOffset])
    useEffect(()=>{
        setanime("animate__fadeIn");
        window.scrollTo(0,0);
        const element = document.querySelector('.durationani');
        element.style.setProperty('--animate-duration', '4s');
    },[])
    
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % arryobj.length;
      setItemOffset(newOffset);
      window.scroll(0,0)
    };
  return (
    <div className={`${anime} animate__animated transi durationani `}>
        <Helmet>
  <title>Showcasing Creative Excellence | Merida Tech Minds</title>
  <meta name="description" content=" Discover a world of unparalleled creativity and innovation as we curate a showcase of creative excellence."/>
  <meta name='keywords' content='creativity, innovation'/>
  <link rel="canonical" href="https://meridatechminds.com/portfolio" />
</Helmet>
        <MiniNav/>
        {/* <LogoNav/> */}
        <MainNav/>
        <DarkNav/>
        <TitleBanner img={"../assest/banner11.jpeg"} data={"Portfolio"}/>
        <p className='h-20'></p>
           <h1 className='d-none'>Check out the Portfolio</h1>
         <div className='container mulish fw-bolder text-lg flex flex-wrap justify-around mx-auto'>
            <p onClick={()=>setarray(totalarry)} className='cursor-pointer mx-1 text-salte-900'>View All</p>
            <p onClick={()=>arrange("Mobile App")} className='cursor-pointer mx-1 text-salte-900' >Mobile App</p>
            <p onClick={()=>arrange("Website")} className='cursor-pointer mx-1 text-salte-900'>Website</p>
            <p onClick={()=>arrange("Web App")} className='cursor-pointer mx-1 text-salte-900'>Web App</p>
            <p onClick={()=>arrange("Logo")} className='cursor-pointer mx-1 text-salte-900'>Logo</p>
            <p onClick={()=>arrange("E-Commerce")} className='cursor-pointer mx-1 text-salte-900'>E-Commerce</p>
         </div>
        <>
         <div className={`flex ${anime} animate__animated transi durationani  flex-wrap mx-auto mt-3  container-lg gap-3 justify-between`}>
                   {
                    currentItems.map((obj)=>{
                    //   console.log(obj.photo);
                        return(
                <div className='position-relative mx-auto transi w-[600px] h-auto'>
                  
                    {/* <img  className='d-block w-[100%] rounded-3xl'
                     src={require(`../assest/project-17-370x470.jpg`)} alt="" /> */}
                     <Image  className='d-block w-[100%] rounded-3xl' 
                     src={obj.photo} alt='missing'>

                     </Image>
                    <div  id='opchi'
                    className='position-absolute rounded-3xl d-flex align-items-end transi  p-3 md:p-5 justify-center top-0 left-0 w-[100%] h-[100%]'>
                        <div   
                        className='bg-slate-100 py-3 rounded-tr-3xl xl:w-3/5 rounded-s-xl w-full mp-3 px-4'>
                        <p className='text-violet-600'>{obj.category}</p>
                        <button onClick={()=>{
                            navigate(`/service/${obj.route}`)
                        }} className= 'lg:text-xl text-slate-900 transi text-start py-2 hover:text-violet-600'>
                            {obj.title}</button>
                        </div>
                    </div>
                   </div>
                         
                        )
                    })
                   }
                   </div>
                  <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<<"
          containerClassName='pagination'
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
        />  
    </>  
        {/* Belive us */}
        <BeliveUs/>
{/* Bielive us ends */}
<ContactLanding/>
    </div>
  )
}

export default Project