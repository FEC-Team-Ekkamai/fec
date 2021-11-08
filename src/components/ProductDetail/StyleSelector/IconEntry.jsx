import React from 'react';

var  IconEntry = (props) => {
  return (
    <img src={props.style.photos[0].thumbnail_url} style={{height: '40px', width: '40px', overflow: 'hidden', borderRadius: '50%', padding: '5px' }} onClick={() => {props.getSelectedStyle(props.index)}}/>
  )
}

export default IconEntry;