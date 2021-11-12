import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Recommend from "./Recommend.jsx";
import Characteristics from "./Characteristic.jsx";
import Summary from "./Summary.jsx";
import Body from "./Body.jsx";
import Images from "./Images.jsx";
import Nickname from "./Nickname.jsx";
import Email from "./Email.jsx";
import Submit from "./Submit.jsx";

const StyledRadioButton = styled.input.attrs({
  type: "radio",
})`
  display: "none";
  opacity: 0;
`;

const StyledForm = styled.div`
  font-family: "Open Sans", sans-serif;
`;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: null,
    };
    this.setHover = this.setHover.bind(this);
    this.displayRating = this.displayRating.bind(this);
  }

  setHover(e) {
    this.setState({ hover: e });
  }

  displayRating() {
    if (this.props.rating === 1) {
      return <div>Poor</div>;
    } else if (this.props.rating === 2) {
      return <div>Fair</div>;
    } else if (this.props.rating === 3) {
      return <div>Average</div>;
    } else if (this.props.rating === 4) {
      return <div>Good</div>;
    } else if (this.props.rating === 5) {
      return <div>Great</div>;
    }
  }

  render() {
    const hasCharacteristics = Object.keys(this.props.characteristics);
    console.log(this.props.formSubmitHandler);
    return (
      <div>
        <form onSubmit={this.props.formSubmitHandler}>
          <StyledForm>
            Overall Rating
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label>
                  <StyledRadioButton
                    type="radio"
                    value={ratingValue}
                    required //THIS MIGHT NOT WORK
                  />
                  <FaStar
                    color={
                      ratingValue <= (this.state.hover || this.props.rating)
                        ? "#ffc107"
                        : "#e4e5e9"
                    }
                    onMouseEnter={() => this.setHover(ratingValue)}
                    onMouseLeave={() => this.setHover(null)}
                    onClick={() => this.props.setRating(ratingValue)}
                  />
                </label>
              );
            })}
            {this.props.rating !== null ? this.displayRating() : null}
          </StyledForm>
          <Recommend />
          {hasCharacteristics.length !== 0
            ? hasCharacteristics.map((characteristic) => (
                <Characteristics characteristic={characteristic} />
              ))
            : null}
          <Summary />
          <Body />
          <Images />
          <Nickname />
          <Email />
          <Submit formSubmitHandler={this.props.formSubmitHandler} />
        </form>
      </div>
    );
  }
}

export default Form;
