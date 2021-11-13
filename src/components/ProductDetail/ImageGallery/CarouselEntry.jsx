import React from 'react';

var  CarouselEntry = (props) => {

  return (
    <>
      {props.index >= props.min && props.index <= props.max ?  <img className="carouselPhoto" src={props.photo.thumbnail_url} onClick={() => {props.getSelectedPhoto(props.index)}}/> : null}

      {props.currentPhoto === props.index && (props.index >= props.min && props.index <= props.max) ? <div className="selectedPhoto"></div> : null}
    </>
  )
}

export default CarouselEntry;