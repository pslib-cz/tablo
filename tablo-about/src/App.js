import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Scene from './Scene';
import Nav from './Nav';
import Background from './Background';
import { Helmet } from 'react-helmet'




function App() {

  const tilte = "Tablo L4 2018-2022"
  const [offsetY, setOffsetY] = useState(0)
  const handleScrollY = () => setOffsetY(window.pageYOffset)
  //Scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScrollY)
    return () => window.removeEventListener("scroll", handleScrollY)
  }, [])

  const [mainRef, setMainRef] = useState()

  return (
    <>
      <Helmet>
        <title>{tilte}</title>
      </Helmet>
      <Nav />
      <Scene setMainRef={setMainRef} offsetY={offsetY} />
      <Background main={mainRef} offsetY={offsetY} />
    </>
  )
}

export default App;



