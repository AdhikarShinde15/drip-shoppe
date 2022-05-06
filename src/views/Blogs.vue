<template>
  <div>
    <div class="heading">Blogs</div>
    <div class="container">
      <div class="left">
        <div class="search-field">
          <input id="search" type="text" placeholder="search" />
          <img class="searchIcon" src="../assets/search-icon.svg" />
        </div>
        <div class="categories">
          CATEGORIES
          <div class="list">
            <p>Fashion</p>
            <p>Style</p>
            <p>Accessories</p>
            <p>Season</p>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="blog-item" v-for="product in details" :key="product.id">
          <div class="img-container">
            <img :src="product.image" />
          </div>
          <div class="list">Fashion - October 8, 2020</div>
          <div class="trends">Top Trends From Spring</div>
          <div class="details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. faucibus
            augue, a maximus elit ex vitae libero...
          </div>
          <a class="read-more">READ MORE</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/img-01.svg";
import img2 from "../assets/img-02.svg";
import img3 from "../assets/img-03.svg";
import img4 from "../assets/img-04.svg";
export default {
  data() {
    return {
      details: [
        { id: 1, image: img1 },
        { id: 2, image: img2 },
        { id: 3, image: img3 },
        { id: 4, image: img4 },
      ],
    };
  },
};
</script>

<style scoped>
.heading {
  font-size: 30px;
}
@media all and (max-width: 500px) {
  .right {
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2px;
  }
}
.container {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  margin-bottom: 20%;
}
.left {
  padding: 10px;
}
.right {
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
#search {
  outline: none;
  padding-bottom: 10px;
  border: none;
  border-bottom: 2px solid#D8D8D8;
}
.search-field {
  position: relative;
  margin-bottom: 60px;
}
.searchIcon {
  position: absolute;
  float: right;
}

.list {
  color: #707070;
}
.trends {
  font-size: 20px;
  margin: 10px 0;
}
.details {
  font-size: 16px;
  color: #707070;
  margin: 20px 0;
}
</style>
