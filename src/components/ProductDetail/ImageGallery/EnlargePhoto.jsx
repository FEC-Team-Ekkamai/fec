import React from 'react'

var EnlargePhoto = (props) => {
  return (
      <img className="enlargePhoto" src={props.styles.results[props.currentStyle].photos[props.currentPhoto].url}  onClick={() => {props.changeView(-1)}}></img>
  )
}

export default EnlargePhoto;