import React from 'react';
import CarouselEntry from './CarouselEntry.jsx';

var  ImageGallery = (props) => {
  var photosLength = props.styles.results[props.currentStyle].photos.length
  return (
    <div className="galleryContainer">
      <div className="imageCarousel">
        {photosLength > 7 ? <button className="carouselButton" onClick={() => {props.changeMaxMin(-1)}}>{'^'}</button> : null}
        {props.styles.results[props.currentStyle].photos.map((photo, i) => {
          return (
            <CarouselEntry
            key={i}
            index={i}
            photo={photo}
            max={props.max}
            min={props.min}
            changeMaxMin={props.changeMaxMin}
            currentPhoto={props.currentPhoto}
            getSelectedPhoto={props.getSelectedPhoto} />
          )
        })}
        {photosLength > 7 ? <button className="carouselButton" onClick={() => {props.changeMaxMin(1)}}>{'∨'}</button> : null}
      </div>
      <div className="prevNext">
        <button onClick={() => {props.getNextPhoto(-1)}}>{'<'}</button>
        <button onClick={() => {props.getNextPhoto(1)}}>{'>'}</button>
      </div>
      <div className="mainImageContainer">
        <img className="mainImage" src={props.styles.results[props.currentStyle].photos[props.currentPhoto].url} onClick={() => {props.changeView(1)}}/>
      </div>
    </div>
  )
}

export default ImageGallery;