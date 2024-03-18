import React, { useEffect } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Component/LandingPage";
import "animate.css";
import Service from "./Component/Service";
import Project from "./Component/Project";
import Blogs from "./Component/Blogs";
import Contact from "./Component/Contact";
import AboutsUS from "./Component/AboutsUS";
import BlogDetails from "./Component/BlogDetails";
import Catogeries from "./Component/Catogeries";
import ServicesDivision from "./Component/ServicesDivision";
import TermsandPrivacy from "./Component/TermsandPrivacy";
import Testimonial from "./Component/Testimonial";
import Bottombar from "./NavBar/Bottombar";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
import Careers from "./Component/Careers";
import Condition from "./Component/Condition";
import CareersDivision from "./Component/CareersDivision";
import Payment from "./Component/Payment";
import SiteMap from "./Component/SiteMap";
import { lazy, Suspense } from "react";
import { Spinner } from "react-bootstrap";
const App = () => {
  const TRACKING_ID = "G-4W85X8YGL3";

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    // ReactGA.pageview(window.location.pathname + window.location.search)
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "Custom Title",
    });
  }, []);
  let Lazyservice = lazy(() => import("./Component/Service"));
  let LazyserviceDivision = lazy(() => import("./Component/ServicesDivision"));
  let Lazycareers = lazy(() => import("./Component/Careers"));
  let LazyProject = lazy(() => import("./Component/Project"));
  let LazyLanding = lazy(() => import("./Component/LandingPage"));
  let LazyAbout = lazy(() => import("./Component/AboutsUS"));
  let LazyBlogs = lazy(() => import("./Component/Blogs"));
  let LazyContact = lazy(() => import("./Component/Contact"));
  let LazyBlogDetails = lazy(() => import("./Component/BlogDetails"));
  let LazyCatageries = lazy(() => import("./Component/Catogeries"));
  let LazyCareersDivision = lazy(() => import("./Component/CareersDivision"));
  return (
    <div>
      <BrowserRouter>
        {/* <MainNavBar/> */}
        <Bottombar />
        <Suspense
          fallback={
            <div className="flex mx-auto w-fit h-[100vh] my-auto align-items-center">
              <Spinner animation="border" />
            </div>
          }
        >
          <Routes>
            {/* <Route path='/*' element={<LandingPage/>}></Route> */}
            <Route path="/service/*" element={<Lazyservice />} />
            {/* <Route path='/careers/*' element={<Careers/>}/> */}
            {/* <Route path='/portfolio/*' element={<Project/>}/> */}
            {/* <Route path='/blogs/*' element={<Blogs/>}/> */}
            {/* <Route path='/contact/*' element={<Contact/>}/> */}
            {/* <Route path='/about/*' element={<AboutsUS/>}/> */}
            {/* <Route path='/blogs/:id' element={<BlogDetails/>}/> */}
            <Route path="/condition" element={<Condition />} />
            {/* <Route path='/catogery/:catogery' element={<Catogeries/>}/> */}
            {/* <Route path='/service/:service' element={<ServicesDivision/>}/> */}
            {/* <Route path='/careers/:career' element={<CareersDivision/>}/> */}
            <Route path="/terms&condition" element={<TermsandPrivacy />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/payment" element={<Payment />}></Route>
            <Route path="/sitemap.xml" element={<SiteMap />} />

            <Route path="/*" element={<LazyLanding />}></Route>
            <Route path="/service/:service" element={<LazyserviceDivision />} />
            <Route path="/careers/*" element={<Lazycareers />} />
            <Route path="/portfolio/*" element={<LazyProject />} />
            <Route path="/about/*" element={<LazyAbout />} />
            <Route path="/blogs/*" element={<LazyBlogs />} />
            <Route path="/contact/*" element={<LazyContact />} />
            <Route path="/blogs/:id" element={<LazyBlogDetails />} />
            <Route path="/catogery/:catogery" element={<LazyCatageries />} />
            <Route path="/careers/:career" element={<LazyCareersDivision />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
