import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import Slider from "react-slick";
import BeliveUs from "./BeliveUs";
import TitleBanner from "./TitleBanner";
import MiniNav from "../NavBar/MiniNav";
import LogoNav from "../NavBar/LogoNav";
import MainNav from "../NavBar/MainNav";
import ContactLanding from "./ContactLanding";
import DarkNav from "../NavBar/DarkNav";
import { Helmet } from "react-helmet";

const AboutsUS = () => {
  let navigate = useNavigate();
  let [tanime, settanime] = useState("");
  let [boolean, setboolean] = useState(true);
  useEffect(() => {
    settanime("animate__fadeIn");
    window.scrollTo(0, 0);
    const element = document.querySelector(".durationanit");
    element.style.setProperty("--animate-duration", "4s");
  }, []);
  function bgchange(id) {
    let change = document.getElementById("bgchange");
    console.log(boolean);
    if (id == 1 && boolean) {
      try {
        change.style.backgroundColor = "white";
        change.style.color = "black";
        change.style.fontWeight = "700";
      } catch {}
    }
  }
  let content = [
    {
      id: 1,
      title: "EdTech",
      content:
        "Elevate your institution's capabilities through our tailored technology solutions designed to meet the evolving needs of the educational landscape.",
      point: [
        "Empower the Future of Education.",
        "Custom Software Development to enhance learning experiences.",
      ],
    },
    {
      id: 2,
      title: "Real Estate",
      content:
        "Revolutionize the real estate landscape with our bespoke software solutions, offering advanced tools for property management, streamlined transactions, and data-driven decision-making.",
      point: ["CRM Integrations", "Innovative Proptech Solutions"],
    },
    {
      id: 3,
      title: "E-Commerce",
      content:
        "Delivering robust platforms that optimize user experience, enhance security, and drive online sales.",
      point: [
        "Scalable e-commerce platforms.",
        "Fuel the growth of your online retail business",
      ],
    },
    {
      id: 4,
      title: "FMCGs",
      content:
        "Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.",
      point: [
        "Boost efficiency and agility",
        "Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.",
      ],
    },
    {
      id: 5,
      title: "Business",
      content:
        "Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.",
      point: [
        "Boost efficiency and agility",
        "Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.",
      ],
    },
    {
      id: 6,
      title: "Health Care",
      content:
        "Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.",
      point: [
        "Boost efficiency and agility",
        "Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.",
      ],
    },
    {
      id: 7,
      title: "Electronics",
      content:
        "Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.",
      point: [
        "Boost efficiency and agility",
        "Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.",
      ],
    },
    {
      id: 8,
      title: "Hospitality",
      content:
        "Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.",
      point: [
        "Boost efficiency and agility",
        "Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.",
      ],
    },
    {
      id: 9,
      title: "Manufaturing",
      content:
        "Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.",
      point: [
        "Boost efficiency and agility",
        "Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.",
      ],
    },
    {
      id: 10,
      title: "Telecom",
      content:
        "Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.",
      point: [
        "Boost efficiency and agility",
        "Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.",
      ],
    },
    {
      id: 11,
      title: "Mining",
      content:
        "Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.",
      point: [
        "Boost efficiency and agility",
        "Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.",
      ],
    },
  ];
  let cardcontent = [
    {
      id: 1,
      heading: "Extensive Knowledge",
      content:
        "Benifits from our wealth of expertise, ensuring informed desicions and Solutions tailored to your unique requirements.",
    },
    {
      id: 2,
      heading: "Risk Management",
      content:
        "Trust our robust risk management strategies, safeguarding your ventures and providing a secure foundation for success.",
    },
    {
      id: 3,
      heading: "Team Apporach",
      content:
        "Experience synergy as our collaborative team works seamlessly, bringing diverse skills together to address your challenges comprehensively.",
    },
    {
      id: 4,
      heading: "Advanced Tech",
      content:
        "Stay ahead with cutting-edge technology at your fingertips, empowering your endeavors with the latest innovations and efficiencies.",
    },
    {
      id: 5,
      heading: "On-Time Delivery",
      content:
        "Count on us for punctual project completion, meeting deadlines with precision and ensuring your goals are achieved on schedule.",
    },
    {
      id: 6,
      heading: "Customized Advice",
      content:
        "Receive personalized guidance that aligns with your goals, as our expert advisors tailor advice to suit your specific business needs.",
    },
  ];
  let [title, settitle] = useState(content[0].title);
  let [text, settext] = useState(content[0].content);
  let [points, setpoints] = useState(content[0].point);
  let [anime, setanime] = useState("");
  let changecontent = (id) => {
    setboolean(false);
    // bgchange(id)
    console.log(boolean);
    content.forEach((cont) => {
      if (cont.id === id) {
        settitle(cont.title);
        settext(cont.content);
        setpoints(cont.point);
        setanime("animate__fadeIn");
        const element = document.querySelector(".durationani");
        element.style.setProperty("--animate-duration", "2s");
        setTimeout(() => {
          setanime("");
        }, 2500);
      }
    });
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`${tanime} animate__animated transi durationanit `}>
      <Helmet>
        <title>About | Merida Tech Minds</title>
        <meta
          name="description"
          content="Merida Tech Minds - the leading software development and digital marketing agency in bengaluru with a team experience of over 2 decades in the industry."
        />
        <meta
          name="keywords"
          content="software development, digital marketing agency, branding, consulting services, software development and digital marketing agency in bengaluru, digital marketing agency in bengaluru"
        />
        <link rel="canonical" href="https://meridatechminds.com/about" />
      </Helmet>
      <MiniNav />
      {/* <LogoNav/> */}
      <MainNav />
      <DarkNav />
      <TitleBanner img="../assest/banner15.jpeg" data={"About Company"} />
      {/* About us starts */}
      <div className="h-20"></div>
      <Row className="container mx-auto my-20">
        <Col lg={6}>
          <p className="text-violet-600 fw-semibold">ABOUT US</p>
          <h1 className=" text-3xl md:text-5xl fontfam fw-semibold text-slate-900 xl:w-4/5">
            Your roadmap to Business Success
          </h1>
          <p className="text-slate-900 text-xl fontfam fw-semibold my-4">
            With 2 decades of experience
          </p>
          <p className="text-slate-500 mulish text-lg xl:w-3/5">
            We specialise in guiding businesses towards achieving their goals,
            whether it be through developing cutting-edge software solutions,
            implementing effective digital marketing strategies, creating
            compelling branding experiences, or providing expert advice and
            consulting services.
          </p>
          {/* <button id='three-rounded' onClick={()=>navigate("/ourteam")} className='px-4 my-4 btn-change text-white fw-semibold p-3 bg-violet-700'>
                   Our History
       </button> */}
        </Col>
        <Col lg={6} className="">
          {/* <p  className='text-slate-500 text-lg sm:w-3/5'>Blinded by desire, that they cannot foresee the pain and trouble 
                    that are bounds to ensure and blame belongs to those who fail.</p> */}
          <div className="flex">
            <img
              className="w-8 h-8"
              src="../assest/check-mark.png"
              alt="Check_Mark"
            />
            <p className="ms-4 text-2xl fw-semibold fontfam text-slate-900">
              Our Mission
              <span className="text-slate-500 mulish mt-2 fw-normal text-lg sm:w-3/5 block">
                Our Mission is to harness the power of technology and creativity
                to elevate your brand, optimize operations, and propel your
                business into a thriving future.
              </span>
            </p>
          </div>
          <div className="flex">
            <img
              className="w-8 h-8"
              src="../assest/check-mark.png"
              alt="Check_Mark"
            />
            <p className="ms-4 text-2xl fontfam fw-semibold flex flex-col text-slate-900">
              Our Vision
              <span className="text-slate-500 mulish mt-2 fw-normal text-lg sm:w-3/5 block">
                Our Vision is to create a future where businesses thrive in the
                digital landscape, achieving unparalleled growth and innovation.
              </span>
              {/* <span className='text-slate-500 mt-2 fw-normal text-lg sm:w-3/5 flex align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> Tend to repeat predefined
                        </span>
                        <span className='text-slate-500 mt-2 fw-normal text-lg sm:w-3/5 flex align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> Tend to repeat predefined
                        </span>
                        <span className='text-slate-500 mt-2 fw-normal text-lg sm:w-3/5 flex align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> Tend to repeat predefined
                        </span> */}
            </p>
          </div>
        </Col>
      </Row>
      {/* Why choose us */}
      <div className="bg-slate-800 py-10">
        <div className="container text-center">
          <p className="text-pink-700 fw-semibold">WHY CHOOSE US</p>
          <p className="text-white fontfam text-5xl fw-semibold ">
            Reason for Choosee Merida
          </p>
          <Slider {...settings} className="mt-5">
            {cardcontent.map((con, index) => {
              return (
                <div
                  className="p-5 px-4 h-[300px] lg:h-[340px] rounded-t-3xl rounded-s-3xl bg-slate-700"
                  style={{
                    width: "18rem",
                    borderRadius: "20px,20px, 20px,0px",
                    backgroundColor: "rgb(51,60,74)",
                  }}
                >
                  <div className="">
                    <div className="">
                      <div
                        id="three-rounded"
                        className="w-14 float-right h-14 flex align-items-center justify-center bg-slate-800"
                      >
                        <p className="text-white text-2xl pt-2"> {con.id}</p>
                      </div>
                      <img
                        className="w-10 h-10"
                        src="../assest/zigzag.png"                        alt="ZigZag"
                      />

                      <div className="my-4 text-2xl text-white text-start">
                        {con.heading}
                      </div>
                    </div>

                    <div className="text-white mulish text-start xl:w-10/12">
                      {con.content}
                    </div>
                  </div>
                  {/* Card */}
                </div>
              );
            })}
          </Slider>
          <p className="h-10"></p>{" "}
        </div>
      </div>
      {/* Skills */}
      <Row className="container my-5 mx-auto">
        <Col lg={6}>
          <div className="">
            <img
              className="d-block"
              src="../assest/skills-1.jpg"
              alt="Meeting-1"
            />
            <img
              className="rounded-t-3xl rounded-s-3xl mt-5 lg:relative  left-64 bottom-56"
              src="../assest/skills-2.jpg"
              alt="Meeting-2"
            />
          </div>
        </Col>
        <Col lg={6} className="">
          <p className="text-violet-700 uppercase fw-semibold"> Why us </p>
          <h2 className="fw-semibold fontfam md:text-5xl text-3xl">
            Reuirement Gathering Process Flow
          </h2>
          <div className="flex">
            <img
              className="w-8 h-8 me-2"
              src="../assest/check-mark.png"
              alt="Check_Mark"
            />
            <div className="">
              <p className="ms-2 text-2xl fontfam fw-semibold w-4/5 text-slate-900">
                Connecting with you
              </p>
              <p className="text-slate-600 ms-2 mulish text-lg fw-medium">
              We prioritize cultivating enduring partnerships to guarantee sustained support for your business over the long term.
              </p>{" "}
            </div>
          </div>

          <div className="flex">
            <img
              className="w-8 h-8 me-2"
              src="../assest/check-mark.png"
              alt="Check_Mark"
            />
            <div className="">
              <p className="ms-2 text-2xl fontfam fw-semibold w-4/5 text-slate-900">
                Planning
              </p>
              <p className="text-slate-600 mulish ms-2 text-lg fw-medium">
              Upon grasping your key requirements, our team promptly initiates focused strategy development tailored to your specifications.
              </p>{" "}
            </div>
          </div>
          <div className="flex">
            <img
              className="w-8 h-8 me-2"
              src="../assest/check-mark.png"
              alt="Check_Mark"
            />
            <div className="">
              <p className="ms-2 text-2xl fontfam fw-semibold w-4/5 text-slate-900">
              Execution
              </p>
              <p className="text-slate-600 mulish ms-2 text-lg fw-medium">After crafting our strategy, we provide a transparent overview of our process. and how our service adeptly addresses challenges.
              </p>{" "}
            </div>
          </div>
        </Col>
      </Row>
      {/* Skills ends */}
      {/* We work for starts */}
      <section id="industry"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        className="container indsbg rounded-3xl my-10"
      >
        <Row className="d-flex flex-column pt-5 flex-md-row justify-center px-10">
          <Col
            lg={6}
            style={{ background: "rgb(46,53,64)", opacity: "0.9" }}
            className="px-5 py-10 rounded-ss-3xl"
          >
            <div>
              <p className="fw-bold text-pink-700 fontfam">WE WORK FOR</p>
              <p className="text-white fw-bold text-3xl md:text-5xl mb-10 fontfam">
                Industries We Served
              </p>
              <div className="scrolling-list-container overflow-y-scroll h-[370px]">
                {content.map((con, index) => {
                  return (
                    <div className="w-10/12">
                      <button
                        id="bgchange"
                        onClick={() => {
                          changecontent(con.id);
                        }}
                        className={`w-100
                                     rounded-t-3xl p-2 pt-3 ${con.title==title ? "rounded-s-xl bg-slate-50 font-semibold text-slate-950" :""}
                                     my-2 border-bottom text-slate-50 text-start `}
                      >
                        <p className="text-lg md:text-xl mulish">
                          {con.title}
                        </p>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            id="anime"
            className={`bg-white durationani  h-fit mt-5  mt-lg-auto rounded-tr-3xl p-4 d-flex justify-center`}
          >
            <div className={`w-11/12 durationani animate__animated ${anime}`}>
              <p className="text-2xl font-sans fw-semibold my-3">{title}</p>
              <hr />
              <p className="pt-2 text-lg mulish fw-medium text-slate-700">{text}</p>
              {points.map((point) => {
                return (
                  <p className="flex gap-3">
                    <img
                      className="w-8 h-8 align-item-center"
                      src="../assest/arrowicon.png"
                      alt="ArrowIcon"
                    />
                    <p className="">{point}</p>
                  </p>
                );
              })}
              {/* <button id='three-rounded' onClick={()=>{navigate(`/service/${title}`)}} className='px-4  btn-change text-white fw-semibold p-3 bg-violet-700'>
                   Explore More
       </button> */}
            </div>
          </Col>
        </Row>
      </section>
      {/* ends */}

      {/* <OurTeam/> */}
      <BeliveUs />
      <ContactLanding />
    </div>
  );
};

export default AboutsUS;
