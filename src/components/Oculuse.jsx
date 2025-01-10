
import { useRef, useLayoutEffect,useState,useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useAppContext } from '../contexts/appcontext';
// import { useEffect } from 'react/cjs/react.production.min';

// import { useEffect } from 'react/cjs/react.production.min';
export default function Oculuse({rerun,objID, sceneID,trigID}) {
  gsap.registerPlugin(ScrollTrigger);
  const oculus = useRef(null);
  const sceneObjPos = useRef(null)
  const sceneObjRotation = useRef(null)
  const sceneObjScale = useRef(null)
  const el = useRef();
  const q = gsap.utils.selector(el);
  const {isMobile,resetLoco} = useAppContext();
  const [load,setLoad] = useState(false)
  function onLoad(spline) {
    const obj = spline.findObjectById(objID);
    // or
    // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');

    // save it in a ref for later use
    oculus.current = obj;
  
    setLoad(true)
    // sceneObjPos.current = {...obj.current.position}
    // sceneObjRotation.current = {...obj.current.rotation}
    // sceneObjScale.current = {...obj.current.scale}
  }

  useLayoutEffect(()=>{
    if (!oculus.current) return;

    if(!isMobile){
    setTimeout(() => {
      if( oculus.current  ) {
        sceneObjPos.current = {...oculus.current.position}
        sceneObjRotation.current = {...oculus.current.rotation }
        sceneObjScale.current = {...oculus.current.scale}
      }
  
  
    const rot={
      x:sceneObjRotation.current._x - 0
    }
  // console.log("running 3d")
      const nextRotation = {
        x: sceneObjRotation.current._x + rot.x,
      }
      // gsap.to(rot,{
      //   x:()=> "+= .5",
      //   // duration:5,
      //   onUpdate: ({ progress }) =>  {
  
      //     oculus.current.rotation.x = rot.x
      //   },
      //   scrollTrigger:{
      //     trigger:el.current,
      //     scroller: document.querySelector("#viewport"),
      //     start:"top center",
      //     end:"bottom top",
      //     scrub:true,
      //     // markers:true,
      //    },
      //    })
  
      ScrollTrigger.create({
        trigger:el.current,
         scroller: document.querySelector("#viewport"),
        start:()=>"top center",
        end:()=>"bottom top",
        scrub:true,
        id:trigID,
        // markers:true,
        onUpdate: (e) => {
  
          // console.log(e)
  
          const startRotation = {
            x: oculus.current.rotation.x
          }
          const endRotation = {
            x: sceneObjRotation.current._x + (e.progress * 0.5)
          }
  
          if ( oculus.current ) {
            gsap.to( startRotation, {
              x: endRotation.x,
              ease: 'expo.out',
              duration: 0.5,
              onUpdate: () => {
                oculus.current.rotation.x = startRotation.x
              }
            })
          }
  
        }
      })
      return ()=>{
         if (ScrollTrigger.getById(trigID)){
          ScrollTrigger.getById(trigID).kill()
         }
      }
    }, 501);
  }
  if(isMobile){
    return ()=>{
      if (ScrollTrigger.getById(trigID)){
       ScrollTrigger.getById(trigID).kill()
      }
   }
  }
   
  },[load,resetLoco, isMobile])

  useEffect(()=>{
    if(load) return;
    
    gsap.set(q("canvas"),{
      scale: window.innerWidth/ 1500 + ( 1 - window.innerWidth/ 1500 )/2,
    })
    const onWindowResize =(e)=>{
      // console.log(window.innerWidth/ 1500)
      gsap.set(q("canvas"),{
        scale: window.innerWidth/ 1500 + ( 1 - window.innerWidth/ 1500 )/2,
      })
    }
        window.addEventListener('resize', onWindowResize);

        
        return ()=>{
          window.removeEventListener('resize',onWindowResize )
        }
  },[load])
 

  const calcPosValues = (e) => {

    const { width, height, left, top } = e.currentTarget.getBoundingClientRect()
  
    const centerPosX = left + ( width / 2 )
    const centerPosY = top + ( height / 2 )
  
    const xOffset = ( e.clientX - centerPosX ) / ( width / 2 ) * 10
    const yOffset = ( e.clientY - centerPosY ) / ( height / 2 ) * 10
  
    const rotationX = xOffset / 40
    const rotationY = yOffset / 67.5
  
    return {
      xOffset,
      yOffset,
      rotationX,
      rotationY
    }
  }
  const handleScene = (e) => {
    if ( !oculus.current ) return

    const { 
      xOffset,
      yOffset,
      rotationX,
      rotationY 
    } = calcPosValues(e)

    const nextPosition = {
      x: sceneObjPos.current.x + (-xOffset),
      y: sceneObjPos.current.y + (-yOffset)
    }

    const startPosition = {
      x: oculus.current.position.x,
      y: oculus.current.position.y
    }

    const nextRotation = {
      x: sceneObjRotation.current._x + rotationY,
      y: sceneObjRotation.current._y + rotationX
    }

    const startRotation = {
      x: oculus.current.rotation.x,
      y: oculus.current.rotation.y
    }
 
    gsap.to( startRotation, {
      x: nextRotation.x,
      y: nextRotation.y,
      ease: 'expo.outIn',
      onUpdate: () => {
        oculus.current.rotation.x = startRotation.x
        oculus.current.rotation.y = startRotation.y
      },
      duration: 0.5,
      overwrite: true
    })

    gsap.to( startPosition, {
      x: nextPosition.x,
      y: nextPosition.y,
      ease: 'expo.outIn',
      onUpdate: () => {
        oculus.current.position.x = startPosition.x
        oculus.current.position.y = startPosition.y
      },
      duration: 0.5,
      overwrite: true
    })

  }

  return (
    <>
    {isMobile?(
      <div className={trigID + " mb"}></div>
    ):(
      <div ref={el} className="oculus-con" onMouseMove={handleScene} style={trigID === "oculusTrig"?{marginTop: "-7rem", marginBottom:"1rem",}: null}>
      <Spline
        scene={sceneID}
        onLoad={onLoad}
      />
    </div>
    )}
    </>
  );
}