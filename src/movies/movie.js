import React, { Component } from "react";
import "./movie.css";

class Movie extends Component {
  state = {
    buttons: [
      { value: 1, id: 1 },
      { value: 2, id: 2 },
      { value: 3, id: 3 },
      { value: 4, id: 4 },
      { value: 5, id: 5 }
    ]
  };
  addToCart = message => {
    const event = new CustomEvent("addToCart", { detail: message });
    window.dispatchEvent(event);
  };
  rateMovies = (message1, message2) => {
    console.log(message1);
    console.log(message2);
    const event = new CustomEvent("rateMovies", {
      detail: {
        buttonId: message1,
        rateId: message2
      }
    });
    window.dispatchEvent(event);
  };
  render() {
    return (
      <div>
        <span>
          {this.props.val}
          <img class="move" src={this.props.img} />
          <div id="rate">
            RATE
            {this.state.buttons.map(bt => (
              <button
                id="rate_btn"
                onClick={() => this.rateMovies(bt.id, this.props.id)}
              >
                {bt.value}
              </button>
            ))}
          </div>
          <div>
            <button id="bb" onClick={() => this.addToCart(this.props.val)}>
              BUY
            </button>
          </div>
        </span>
      </div>
    );
  }
}
export default Movie;
