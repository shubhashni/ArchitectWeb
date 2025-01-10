import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
// import im1 from "../../public/assets/prj/prj5/p5-5.jpg"
// import im2 from "../../public/assets/prj/prj4/p4-1.jpg"
// import im3 from "../../public/assets/prj/prj9/p9-1.jpg"
import gsap from "gsap";
import Youto from "./yt.js"
import { useAppContext } from "../contexts/appcontext.js";

const Featured = ({ conn }) => {
    const el = useRef()
    const q = gsap.utils.selector(el);
    const {changePointer, isMobile} = useAppContext();
    useEffect(()=>{
      if(isMobile) return;

          function dragelem(evt) {
              // console.log(evt.movementX)
       gsap.to(q(".f-container"),{
           rotateY:()=> "-=" + evt.movementX,
           duration:1,
           ease:"expo.out"
       })
      //  console.log(evt)
      }
      
      function drop(evt) {
        // var drag = document.getElementById("drag");
        window.removeEventListener("mousemove", dragelem);
        window.removeEventListener("mouseup", drop);
        // window.removeEventListener("touchmove", dragelem);
        // window.removeEventListener("touchend", drop);
      }
      
      function startdrag(evt)  {
       window.addEventListener("mousemove", dragelem);
    //    window.addEventListener("touchmove", dragelem);

        window.addEventListener("mouseup", drop);
        // window.addEventListener("touchend", drop);

      }

      el.current.addEventListener("mousedown", startdrag);
    //   el.current.addEventListener("touchstart", startdrag); 
      return ()=>{
        el.current.removeEventListener("mousedown", startdrag);

      }
    },[isMobile])

  
      
    const handleVR =(t)=>{
      if(isMobile) return;
        gsap.to(q(".frontlayer"),{
          display:()=> t==="c"? "none": "flex",
          duration:()=> t==="c"? 0: .4,
        })
        if(t === "c"){
          changePointer({pointOut: true})
        }
        else if(t === "l"){
            changePointer({isHover: true, color:{bg:"#ffffff", txt: "#000000"}, text: "Drag",blend:false,})
        }
      }
const data = [
    {
        id:"p18i1",
        name: 'Cozy Cafe',
        desc: 'Interior design, Animation',
        tags:['Animation'],
        family:"Animation",
        a:{text:"View more", url:"pr17-1", imgUrl:"../assets/prj/prj12/p12-1.jpg"},
        vidid: '34hD4u8WFuI',
        iframeSrc: true,
      },
    //   {
    //     id:"p18i2",
    //     name: 'Vlla pano',
    //     desc: 'Interior design, Animation',
    //     tags:['Animation'],
    //     family:"Animation",
    //     a:{text:"View more", url:"pr17-1", imgUrl:"../assets/prj/prj11/p11-1.jpg"},
    //     vidid: "xgWT3ZnPa40",
    //     iframeSrc: true,
    
       
    //   },
    //   {
    //     id:"p18i3",
    //     name: 'Pastel Pink',
    //     desc: 'Interior design, Animation',
    //     tags:['Animation'],
    //     family:"Animation",
    //     a:{text:"View more", url:"pr17-1", imgUrl:"../assets/prj/prj16/p16-1.jpg"},
    //     vidid: "NN_bmDgHre8",
    //     iframeSrc: true,
    
       
    //   },
    //   {
    //     id:"p18i4",
    //     name: 'Light & Warm',
    //     desc: 'Interior design, Animation',
    //     tags:['Animation'],
    //     family:"Animation",
    //     a:{text:"View more", url:"pr17-1", imgUrl:"../assets/prj/prj15/p15-1.jpg"},
    //     vidid: "xtcLIzJMSrc",
    //     iframeSrc: true,
    //   }
]
    return(
        <div className="fea-body" ref={el} onMouseEnter={()=>changePointer({isHover: true, color:{bg:"#ffffff", txt: "#000000"}, text: "Drag",})} onMouseLeave={()=>changePointer({isHover:false})}>

        <div className="fea-wrapper">
         <div className="f-container">
            <div className="it f-g-1" onMouseEnter={()=>handleVR("c")} onMouseLeave={ ()=>handleVR("l")}>
            <Youto id="2" vidId="NN_bmDgHre8" imgUrl="../assets/prj/prj16/p16-1.jpg" />
            </div>

            <div className="it f-g-2" onMouseEnter={()=>handleVR("c")} onMouseLeave={ ()=>handleVR("l")}>
            <Youto id="3" vidId="xgWT3ZnPa40" imgUrl="../assets/prj/prj11/p11-1.jpg" />
            </div>

            <div className="it f-g-3" onMouseEnter={()=>handleVR("c")} onMouseLeave={ ()=>handleVR("l")}>
             <Youto id="1" vidId="xtcLIzJMSrc" imgUrl="../assets/prj/prj15/p15-1.jpg" />
            </div> 

            <div className="it f-g-1 rep" onMouseEnter={()=>handleVR("c")} onMouseLeave={ ()=>handleVR("l")} >
              <Youto id="4" vidId="34hD4u8WFuI" imgUrl="../assets/prj/prj12/p12-1.jpg" />
            </div>
           { !isMobile && <>
            <div className="it f-g-2 rep" onMouseEnter={()=>handleVR("c")} onMouseLeave={ ()=>handleVR("l")}>
             <Youto id="22" vidId="NN_bmDgHre8" imgUrl="../assets/prj/prj16/p16-1.jpg" fea="true"/>
            </div>
           

            <div className="it f-g-3 rep" onMouseEnter={()=>handleVR("c")} onMouseLeave={ ()=>handleVR("l")}>
             <Youto id="33" vidId="xgWT3ZnPa40" imgUrl="../assets/prj/prj11/p11-1.jpg" />
            </div>

            <div className="it f-g-3 rep" onMouseEnter={()=>handleVR("c")} onMouseLeave={ ()=>handleVR("l")}>
            <Youto id="11" vidId="xtcLIzJMSrc" imgUrl="../assets/prj/prj15/p15-1.jpg" />
            </div>

            <div className="it f-g-3 rep1" onMouseEnter={()=>handleVR("c")} onMouseLeave={ ()=>handleVR("l")}>
               <Youto id="44" vidId="34hD4u8WFuI" imgUrl="../assets/prj/prj12/p12-1.jpg" />
            </div>
            </>
             }


         </div>
        </div>
            <div className="fe-text">Featured Animations</div>
        </div>
      
    )
}
export default Featured;
