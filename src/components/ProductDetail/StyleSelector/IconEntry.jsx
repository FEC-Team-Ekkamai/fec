import React from 'react';

var  IconEntry = (props) => {
  return (
    <div className="thumbnailContainer">
        <img className="thumbnailPhoto" src={props.style.photos[0].thumbnail_url} onClick={() => {props.getSelectedStyle(props.index)}}/>
      {props.currentStyle === props.index ?
        <div className="checkmarkContainer">
          <span className="checkmark">&#10003;</span>
        </div> : null}
    </div>
  )
}

export default IconEntry;