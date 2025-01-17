import React, { useEffect, useRef, useLayoutEffect } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import { useAppContext } from "../contexts/appcontext.js";
import Youto from "./Yt.js";

gsap.registerPlugin(ScrollTrigger);
// let player;
const ProjectScontain = ({ projects, Cat }) => {
  const { isMobile, resetLoco, changePointer, aniClick } = useAppContext();

  const el = useRef();
  const q = gsap.utils.selector(el);
  const newCat = Cat.split(" ").join("");

  const zoomPic = (e) => {
    gsap.fromTo(
      e.target,
      {
        backgroundSize: "100%",
      },
      {
        backgroundSize: "103%",
        y: -10,
        duration: 0.4,
        ease: "power2.Out",
      }
    );
    // console.log(e);
  };

  const zoomOut = (e) => {
    gsap.fromTo(
      e.target,
      {
        backgroundSize: "103%",
      },
      {
        backgroundSize: "100%",
        y: 0,
        duration: 0.4,
        ease: "power2.Out",
      }
    );
    // console.log(e);
  };
  useLayoutEffect(() => {
    // if (isMobile) return;
    const q = gsap.utils.selector(el);
      const scaledProjectsRef = q(".project").slice(0, 2);
      gsap.set(scaledProjectsRef, {
        // yPercent: 10,
        scale: 0.85,
        autoAlpha: 0,
        transformOrigin: "bottom center",
      });
    return () => {
     
    };
  }, [isMobile])
  useEffect(() => {
    // if (isMobile) return;

    const q = gsap.utils.selector(el);
    const scaledProjectsRef = q(".project").slice(0, 2);
   
    gsap.to(scaledProjectsRef, {
      // yPercent: 0,
      autoAlpha: 1,
      scale: 1,
      // delay: 0.55,
      delay: .55,

      duration: 1.1,
      stagger: 0.13,
      ease: "power2.out",
    });
    
  }, [isMobile]);
  
  

  const keepShowcaseSquare = () => {
    const sl = ".pro-cont .outerPro div.project a.pro-item";
    const showCaseContainers = document.querySelectorAll(sl);

    // console.log('showCaseContainers')
    // console.log(showCaseContainers)

    if (showCaseContainers.length) {
      showCaseContainers.forEach((el) => {
        el.style.height = el.offsetWidth + "px";
      });
    }

    const vrSl = ".pro-cont .outerPro .project .vr-item";
    const vrContainers = document.querySelectorAll(vrSl);

    if (vrContainers.length) {
      vrContainers.forEach((el) => {
        if (!el.offsetWidth) {
          setTimeout(keepShowcaseSquare, 100);
          return;
        }

        el.style.height = isMobile
          ? el.offsetWidth + "px"
          : window.innerHeight * 0.9 + "px";
      });
    }
  };

  // function onPlayerReady(event) {
  //   event.target.playVideo();
  // }

  // var done = false;
  // function onPlayerStateChange(event) {
  //   if (event.data === window.YT.PlayerState.PLAYING && !done) {
  //     // setTimeout(stopVideo, 6000);
  //     done = true;
  //   }
  // }
  // function stopVideo() {
  //   player.stopVideo();
  // }

  // function playVideo() {
  //   player.playVideo();
  // }

  // function LoadVideo() {
  // const videos = q(".ani-cover");
  // // videos.forEach( (vi,i)=>{

  //    player = new window.YT.Player("video0", {
  //     events: {
  //       onReady: onPlayerReady,
  //       onStateChange: onPlayerStateChange,
  //     },
  //   });
  // // })
  // }

  // useEffect(()=>{
  //  if(aniClick){
  //    q("")
  //  }
  // },[aniClick])

  return (
    <div className="pro-cont" ref={el}>
      <div className="outerPro">
        {projects.map((item, idx) => {
          const { name, img, a, iframeSrc, desc, id, vidid } = item;

          const urlLink = a ? `/projects/${a.url}?${newCat}` : "";

          return isMobile ? (
            <div
              key={id}
              className={`project${
                item.family === "Animation" || item.family === "Concept"
                  ? " anivi"
                  : ""
              }`}
            >
              {!iframeSrc ? (
                <Link
                  className="pro-item"
                  style={{ backgroundImage: `url(${img.url})` }}
                  to={urlLink}
                ></Link>
              ) : item.family === "Animation" || item.family === "Concept" ? (
                <>
                  <Youto imgUrl={a.imgUrl} id={id} vidId={vidid} />
                </>
              ) : (
                <iframe
                  src={iframeSrc}
                  frameBorder="0"
                  allowFullScreen={true}
                  scrolling="no"
                  marginWidth="0"
                  marginHeight="0"
                  className='pro-item vr-item'
                ></iframe>
              )}

              <h6>{name}</h6>

              <span>{desc}</span>

              {!iframeSrc ? (
                <Link className="view" to={urlLink}>
                  View project
                </Link>
              ) : (
                ""
              )}
            </div>
          ) : !iframeSrc ? (
            <Link
              to={`/projects/${a.url}?${newCat}`}
              key={id}
              className={`project project-${idx + 2} `}
              data-scroll
              onMouseEnter={() =>
                changePointer({
                  isHover: true,
                  color: { bg: img.colors.left, txt: "#ffffff" },
                  text: name,
                })
              }
              onMouseLeave={() => changePointer({ isHover: false })}

              // data-scroll-speed={idx % 2 === 0? 1.5: 0 }
              // data-scroll-offset="40%, 0%"
            >
              <div
                className="pro-item"
                style={{ backgroundImage: `url(${img.url})` }}
                onMouseEnter={(e) => zoomPic(e)}
                onMouseOver={(e) => zoomPic(e)}
                onMouseLeave={(e) => zoomOut(e)}
              ></div>
            </Link>
          ) : (
            <div
              key={id}
              className={`project project-${idx + 2} vr-project ${item.family}`}
              style={!isMobile && {marginBottom: "130px"}}
            >
              {item.family === "Animation" || item.family === "Concept" ? (
                <>
                  <Youto imgUrl={a.imgUrl} id={id} vidId={vidid} cat={Cat} name={name} desc={desc}/>
                </>
              ) : (
                <iframe
                  src={iframeSrc}
                  key={id}
                  // id={`video${idx}`}
                  className="vr-item"
                  // allowFullScreen={true}
                  // // scrolling='no'
                  // marginWidth="0"
                  // marginHeight="0"
                  // frameBorder="0"
                ></iframe>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProjectScontain;
