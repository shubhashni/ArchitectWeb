import React, {useEffect, useRef} from "react";
import gsap from "gsap"
import {Link} from "react-router-dom"
import ScrollTrigger from "gsap/ScrollTrigger";
import { useAppContext } from "../contexts/appcontext";
import Oculus from "./oculus";
import vid1 from "../assets/home videos/vid1.m4v"
import vid2 from "../assets/home videos/vid2.m4v"
import vid3 from "../assets/home videos/vid3.m4v"

const Process = ({rerun}) => {
  const el = useRef();
  gsap.registerPlugin(ScrollTrigger);
    const q = gsap.utils.selector(el);
    const prTl = useRef();
    const {changePointer}=useAppContext();
    // useEffect(()=>{
    //   gsap.set(el.current, {background: "none"})
    //   prTl.current = gsap.timeline({
    //     scrollTrigger:{
    //       trigger: el.current,
    //       start: ()=> "top top+=5%",
    //       end: ()=> "bottom top",
    //       // markers: true,
    //       onEnter:(direction)=> gsap.to(el.current, {
    //         background:()=> direction=== 1? "none": "#000000",
    //         duration:0,
    //       }),
    //       onLeaveBack: (direction)=> gsap.to(el.current, {
    //         background:()=> direction=== 1? "#000000":"none",
    //         duration:0
    //       })
    //     }
    //   })
      
    useEffect(()=>{

      // return()=>{
      // if (ScrollTrigger.getById("getInTouch")){
      //   ScrollTrigger.getById("getInTouch").kill()
      //  }
      //  if (ScrollTrigger.getById("getResults")){
      //   ScrollTrigger.getById("getResults").kill()
      //  }
      //  if (ScrollTrigger.getById("sendBrief")){
      //   ScrollTrigger.getById("sendBrief").kill()
      //  }
      // }
    },[])
  return (
    <section className="process " ref={el}>
      
      <div className="process-head">
        {/* <h3>
          The process has never been <span>easier</span>
        </h3> */}
      </div>

      <div className="process-grid">
        <div className="process-col">
          <div className="process-content">

            <div className="process-vid">
             {/* <video autoPlay={true}
                  playsInline={true}
                  muted
                  loop={true}
                 className="f"
                >
                  <source src={vid1} type="video/mp4" />
             </video> */}
                  <Oculus 
             trigID="sendBrief"
             rerun={rerun} 
             sceneID="https://prod.spline.design/OW3tCrXTyg2xn0KP/scene.splinecode"
             objID="51b96b16-0a87-48a2-a9da-f9a080e1fac2"
             />
          
            </div>
            <div className="process-text">
              <Link to="/contact"
              onMouseOver={()=> changePointer({isHover: true, color:{bg:"#ffffff", txt: "#000000"}, text: "", blend:true,})}
              onMouseLeave={()=> changePointer({isHover: false})}
              > 
              <span>01</span>
                <h5>Send brief</h5>
              </Link>
              <p>
                Send us a completed brief along with documents & requirements to
              estimate the project & <span> get started.</span>
              </p>
            </div>

          </div>
       

        
        </div>

        <div className="process-col">
          <div className="process-content">

            <div className="process-text r">
              <Link to="/contact"
              onMouseOver={()=> changePointer({isHover: true, color:{bg:"#ffffff", txt: "#000000"}, text: "", blend:true,})}
              onMouseLeave={()=> changePointer({isHover: false})}
              > 
              
                <h5><span>02</span>Be in touch</h5>
              </Link>
              <p>
              Review preliminary results and leave your feedback for us to continue or make corrections.
              </p>
            </div>
            <div className="process-vid r">
            <Oculus 
             trigID="getInTouch"
             rerun={rerun} 
             sceneID="https://prod.spline.design/mAF6MNA-l22vXT93/scene.splinecode"
             objID="c177f679-17e5-4d0d-be42-4c0bc7a87f65"
             />
          
             {/* <video autoPlay={true}
                  playsInline={true}
                  muted
                  loop={true}
                 className="r"
                >
                  <source src={vid2} type="video/mp4" />
             </video> */}
            </div>
            <div className="process-text rm">
              <Link to="/contact"
              onMouseOver={()=> changePointer({isHover: true, color:{bg:"#ffffff", txt: "#000000"}, text: "", blend:true,})}
              onMouseLeave={()=> changePointer({isHover: false})}
              > 
              <span>02</span>
                <h5>Be in touch</h5>
              </Link>
              <p>
              Review preliminary results and leave your feedback for us to continue or make corrections.
              </p>
            </div>

          </div>
        </div>

        <div className="process-col">
          <div className="process-content">

            <div className="process-vid">
             {/* <video autoPlay={true}
                  playsInline={true}
                  muted
                  loop={true}
                 className="f"
                >
                  <source src={vid3} type="video/mp4" />
             </video> */}
               <Oculus 
             trigID="getResults"
             rerun={rerun} 
             sceneID="https://prod.spline.design/lGiT14kDZs77WzLi/scene.splinecode"
             objID="e6b11c2f-5a25-44c4-9d03-cc2554c66ccb"
             />
         

            </div>
            <div className="process-text">
              <Link to="/contact"
              onMouseOver={()=> changePointer({isHover: true, color:{bg:"#ffffff", txt: "#000000"}, text: "", blend:true,})}
              onMouseLeave={()=> changePointer({isHover: false})}
              > 
              <span>03</span>
                <h5>Get results</h5>
              </Link>
              <p>
              Get your services with perfect quality design, details and visualization.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
export default Process;
