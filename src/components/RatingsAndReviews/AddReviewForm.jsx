import styled from 'styled-components';
import {FaStar} from 'react-icons/fa';
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import NewReviewRecommend from './NewReviewRecommend.jsx';
import FormCharacteristic from './FormCharacteristic.jsx';
import AddReviewSummary from'./AddReviewSummary.jsx';
import AddReviewBody from './AddReviewBody.jsx';

const StyledRadioButton = styled.input.attrs({
  type: 'radio',
})`
  display: 'none';
  opacity: 0;
  `

class AddReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      hover: null
    };
    this.setRating = this.setRating.bind(this);
    this.setHover = this.setHover.bind(this);
    this.displayRating = this.displayRating.bind(this);
  }

  setRating(e) {
    this.setState({rating: e, hover:null});
  }

  setHover(e) {
    this.setState({hover: e})
  }

  displayRating() {
    if (this.state.rating === 1) {
      return <div>Poor</div>
    } else if (this.state.rating === 2) {
      return <div>Fair</div>
    } else if (this.state.rating === 3) {
      return <div>Average</div>
    } else if (this.state.rating === 4) {
      return <div>Good</div>
    } else if (this.state.rating === 5) {
      return <div>Great</div>
    }
  }



  render() {
    const hasCharacteristics = Object.keys(this.props.characteristics)
    return (
      <div>
        <form>
          <div>Overall Rating
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return <label>
                <StyledRadioButton
                  type = 'radio'
                  value = {ratingValue}
                />
                <FaStar
                  color = {ratingValue <= (this.state.hover || this.state.rating)
                    ? '#ffc107'
                    : '#e4e5e9'}
                  onMouseEnter = {() => this.setHover(ratingValue)}
                  onMouseLeave = {() => this.setHover(null)}
                  onClick = {() => this.setRating(ratingValue)}
                />
               </label>;
      })}
            {this.state.rating !== null
              ? this.displayRating()
              : null
            }
          </div>
            <NewReviewRecommend />
            {hasCharacteristics.length !== 0
            ? hasCharacteristics.map((characteristic) => <FormCharacteristic characteristic={characteristic} />)
            : null
          }
          <AddReviewSummary />
          <AddReviewBody />
        </form>
      </div>
    );
  }
}

export default AddReviewForm;