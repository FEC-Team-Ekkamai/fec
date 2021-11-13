import React from 'react';

var  FeatureEntry = (props) => {
  return (
    <li className="madeOfEntry"><span>&#10003;</span> {props.feature.feature}: {props.feature.value}</li>
  )
}

export default FeatureEntry;