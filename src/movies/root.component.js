import React, { Component } from "react";
import "./movie.css";
import Movie from "./movie";

class Movies extends Component {
  state = {
    movies: [
      {
        id: 1,
        value: "Godfather",
        img:
          "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg"
      },
      {
        id: 2,
        value: "Rush hour",
        img:
          "https://m.media-amazon.com/images/M/MV5BYWM2NDZmYmYtNzlmZC00M2MyLWJmOGUtMjhiYmQ2OGU1YTE1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,678,1000_AL_.jpg"
      },
      {
        id: 3,
        value: "Inception",
        img:
          "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
      },
      {
        id: 4,
        value: "Trumbo",
        img:
          "https://m.media-amazon.com/images/M/MV5BMjM1MDc2OTQ3NV5BMl5BanBnXkFtZTgwNzQ0NjQ1NjE@._V1_SY1000_SX675_AL_.jpg"
      },
      {
        id: 5,
        value: "Beatiful Mind",
        img:
          "https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,673,1000_AL_.jpg"
      },
      {
        id: 6,
        value: "Lethal Weapon",
        img:
          "https://m.media-amazon.com/images/M/MV5BZTllNWNlZjctMWQwMS00ZDc3LTg5ZjMtNzhmNzhjMmVhYTFlXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_.jpg"
      },
      {
        id: 7,
        value: "Bad Boys",
        img:
          "https://m.media-amazon.com/images/M/MV5BMGE1ZTQ0ZTEtZTEwZS00NWE0LTlmMDUtMTE1ZWJiZTYzZTQ2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
      }
    ]
  };
  render() {
    return (
      <div>
        {this.state.movies.map(movie => (
          <Movie val={movie.value} id={movie.id} img={movie.img} />
        ))}
      </div>
    );
  }
}
export default Movies;
