import React from 'react';
import CarouselEntry from './CarouselEntry.jsx';

var  ImageGallery = (props) => {
  return (
    <div style={{position: 'relative', height: '600px', width: '600px', background: 'gray'}}>


      <div style={{display: 'grid', top: '50%', zIndex: '2', position: 'absolute', left: '10px', transform: 'translate(0,-50%)', textAlign: 'center'}}>
        {'^'}
        {props.styles.results[props.currentStyle].photos.map((photo, i) => {
          return (
            <CarouselEntry photo={photo} key={i} index={i} getSelectedPhoto={props.getSelectedPhoto}/>
          )
        })}
        {'v'}
      </div>


      <div style={{transform: 'translate(0,-50%)', top: '50%', right: '10px', zIndex: '2', position: 'absolute'}}>
        <button onClick={() => {props.getNextPhoto(-1)}}>{'<'}</button>
        <button onClick={() => {props.getNextPhoto(1)}}>{'>'}</button>
      </div>


      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '1', height: '100%'}}>
        <img src={props.styles.results[props.currentStyle].photos[props.currentPhoto].url} style={{maxWidth: '100%', maxHeight: '100%', margin: 'auto', display: 'block'}} onClick={() => {props.changeView(1)}}/>
      </div>

    </div>
  )
}

export default ImageGallery;