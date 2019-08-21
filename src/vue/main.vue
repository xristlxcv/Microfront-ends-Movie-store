<template>
  <div id="rankings">
    <h1>Ratings</h1>
    <h4>{{calculator()}}</h4>
   <div v-bind:key="el.id" v-for="el in elements ">
       <li id="list">{{el.movie}}: {{movierakings[el.id-1]}}
         
        </li> 
   </div>

  
  </div>
</template>

<script>
export default {
  name: "Hello",
  data() {
    return {
      elements: [
        { movie: "Godfather", id: 1 },
        { movie: "Rush hour", id: 2 },
        { movie: "Inception", id: 3 },
        { movie: "Trumbo", id: 4 },
        { movie: "Beautiful Mind", id: 5 },
        { movie: "Lethal Weapon", id: 6 },
        { movie: "Bad Boys", id: 7 }
      ],
      ratings: null,
      buttons: null,
      movierakings: [0, 0, 0, 0, 0, 0, 0]
    };
  },
  methods: {
    calculator() {
      if (this.buttons === 1) {
        this.movierakings[0] = this.ratings;
        return this.movierakings;
      }
      if (this.buttons === 2) {
        this.movierakings[1] = this.ratings;
        return this.movierakings;
      }
      if (this.buttons === 3) {
        this.movierakings[2] = this.ratings;
        return this.movierakings;
      }
      if (this.buttons === 4) {
        this.movierakings[3] = this.ratings;
        return this.movierakings;
      }
      if (this.buttons === 5) {
        this.movierakings[4] = this.ratings;
        return this.movierakings;
      }
      if (this.buttons === 6) {
        this.movierakings[5] = this.ratings;
        return this.movierakings;
      }
      if (this.buttons === 7) {
        this.movierakings[6] = this.ratings;
        return this.movierakings;
      } else {
        return this.movierakings;
      }
    }
  },
  created() {
    window.addEventListener(
      "rateMovies",
      event => {
        this.ratings = event.detail.buttonId;
        this.buttons = event.detail.rateId;
      },
      false
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#rankings {
  left: 28%;
  background-color: rgb(190, 5, 128);
  width: 450px;
  height: 450px;
  position: absolute;
  margin-top: 18%;
  border-radius: 10px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 5);
}
h1 {
  color: aliceblue;
}
h4 {
  display: none;
}
#list {
  top: 0px;
}
</style>
