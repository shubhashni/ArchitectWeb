import React, {useEffect, useContext, useReducer} from 'react';
import {menuReducer} from './Reduser';

const initState ={
  isMenuOpen: false,
  pageTitle: 'home',
  footerItems: {},
  ScrollYValue:0,
  needed:[],
  isMobile: true,
  refresh: false,
  contact:"other",
  aniClick: false,
  loading:true,
  vid:true,
  initial:true,
  transition:true,
  pointer: {
    isHover: false, 
    color: "",
    text: "",
  },
  resetLoco:false,
  faqp:{},
}

const AppContext = React.createContext();

export const AppProvider=({children})=>{

  const [state, dispatch] = useReducer(menuReducer, initState);

  const openMenu =()=>{
    dispatch({type:'OPEN_MENU'})
  }
  const setLoading =(pay)=>{
    dispatch({type:'LOADING_FALSE',payload:pay})
  }
  const setVid =(pay)=>{
    dispatch({type:'VID_FALSE',payload:pay})
  } 
   const setInit =(pay)=>{
    dispatch({type:'INIT_FALSE',payload:pay})
  }

  const closeMenu =()=>{
    dispatch({type:'CLOSE_MENU'})
  }

  const setMobileTrue =()=>{
    dispatch({type:'SET_MOBILE_TRUE'})
  }
  const setTransition =()=>{
    dispatch({type:'SET_TRANSITION'})
  }
  // const changeRefresh= ()=>{
  //   dispatch({type:'SCROLLED' , payload:sy})
  // }
  const setMobileFalse =()=>{
    dispatch({type:'SET_MOBILE_FALSE'})
  }

  const scrollY =(sy)=>{
      dispatch({type:'SCROLLED' , payload:sy})
  }
  const updateNeeded =(pay)=>{
 
      dispatch({type:'LOCONEEDED' , payload:pay})
  }
  const changePT = (pay)=>{
    dispatch({type: 'CHANGETITLE', payload: pay})
  }
  const changePointer = (pay)=>{
    dispatch({type: 'CHANGEHOVER', payload: pay})
  }
  const changePp = (pay)=>{
    dispatch({type: 'CHANGECONBTN', payload: pay})
  }
  const setfaqp = (pay)=>{
    dispatch({type: 'CHANGEFAQ', payload: pay})
  }
  const setReset =()=>{
    dispatch({type:'RESET_LOCO', })
  }
  const setaniClick =()=>{
    dispatch({type:'SET_ANI', })
  }

  return(
    <AppContext.Provider value={{ ...state, openMenu, closeMenu, setMobileTrue,setLoading,setInit,setVid,
      setMobileFalse, scrollY, updateNeeded, changePT, changePointer, changePp, setReset, setaniClick, setfaqp,setTransition}}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = ()=>{
  return useContext(AppContext)
}
