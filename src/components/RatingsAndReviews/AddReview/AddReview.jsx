import React from "react";
import styled from "styled-components";
import Modal from "./Modal.jsx";
import axios from "axios";

const StyledBackShed = styled.div`
  transition: all 0.5s;
  opacity: 0.9;
  background-color: grey;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 3;
`;

const StyledOpenButton = styled.button`
  position: relative;
  text-align: center;
  width: 100px;
  height: 33px;
  z-index: 2;
  font-family: "Open Sans", sans-serif;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  background-color: #9eb7c0;
  display: inline-block;
  border-radius: 25px;
`;

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: false,
      formInput: {},
      rating: null,
    };
    this.modalHandler = this.modalHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
    this.setRating = this.setRating.bind(this);
  }

  modalHandler() {
    this.setState({ isShowing: !this.state.isShowing });
  }

  setRating(e) {
    this.setState({ rating: e });
  }

  formSubmitHandler(e) {
    e.preventDefault();

    var characteristicRatings = {};

    var characteristics = Object.keys(this.props.characteristics);

    characteristics.map((characteristic) => {
      var characteristicIdString =
        this.props.characteristics[characteristic].id.toString();

      characteristicRatings[this.props.characteristics[characteristic].id] =
        Number(e.target[characteristic].value);
    });

    if (e.target.yesno.value === "true") {
      var recommendBool = true;
    } else {
      recommendBool = false;
    }

    if (e.target.images.value === "") {
      var photos = [""];
    } else {
      photos = e.target.images.value;
    }

    var reviewFormInput = {
      product_id: this.props.productId,
      rating: this.state.rating,
      summary: e.target.summary.value,
      body: e.target.body.value,
      recommend: recommendBool,
      name: e.target.nickname.value,
      email: e.target.email.value,
      photos: photos,
      characteristics: characteristicRatings,
    };

    axios.post(
      `http://127.0.0.1:3000/api/reviews`,
      reviewFormInput,
      reviewFormInput
    );

    this.setState({ isShowing: false });
  }

  render() {
    return (
      <div>
        {this.state.isShowing ? (
          <StyledBackShed onClick={this.modalHandler}></StyledBackShed>
        ) : null}

        <StyledOpenButton onClick={this.modalHandler}>
          Add a Review
        </StyledOpenButton>

        {this.state.isShowing ? (
          // <div style={{overflow: 'visible', width: '500px', height: '500px', zIndex: '10'}}>
            <Modal
              characteristics={this.props.characteristics}
              modalHandler={this.modalHandler}
              show={this.state.isShowing}
              close={this.modalHandler}
              formSubmitHandler={this.formSubmitHandler}
              formInput={this.state.formInput}
              setRating={this.setRating}
              rating={this.state.rating}
            />
          // </div>
        ) : null}
      </div>
    );
  }
}


export default AddReview;
