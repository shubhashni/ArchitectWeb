import React, {useEffect, useRef, useState} from "react";
import Button from "./button.js";
import MButton from "./MobileButton/MButton";

import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/appcontext.js";
// import "./homeheader.scss";

// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import ScrollToPlugin from "gsap/ScrollToPlugin";

const HomeHeader = () => {
  const { isMobile,setVid } = useAppContext();
 const [url, seturl] = useState("")
 const [width, setWidth] = React.useState(window.innerWidth);

  const el = useRef();
  // const vidContainer = useRef();
  const vidRef = useRef();
  // const h2wrap = useRef();
  // const pintl = useRef();
  useEffect(() => {
    setWidth(window.innerWidth)
    const handleWindowResize = () => {
     if( window.innerWidth > 500){
       setWidth(700)
     } 
     else if(window.innerWidth < 500 || window.innerWidth === 500){
      setWidth(400)
     }
    }
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
useEffect(()=>{

    el.current.style.transform="none"
    if(isMobile && width < 501){
      seturl("/assets/video/all-mobile1.m4v")
      vidRef.current.load()
      vidRef.current.onloadeddata = (e) => {
  //  console.log("vidloaded")
      setVid("vid");
   vidRef.current.play()
};
      // console.log(width)
    }
    else {
      seturl("/assets/video/allLow1.m4v")
      vidRef.current.load()
 vidRef.current.onloadeddata = (e) => {
  //  console.log("vidloaded")
   setVid("vid");
   vidRef.current.play()
};
    }
  
},[isMobile, width])
// useEffect(()=>{
//  vidRef.current.load()
//  vidRef.current.onloadeddata = (e) => {
//   //  console.log("vidloaded")
//    setVid("vid");
//    vidRef.current.play()
// };
// },[url])
// const handleprog=  ( {target: { buffered, duration }})=> {
  
//   console.log(buffered.end(buffered.length - 1) / duration * 100)
// }
  // const videos = [ vid,vid2,vid3];
  // const [currentVid, setCurrentVid] = useState(0);

  // gsap.registerPlugin(ScrollTrigger);
  // gsap.registerPlugin(ScrollToPlugin);

  // const changeViddy = (e) => {
  //   const currentVidIdx = currentVid;
  //   let newVidIdx = 0;

  //   if (currentVid < videos.length - 1) {
  //     newVidIdx = currentVid + 1;
  //     setCurrentVid(newVidIdx);
  //   } else {
  //     setCurrentVid(newVidIdx);
  //   }

  //   const nextVid = vidContainer.current.childNodes[newVidIdx];
  //   // console.log(vidContainer.current.childNodes)

  //   if (nextVid && nextVid.play) nextVid.play();

  //   showNextVid(currentVidIdx, newVidIdx);
  // };

  // const showNextVid = (curr, next) => {
  //   const currentVid = vidContainer.current.childNodes[curr];
  //   const nextVid = vidContainer.current.childNodes[next];

  //   gsap.to(currentVid, {
  //     alpha: 0,
  //   });
  //   gsap.to(nextVid, {
  //     alpha: 1,
  //   });
  // };

  // useEffect(() => {
  //   const allHiddenVids = Array.from(vidContainer.current.childNodes).filter(
  //     (el, idx) => idx !== currentVid
  //   );

  //   gsap.set(allHiddenVids, {
  //     alpha: 0,
  //   });

  //   return () => {
      
  //   };
  // }, []);

 

  return (
    <>
      <section className="head" ref={el} data-scroll data-scroll-sticky data-scroll-target="#sti">
        <div className="backg">
          <div >

            {/* {
              isMobile ? */}
                <video
                  // autoPlay={true}
                  playsInline={true}
                  muted
                  loop={true}
                  id="homevid"
                  ref={vidRef}
                  className={isMobile?"mo" :""}
                  // onProgress={handleprog}
                  
                >
                  <source src={url} type="video/mp4" />
                </video>
                {/* : */}
                {/* <video
                  autoPlay="true"
                  playsInline="true"
                  muted
                  loop="true"
                  id="homevid"
                >
                  <source src="/assets/video/all.mp4" type="video/mp4" />
                </video>
            } */}
            {/* { videos.map((vid, idx) => (
              <video
                ref={vidRef}
                autoPlay={idx === currentVid}
                playsInline={idx === currentVid}
                muted
                preload={idx !== 0 ? "none" : "auto"}
                onEnded={(e) => (idx === currentVid ? changeViddy(e) : "")}
                // style={{ display: idx === currentVid ? 'block' : 'none'}}
                style={{ zIndex: videos.length - idx }}
                key={idx}
              >
                <source src={vid} type="video/mp4" />
              </video>
            ))} */}
            { isMobile &&(
          <div className="h1 mobile-home-head">
            <h1 style={{ position: isMobile ? "static" : "" }}>
              <span className="headSpan">
                <span>Design.</span>
              </span>
              <span className="headSpan">
                <span>Architecture.</span>
              </span>
              <span className="headSpan">
                <span>Visualization.</span>
              </span>

              <div className="call-action">
                <Link
                  to="/contact"
                  aria-label="estimate-project"
                  className="estimate-btn btn"
                >
                  Estimate project
                </Link>

                <Link
                  to="/projects"
                  aria-label="estimate-project"
                  className="view-projects-btn"
                >
                  View projects
                </Link>
              </div>
            </h1>
          </div>
        )}
          </div>

          <div className="darkLay"></div>
          <div className="darkLay2"></div>
        </div>

        {isMobile ? null : (
          <div className="h1">
            <h1 style={{ position: "absolute" }}>
              <span className="headSpan">
                <span>Architecture.</span>
              </span>
              <span className="headSpan">
                <span>Design.</span>
              </span>
              <span className="headSpan">
                <span>Visualization</span>
              </span>
            </h1>
          </div>
        )}

        <div className="h2-wrapper" >
          <div className="h2-con">
          <div className="h2 home">
            <h6>Who we are</h6>
            <h3>
              {/* {isMobile ? "AMarc " : "am-arc "} */}
              A team of expert architects and designers who create cozy, modern, and minimalist spaces.
            </h3>
          </div>

          {isMobile ? (
            <MButton url="/about" text="Learn more" />
          ) : (
            <Button ss=".3" did="btnreveal" text="Learn more" url="/about" />
          )}
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeHeader;
