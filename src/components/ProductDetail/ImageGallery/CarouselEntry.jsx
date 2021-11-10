import React from 'react';

var  CarouselEntry = (props) => {
  return (
    <img src={props.photo.thumbnail_url} style={{height: '40px', width: '40px', margin: '5px', border: '2px solid black'}} onClick={() => {props.getSelectedPhoto(props.index)}}/>
  )
}

export default CarouselEntry;