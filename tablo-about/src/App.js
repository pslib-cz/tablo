import './App.css';
import React, { useState, useEffect } from 'react';
import Scene from './Scene';
import creators from "./creators.json"

function App() {
  const [offsetY, setOffsetY] = useState(0)
  const handleScrollY = () => setOffsetY(window.pageYOffset)
  const length = 50000
  //Scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScrollY)
    return () => window.removeEventListener("scroll", handleScrollY)
  }, [])

  return (
    <>

      <div style={{ height: length }}>
        <div className='scene__container' >
          <div style={{ position: "absolute", color: "red", zIndex: 999 }}>FRAME:{offsetY}</div>
          <Scene offsetY={offsetY} />

        </div>
      </div>
      {
        creators.map((creator) => {
          return <div /*Bigbrain by Vojtík xd*/ className='scroll--snap' style={{ position: "absolute", top: creator.offset }}></div>
        })
      }
    </>
  )
}

export default App;
