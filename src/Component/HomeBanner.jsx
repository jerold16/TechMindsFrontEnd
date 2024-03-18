import React from "react";
import { Carousel, Image } from "react-bootstrap";
import "./home.css";
import { useNavigate } from "react-router";
const HomeBanner = () => {
  let navigate = useNavigate();
  let bannercontent = [
    {
      id: "crsimg",
      heading: "Powering",
      headingstyle:"text-3xl md:text-6xl text-start  fontfam xl:text-7xl fw-bolder",
      span: " growth through ",
      aftrspan: "Technology",
      content: `Leveraging innovative solutions to drive business forward, promoting efficiency,
      scalability, and sustained growth.`,
      contentstyle:"text-lg ms-3 xl:w-3/5 mulish md:text-xl text-start",
      bg: {backgroundColor:"rgb(129,144,187)"},
    },
    {
      id: "crsimg2",
      headingstyle:"text-2xl text-black text-start fontfam md:text-6xl w-11/12 xl:text-7xl fw-bold",
      heading: "Transforming brands",
      span: "one pixel ",
      aftrspan: " at a time  ",
      contentstyle:'text-lg mulish text-black ms-3 xl:w-3/5 text-start inline md:text-xl',
      content: `Crafting visually stunning and impactful brand transformation by refining every details.`,
      bg: {backgroundColor:"rgb(223,143,4)"},
    },
    {
      id: "crsimg3",
      heading: "Ignite your ",
      headingstyle:"text-2xl fontfam md:text-6xl xl:text-7xl text-start fw-bolder",
      span: " business with ",
      aftrspan: "our expertise ",
      contentstyle: "text-lg ms-3 mulish md:text-xl xl:w-3/5 text-start",
      content: `Our expertise will navigate you towards success in the ever-evolving 
      digital landscape.`,
      bg: {backgroundColor:"rgb(194,9,26)"},
    },
    {
      id: "crsimg4",
      headingstyle:"text-3xl text-start fontfam md:text-5xl xl:text-6xl fw-bold",
      heading: "Driving growth through ",
      span: "data-driven strategies",
      aftrspan: "",
      contentstyle:"text-lg ms-3 xl:w-3/5 mulish md:text-xl text-start",
      content: `Our data-driven strategies fuel business towards robust growth by hamessing the power of
      actionable insights.`,
      bg: {backgroundColor:"rgb(243,52,62)",}
    },
  ];
  return (
    <div>
      <Carousel fade className="z-0">
        {bannercontent.map((content) => {
          return (
            <Carousel.Item key={content.id} id={`${content.id}`}>
              <Carousel.Caption>
                <div className="md:w-3/5 lg:w-1/2  text-white">
                  <h1 className={`${content.headingstyle}`}>
                    {content.heading} <span className={`${content.id=="crsimg2" ? "" :"block" }`}>{content.span}</span>{" "}
                    {content.aftrspan}{" "}
                  </h1>
                  <div className="flex">
                    <div
                      id="three-rounded"
                      style={content.bg}
                      className="w-max d-none d-xl-block h-max p-3 bg-pink-500"
                    >
                      <img
                        className="w-8 h-8"
                        src={require('../assest/chat (1).png')}
                        alt="chat"
                      />
                    </div>
                    <p className={`${content.contentstyle}`}>
                      {content.content}
                    </p>
                  </div>
                  <button
                    id="three-rounded"
                    onClick={() => navigate("/contact")}
                    className="fs-5 mulish btn-change d-none d-md-block fw-semibold h-14 w-44 bg-violet-700"
                  >
                    Reach Us
                  </button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
        
      </Carousel>

      <p className="h-10"></p>
      {/* Adout us */}
      <div
        id="experiencepage"
        className="my-3 container d-flex flex-col flex-lg-row"
      >
        <div id="experience" className="lg:w-1/2 rounded-full mx-auto my-2">
          <Image
            className="w-9/12 mx-auto"
            alt="Road Page"
            src={`../assest/RoadMapToBusiness.webp`}
          ></Image>
        </div>
        <div id="aboutus" className="lg:w-1/2 fontfam">
          <h2 className="fs-5 blclr fw-semibold">About us</h2>
          <p className="fw-semibold w-4/5 text-xl lg:text-5xl fontfam line display-5 ">
            Your roadmap to business success.
          </p>
          <p className="fs-5 gap-2 d-flex align-items-center fw-bold ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=""
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
            Software Consulting{" "}
          </p>
          <p className="fs-5 d-flex gap-2 align-items-center fw-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=""
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>{" "}
            Digital Marketing
          </p>
          <p className="fs-5 d-flex gap-2 align-items-center fw-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=""
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>{" "}
            Branding
          </p>
          <p className="fs-5 d-flex gap-2 align-items-center fw-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=""
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>{" "}
            Business Consulting
          </p>

          <p className="text-lg mulish text-slate-500">
            We specialise in guiding businesses towards achieving their goals,
            whether it be through developing cutting-edge software solutions,
            implementing effective digital marketing strategies, creating
            compelling branding experiences, or providing expert advice and
            consulting services.
          </p>

          <button
            id="three-rounded"
            onClick={() => navigate("/about")}
            className="fx-4 text-white btn-change d-none d-md-block fw-semibold h-14 w-48 bg-violet-700"
          >
            More About Us
          </button>
        </div>
      </div>
      {/* About ending */}
    </div>
  );
};

export default HomeBanner;
