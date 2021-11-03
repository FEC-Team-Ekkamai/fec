import React from 'react';

const Modal = (props) => {
  if (!props.view) {
    return null;
  }
  return (
    <div className="modal">
      <div className="container">
        <div className="body">
          form goes here
        </div>
        <div className="footer">
          <button onClick={props.onClose}>Close / Submit</button>
        </div>
      </div>
    </div>
  )
};

export default Modal;