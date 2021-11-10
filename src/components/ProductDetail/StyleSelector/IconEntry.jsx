import React from 'react';

var  IconEntry = (props) => {
  return (
    <div style={{position: 'relative', height: '80px'}}>
      <div style={{zIndex: '1', position: 'absoulte'}}>
        <img src={props.style.photos[0].thumbnail_url} style={{height: '60px', width: '60px', overflow: 'hidden', borderRadius: '50%', border: '2px solid black', margin: 'auto', display: 'block'}} onClick={() => {props.getSelectedStyle(props.index)}}/>
      </div>
      {props.currentStyle === props.index ? <div style={{position: 'absolute', zIndex: '2', top: '0px', right: '40px'}}>
        <div style={{height: '20px', width: '20px', borderRadius: '50%', overflow: 'hidden', border: '2px solid black', margin: '5px', background: 'white', position: 'absolute'}}>
          <span style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>&#10003;</span>
        </div>
      </div> : null}
    </div>
  )
}

export default IconEntry;