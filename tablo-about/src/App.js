import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Scene from './Scene';
import Nav from './Nav';
import Background from './Background';

function App() {
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
      <Nav />
      <Scene setMainRef={setMainRef} offsetY={offsetY} />
      <Background main={mainRef} offsetY={offsetY} />
    </>
  )
}

export default App;



