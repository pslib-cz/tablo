import React from 'react'

export default function GalleryImage({ url, name, urlMin }) {

  //Jdu se zabít
  function rickRoll() {
    if (name == "Ondřej Svoboda - Mr. Robot") {
      const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      window.location.href = url
    }
  }
  return (
    <a onClick={rickRoll} className='lg__image' href={url}>
      <figure>
        <img loading='lazy' src={urlMin} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </a>
  )
}