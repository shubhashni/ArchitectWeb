import React, { useEffect, useState, useRef } from 'react'
import { enableScroll, disableScroll } from '../../utils/EnableDisableScroll'
import amlogo from "../../assets/AM-arc-small-logo.svg"
import { useAppContext } from '../../contexts/appcontext'
import gsap from 'gsap'
import amGif from '../../assets/img/AM-LOGO.gif'
import "./loader.scss"

export default function Loader({val}) {
    const {loading, vid} = useAppContext();
    // const [ye, setY] = useState(0)
    // const [da, setDa] = useState(0)
    // const [loop,setloop] = useState(true)

    // const handleVal = (myval)=>{
    //   var y = 0;
    //   var d = 0;
     
    //   if (myval < 10){
    //     setY(myval);
    //     setDa(myval)
    //   } 
    //   else if (myval > 9 && myval < 100) {

    //     setY(myval % 10)
    //     // setDa(Math.trunc(myval / 10))
    //     setDa(myval)

    //     // y= 
    //   }
    //   else if(myval === 100) {
    //     setY(0)
    //     setDa(100)
    //   }
    // }
    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = new gsap.timeline({ paused: true });

          // useEffect(()=>{
          //   tl.to(q(".logomask svg"),{
          //     yPercent:-100,
          //     autoAlpha:0,
          //     duration:1,
          //     ease:"expo.out",
          //    })
          //    .to(q(".amarc"),{
          //     yPercent:160,
          //     duration:0,
          //    },0)
          //    .to(q(".amarc"),{
          //             yPercent:0,
          //             autoAlpha:1,
          //             duration:1,
          //             ease:"expo.out",
          //         },"<")
          //     .to(q(".logomask svg"),{
          //           yPercent:100,
          //           duration:0
          //         },">")
          //         .to(q(".amarc"),{
          //           yPercent:-150,
          //           autoAlpha:0,
          //           duration:1,
          //           ease:"expo.out",
          //         },">+2")
          //         .to(q(".logomask svg"),{
          //           yPercent:0,
          //           duration:1,
          //           autoAlpha:1,
          //           ease:"expo.out",
          //           onComplete:()=> setloop(!loop)
          //         },"<")
          //         .to(q(".amarc"),{
          //           yPercent:160,
          //           autoAlpha:0,
          //           duration:0,
          //         },">")

          //        setTimeout(() => {
          //         { tl.play(0);}
          //        }, 1000);

          //         return()=>{
          //           tl.kill()
          //         }
          
          // },[loop])
          // useEffect(()=>{
  
          //   handleVal(val)
          //   // setVal(val)
          //   // console.log( val)
          //   gsap.to(q(".wrap-num.y"),{
          //     yPercent: ()=> da=== 100? "-" + 100: "-" + ye +"0",
          //     duration:.8,
          //     ease:"expo.out"
          //     // onComplete:()=> gsap.set(q(".old-num"),{yPercent:0})
          //   })
          //   gsap.to(q(".wrap-num.d"),{
          //     yPercent: ()=> "-" + da,
          //     duration:1.6,
          //     ease:"expo.out"
          //     // onComplete:()=> gsap.set(q(".old-num"),{yPercent:0})
          //   })
          // },[val,ye])
          
 
    useEffect(()=>{
     
        if(!loading && !vid){
       
            //   if( body.classList.contains('lock-scroll') ) {
            //     body.classList.remove('lock-scroll')
            //   }
            gsap.to(q(".curtain"),{
                clipPath:()=> "inset(0% 0 0 0%)" ,
                // borderRadius:"0 0 0 0",
                duration:.8,
                delay:.2,
                ease:"expo.out",
                // yPercent:0,
            });
            gsap.to(el.current,{
                clipPath:"inset(0% 0 100% 0%)" ,
                // borderRadius:"0 0 50% 50%",
                delay:.8,
                duration:.8,
                // yPercent:-100,
                ease:"expo.out",
            })
        }

    },[loading, vid])
   


  return (
    <div className="loader-contain" ref={el} style={{backgroundImage:"url(/assets/Noise.png)"}}>
  
       <div className="logomask">
       <svg xmlns="http://www.w3.org/2000/svg" width="30.296" height="34.998" viewBox="0 0 30.296 34.998">
           <g transform="translate(-3356.85 6195.275)">
               <path d="M3387.147-6186.531v12.306l-7.642-4.411v-3.482l-7.506-4.334-7.507,4.334v3.482l-7.642,4.411v-12.306l15.148-8.746Z" transform="translate(0 0.001)" fill="#DAE0E6"/>
               <path d="M3387.147-6169.041v8.764l-7.574-4.372-7.573,4.372-7.574-4.372-7.575,4.372v-8.764l3.6-2.081,4.038-2.333v.02L3372-6169.1l7.506-4.334v-.02l4.038,2.333Z" transform="translate(0 0)" fill="#DAE0E6"/>
            </g>
       </svg>


       </div>
       <div style={{  overflow: "hidden", width: "5rem", height: "5rem"}}>
       <svg className="amarc" xmlns="http://www.w3.org/2000/svg" width="52.538" height="35" viewBox="0 0 52.538 35">
           <g transform="translate(-195.128 -24.023)">
               <path d="M3051.979,911.042v3.123h-13.934v-3.123Z" transform="translate(-2804.693 -878.71)" fill="#DAE0E6" />
               <path d="M2797.822,869.176h-5.762l-.924,2.727H2787.2l5.586-15.439h4.355l5.585,15.439h-3.98Zm-.968-2.9-1.913-5.652-1.892,5.652Z" transform="translate(-2592.072 -832.44)" fill="#DAE0E6"/>
               <path d="M2918.249,856.464V871.9h-3.76v-9.259l-3.453,9.259H2908l-3.474-9.281V871.9h-3.761V856.464h4.442l4.333,10.689,4.289-10.689Z" transform="translate(-2688.325 -832.44)" fill="#DAE0E6"/>
               <path d="M2839.654,996.635h-5.762l-.924,2.727h-3.937l5.586-15.439h4.355l5.586,15.439h-3.981Zm-.968-2.9-1.913-5.652-1.892,5.652Z" transform="translate(-2627.56 -940.448)" fill="#DAE0E6"/>
               <path d="M2950.468,999.361l-3.211-5.828h-.9v5.828h-3.76V983.923h6.311a6.952,6.952,0,0,1,3.112.638,4.4,4.4,0,0,1,1.924,1.748,4.884,4.884,0,0,1,.638,2.474,4.592,4.592,0,0,1-.869,2.749,4.675,4.675,0,0,1-2.562,1.715l3.563,6.114Zm-4.112-8.489h2.331a2.133,2.133,0,0,0,1.551-.506,1.908,1.908,0,0,0,.517-1.43,1.849,1.849,0,0,0-.517-1.386,2.135,2.135,0,0,0-1.551-.506h-2.331Z" transform="translate(-2723.795 -940.448)" fill="#DAE0E6"/>
               <path d="M3033.942,986.556a7.075,7.075,0,0,1,2.761-2.793,8.011,8.011,0,0,1,4.014-1,7.681,7.681,0,0,1,4.706,1.451,6.973,6.973,0,0,1,2.617,3.959h-4.134a3.347,3.347,0,0,0-1.309-1.474,3.682,3.682,0,0,0-1.924-.506,3.592,3.592,0,0,0-2.815,1.21,5.388,5.388,0,0,0,0,6.466,3.591,3.591,0,0,0,2.815,1.21,3.678,3.678,0,0,0,1.924-.506,3.344,3.344,0,0,0,1.309-1.474h4.134a6.921,6.921,0,0,1-2.617,3.948,7.721,7.721,0,0,1-4.706,1.44,8.008,8.008,0,0,1-4.014-1,7.093,7.093,0,0,1-2.761-2.782,8.884,8.884,0,0,1,0-8.148Z" transform="translate(-2800.374 -939.463)" fill="#DAE0E6"/>
          </g>
       </svg>
       </div>
       {/* new loader */}
       <div class="preloader-1">
          <div className="loading-text">Loading</div>
          <span class="line line-1"></span>
          <span class="line line-2"></span>
          <span class="line line-3"></span>
          <span class="line line-4"></span>
          <span class="line line-5"></span>
          <span class="line line-6"></span>
          <span class="line line-7"></span>
          <span class="line line-8"></span>
          <span class="line line-9"></span>
        </div>

       {/* <img src={amGif}/> */}
       {/* <span className="pi">
         <div className="wrap-num d">
         <span className="old-num">0</span> 
           <span className="old-num">1</span> 
           <span className="old-num">2</span> 
           <span className="old-num">3</span> 
           <span className="old-num">4</span> 
           <span className="old-num">5</span> 
           <span className="old-num">6</span> 
           <span className="old-num">7</span> 
           <span className="old-num">8</span> 
           <span className="old-num">9</span> 
           <span className="old-num">10</span> 


         </div>
         <div className="wrap-num y">
         <span className="old-num">0</span> 
         <span className="old-num">1</span> 
           <span className="old-num">2</span> 
           <span className="old-num">3</span> 
           <span className="old-num">4</span> 
           <span className="old-num">5</span> 
           <span className="old-num">6</span> 
           <span className="old-num">7</span> 
           <span className="old-num">8</span> 
           <span className="old-num">9</span> 
           <span className="old-num">0</span> 
         </div>
         %        
       </span> */}
       <div className="curtain"></div>
    
    </div>
  )
}

