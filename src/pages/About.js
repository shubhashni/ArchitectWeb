import React, { useEffect, lazy, Suspense, useRef, useLayoutEffect,useState } from 'react'
import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../css/component/./about.scss'
// import AbHead from '../components/abouthead.js'
// import { FeaturedProducts, Hero, Services, Contact } from '../components'
import { useAppContext } from "../contexts/Context.js";
import Loading from "./Loading.js"
import useLoco from '../utils/useLoco';
// const AbHead = lazy( () => import('../components/abouthead.js'))
import About from '../components/About.js'
import Helmet from 'react-helmet';
const Footer = lazy( () => import('../components/footer.js'))
const FooterMB = lazy( () => import('../components/footermb.jsx'))




// const Loading = lazy( () => import('./Loading.js'))
function AboutPage() {
  gsap.registerPlugin(ScrollTrigger);
  const { isMobile, transition, resetLoco, setReset, setVid, changePp, setLoading, changePT } = useAppContext();
  const view = useRef();
  useLoco(!isMobile);
  const el = useRef();
  const imgTl = useRef();
  const loadingTL = useRef();
  const philTl = useRef();
  const fooT = useRef();
  const tl = useRef();
  const [ini, setinit] = useState(true);

  const q = gsap.utils.selector(el);
  useEffect(() => {
    if (ini) {
      setinit(false);
    } else {
      const elems = q("h2 div, .image-wrap.fc");
      // const he3 = q(".h2 h3")
      // const links = q(".h2 button")
      gsap.to(elems, {
        y: -200,
        stagger: .03,
        duration: .65,
        ease: 'power2.in',
      });
    }
  }, [transition]);

  useLayoutEffect(() => {
    const texts = q(".texts-wrap h2 div,.texts-wrap h5");
    const spans = q("h2 div");
    gsap.set(texts, { autoAlpha: 0 });

    gsap.set(q(".mem-row"), {
      xPercent: (index, target) => (index === 0 ? -5 : 5),
    });
    !isMobile && gsap.set(q(".image-wrap")[0], {
      // yPercent: 55, 
      yPercent: 35,
      scale: 1.4,
      autoAlpha: 0,
      transformOrigin: "top center",
    });
    gsap.set(spans, {
      autoAlpha: 0,
      y: 30,
    });
    changePT("other");
    setLoading("loading");

    // gsap.set(q(".texts-wrap h5"),{ autoAlpha:0})
    return () => { };
  }, [resetLoco]);
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    setTimeout(() => {
      setReset();
    }, 100);

  }, [isMobile]);
  useEffect(() => {
    // setLoading("loading");
    // changePT("other")
    setVid("vid");
    const pis = q(".text-wrap2 p");
    const texts = q(".texts-wrap h2 div,.texts-wrap h5,.texts-wrap p");
    const imgTrig = q(".image-wrap img");
    const spans = q("h2 div");
    if (!isMobile) {
      changePp("other");
      if (loadingTL.current) {
        loadingTL.current.progress(0);
      }
      if (tl.current) {
        tl.current.progress(0);
      }
      if (philTl.current) {
        philTl.current.progress(0);
      }
      gsap.set(pis, {
        clearProps: "transform"
      });
      gsap.set(imgTrig[1], { autoAlpha: 1 });
      gsap.set(
        q(".darkLayer"), { autoAlpha: 0 });

      loadingTL.current = gsap
        .timeline({})
        .to(
          spans,
          {
            y: 0,
            duration: 0.6,
            stagger: {
              amount: 0.05,
              ease: "power4",
            },
          },
          0.15
        )
        .to(
          spans,
          {
            autoAlpha: 1,
            duration: 1.2,
            stagger: {
              amount: 0.05,
              ease: "power4",
            },
          },
          0.15
        )
        .to(
          q(".image-wrap"),
          {
            yPercent: 0,
            autoAlpha: 1,
            scale: isMobile ? 1 : 1.5,
            duration: 0.8,
            // stagger: 0.13,
            ease: "power4",
            onComplete: () => ScrollTrigger.refresh(),
          },
          0.25
        );

      // imgTl.current = gsap.timeline({
      //   scrollTrigger: {
      //     scroller: "[data-scroll-container]",
      //     trigger: imgTrig,
      //     start: () => "top center-=10%",
      //     end: () => "bottom top",
      //     //  markers:true,
      //     invalidateOnRefresh: true,
      //     onEnter: ({ direction }) => fadeOut(direction),
      //     onLeaveBack: ({ direction }) => fadeOut(direction),
      //   },
      // });
      // const fadeOut = (direction) => {
      //   return (
      //     gsap.to(spans, {
      //       autoAlpha: () => (direction === 1 ? 0 : 1),
      //       duration: 0,
      //     }),
      //     gsap.to(texts[2], {
      //       autoAlpha: () => (direction === 1 ? 1 : 0),
      //       duration: 0,
      //     }),
      //     gsap.to(
      //       q(".darkLayer"),
      //       {
      //         autoAlpha: () => (direction === 1 ? 1 : 0),
      //         duration: 0,
      //       },
      //       "<"
      //     )
      //   );
      // };
      // const images = q(".image-wrap");
      // images.forEach((img, i) => {
      //   console.log(img.offsetTop - img.offsetHeight / 5, img.offsetTop, img);
      //    tl.current = gsap
      //     .timeline({
      //       scrollTrigger: {
      //         scroller: "#viewport",
      //         start: () =>
      //           "top+=" +
      //           (img.offsetTop +
      //             (img.offsetHeight / 4) * (images.length - 1 - i)) +
      //           " bottom",
      //         end: () => "bottom+=" + img.offsetTop + " bottom",
      //         scrub: true,
      //         id: "imgs",
      //         invalidateOnRefresh: true,
      //         // markers:true,
      //       },
      //     })
      //     .to(img, { scale: 1 });
      // });
      const h5selector = q(".texts-wrap h5");
      const h1select = q("h1");
      const images = q(".image-wrap");
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            scroller: "#viewport",
            trigger: images[0],
            start: () => "top+=17% bottom",
            end: () => "bottom-=20% top",
            scrub: true,
            id: "imgs" + 0,
            invalidateOnRefresh: true,
            // markers:true,
          },
        })
        .fromTo(images[0], { scale: 1.5 }, { scale: 1, duration: 8 }, "0")
        .fromTo(h1select, {
          autoAlpha: 1,
        }, {
          autoAlpha: () => 0,
          duration: 0,
        }, ">-3")
        .to(h5selector, {
          autoAlpha: () => 1,
          duration: 0,
        }, "<")
        .to(
          q(".darkLayer"),
          {
            autoAlpha: () => 1,
            duration: 0,
          },
          ">"
        )
        .to(
          h5selector,
          {
            autoAlpha: 0,
            duration: 3.3,
            ease: "Power3.Out",
          }, ">5"
        );
      var tl2 = gsap
        .timeline({
          scrollTrigger: {
            scroller: "#viewport",
            trigger: images[1],
            start: () => "top bottom",
            end: () => "center-=20% top",
            scrub: true,
            id: "imgs" + 1,
            invalidateOnRefresh: true,
            // markers:true,
          },
        })
        .to(images[1], { scale: 1, duration: 6 })
        .to(images[1], { autoAlpha: 0, duration: 2 });

      const memtl = gsap
        .timeline({
          scrollTrigger: {
            scroller: "[data-scroll-container]",
            trigger: q(".members-wrap"),
            start: () => "top-=5% bottom",
            end: () => "bottom+=5% top",
            // markers: true,
            scrub: true,
            invalidateOnRefresh: true,
          },
        })
        .to(q(".mem-row"), {
          xPercent: (index, target) => (index === 0 ? 5 : -5),
          duration: 20,
          ease: "none",
        })
        .to(
          texts[2],
          {
            autoAlpha: 0,
            duration: 3.3,
            ease: "Power3.Out",
          },
          "<4"
        );
      //  philTl.current = gsap
      //   .timeline({
      //     duration: 10,
      //     scrollTrigger: {
      //       scroller: "#viewport",
      //       trigger:q(".text-wrap2.pi"),
      //       start: () => "bottom bottom-=5%",
      //       end: () => "bottom+=10% top",
      //       // markers: true,
      //       scrub: true,
      //     },
      //   })
      //   .to(
      //     imgTrig[1],
      //     {
      //       autoAlpha: 0,
      //       duration:1.1,
      //     },
      //     0
      //   )
      //   .to(
      //     pis[0],
      //     {
      //       autoAlpha: 1,
      //       duration: 0.8,
      //     },
      //     "<.34"
      //   )
      //   .to(
      //     pis[0],
      //     {
      //       y: "-65vh",
      //       // height:100,
      //       duration: 4,
      //     },
      //     "<.2"
      //   )
      //   .to(
      //     pis[0],
      //     {
      //      autoAlpha:0,
      //       duration: 1,
      //     },
      //     "<55%"
      //   )
      //   .to(
      //     pis[1],
      //     {
      //      autoAlpha:1,
      //       duration: .8,
      //     },
      //     "<60%"
      //   )
      //   .to(
      //     pis[1],
      //     {
      //       y: "-70vh",
      //       duration: 4,
      //     },
      //     "<.2"
      //   )
      //   .to(
      //     pis[1],
      //     {
      //      autoAlpha:0,
      //       duration: 1,
      //     },
      //     "<45%"
      //   );
      const phils = q(".phil");
      phils.forEach((p, i) => {
        philTl.current = gsap
          .timeline({
            duration: 10,
            scrollTrigger: {
              scroller: "#viewport",
              trigger: p,
              start: () => "center bottom",
              end: () => "center top",
              // markers: true,
              scrub: true,
            },
          })
          .to(p, {
            autoAlpha: 1,
            duration: 3,
            ease: "power2.in"
          }, 0)
          .to(p, {
            autoAlpha: 0,
            duration: 3,
            ease: "power2.out"
          }, 7);
      });
      const changeBg = (direction) => {
        gsap.to(q(".backgr"), {
          autoAlpha: () => (direction === 1 ? 1 : 0),
          duration: 1
        });
        direction === 1 ? changePp("Contact") : changePp("other");
      };
      fooT.current = gsap
        .timeline({
          scrollTrigger: {
            scroller: "#viewport",
            trigger: q(".footer-sec.fot"),
            start: () => "center-=8% center-=8%",
            end: () => "bottom bottom",
            // markers: true,
            id: "foot",
            onLeaveBack: ({ direction }) => changeBg(direction),
            onEnter: ({ direction }) => changeBg(direction),
          },
        })
        .to(q(".trig"), {
          autoAlpha: 1,
          duration: 1,
        }, "<");




      return () => {
        loadingTL.current.kill();
        if (tl.current) {
          tl.current.kill();
        }
        if (tl.current.ScrollTrigger) {
          tl.current.ScrollTrigger.kill();
        }
        // imgTl.current.kill();
        // if(imgTl.current.ScrollTrigger){
        //   imgTl.current.ScrollTrigger.kill();
        // }
        if (memtl) { memtl.kill(); };
        if (memtl.ScrollTrigger) {
          memtl.ScrollTrigger.kill();
        }
        philTl.current.kill();
        if (philTl.current.ScrollTrigger) {
          philTl.current.ScrollTrigger.kill();
        }
        if (ScrollTrigger.getById("imgs")) {
          ScrollTrigger.getById("imgs").kill();
        }
        fooT.current.kill();
        if (fooT.current.ScrollTrigger) {
          fooT.current.ScrollTrigger.kill();
        }

      };
    }
    else if (isMobile) {
      el.current.style.transform = "none";
      gsap.set(q(".texts-wrap"), {
        transform: "none"
      });
      if (loadingTL.current) {
        loadingTL.current.kill();
      }
      gsap.set(q(".image-wrap")[1], { autoAlpha: 1 });
      // if(fooT.current){
      //   fooT.current.progress(0)
      // }
      const texts = q(".texts-wrap h2,.texts-wrap h5,.texts-wrap p");
      const spans = q(".mb p,h2 div ");
      // gsap.set(q(".text-wrap2.pi p"),{
      //   fontSize: "35px"
      // } )
      gsap.set(q(".image-wrap"), { scale: 1, yPercent: 10, });
      gsap.set(pis[1], { y: "15rem" });
      gsap.set(q(".darkLayer"), { autoAlpha: 0 });
      loadingTL.current = gsap
        .timeline({})
        .to(
          spans,
          {
            y: 0,
            duration: 0.6,
            // stagger: {
            //   amount: 0.1,
            //   ease: "power2.Out",
            // },
          },
          0.4
        )
        .to(
          spans,
          {
            autoAlpha: 1,
            duration: 1.2,
            // stagger: {
            //   amount: 0.1,
            //   ease: "power2.Out",
            // },
          },
          0.4
        )
        .fromTo(q(".image-wrap")[0], {
          y: 20,
          autoAlpha: 0
        }, {
          y: 0,
          autoAlpha: 1,
          duration: .7,
        }, 0.8);

      imgTl.current = gsap.timeline({
        scrollTrigger: {
          trigger: imgTrig,
          start: () => "top center-=30%",
          end: () => "bottom top",
          //  markers:true,
          invalidateOnRefresh: true,
          onEnter: ({ direction }) => fadeOut(direction),
          onLeaveBack: ({ direction }) => fadeOut(direction),
        },
      });

      const fadeOut = (direction) => {
        return (
          gsap.to(spans, {
            autoAlpha: () => (direction === 1 ? 0 : 1),
            duration: 0,
          }),
          gsap.to(texts[2], {
            autoAlpha: () => (direction === 1 ? 1 : 0),
            duration: 0,
          }),
          gsap.to(
            q(".darkLayer"),
            {
              autoAlpha: () => (direction === 1 ? 1 : 0),
              duration: 0,
            },
            "<"
          )
        );
      };

      const memtl = gsap
        .timeline({
          scrollTrigger: {
            trigger: q(".members-wrap"),
            start: () => "top-=5% bottom",
            end: () => "bottom+=5% top",
            // markers: true,
            scrub: true,
            invalidateOnRefresh: true,
          },
        })
        .to(q(".mem-row"), {
          xPercent: (index, target) => (index === 0 ? 5 : -5),
          duration: 20,
          ease: "none",
        })
        .to(
          texts[2],
          {
            autoAlpha: 0,
            duration: 3.3,
            ease: "Power3.Out",
          },
          "<5"
        );
      //  philTl.current = gsap
      //   .timeline({
      //     duration: 10,
      //     scrollTrigger: {
      //       trigger:q(".text-wrap2.pi"),
      //       start: () => "bottom bottom-=5%",
      //       end: () => "bottom+=10% top",
      //       markers: true,
      //       scrub: true,
      //       // pin:true,
      //       // pinReparent:true,
      //       // invalidateOnRefresh: true,
      //     },
      //   })
      //   .to(
      //     imgTrig[1],
      //     {
      //       autoAlpha: 0,
      //       duration:2.5,
      //     },
      //     ".8"
      //   )
      //   .to(
      //     pis[0],
      //     {
      //       autoAlpha: 1,
      //       duration: 0.8,
      //     },
      //     "<.34"
      //   )
      //   .to(
      //     pis[0],
      //     {
      //       y: "-10vh",
      //       // height:100,
      //       duration: 10,
      //     },
      //     "<.2"
      //   )
      //   .to(
      //     pis[0],
      //     {
      //      autoAlpha:0,
      //       duration: 1,
      //     },
      //     "<75%"
      //   )
      //   .to(
      //     pis[1],
      //     {
      //      autoAlpha:1,
      //       duration: .8,
      //     },
      //     "<60%"
      //   )
      //   .to(
      //     pis[1],
      //     {
      //       y: "-7vh",
      //       duration: 10,
      //     },
      //     "<.2"
      //   )
      //   .to(
      //     pis[1],
      //     {
      //      autoAlpha:0,
      //       duration: 1,
      //     },
      //     "<45%"
      //   );
      const phils = q(".phil");
      phils.forEach((p, i) => {
        philTl.current = gsap
          .timeline({
            duration: 10,
            scrollTrigger: {
              // scroller: "#viewport",
              trigger: p,
              start: () => "center bottom",
              end: () => "center top",
              // markers: true,
              scrub: true,
            },
          })
          .to(p, {
            autoAlpha: 1,
            duration: 3,
            ease: "power2.in"
          }, 0)
          .to(p, {
            autoAlpha: 0,
            duration: 3,
            ease: "power2.out"
          }, 7);
      });
      const changeBg = (direction) => {
        gsap.to(q(".backgr"), {
          autoAlpha: () => (direction === 1 ? 1 : 0),
          duration: 1
        });
        direction === 1 ? changePp("Contact") : changePp("other");
      };
      fooT.current = gsap
        .timeline({
          delay: .2,
          scrollTrigger: {
            trigger: q(".footer-sec.fot"),
            start: () => "top-=8% center-=8%",
            end: () => "bottom bottom",
            // markers: true,
            id: "foot",
            onLeaveBack: ({ direction }) => changeBg(direction),
            onEnter: ({ direction }) => changeBg(direction),
          },
        })
        .to(q(".trig"), {
          autoAlpha: 1,
          duration: 1,
        }, "<");

      return () => {
        loadingTL.current.kill();
        imgTl.current.kill();
        if (imgTl.current.ScrollTrigger) {
          imgTl.current.ScrollTrigger.kill();
        }
        if (memtl) { memtl.kill(); };
        if (memtl.ScrollTrigger) {
          memtl.ScrollTrigger.kill();
        }
        philTl.current.kill();
        if (philTl.current.ScrollTrigger) {
          philTl.current.ScrollTrigger.kill();
        }
        if (ScrollTrigger.getById("imgs")) {
          ScrollTrigger.getById("imgs").kill();
        }
        fooT.current.kill();
        if (fooT.current.ScrollTrigger) {
          fooT.current.ScrollTrigger.kill();
        }

      };
    }

  }, [resetLoco, isMobile]);



  return (
    <main ref={el} id="viewport" data-scroll-container>

      <Helmet>
        <title>About | AM-ARC</title>
        <meta name="description" content="About our Design Studio" />
      </Helmet>

      <About />
      <Suspense fallback={<Loading />}>
        {/* <AbHead/> */}
        {!isMobile ? <Footer /> : <FooterMB />}
      </Suspense>

    </main>
  );
}

export default AboutPage
