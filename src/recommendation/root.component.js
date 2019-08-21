import React, { Component } from "react";
import "./reco.css";
class Recommendation extends Component {
  state = {
    products: "",
    movieRecForGodfather: [
      "https://i.ytimg.com/vi/cxBCY3M6gWw/maxresdefault.jpg",
      "https://jmmnewaov2.files.wordpress.com/2015/02/casino_ver1.jpg",
      "https://m.media-amazon.com/images/M/MV5BNzg0ODI3NDQxNF5BMl5BanBnXkFtZTgwMzgzNDA0NjE@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    movieRecForRushHour: [
      "https://image.tmdb.org/t/p/original/ntmDZU7oQvHl4GRzN81U46yQO1D.jpg",
      "https://3.bp.blogspot.com/-Ch0t1pjE_Yc/VoG45ZLPBUI/AAAAAAAAFz8/ktIy2bjOE5Y/s1600/National_Security_www.oipeirates.se.jpg",
      "http://tainio-mania.co/_ld/30/17027042.jpg"
    ],
    movieRecForInception: [
      "http://3.bp.blogspot.com/-tEQ_rfA5cQg/VLQJtcfVfyI/AAAAAAAAFgM/8E26EI6GDEE/s1600/interstellar3.jpg",
      "https://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/man_of_steel_lead_2.jpg?itok=hnqTPMCe",
      "http://4.bp.blogspot.com/-teDtw4166g4/UvnIZKBjqMI/AAAAAAAACNM/b5qJLbgTrTo/s1600/01~15.jpg"
    ],
    movieRecForTrumbo: [
      "https://m.media-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMmM4YzJjZGMtNjQxMy00NjdlLWJjYTItZWZkYzdhOTdhNzFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTM0ODk3MjM1MV5BMl5BanBnXkFtZTcwNzc1MDIwNA@@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    movieRecForBeautifulMind: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_.jpg",
      "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg"
    ],
    movieRecForLethalWeapon: [
      "https://m.media-amazon.com/images/M/MV5BY2I1OTY2NmUtMGVlZi00NjNmLThkNTgtMjExMzRhOTM2MDJiXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMzMzYzk3ZTEtZDg0My00MTY5LWE3ZmQtYzNhYjhjN2RhZGRjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTIxNDUxNzcyMl5BMl5BanBnXkFtZTcwNTgwOTI3MQ@@._V1_.jpg"
    ],
    movieRecForBadBoys: [
      "https://m.media-amazon.com/images/M/MV5BNzYyNzM2NzM2NF5BMl5BanBnXkFtZTcwNjg5NTQzMw@@._V1_SY1000_CR0,0,659,1000_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTIwMzExNDEwN15BMl5BanBnXkFtZTYwODMxMzg2._V1_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMWI0Y2NhMzMtYTE5ZS00MDlhLTg0ZjEtMjAwZmEwNTc0ODc2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
    ]
  };
  componentDidMount() {
    window.addEventListener(
      "addToCart",
      event => {
        this.setState({ products: event.detail });
      },
      false
    );
  }
  random_item = items => {
    return items[Math.floor(Math.random() * items.length)];
  };
  render() {
    return (
      <div id="rec">
        <h1 id="reco_title">Recom/ation</h1>
        {this.state.products === "Godfather" ? (
          <img
            id="rr"
            src={this.random_item(this.state.movieRecForGodfather)}
          />
        ) : this.state.products === "Rush hour" ? (
          <img id="rr" src={this.random_item(this.state.movieRecForRushHour)} />
        ) : this.state.products === "Inception" ? (
          <img
            id="rr"
            src={this.random_item(this.state.movieRecForInception)}
          />
        ) : this.state.products === "Trumbo" ? (
          <img id="rr" src={this.random_item(this.state.movieRecForTrumbo)} />
        ) : this.state.products === "Beatiful Mind" ? (
          <img
            id="rr"
            src={this.random_item(this.state.movieRecForBeautifulMind)}
          />
        ) : this.state.products === "Lethal Weapon" ? (
          <img
            id="rr"
            src={this.random_item(this.state.movieRecForLethalWeapon)}
          />
        ) : this.state.products === "Bad Boys" ? (
          <img id="rr" src={this.random_item(this.state.movieRecForBadBoys)} />
        ) : null}
      </div>
    );
  }
}
export default Recommendation;
