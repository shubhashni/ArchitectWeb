import React, { lazy, Suspense, useEffect, useRef, useState} from 'react'
import Head from'../components/homeheader.js'
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from "gsap"
import Loader from "../components/loader/loader.js"
import Spline from '@splinetool/react-spline';
import TestingCompo from '../components/testcompo.js';
// import noise from "../assets/noise.png"
// import ServHead from'../components/serviceshead'
import Footer from'../components/footer.js'
import Featured from'../components/featured.js'
import Oculus from'../components/oculus.jsx'


import FooterMB from '../components/footermb.jsx'
import MServHead from'../components/MServiceHead/MobileServiceHead'
import Process from'../components/process.js'
import Con from'../components/contact.js'
import Showcase from '../components/showcase.js'
// import Loading from "./Loading.js"
import { homeInt, homeExt } from '../utils/constans.js'
import useLoco from '../utils/useLoco.js';
import { useAppContext } from "../contexts/appcontext.js";
import vrimg from "../assets/vrimg.png"
import closevsg from "../assets/Close.svg"
import i1 from "../assets/frame/1.jpg"
import i2 from "../assets/frame/2.jpg"
import i3 from "../assets/frame/3.jpg"
import i4 from "../assets/frame/4.jpg"
import i5 from "../assets/frame/5.jpg"
import i6 from "../assets/frame/6.jpg"
import i7 from "../assets/frame/7.jpg"
import i8 from "../assets/frame/8.jpg"
import i9 from "../assets/frame/9.jpg"
import i10 from "../assets/frame/10.jpg"
import i11 from "../assets/frame/11.jpg"
import i12 from "../assets/frame/12.jpg"
import i13 from "../assets/frame/13.jpg"
import i14 from "../assets/frame/14.jpg"
import i15 from "../assets/frame/15.jpg"
import i16 from "../assets/frame/16.jpg"
import i17 from "../assets/frame/17.jpg"
import i18 from "../assets/frame/18.jpg"
import i19 from "../assets/frame/19.jpg"
import i20 from "../assets/frame/20.jpg"
import i21 from "../assets/frame/21.jpg"
import i22 from "../assets/frame/22.jpg"
import i23 from "../assets/frame/23.jpg"
import i24 from "../assets/frame/24.jpg"
import i25 from "../assets/frame/25.jpg"
import i26 from "../assets/frame/26.jpg"
import i27 from "../assets/frame/27.jpg"
import i28 from "../assets/frame/28.jpg"
import i29 from "../assets/frame/29.jpg"
import i30 from "../assets/frame/30.jpg"
import i31 from "../assets/frame/31.jpg"
import i32 from "../assets/frame/32.jpg"
import i33 from "../assets/frame/33.jpg"
import i34 from "../assets/frame/34.jpg"
import i35 from "../assets/frame/35.jpg"
import i36 from "../assets/frame/36.jpg"
import i37 from "../assets/frame/37.jpg"
import i38 from "../assets/frame/38.jpg"
import i39 from "../assets/frame/39.jpg"
import i40 from "../assets/frame/40.jpg"
import i41 from "../assets/frame/41.jpg"


import d1 from "../assets/frame/design/1.jpg"
import d2 from "../assets/frame/design/2.jpg"
import d3 from "../assets/frame/design/3.jpg"
import d4 from "../assets/frame/design/4.jpg"
import d5 from "../assets/frame/design/5.jpg"
import d6 from "../assets/frame/design/6.jpg"
import d7 from "../assets/frame/design/7.jpg"
import d8 from "../assets/frame/design/8.jpg"
import d9 from "../assets/frame/design/9.jpg"
import d10 from "../assets/frame/design/10.jpg"
import d11 from "../assets/frame/design/11.jpg"
import d12 from "../assets/frame/design/12.jpg"
import d13 from "../assets/frame/design/13.jpg"
import d14 from "../assets/frame/design/14.jpg"
import d15 from "../assets/frame/design/15.jpg"
import d16 from "../assets/frame/design/16.jpg"
import d17 from "../assets/frame/design/17.jpg"
import d18 from "../assets/frame/design/18.jpg"
import d19 from "../assets/frame/design/19.jpg"
import d20 from "../assets/frame/design/20.jpg"
import d21 from "../assets/frame/design/21.jpg"
import d22 from "../assets/frame/design/22.jpg"
import d23 from "../assets/frame/design/23.jpg"
import d24 from "../assets/frame/design/24.jpg"
import d25 from "../assets/frame/design/25.jpg"
import d26 from "../assets/frame/design/26.jpg"
import d27 from "../assets/frame/design/27.jpg"
import d28 from "../assets/frame/design/28.jpg"
import d29 from "../assets/frame/design/29.jpg"
import d30 from "../assets/frame/design/30.jpg"
import d31 from "../assets/frame/design/31.jpg"
import d32 from "../assets/frame/design/32.jpg"
import d33 from "../assets/frame/design/33.jpg"
import d34 from "../assets/frame/design/34.jpg"
import d35 from "../assets/frame/design/35.jpg"
import d36 from "../assets/frame/design/36.jpg"
import d37 from "../assets/frame/design/37.jpg"
import d38 from "../assets/frame/design/38.jpg"
import d39 from "../assets/frame/design/39.jpg"
import d40 from "../assets/frame/design/40.jpg"
import d41 from "../assets/frame/design/41.jpg"

// import design from "../assets/design1.jpg"
// import viz from "../assets/viz.jpg"
import "../serv.scss";

import Helmet from 'react-helmet';
// import all from 'gsap/all';
// import Featured from '../components/featured.js';


const rArray= [i41,i40,i39,i38,i37,i36,i35,i34,i33,i32,i31,i30,i29, i28,i27,i26,i25,i24,i23, i22,i21,i20,i19,i18, i17,i16,i15,i14,i13,i12,i11,i10,i9,i8,i7,i6,i5,i4,i3,i2,i1]

 //full array
