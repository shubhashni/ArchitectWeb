import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import Button from "./Button.js";
import MButton from "./MobileButton/MButton";
import SecondaryBtn from "./SecondaryBtn/SecondaryBtn";
import { useAppContext } from "../contexts/appcontext.js";
import whats from "../assets/whs.svg";
import be from "../assets/be.svg";
import up from "../assets/up.svg";
import insta from "../assets/insta.svg";
import tele from "../assets/telegram.svg";
import { lgScreens, smScreens } from "../utils/contactData";
import { Link, useLocation } from "react-router-dom";

import ReCAPTCHA from "react-google-recaptcha";

import gsap from "gsap";

import movingLine from "../assets/light-line.svg";

import Thanks from "./Thanks/Thanks.js";

const MLine = `url(${movingLine})`;

let TL;

const Contact = ({ conn }) => {
  const { setReset } = useAppContext();
  const { isMobile, changePointer } = useAppContext();
  const location = useLocation();
  const fromcontact = location.state?.contact;
  const copycl = useRef();
  const [emailHover, setEmHover] = useState(false);
  const labelRef = useRef(null);
  const el = useRef();
  const q = gsap.utils.selector(el);


  const recap = useRef(null);

  const [con, setCon] = useState(conn);

  const [contactData, setContactData] = useState({
    needs: [],
    docs: [],
    budgets: [],
  });
  useLayoutEffect(() => {
    const sec1 = q(".sec-form h6, .sec-form .tabs-holder");
    gsap.set(q("form"), { autoAlpha: 0, yPercent: 5 });
    gsap.set(sec1, { autoAlpha: 0, yPercent: 30 });
    return () => {};
  }, []);
  useEffect(() => {
    const sec1 = q(".sec-form h6, .sec-form .tabs-holder, form");
    gsap.to(sec1, {
      autoAlpha: 1,
      stagger: 0.08,
      duration: 1.5,
      delay: 0.6,
    });
    gsap.to(sec1, {
      yPercent: 0,
      stagger: 0.08,
      duration: 0.6,
      delay: 0.6,
    });
  }, []);

  useEffect(() => {
    if (isMobile) {
      setContactData(smScreens);
    } else {
      setContactData(lgScreens);
    }

    return () => {};
  }, [isMobile]);

  
  const [showThanks, setShowThanks] = useState(false);
 const [textEHC, setTEHC]= useState("");
  // Form Data
  const [sendingForm, setSendingForm] = useState(false);
  const [formValid, setFormValid] = useState(false);

  // Inputs
  const [activeNeeds, setActiveNeeds] = useState([]);
  const [activeDocs, setActiveDocs] = useState([]);
  const [activeBudg, setActiveBudg] = useState(-1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  useEffect(()=>{

    setTimeout(() => {
      if( window && window.dvbScroll ) window.dvbScroll.update()
    }, 200);
   
 },[textEHC])
  const [attachments, setAttachments] = useState([]);

  const [formErr, setFormErr] = useState({
    name: "",
    email: "",
  });

  const [sendText, setSendTxt] = useState("Send request");
  const [sendSm, setSendSm] = useState("Send");

  const inputHandler = (e) => {
    if (e.target.name === "name") {
      setFormErr({
        ...formErr,
        name: "",
      });
    }

    if (e.target.name === "email") {
      setFormErr({
        ...formErr,
        email: "",
      });
    }

    const type = e.target.name;
    const newS = { ...form, [type]: e.target.value };

    return setForm(newS);
  };

  const textAreaChange = (e) => {
    inputHandler(e);

    const textarea = e.target;
    const newHeight = Math.max(textarea.scrollHeight, 34);
    setTEHC(newHeight)
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + "px";
  };

  const removeAttach = (idx) => {
    const newAttachments = attachments.filter((attach, index) => index !== idx);
    setAttachments(newAttachments);
  };

  useEffect(() => {
    if (fromcontact) {
      setCon(true);
    }
  }, []);

  const toggleNeedDoc = (target, idx) => {
    if (target === "need") {
      const isNeedActive = activeNeeds.includes(idx);

      if (isNeedActive)
        setActiveNeeds(activeNeeds.filter((activeIdx) => activeIdx !== idx));
      else setActiveNeeds([...activeNeeds, idx]);
    } else if (target === "doc") {
      const isDocActive = activeDocs.includes(idx);

      if (isDocActive)
        setActiveDocs(activeDocs.filter((activeIdx) => activeIdx !== idx));
      else setActiveDocs([...activeDocs, idx]);
    } else if (target === "budg") {
      if (activeBudg === idx) setActiveBudg(-1);
      else setActiveBudg(idx);
    }
  };

  const sendContactForm = async () => {
    if (sendingForm) return;

    setFormErr({
      name: "",
      email: "",
    });

    if (!checkFields(true)) {
      return;
    }

    try {
      await recap.current.executeAsync();
    } catch (err) {
      console.log("Google recaptcha failed");
      return;
    }

    setSendingForm(true);
    cursorLoading(true);

    const ContactForm = {};

    ContactForm.name = form.name;
    ContactForm.email = form.email;

    if (form.message) ContactForm.message = form.message;

    if (con === false) {
      const { needs, docs, budgets } = contactData;

      if (activeNeeds) {
        const needsArr = needs.filter((val, idx) => activeNeeds.includes(idx));
        ContactForm.needs = needsArr.join(" - ");
      }

      if (activeDocs) {
        const docsArr = docs.filter((val, idx) => activeDocs.includes(idx));
        ContactForm.docs = docsArr.join(" - ");
      }

      if (activeBudg) {
        ContactForm.budg = budgets[activeBudg];
      }
    }

    const attachs = new FormData();

    if (attachments) {
      attachments.forEach((attach) => {
        attachs.append("attachs", attach);
      });
    }

    await fetch(`https://am-arc-api.fly.dev/`); // Awake if server is sleep

    let sendForm = await fetch(`https://am-arc-api.fly.dev/api/send`, {
      method: "post",
      body: attachs || {},
      headers: ContactForm,
    });
    sendForm = await sendForm.json();

    // setTimeout(() => {

    if (sendForm.success) {
      setSendingForm(false);
      cursorLoading(false);
      setShowThanks(true);
      changePointer({isHover: true, color:{bg:"#ffffff", txt: "#000000"}, text: "✕", blend:true, fsize:"20px"});

      setForm({ name: "", email: "", message: "" });
      setActiveNeeds([]);
      setActiveDocs([]);
      setActiveBudg(-1);
      setAttachments([]);
      // setReset();
    } else {
      setSendingForm(false);
      cursorLoading(false);
    }
    // }, 100000);
  };

  const requestSendingLoading = () => {
    sendingTO();
    TL = setTimeout(() => requestSendingLoading(sendingForm), 500);
  };

  useEffect(() => {
    if (sendingForm) {
      requestSendingLoading(sendingForm);
    } else if (sendText !== "Send request") {
      clearTimeout(TL);
      TL = null;
      setSendTxt("Send request");
    }
  }, [sendingForm]);

  const sendingTO = () => {
    const content = document.querySelector(
      "section.sec-form form div.btn-container button span.btn-more-title span"
    ).innerText;
    const curTxt = content[0] === "S" ? content.split(" ") : ["", content];

    let newTxt = "";
    let smTxt = "";

    if (curTxt[0].toLowerCase() === "send") {
      newTxt = "Sending .";
      smTxt = ".";
    } else {
      if (curTxt[1]) {
        if (curTxt[1].length === 1) {
          newTxt = "Sending ..";
          smTxt = "..";
        } else if (curTxt[1].length === 2) {
          newTxt = "Sending ...";
          smTxt = "...";
        } else if (curTxt[1].length === 3) {
          newTxt = "Sending .";
          smTxt = ".";
        }
      }
    }

    setSendTxt(newTxt);
    setSendSm(smTxt);
  };

  const cursorLoading = (animate) => {
    if (animate) {
      gsap.to(".circle", {
        width: "70px",
        height: "70px",
        yoyo: true,
        repeat: -1,
        duration: 0.5,
      });
    } else {
      gsap.fromTo(
        ".circle",
        {
          width: "48px",
          height: "48px",
        },
        {
          width: "48px",
          height: "48px",
          yoyo: false,
          repeat: -1,
        }
      );
    }
  };

  const checkFields = (sending = false) => {
    let inputCheck = true;
    const newErr = {
      name: "",
      email: "",
    };

    if (!checkName()) {
      inputCheck = false;

      if (sending) newErr.name = "Please fill your name";
    }

    if (!checkEmail()) {
      inputCheck = false;
      if (sending) newErr.email = "Please enter a valid email";
    }

    if (!inputCheck) {
      setFormErr(newErr);
    }

    return inputCheck;
  };

  const reEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const addAttachment = (e) => {
    if (attachments) {
      const fileNames = attachments.map(({ name }) => name);

      if (!fileNames.includes(e.target.files[0].name)) {
        setAttachments([...attachments, e.target.files[0]]);
      }
    } else setAttachments(e.target.files[0]);
  };

  function copyToClipboard() {
    const from = copycl.current;
    const range = document.createRange();
    window.getSelection().removeAllRanges();
    range.selectNode(from);
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    changePointer({
      isHover: true,
      color: { bg: "#ffffff", txt: "#3d7299" },
      text: "copied ✓",
    });
  }

  const checkName = () => {
    if (form.name.length < 2) {
      return false;
    }
    return true;
  };

  const checkEmail = () => {
    if (!form.email || !reEmail(form.email.trim())) {
      return false;
    }
    return true;
  };

  const FocusedOut = (target) => {
    if (target === "name" && !checkName()) {
      setFormErr({
        email: formErr.email,
        name: "Please fill your name",
      });
    } else if (target === "email" && !checkEmail()) {
      setFormErr({
        name: formErr.name,
        email: "Please enter a valid email",
      });
    }
  };

  useEffect(() => {
    setReset();
    if (!showThanks) {
      changePointer({ isHover: false });
    }
  }, [showThanks]);

  useEffect(() => {
    const isFormValid = checkFields();

    if (isFormValid && !formValid) setFormValid(true);
    else if (!isFormValid && formValid) setFormValid(false);
  }, [form]);

  const removeSending = () => sendText.split(" ")[1];

  return (
    <>
      {showThanks ? (
        <Thanks showToggle={() => setShowThanks(false)} />
      ) : (
        <section
          ref={el}
          data-scroll-container
          className={`sec-form mb ${sendingForm ? "sending-form-effect" : ""} ${
            con ? "only-contact" : "brief"
          }`}
        >
          <h6>
            We are always <br />
            <span>
              happy to <p>help</p>
            </span>
          </h6>

          <div className="tabs-holder">
            <button
              className={`co-btn ${con === false ? "active" : ""}`}
              onClick={() => {
                setCon(false);
                setReset();
              }}
            >
              Send brief
            </button>

            <button
              className={`co-btn ${con === false ? "" : "active"}`}
              onClick={() => {
                setCon(true);
                setReset();
              }}
            >
              Contact us
            </button>
            <div className="backHolder"></div>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            {con === false && (
              <div className="options-btns needs">
                <p>I need</p>
                {contactData.needs.map((val, idx) => (
                  <SecondaryBtn
                    txt={val}
                    isActive={activeNeeds.includes(idx)}
                    trigger={() => toggleNeedDoc("need", idx)}
                    key={idx}
                  />
                ))}
              </div>
            )}

            <div
              className="form-inputs"
              style={
                con === true
                  ? {     marginTop: "15px",
                    marginBottom: "1.4rem" }
                  : null
              }
            >
              <div className="am-input">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={form.name}
                  onChange={inputHandler}
                  className={formErr.name ? "err" : ""}
                  onBlur={() => FocusedOut("name")}
                />
                <div
                  className="input-moving-line"
                  // style={{ backgroundImage: getMovingLine('name') }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 1200 60"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill="none"
                      stroke={formErr["name"].length ? "#FF6666" : "#5A81A2"}
                      d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"
                    />
                  </svg>
                </div>

                {formErr.name && (
                  <span className="input-err">{formErr.name}</span>
                )}
              </div>

              <div className="am-input">
                <input
                  type="text"
                  placeholder="Your Email"
                  name="email"
                  value={form.email}
                  onChange={inputHandler}
                  className={formErr.email ? "err" : ""}
                  autoComplete="off"
                  onBlur={() => FocusedOut("email")}
                />
                <div
                  className="input-moving-line"
                  // style={{ backgroundImage: getMovingLine('email') }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 1200 60"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill="none"
                      stroke={formErr["email"].length ? "#FF6666" : "#5A81A2"}
                      d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"
                    />
                  </svg>
                </div>

                {formErr.email && (
                  <span className="input-err">{formErr.email}</span>
                )}
              </div>

              <div className="am-input full-w">
                <textarea
                  className="full-w"
                  type="text"
                  placeholder="About your project"
                  name="message"
                  rows="1"
                  value={form.message}
                  onChange={textAreaChange}
                ></textarea>
                <div
                  className="input-moving-line"
                  style={{ backgroundImage: MLine }}
                ></div>
              </div>
            </div>

            <div className="att-btn">
              <label htmlFor="filename" ref={labelRef}></label>

              {con === true ? (
                <>
                  <div className="google-captcha">
                    <span>
                      This site is protected by reCAPTCHA and the Google{" "}
                      <a href="https://policies.google.com/privacy">
                        {" "}
                        Privacy Policy{" "}
                      </a>{" "}
                      and{" "}
                      <a href="https://policies.google.com/terms">
                        {" "}
                        Terms of Service{" "}
                      </a>{" "}
                      apply.
                    </span>
                  </div>

                  <div className="contact-action">
                    <SecondaryBtn
                      isActive={false}
                      trigger={() => {}}
                      refrence={labelRef}
                      primary={true}
                    >
                      {" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 17.009 17"
                        >
                          <g
                            id="attach-interface-clip-symbol"
                            transform="translate(12.524 -0.146)"
                          >
                            <g
                              id="Group_335"
                              data-name="Group 335"
                              transform="translate(-12.524 0.146)"
                            >
                              <path
                                id="Path_273"
                                data-name="Path 273"
                                d="M11.08,7.579a1.076,1.076,0,0,0,.047-1.6,1.149,1.149,0,0,0-1.647,0L8.056,7.4a3.476,3.476,0,0,0-.177,5.024,3.532,3.532,0,0,0,5.074-.127l2.4-2.4a5.664,5.664,0,0,0,0-8l-.1-.1a5.663,5.663,0,0,0-8,0l-5.6,5.6a5.664,5.664,0,0,0,0,8l.1.1a5.621,5.621,0,0,0,6.48,1.06c.585-.286,1.221-.829.8-1.59A1.175,1.175,0,0,0,7.4,14.529,3.952,3.952,0,0,1,3.351,13.9l-.1-.1a3.4,3.4,0,0,1,0-4.8l5.6-5.6a3.4,3.4,0,0,1,4.8,0l.1.1a3.4,3.4,0,0,1,0,4.8l-2.4,2.4a1.274,1.274,0,0,1-1.873.127A1.223,1.223,0,0,1,9.657,9Z"
                                transform="translate(0 -0.146)"
                              />
                            </g>
                          </g>
                        </svg>
                        Add attachment
                      </span>
                    </SecondaryBtn>

                    {/* <Button style={btnStyle} text="Send" trigger={sendContactForm} /> */}

                    {isMobile ? (
                      <MButton
                        text={sendSm}
                        trigger={sendContactForm}
                        active={formValid}
                        exClass={sendingForm ? "send-loading" : ""}
                      />
                    ) : (
                      <Button
                        text={sendText === "Send request" ? "Send" : sendText}
                        trigger={sendContactForm}
                        active={formValid}
                        movable={false}
                      />
                    )}
                  </div>
                </>
              ) : (
                <SecondaryBtn
                  isActive={false}
                  trigger={() => {}}
                  refrence={labelRef}
                  primary={true}
                >
                  {" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17.009 17"
                    >
                      <g
                        id="attach-interface-clip-symbol"
                        transform="translate(12.524 -0.146)"
                      >
                        <g
                          id="Group_335"
                          data-name="Group 335"
                          transform="translate(-12.524 0.146)"
                        >
                          <path
                            id="Path_273"
                            data-name="Path 273"
                            d="M11.08,7.579a1.076,1.076,0,0,0,.047-1.6,1.149,1.149,0,0,0-1.647,0L8.056,7.4a3.476,3.476,0,0,0-.177,5.024,3.532,3.532,0,0,0,5.074-.127l2.4-2.4a5.664,5.664,0,0,0,0-8l-.1-.1a5.663,5.663,0,0,0-8,0l-5.6,5.6a5.664,5.664,0,0,0,0,8l.1.1a5.621,5.621,0,0,0,6.48,1.06c.585-.286,1.221-.829.8-1.59A1.175,1.175,0,0,0,7.4,14.529,3.952,3.952,0,0,1,3.351,13.9l-.1-.1a3.4,3.4,0,0,1,0-4.8l5.6-5.6a3.4,3.4,0,0,1,4.8,0l.1.1a3.4,3.4,0,0,1,0,4.8l-2.4,2.4a1.274,1.274,0,0,1-1.873.127A1.223,1.223,0,0,1,9.657,9Z"
                            transform="translate(0 -0.146)"
                          />
                        </g>
                      </g>
                    </svg>
                    Add attachment
                  </span>
                </SecondaryBtn>
              )}

              <input
                className="hd"
                type="file"
                id="filename"
                name="filename"
                onChange={addAttachment}
                multiple="multiple"
              />

              {attachments ? (
                <div className="attachs">
                  {attachments.map(({ name }, idx) => (
                    <div
                      className="attach"
                      key={idx}
                      onClick={() => removeAttach(idx)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}

              <ReCAPTCHA
                sitekey="6LcLMYIfAAAAAI23mMBl5bohz5-SMNJQ5yzcTO0S"
                size="invisible"
                ref={recap}
              />

              {/* {con === true ? (
                <Button style={btnStyle} text="Send" trigger={sendContactForm} />
              ) : null} */}
            </div>

            {con === false && (
              <div className="options-btns docs">
                <p>Documents I have</p>

                {contactData.docs.map((val, idx) => (
                  <SecondaryBtn
                    txt={val}
                    isActive={activeDocs.includes(idx)}
                    trigger={() => toggleNeedDoc("doc", idx)}
                    key={idx}
                  />
                ))}
              </div>
            )}

            {con === false && (
              <>
                <div className="options-btns budgets">
                  <p>Budget (USD)</p>

                  {contactData.budgets.map((val, idx) => (
                    <SecondaryBtn
                      txt={val}
                      isActive={activeBudg === idx}
                      trigger={() => toggleNeedDoc("budg", idx)}
                      key={idx}
                    />
                  ))}
                </div>

                <div className="google-captcha">
                  <span>
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a href="https://policies.google.com/privacy">
                      {" "}
                      Privacy Policy{" "}
                    </a>{" "}
                    and{" "}
                    <a href="https://policies.google.com/terms">
                      {" "}
                      Terms of Service{" "}
                    </a>{" "}
                    apply.
                  </span>
                </div>

                {isMobile ? (
                  <MButton
                    text={sendText}
                    trigger={sendContactForm}
                    exClass="con-lg-send"
                    active={formValid}
                  />
                ) : (
                  <Button
                    text={sendText}
                    trigger={sendContactForm}
                    active={formValid}
                    movable={false}
                  />
                )}
              </>
            )}
          </form>

          {isMobile ? null : (
            <div className="con-foot">
              <div className="footer-foot con-fot">
                <div className="footer-secs l">
                  <h5
                    onClick={() => copyToClipboard()}
                    onMouseEnter={() =>
                      changePointer({
                        isHover: true,
                        color: { bg: "#ffffff", txt: "#3d7299" },
                        text: "Click to copy",
                      })
                    }
                    onMouseLeave={() => changePointer(false)}
                    className={emailHover ? "active" : ""}
                    ref={copycl}
                  >
                    am@am-arc.com
                  </h5>
                  <p>Mechnykova St, 2, Kyiv, 02000</p>
                </div>
                <div className="footer-secs r">
                  <div>
                    <a
                      href="https://www.behance.net/am-arc"
                      target="_blank"
                    >
                      <img className="be" src={be} />
                    </a>
                    <a
                      href="https://www.upwork.com/fl/am1amirmohseni"
                      target="_blank"
                    >
                      <img className="up" src={up} />
                    </a>
                    <a
                      href="https://www.instagram.com/am__arc/?hl=en"
                      target="_blank"
                    >
                      <img className="insta" src={insta} />
                    </a>
                    <a href="https://t.me/am_arc_com" target="_blank">
                      <img className="tele" src={tele} />
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=380970006043"
                      target="_blank"
                    >
                      {" "}
                      <img className="whats" src={whats} />
                    </a>
                  </div>
                  <Link to="/privacyandpolicy">
                    <p>Privacy Policy</p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {isMobile ? (
        <div style={{ height: "50vh" }}>
          <section
            id="bab"
            className="sec-form footer-sec fot"
            style={con === true ? { marginTop: "-46px" } : null}
          >
            <div className="trig">
              <div className="footer-foot">
                <div className="footer-secs l">
                  <h5>am@am-arc.com</h5>
                  <p>Mechnykova St, 2, Kyiv, 02000</p>
                  <Link to="/privacyandpolicy">
                    <p>Privacy Policy</p>
                  </Link>
                  {/* <Link className="co-btn co-white" to="/contact">
        Estimate project
            </Link> */}
                </div>
                <div className="footer-secs r">
                  <div>
                  <a href="https://www.upwork.com/fl/am1amirmohseni" target="_blank"><img className="up" src={up} /></a>
              <a href="https://www.behance.net/am-arc" target="_blank"><img className="be" src={be} /></a>
              <a href="https://t.me/am_arc_com" target="_blank"><img className="tele" src={tele} /></a>
              <a href="https://www.instagram.com/am__arc/?hl=en" target="_blank"><img className="insta" src={insta} /></a>
              <a href="https://api.whatsapp.com/send?phone=380970006043" target="_blank"> <img className="whats" src={whats} /></a>
           
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
};

export default Contact;
