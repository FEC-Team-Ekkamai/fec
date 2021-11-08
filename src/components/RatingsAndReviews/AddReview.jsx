import React from 'react'
import styled from 'styled-components';
import AddReviewModal from './AddReviewModal.jsx';


const StyledBackShed = styled.div`
  transition: all .5s;
  opacity: 0.9;
  background-color: grey;
  position:fixed;
  width:100%;
  height:100%;
  top:0px;
  left:0px;
  z-index:1;
`


const StyledOpenButton = styled.button`
display: flex;
margin: 0 auto;
width: 100px;
position: relative
z-index:2;
`


class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: false
    };
    this.modalHandler = this.modalHandler.bind(this);
  }

  modalHandler() {
      this.setState({isShowing: !this.state.isShowing})
  }

  render() {
    return (
      <div>
        {this.state.isShowing
          ?  <StyledBackShed onClick = {this.modalHandler}></StyledBackShed>
          : null}

        <StyledOpenButton onClick = {this.modalHandler}>Add a Review</StyledOpenButton>


        {this.state.isShowing
          ? <AddReviewModal
              characteristics = {this.props.characteristics}
              modalHandler = {this.modalHandler}
              show = {this.state.isShowing}
              close = {this.modalHandler}
            />
          : null
        }

      </div>
    )
  }
}

export default AddReview;