// const dArray=[d1,d2,d3,d4,d5,d6,d7,d8,d9,d10, d11,d12,d13,d14,d15,d16,d17, d18,d19,d20,d21,d22,d23,d24,d25,d26,d27, d28,d29,d30, d31,d32,d33,d34,d35,d36,d37, d38,d39,d40, d41,d42,d43,d44,d45,d46,d47, d48,d49,d50, d51,d52,d53,d54,d55,d56,d57, d58,d59,d60, d61]
const dArray=[d1,d2,d3,d4,d5,d6,d7,d8,d9,d10, d11,d12,d13,d14,d15,d16,d17, d18,d19,d20,d21,d22,d23,d24,d25,d26,d27, d28,d29,d30, d31,d32,d33,d34,d35,d36,d37, d38,d39,d40, d41]
 

const HomePage = () => {
  const pintl = useRef();
  const el = useRef();
  const tl = useRef();
  const protime = useRef();
  const imgPara = useRef();


  const { isMobile, setLoading,initial, vid, loading,resetLoco, setReset, changePp, changePointer,transition } = useAppContext();
  useLoco(!isMobile)
  gsap.registerPlugin(ScrollTrigger);
  const q = gsap.utils.selector(el);
  const [rerun,setrerun]= useState(false);
  const fooT= useRef();
  const imageTimeline = useRef();
  const style = {
    background: "radial-gradient(50% 42.9% at 50% 42.91%, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.549) 100%)",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    opacity: .5,
  }
  const [val, setVal]= useState("0%");
  const [mc, setmc]= useState(1);

  var c= 0;
  var tot = 80;
  var totm =  5
  
  function imgLoaded(){
    if(isMobile){
      setmc(pr =>(pr + 1 ))
      var perc = ((100/totm*mc) << 0);
      // console.log(mc);
      setVal(perc)
    if(mc === totm){
      setLoading("loading");
    }
    }else {
      c += 1;
      var perc = ((100/tot*c) << 0) ;
  
      setVal(perc)
    if(c === tot){
      setLoading("loading");
    }
    }

  }
  
  // useEffect(() => {
   
  //   // loadbar();
  
  //   setTimeout(() => {
  //     setReset()
  //     setrerun((r)=>!r)
  //     ScrollTrigger.refresh();
  //   }, 500);
  //   return ()=>{
  //     }
  //   }, [isMobile])
   
    const ref = React.createRef();
    const refviz = React.createRef();
    const leftvideo= ()=>{
      if(document.querySelector("#homevid")){
        document.querySelector("#homevid").pause()
        gsap.to(q("#homevid"), {display: "none", duration:0})
      }
      else return;

    }
    const entvideo= ()=>{
      document.querySelector("#homevid").play()
      gsap.to(q("#homevid"), {display: "block", duration:0})
    }
    useEffect(()=>{
      const headSpans = q(".headSpan");
    
     if(!isMobile){
  
      !loading && gsap.fromTo(
        headSpans,{
          autoAlpha:()=> 0,
        },
        {
          autoAlpha:()=> 1,
          duration: 1.3,
          delay:.9,
          // onComplete:()=>ScrollTrigger.refresh(),
          
        },
      );

      !loading && gsap.fromTo(
        headSpans,{
          y:0,
          yPercent: 40, 
          // autoAlpha: 0,
        },
        {
          y:0,
          yPercent: 0,
          duration: 0.8,
          delay:.9,
          // ease: "power2.out",
        },
      );
    } else
      if(isMobile){
        gsap.set(headSpans,
          {
            y:0,
            yPercent:60,
            autoAlpha:0,
          }
        )
       gsap.to(headSpans,
          {
            y:0,
            yPercent: 0,
            duration: 0.8,
            delay:.9,
            // ease: "power2.out",
            stagger:.09,
          }
        );
        gsap.to(headSpans,
          {
            autoAlpha:()=> 1,
            duration: 1.3,
            delay:.9,
            stagger:.1,
          }
        );
        gsap.set(q(".call-action a")[0],{
          yPercent:60,
          autoAlpha:0,
        });
        gsap.set(q(".call-action a")[1],{
          yPercent:110,
          autoAlpha:0,
        });

        gsap.to(q(".call-action a"),{
          // yPercent:0,
          autoAlpha:1,
          stagger:.14,
          delay:1.29,
          // ease: "power2.out",
          duration:.9
        })
        gsap.to(q(".call-action a"),{
          yPercent:0,
          // autoAlpha:1,
          stagger:.13,
          delay:1.19,
          // ease: "power2.out",
          duration:.6,
        })
      }


    },[loading, isMobile])
  useEffect(()=>{
    // gsap.set(q(".h1 h1"),{
    //   y:0,
    // })
    
    const changeBg = (direction)=>{
      // gsap.set(q(".drkLayer"), {background: "rgba(0, 0, 0, 0.5)"})
      gsap.to(q(".backgr"), { 
        autoAlpha: ()=> (direction === 1? 1: 0),
        duration:1
      })
    
      direction === 1? changePp("Contact"): changePp("other")
    }
    if (!isMobile){
      // ScrollTrigger.refresh();
      changePp("home")
      if(pintl.current){
        pintl.current.progress(0)
        entvideo()
      }
    gsap.set(q(".head"),{
      marginBottom: "15vh"
    })
    gsap.set(q(".h2 h6, .h2 h3,.btn-container"),
    {
      opacity:0,
    })
    gsap.set(q(".process-vid"),{
      clearProps:"all",
    })
  

  
    const spans = q(".h1 h1 ");
    // gsap.set(spans,{
    //   y:0,
    // })
    const revealH2 = gsap.fromTo(
      q(".h2 h6, .h2 h3, .btn-container"),
      { y: 20 },
      {
        y: 0,
        duration: 6,
        autoAlpha: 1,
      }
    );
    pintl.current = gsap
      .timeline({
        scrollTrigger: {
          scroller:"#viewport",
          trigger: q(".head"),
          start:()=> "top top",
          end:()=> "bottom top+=10%",
          // markers:true,
          id:"pintl",
          pin:true,
          pinReparent:true,
          anticipatePin:1,
          // invalidateOnRefresh: true,
          onLeave:()=> leftvideo(),
          onEnterBack: ()=> entvideo(),

          scrub: 0.5,
        },
      })
      .to(q(".darkLay2"), {
        autoAlpha:()=> 1,
        duration: 18,
        // onComplete:()=>ScrollTrigger.refresh(true),
      })
      .fromTo(
        spans,{
          y:0
        },
        {
          duration: 4,
          autoAlpha: 0,
          y: -20,
        },
        "<5.5"
      )
      .addLabel("finishedSec1", "<5")
      .add(revealH2, "finishedSec1");

        fooT.current = gsap
        .timeline({
          scrollTrigger: {
            scroller: "#viewport",
            trigger: q(".footer-sec.fot"),
            start:()=> "center-=8% center-=8%",
            end: ()=> "bottom bottom",
            // markers: true,
            id:"foot",
        //     // scrub:true,
            onLeaveBack: ({direction})=> changeBg(direction),
          onEnter: ({direction})=> changeBg(direction),
          },
        })
           .to(q(".trig"),{
             autoAlpha:1,
             duration:1,
           }, "<");

           const aside = q(".aside");
 
           aside.forEach((can, i)=>{
             const asidewrap = q(".aside-wrapper");
             gsap.set([asidewrap, aside], { scale: 1});
             // gsap.set(aside, {y: "-23vh" })
              tl.current = gsap.timeline({
              //  onComplete:()=>ScrollTrigger.refresh(true),
               scrollTrigger: {
                 scroller:"#viewport",
                 trigger:q(".serv-head-contain")[i],
                 start:()=> "top bottom",
                 end:()=> "center center",
                 scrub: true,
                 id:"tl" + i,
                 invalidateOnRefresh: true,
               },
             })
         
             .to([asidewrap[i]], { scale: 1.45  });
             const canvas = i === 0? ref.current : refviz.current
         const context = canvas.getContext("2d");
         canvas.width = 931;
         canvas.height = 523;
        const frameCount = 41;
       
        
         const airpods = {
           boo: 0
         };
         const images = [];
         
         for (let j = 0; j < frameCount; j++) {
           const img = new Image();
           img.src = i=== 0 ? dArray[j] : rArray[j]
           images.push(img);
           img.onload = imgLoaded;
         
         }
         const cans = q(".aside-wrapper");
         gsap.to(airpods, {
           boo: frameCount - 1,
           snap: "boo",
           ease:"none",
           scrollTrigger: {
             scroller:"#viewport",
             trigger: q(".aside-wrapper")[i],
             start: "bottom-=14% bottom",
             end: "top+=10% top",
            //  markers: true,
             id: "can",
             scrub:true,
           },
           onUpdate: render 
         });
         
         images[0].onload = render;
         
         function render() {
           context.clearRect(0, 0, canvas.width, canvas.height);
           context.drawImage(images[airpods.boo], 0, 0,canvas.width, canvas.height); 
         }

           })

           const imgTrigger = q(".show-images");
           const imageArrayfull = q(".show-image");
           const imagewrap = q(".show-img-contain");
           const endTr = q(".show-text-contain");
           const imgset0= [imageArrayfull[0],imageArrayfull[1]];
           const imgset1= [imageArrayfull[2],imageArrayfull[3],imageArrayfull[4]]
          
           imagewrap.forEach((it,j)=>{
             
             if(j=== 0 ){ gsap.set(imgset0, {
               zIndex: (i, target, targets) => targets.length - i,
             }) 
            }
            else if( j === 1 ){ gsap.set(imgset1, {
              zIndex: (i, target, targets) => targets.length - i,
            }) }
            const name = ".show-images."+ "r" +j + " .show-image:not(.end)";
            const allImgs= q(".show-images."+ "r" +j + " .show-image");
            // console.log(name)
                    const images = q(name);
              
                    images.forEach((image, i) => {
                      const nextImage = image.nextElementSibling;
              
                       imageTimeline.current = gsap.timeline({
                        scrollTrigger: {
                          scroller: "[data-scroll-container]",
                          trigger: imgTrigger[j],
                          start: () => "top -" + window.innerHeight * i,
                          endTrigger: endTr[j],
                          end: () => "+=" + window.innerHeight,
                          scrub: true,
                          // invalidateOnRefresh: true,
                          // markers:true,
                          anticipatePin: 1,
                          // onEnter: () => console.log(images),
                        },
                      })
              
                      .fromTo(
                        image,
                        {
                          clipPath:()=> "inset(0px 0px 0px 0px)",
                          backgroundPosition: () => "0 50%",
                        },
                        {
                          clipPath:()=> "inset(0px 0px 100% 0px)",
                          backgroundPosition: () => "0 65%",
                          ease: "none",
                        },
                        0
                      )
                  
              
                      .fromTo(
                        allImgs[i+1],
                        {
                          backgroundPosition: () => "0 35%",

                        },
                        {
                          backgroundPosition: () => "0 50%",
                          ease: "none",
                        },
                        0
                      );
                    });

                    ScrollTrigger.create({
                      scroller:"#viewport",
                      trigger: imagewrap[j],
                      start: ()=> "center center",
                      endTrigger: endTr[j],
                      end: ()=> "bottom bottom",
                      // pin: imagewrap[j],
                      id: "pinSc",
               
                     });
            })
            const pros = {
              boo: 100,
            };
            const prc = q(".process-col")
            const backtm = gsap.timeline({
              scrollTrigger:{
                scroller: "[data-scroll-container]",
                trigger: q(".process-grid"),
                start: () => "top-=10% bottom",
                end: () => "top+=10% bottom",
                scrub:true,
                // onEnter:()=> gsap.set(el.current,{
                //   backgroundImage:`url(/assets/noise.png)`,
                //   // background:"#ffffff"
                // }),
              }
            })
            .to(q(".process-text h5"),{
              opacity:1,
              // duration:1,
              onComplete:()=> gsap.set(el.current,{
                backgroundImage:`url(/assets/noiise.png)`,
                // background:"#ffffff"
              })
            })
            .to(el.current,{
              background:"url(/assets/noiise.png) #0d0d0db3",
              duration:1,
              // onComplete:()=> gsap.set(el.current,{
              //   backgroundImage:`url(/assets/noise.png)`,
              //   background:"#ffffff"
              // })
              // onReverseComplete:()=>console.log("repeaded ")
            },0)
            .to(el.current,{
              background:"url(/assets/Noise.png) #000000",
              duration:0,
            })
           
            prc.forEach((row,i)=>{
              protime.current = gsap.timeline({
                scrollTrigger: {
                  scroller: "[data-scroll-container]",
                  trigger: prc[i],
                  start: () => "top bottom",
                  end: () => "center center-=20%",
                  scrub: true,
               
                  id:"pr"+i
           
                },
              })
              .fromTo(prc[i],{
                xPercent:()=> i=== 1? "-100":"100",
                // clipPath: "inset(0px 50% 0px 50% round 14rem)",
              },{
                xPercent:"0",
                // clipPath: "inset(0px 0% 0px 0% round 14rem)",
              })
              .fromTo(q(".process-content")[i],{
                xPercent:()=> i=== 1? "100":"-100",
              },{
                xPercent:"0",
              },0)
            })
            const fetl = gsap.timeline({
              scrollTrigger:{
                scroller: "[data-scroll-container]",
                trigger:q(".fea-body"),
                start: "top bottom",
                end: "bottom top",
                scrub:true,
                ease:"none",
              }
            })
            .to(q(".f-container"),{
              rotateY: ()=> "+=40",
            })
            .to(q(".fe-text"),{
             xPercent: 20,
            },0)

            return()=>{
              setrerun((r)=>!r)
            //  setReset()

              // window.removeEventListener('resize', handleResize)
            fooT.current.kill()
            if( fooT.current.ScrollTrigger){
              fooT.current.ScrollTrigger.kill();
            }
           if( tl.current){
            tl.current.revert()
           }
          //  if(protime.current){
          //   protime.current.revert()
          //  }
           if( pintl.current.ScrollTrigger){
            pintl.current.ScrollTrigger.kill()
           }
           if(pintl.current){
            pintl.current.revert();
           }
          //  if(protime.current){
          //   protime.current.kill()
          //  }
          if(backtm.scrollTrigger){
           backtm.scrollTrigger.kill()
          }
           if(backtm){
            backtm.revert()
           }
           if (ScrollTrigger.getById("pr0")){
            ScrollTrigger.getById("pr0").kill()
           }
          //  if (ScrollTrigger.getById("oculusTrig")){
          //   ScrollTrigger.getById("oculusTrig").kill()
          //  }
          
           if (ScrollTrigger.getById("pr1")){
            ScrollTrigger.getById("pr1").kill()
           }
           if (ScrollTrigger.getById("pr2")){
            ScrollTrigger.getById("pr2").kill()
           }

            if (ScrollTrigger.getById("tl0")){
              ScrollTrigger.getById("tl0").kill()
            }
            if (ScrollTrigger.getById("tl1")){
              ScrollTrigger.getById("tl1").kill()
            }
            if(ScrollTrigger.getById("can")){
              ScrollTrigger.getById("can").kill()
            }
            if(ScrollTrigger.getById("pinSc")){
              ScrollTrigger.getById("pinSc").kill()
            }
           }
          }
          else if(isMobile){
            // ScrollTrigger.refresh();
            
            gsap.set(q("section.head,.process-content,.process-col"),{
              clearProps: "all"
            })
            entvideo()
            
            gsap.set(q(".h2.home h3, .h2.home h6"),{
              autoAlpha:1,
              y:0,
            });
            const imges = q(".showcase-container img");
            // console.log(imges)
            imges.forEach((img,i)=>{
              imgPara.current = gsap.timeline({
                scrollTrigger: {
                  // scroller: "[data-scroll-container]",
                  trigger: img,
                  start: () => "top bottom",
                  end: () => "bottom top",
                  scrub: true,
                  id:"imgpara"+i,
                  // markers:true,
                },
              })
              .fromTo(img,{
                objectPosition:()=> "0 70%",
                // clipPath: "inset(0px 50% 0px 50% round 14rem)",
              },{
                objectPosition:()=> "0 30%",
                ease:"none"
              });
        
            })

            const prc = q(".process-vid")
            prc.forEach((row,i)=>{

              protime.current = gsap.timeline({
                scrollTrigger: {
                  // scroller: "[data-scroll-container]",
                  trigger: prc[i],
                  start: () => "top bottom",
                  end: () => "center center",
                  scrub: true,
                  id:"pr"+i,
                },
              })
              .fromTo(prc[i],{
                xPercent:()=> i=== 1? "-100":"100",
                // clipPath: "inset(0px 50% 0px 50% round 14rem)",
              },{
                xPercent:"0",
                // clipPath: "inset(0px 0% 0px 0% round 14rem)",
              })
        
            })
         
            fooT.current = gsap
            .timeline({
              scrollTrigger: {
                trigger: q(".footer-sec.fot"),
                start:()=> "top-=8% center-=8%",
                end: ()=> "bottom bottom",
                // markers: true,
                id:"foot",
                onLeaveBack: ({direction})=> changeBg(direction),
              onEnter: ({direction})=> changeBg(direction),
              },
            })
               .to(q(".trig"),{
                 autoAlpha:1,
                 duration:1,
               }, "<")
              
               return()=>{
            //  setReset()

                fooT.current.kill()
                if( fooT.current.ScrollTrigger){
                  fooT.current.ScrollTrigger.kill();
                }
                if(protime.current){
                  protime.current.kill()
                }
                if(imgPara.current){
                  imgPara.current.revert();
                }
                if (ScrollTrigger.getById("pr0")){
                  ScrollTrigger.getById("pr0").kill()
                 }
                 if (ScrollTrigger.getById("pr1")){
                  ScrollTrigger.getById("pr1").kill()
                 }
                 if (ScrollTrigger.getById("pr2")){
                  ScrollTrigger.getById("pr2").kill()
                 }

                // mymb.current.kill();
               
               }
           }
  }, [resetLoco, isMobile,])
  // useEffect(()=>{
  //   document.querySelector("#viewport").style.transform="none";
  //           gsap.set(el.current, {
  //             clearProps: "all"
  //           })
  // },[isMobile])
  const handleAside =(ev)=>{
    // console.log((ev.clientX/ev.target.getBoundingClientRect().width -.5 )* 10)
  gsap.to(q(".sec-grid-contain"),{
    // perspective:600,
    rotateY: ()=> (ev.clientX/ev.target.getBoundingClientRect().width -.5 )* 10,
    rotateX: ()=> -(ev.clientY/ev.target.getBoundingClientRect().height -.5 )* 10,
    duration:.6,
    ease: "power2.Out",
  })
  }
  const leaveAside =()=>{
    gsap.to(q(".sec-grid-contain"),{
      rotateX:0,
      rotateY:0,
      // delay:.1,
      duration:.6,
      // delay:.4,
      ease: "Power3.out",
    })
  }
  
const [togglevr,settogglevr] = useState(true)
// const [overEx,setoverEx] = useState(false)

// const handleEx = (t)=>{
//   if (t === "o")setoverEx(true)
//   else setoverEx(false)
// }
  const handleVR =(t)=>{

    if(t === "l") { settogglevr(true)}
    else if(t === "c"){settogglevr(pr => !pr)}
  }
  useEffect(()=>{
    if(togglevr){
    gsap.to(q(".frontlayer"),{
      display:()=>  "flex",
      duration:()=>  .1,
    })
    changePointer({hover:false,})
    }
    else {
      gsap.to(q(".frontlayer"),{
        display:()=>  "none",
        duration:()=>  .1,
      })
      changePointer({pointOut: true})
    }
  },[togglevr])
  const [init,setinit]=useState(false);
  useEffect(()=>{
   if(isMobile) { return;}
    if (init) {
      setinit(false)
    } else {

    const spans = q(".h1 h1 .headSpan");
    
    gsap.to(spans,{
      y:-200,
      duration:.68,
      ease: 'power1.in',
    })
  }
  },[transition, isMobile])
  

  return( 
    <>
    { initial && <Loader val = {val}/> }
    <main id="viewport" ref={el} data-scroll-container >

      <Helmet>
        <title>Design Studio | AM-ARC | Architecture & Interior</title>
        <meta name="description" content="AM-ARC is a team of expert architects and designers specializing in creating stylish modern and minimal spaces." />
      </Helmet>
      
       
      

     

        <div id="sti" style={!isMobile ? {height: "190vh"}: {}}>
         <Head />
       </div>
      {/* <Suspense fallback={<div></div> }> */}
        {
          isMobile ?
          <MServHead txt="Design" />
          :
          ( <div className='tilt-wrap' onMouseMove={handleAside} onMouseLeave={leaveAside}>
            <section className="sec-grid-contain" >
            <div className="serv-head-contain">
              <div className="serv-text">
                <p>
                  <span>01</span>
                  Design
                </p>
              </div>
            </div>
            <div className="aside-wrapper">
              <div className="aside" 
              // data-img= { design}
              // style={{background: "url("+ `${text=== "Visualization"? viz : design}`+")", backgroundSize: "cover" }}
              >
                <canvas id="canva" ref={ref}/>
                {/* <div className="drkLayer" ></div> */}
                
              </div>
            </div>
          </section>
          </div> )
        }
     
        <Showcase showcasedata={homeInt} loadf={imgLoaded} dataHeight="200vh" sci="i1"/>
        {
          isMobile ?
            <MServHead txt="Visualization" />
          :
            // <ServHead num="02" text="Visualization" ref={ref} array={rArray}/>
            (
              <div className='tilt-wrap' onMouseMove={handleAside} onMouseLeave={leaveAside}>
              <section className="sec-grid-contain" >
              <div className="serv-head-contain">
                <div className="serv-text">
                  <p>
                    <span>02</span>
                    Visualization
                  </p>
                </div>
              </div>
              <div className="aside-wrapper">
                <div className="aside" 
                // data-img= { design}
                // style={{background: "url("+ `${text=== "Visualization"? viz : design}`+")", backgroundSize: "cover" }}
                >
                  <canvas id="canvaviz" ref={refviz}/>
                  {/* <div className="drkLayer" ></div> */}
                  
                </div>
              </div>
            </section>
            </div>
            )
        }

        <Showcase  showcasedata={homeExt} loadf={imgLoaded} dataHeight="300vh" sci="i2"/>
       
       {/* <div className="vr-3d" style={!isMobile?{width:"100vw", height:"100vh", marginBottom:"8%", marginTop:"-13%"}:{ width:"100vw", height:" 100vw", marginBottom:" -25%", textAlign:" center"}}>  */}
       {/* { !isMobile && <Spline scene="https://prod.spline.design/lcF306f0Mjrv0cz8/scene.splinecode" /> }
       {  isMobile && <img src={vrimg} />} */}
    
        {/* </div> */}
        <Oculus 
        trigID="oculusTrig"
        rerun={rerun} 
        objID="57016588-a7c0-44e9-9475-e4cb308556ba"
        sceneID="https://prod.spline.design/4RcOVTxaOgN7rE-1/scene.splinecode"
        />
        <div className='vr-home'>

          <iframe
                // onMouseLeave ={()=>handleVR("l")}
                  src="vr/03-Home/Output/"
                  className="vr-item" >
          </iframe>
          <div className='frontlayer' onClick={()=>handleVR("c")}  >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 950.47 1101.42">
              <defs>
                {/* <style>.cls-1,.cls-2{fill:#fff;}.cls-2{stroke:#1d1d1b;stroke-miterlimit:10;stroke-width:2px;}</style> */}
              </defs><g id="Layer_2" data-name="Layer 2">
              <g id="Capa_2" data-name="Capa 2">
              <path className="cls-1" d="M946.87,330.05c.07-.19.14-.38.2-.57,0,.14-.09.27-.14.41Z"/>
              <path className="cls-1" d="M947.88,324.63h0c0,.26,0,.52,0,.79s0,.36,0,.54,0,.31-.05.47,0,.38-.08.56-.07.4-.11.59a12.26,12.26,0,0,1-.51,1.89c-.06.19-.13.38-.2.57s-.22.55-.34.81-.11.22-.17.33a7.16,7.16,0,0,1-.4.78l0,0c-.17.3-.35.6-.54.89a8.68,8.68,0,0,1-.56.79l-.24.32c-.21.26-.42.51-.65.75a.1.1,0,0,1,0,.05q-.36.39-.75.75l-.43.4L831,433.18a15,15,0,1,1-19.7-22.62l81.46-70.93H620a15,15,0,0,1,0-30H892.8l-81.46-70.92A15,15,0,0,1,831,216.08l111.69,97.24.43.4q.39.36.75.75l0,0c.23.24.44.49.65.75l.24.32c.2.26.39.52.56.79a8.39,8.39,0,0,1,.5.81l.16.29c.12.21.23.42.33.64a2.4,2.4,0,0,1,.11.23c.11.22.2.45.29.68a1.34,1.34,0,0,1,.07.18c.08.2.15.4.22.6a11.74,11.74,0,0,1,.43,1.51c0,.12,0,.24.07.35s.08.4.11.59.06.39.08.59,0,.28.05.42,0,.38,0,.57S947.88,324.37,947.88,324.63Z"/><path className="cls-1" d="M946.93,319.37c.05.15.11.29.15.44-.07-.2-.14-.4-.22-.6A1.11,1.11,0,0,1,946.93,319.37Z"/>
              <path className="cls-1" d="M319.76,324.63a15,15,0,0,1-15,15H56.2l81.46,70.93A15,15,0,1,1,118,433.18L6.27,336l-.43-.4-.31-.3a14,14,0,0,1-1.93-2.36c-.15-.22-.29-.45-.42-.68a14.47,14.47,0,0,1-1.1-2.32c-.08-.21-.15-.43-.23-.65q-.18-.58-.33-1.2a14.19,14.19,0,0,1-.28-1.56L1.18,326c0-.18,0-.35,0-.53s0-.53,0-.79,0-.52,0-.79,0-.36,0-.53,0-.35.05-.52c.08-.56.18-1.12.31-1.67.09-.37.2-.74.31-1.1s.15-.44.23-.65.09-.23.13-.34.12-.3.19-.45.26-.57.4-.84.25-.46.38-.68.27-.46.42-.68a15.57,15.57,0,0,1,1-1.3c.13-.16.26-.31.4-.46s.38-.41.57-.6.2-.2.31-.3l.43-.4L118,216.08a15,15,0,1,1,19.7,22.63L56.2,309.63H304.76A15,15,0,0,1,319.76,324.63Z"/>
              <path className="cls-2" d="M946,670.48q0-17,0-34a83.06,83.06,0,0,0-17.65-51.66,84,84,0,0,0-46-29.68,85,85,0,0,0-20.74-2.63c-13.75,0-27.8,3.59-41.76,10.67l-6,3-1.19-6.61c-5.78-32-21.67-53.72-48.6-66.42a83,83,0,0,0-35.5-8.29c-15.28,0-31.08,4.62-47,13.75l-5,2.87-2.14-5.34c-10.17-25.36-26.72-42-50.6-50.84a82.88,82.88,0,0,0-28.8-5.3c-14.28,0-28.59,3.74-43.75,11.44L544,455.17V447c0-9.88,0-19.77.09-29.34.1-24.88.21-48.39-.39-72.28a96.58,96.58,0,0,0-6.15-31.78c-12.11-31.14-42.93-52.07-76.7-52.07-2,0-4,.08-6,.23-37.67,2.86-68.68,27.51-75.41,59.95-3.26,15.68-4.89,33.36-5,54.05-.26,48.51,0,97.85.24,145.57.09,18.14.18,36.9.25,55.35,0,2.56,0,5.12,0,7.82v11.59l-6.95-3c-4.24-1.8-8.31-3.64-12.25-5.42-8.2-3.71-16-7.22-23.88-9.76a80.55,80.55,0,0,0-24.73-3.87c-19.52,0-36.9,6.85-48.93,19.29C246,606,239.91,624,240.63,645.37c1,29.84.79,60.16.58,89.48-.17,23.88-.35,48.58.14,72.81.55,27.45,3,50.87,7.39,71.59,13,60.92,47.88,116.89,98.24,157.58S459.32,1100,521.74,1100.2l14.72.06c18.41.08,37.45.16,56.17.16,22.79,0,41.81-.12,59.86-.36,22.47-.3,40.43-1.6,56.52-4.09,64.25-9.93,123.93-43.64,168-94.94s68.54-115.32,68.82-180.34C946.09,770.63,946,719.71,946,670.48ZM909.9,825.87c-5.07,100.9-55.56,174.51-150.06,218.8-27.44,12.86-56,19.52-84.89,19.79-10.07.1-20.31.22-30.21.34-21.72.26-44.17.53-66.26.53-24.66,0-46.24-.34-66-1-104.45-3.74-197.11-76.74-225.34-177.51a306.34,306.34,0,0,1-10.71-74.28c-1.09-40.82-.87-82.31-.65-122.44.08-15.49.17-31.51.18-47.26,0-22.51,9.59-33.45,29.28-33.44a68,68,0,0,1,8.55.58c35,4.49,59.14,33.16,60,71.36.67,28.3.82,57.07,1,84.89.06,12,.13,24.39.24,36.57,0,1.34,0,2.68,0,4,0,2.52-.06,4.9.1,7.23.83,11.63,7.2,18.3,17.47,18.3h.59c10.14-.25,16.7-7.85,16.72-19.35.05-30.89,0-62.3,0-92.68q0-18,0-36.07V521.82c0-56.24,0-114.4,0-171.59,0-17.45,5.27-30.68,16.17-40.46,9.95-8.92,20.72-13.44,32-13.44a46.55,46.55,0,0,1,16.63,3.21c18.45,7.07,29.9,20.8,33.13,39.72A107.09,107.09,0,0,1,509,357.67v1.21c0,67.89,0,136.93.05,203.69q0,53.59,0,107.2v1.43a93.16,93.16,0,0,0,.36,10.56c1.13,10.19,7.75,16.52,17.27,16.52.45,0,.9,0,1.36,0,9.49-.57,15.89-7.9,15.91-18.22.05-22.08,0-44.53,0-66.25,0-28.38,0-57.72.09-86.58.13-29.89,21-51.59,49.67-51.59a59.93,59.93,0,0,1,7.75.52A47.69,47.69,0,0,1,642.1,517a135.21,135.21,0,0,1,.85,16.27c0,27.33,0,55.13,0,82q0,28.08,0,56.16a91,91,0,0,0,.44,10.87c1.23,9.85,7.82,16,17.2,16l1,0c9.52-.43,16.2-7.75,16.25-17.81.07-16.55.05-33.4,0-49.68,0-19.4,0-39.46.09-59.19.2-29.8,21.35-51.43,50.29-51.43.54,0,1.09,0,1.63,0,27.29.74,46.58,22,46.92,51.62.26,22.27.21,44.9.17,66.78,0,10.72,0,21.81,0,32.71v.39a89.36,89.36,0,0,0,.42,10.5c1.22,10.08,7.66,16.09,17.21,16.09h.89c9.5-.37,16.09-7.53,16.42-17.8.18-5.45.24-11,.29-16.44.13-12.2.26-24.81,1.73-37.2,2.77-23.42,22.68-39.78,48.42-39.78l1.29,0a47.93,47.93,0,0,1,46.53,41.16l.12.88a46.1,46.1,0,0,1,.68,7.12c0,19.26.14,38.88.31,57.85C911.7,737.28,912.11,782,909.9,825.87Z"/><path className="cls-1" d="M71.26,100.77a31.33,31.33,0,0,1-16.1,4.09,33.24,33.24,0,0,1-17.37-4.56,31.29,31.29,0,0,1-11.86-13A42.73,42.73,0,0,1,21.7,67.94a42.52,42.52,0,0,1,4.24-19.47A31.21,31.21,0,0,1,37.79,35.58,33.24,33.24,0,0,1,55.16,31a31.92,31.92,0,0,1,16.1,4A26.84,26.84,0,0,1,82,46.78h24.38a49.09,49.09,0,0,0-19-25.26c-9.12-6.22-19.9-9.38-32-9.38A56.58,56.58,0,0,0,27.1,19.25,52.15,52.15,0,0,0,7.26,39.09,57.45,57.45,0,0,0,0,67.94,57,57,0,0,0,7.26,96.7,52.22,52.22,0,0,0,27.1,116.46a56.55,56.55,0,0,0,28.22,7.11c12.24,0,23.05-3.12,32.12-9.29a48.81,48.81,0,0,0,18.9-25.34H82A27.24,27.24,0,0,1,71.26,100.77Z"/><path className="cls-1" d="M126.46,6.94V122.63h21.08V6.94Z"/><path className="cls-1" d="M190.34,3.57a14,14,0,0,0-18.7,0,11.83,11.83,0,0,0-3.71,8.86,11.81,11.81,0,0,0,3.71,8.86,12.21,12.21,0,0,0,4.2,2.67,14.25,14.25,0,0,0,5.15.9,13,13,0,0,0,9.35-3.57,11.83,11.83,0,0,0,3.71-8.86A11.83,11.83,0,0,0,190.34,3.57Zm-20.05,32.7v86.36h21.08V36.27Z"/><path className="cls-1" d="M251,106.12c-6.43,0-11.61-2.37-15.37-7S230,87.83,230,79.45s1.9-15.15,5.63-19.79,8.94-7,15.37-7a19.1,19.1,0,0,1,11.41,3.33,17.87,17.87,0,0,1,6.45,8.81h22.81c-2.42-9.32-7.11-16.68-13.93-21.88-7-5.32-15.91-8-26.58-8A44,44,0,0,0,229,40.38,39.18,39.18,0,0,0,213.91,56a43.13,43.13,0,0,0-4.08,10.91,55.65,55.65,0,0,0-1.37,12.59c0,8.92,1.83,16.82,5.45,23.49A39.05,39.05,0,0,0,229,118.51a44,44,0,0,0,22.14,5.54c10.56,0,19.48-2.78,26.5-8.26a39.8,39.8,0,0,0,14-21.65H268.86C266,102.09,260,106.12,251,106.12Z"/><path className="cls-1" d="M349.52,79.61l38-43.34H360.21l-30.08,38V6.94H309.06V122.63h21.07V84.48l30.39,38.15h27.34Z"/><path className="cls-1" d="M491.72,56.59V21.94H469.15V56.59H435.39v20.8h33.76V112h22.57V77.39h33.76V56.59Z"/>
              <path className="cls-1" d="M670.88,39.41a48.09,48.09,0,0,0-20.14-19.12c-8.67-4.47-18.86-6.73-30.28-6.73h-38V122.63h38c11.43,0,21.62-2.27,30.28-6.73a48.41,48.41,0,0,0,20.14-19C675.59,88.8,678,79.15,678,68.25S675.59,47.65,670.88,39.41Zm-24,55.84a30.54,30.54,0,0,1-11.6,7.2,46.73,46.73,0,0,1-15.56,2.41H603.56V31.17h16.11c11.65,0,20.79,3.31,27.16,9.85s9.61,15.69,9.61,27.23S653.21,88.88,646.83,95.25Z"/>
              <path className="cls-1" d="M728.49,38.88a30.65,30.65,0,0,0-10.94,10.71l-.93,1.51V36.27H695.54v86.36h21.08v-43c0-8.2,1.83-14,5.44-17.39s9-5,16-5h5.34V35A30.42,30.42,0,0,0,728.49,38.88Z"/>
              <path className="cls-1" d="M822.32,36.27V49.75l-.9-1.23a34.57,34.57,0,0,0-11.58-9.79A35.37,35.37,0,0,0,793,34.85a37.93,37.93,0,0,0-20,5.44A38.41,38.41,0,0,0,758.8,55.87a45.85,45.85,0,0,0-3.92,10.88,56.69,56.69,0,0,0-1.31,12.38,51.13,51.13,0,0,0,5.23,23.51A39.41,39.41,0,0,0,773,118.45a36.84,36.84,0,0,0,19.84,5.6,35.62,35.62,0,0,0,17-4,32.52,32.52,0,0,0,11.57-10l.91-1.32v13.88h21.24V36.27Zm-3.21,57.22a22.86,22.86,0,0,1-8.71,9,23.38,23.38,0,0,1-11.76,3.14,22.2,22.2,0,0,1-11.53-3.23,23.85,23.85,0,0,1-8.7-9.25,29,29,0,0,1-3.29-14,28,28,0,0,1,3.3-13.88,22.69,22.69,0,0,1,20.22-12,23.29,23.29,0,0,1,11.76,3.15,22.8,22.8,0,0,1,8.71,9,25.06,25.06,0,0,1,2.4,6.45,33.78,33.78,0,0,1,.81,7.59A29,29,0,0,1,819.11,93.49Z"/>
              <path className="cls-1" d="M929.23,36.27V49.83l-.91-1.32a31.25,31.25,0,0,0-11.49-9.85,36.29,36.29,0,0,0-17-3.81,37.94,37.94,0,0,0-20,5.44,38.47,38.47,0,0,0-14.16,15.58,50.25,50.25,0,0,0-5.23,23.26,51.13,51.13,0,0,0,5.23,23.51A39.07,39.07,0,0,0,880,118.44a37.13,37.13,0,0,0,19.92,5.61,34.68,34.68,0,0,0,16.86-4,33.17,33.17,0,0,0,11.58-10.1l.91-1.31v15.16c0,7.88-2.06,13.86-6.14,17.78s-9.45,5.9-16,5.9a26.64,26.64,0,0,1-14.22-3.63,16.92,16.92,0,0,1-7.6-9.46h-21a31.72,31.72,0,0,0,13.21,22.75c7.82,5.69,18,8.57,30.22,8.57,9.11,0,17-1.86,23.41-5.53a35.94,35.94,0,0,0,14.46-14.93,46.56,46.56,0,0,0,4.84-21.45V36.27ZM926,93.49a22.86,22.86,0,0,1-8.71,9,23.38,23.38,0,0,1-11.76,3.14A22.2,22.2,0,0,1,894,102.42a23.85,23.85,0,0,1-8.7-9.25,29,29,0,0,1-3.29-14,28,28,0,0,1,3.3-13.88,22.69,22.69,0,0,1,20.22-12,23.29,23.29,0,0,1,11.76,3.15,22.8,22.8,0,0,1,8.71,9,24.7,24.7,0,0,1,2.4,6.45,33.78,33.78,0,0,1,.81,7.59A29,29,0,0,1,926,93.49Z"/></g></g>
              </svg>
          </div>
              <div className="exit-vr" onClick={()=>handleVR("c")} >
                <img src={closevsg}/>
              </div>
        </div>
        {
          isMobile && <div className='te-text'> Featured Videos</div>
        }
        <Featured/>
       
        <Oculus 
        trigID="HowTrig"
        rerun={rerun} 
        objID="0bd3b87e-e1c3-47a5-b643-32405c2e58cb"
        sceneID="https://prod.spline.design/N1E4Zpd8824wJ0Qb/scene.splinecode"
        />
        <Process rerun={rerun} />
       
        
      
        {
          isMobile?  <FooterMB />: <Footer /> 
        }
       
        {/* <TestingCompo/> */}

      {/* </Suspense> */}


    </main>
    </>
  )
}

export default HomePage
