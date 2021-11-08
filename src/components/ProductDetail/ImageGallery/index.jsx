import React from 'react';

var  ImageGallery = (props) => {
  //console.log(props);
  return (
    <>
      <img src={props.styles.results[props.currentStyle].photos[props.currentPhoto].url} style={{maxWidth: '100%', maxHeight: '100%', margin: 'auto', display: 'block'}}/>
      <div>
        <button onClick={() => {props.getNextPhoto(-1)}}>Previous</button>
        <button onClick={() => {props.getNextPhoto(1)}}>Next</button>
      </div>
    </>
  )
}

export default ImageGallery;