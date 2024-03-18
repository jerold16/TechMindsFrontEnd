
import React from 'react'
import { useNavigate } from 'react-router'

const TitleBanner = (props) => {
    let navigate=useNavigate()
    let img=`url("${props.img}")`
    let bg={
      backgroundImage: 'url("../assest/website-devp.jpeg")',
    }
    bg.backgroundImage=img
  return (
    <div>
        <div id='head' className='position-relative transi'>
            <div id="servicetitle" style={bg}
             className='d-block' alt="" ></div>
             <div style={{backgroundColor :"rgba(0,0,0,0.5)"}} 
             className='position-absolute text-white text-3xl md:text-7xl fw-semibold
              left-0 top-0 w-[100%] h-[100%] ps-14 sm:ps-0
              flex align-items-center justify-center text-center fontfam'> {props.data}
             </div>
                <article
             className='position-absolute text-white text-xl fw-semibold left-0 top-0 w-[100%] h-[100%] flex align-items-end  justify-start p-5'>
              <div className='flex'> 
                <a onClick={()=>navigate("/")} className='cursor-pointer no-underline fontfam text-white hover:underline'>Home</a> 
                 <span className='flex align-items-start gap-2 fontfam mx-1'>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="15" height="25" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"
                  class="inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> {props.data} 
                 </span>
                 </div> 
</article>
        </div>
    </div>
  )
}
TitleBanner.defaultProps = {
  someProp: 'default value',
  anotherProp: 42,
  img:"/assest/service-title.jpg"
  // Set default values for your props here
};
export default TitleBanner