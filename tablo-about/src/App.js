import './App.css';
import React, { useState, useEffect } from 'react';
import Scene from './Scene';
import Nav from './Nav';
import Background from './Background';
import { useRef } from 'react';

function App() {
  const [offsetY, setOffsetY] = useState(0)
  const handleScrollY = () => setOffsetY(window.pageYOffset)
  //Scroll
  const [mainHeight, setHeight] = useState(0)
  useEffect(() => {
    console.log(main)
    window.addEventListener("scroll", handleScrollY)
    return () => window.removeEventListener("scroll", handleScrollY)
  }, [])

  const main = useRef()

  return (
    <>
      <Nav />
      <Scene ref={main} offsetY={offsetY} />
      <Background main={main} offsetY={offsetY} />
    </>
  )
}

export default App;



