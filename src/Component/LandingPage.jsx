import React, { useEffect, useState,lazy,Suspense } from 'react'
import MiniNav from '../NavBar/MiniNav'
import LogoNav from '../NavBar/LogoNav'
import MainNav from '../NavBar/MainNav'
import 'animate.css';
import "../NavBar/nav.css"
import "../Component/home.css"
import HomeBanner from './HomeBanner';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Body1 from './Body1';
import Chooseus from './Chooseus';
import Body2Landing from './Body2Landing';
import ContactLanding from './ContactLanding';
import LandinBLog from './LandinBLog';
import Bottombar from '../NavBar/Bottombar';
import DarkNav from '../NavBar/DarkNav';
import { Helmet } from 'react-helmet';
const LandingPage = () => {
  let [anime,setanime]=useState("")
      useEffect(()=>{
        setanime("animate__fadeIn");
        window.scrollTo(0, 0);
        const element = document.querySelector('.durationani');
        element.style.setProperty('--animate-duration', '4s');
      },[])
      const LazyHomeBanner = lazy(() => import('./HomeBanner'));
  return (
    <section id="home" className={`${anime} animate__animated transi durationani `}>
       <Helmet>
  <title>Merida Tech Minds - Software Consulting</title>
  <meta name="description" content="Empowering businesses to thrive through innovative software solutions, effective digital marketing strategies, branding, and expert consulting services."/>
  <meta name='keywords' content='software solutions, digital marketing strategies, branding, consulting services'/>
  <link rel="canonical" href="https://meridatechminds.com" />
    </Helmet>
       
        <MiniNav/>
        {/* <LogoNav/> */}
        <MainNav/>
        <DarkNav/>
        {/* <MainNavBar/> */}
        <Suspense fallback={<div>Loading...</div>}>
                <LazyHomeBanner />
        </Suspense>
        {/* <HomeBanner/> */}
      <Body1></Body1>
       <Chooseus/>
       <Body2Landing/>
       <LandinBLog/>
       <ContactLanding/>
       {/* <Bottombar/> */}
      </section>
  )
}

export default LandingPage