import './App.css';
import React, { useState, useEffect } from 'react';
import Scene from './Scene';

function App() {
  const [offsetY, setOffsetY] = useState()
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
          <Scene offsetY={offsetY} />

        </div>
      </div>
    </>
  )
}

export default App;
