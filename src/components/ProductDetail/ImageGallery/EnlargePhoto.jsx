import React from 'react'

var EnlargePhoto = (props) => {
  return (
      <img src={props.styles.results[props.currentStyle].photos[props.currentPhoto].url} style={{maxWidth: '100%', maxHeight: '100%', paddingBottom: '15px', position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} onClick={() => {props.changeView(-1)}}></img>
  )
}

export default EnlargePhoto;