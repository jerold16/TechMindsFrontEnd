import React from 'react'
import { Link } from 'react-router-dom'

const Bottombar = () => {
  // <!--Start of Tawk.to Script-->
  
  // <!--End of Tawk.to Script-->
  return (
    <div className='position-fixed bottom-3 z-10'>
          <div className='flex justify-between'>
            <a href="https://wa.me/+918904599283" target='_blank' className=''>
                <img className='w-[70px] ms-4' src="../assest/whatsapp.png" alt="Whatsapp" />
                </a>
          </div>
    </div>
  )
}

export default Bottombar