<template>
  <div class="filters">
    <div class="text-div">
      <input
        class="text-search"
        type="text"
        name="search"
        id=""
        placeholder="Search..."
      />
    </div>
    <select class="select" name="" id="">
      <option value="">Shop By</option>
      <option value="">Two</option>
      <option value="">Three</option>
    </select>
    <select class="select" name="" id="">
      <option value="">Sort By</option>
      <option value="">Two</option>
      <option value="">Three</option>
    </select>
    <input type="range" name="" id="" />

    <div class="toggle-btn">
      <span> On sale</span>
      <img src="../assets/OffBtn.svg" alt="" />
    </div>
    <div class="toggle-btn">
      <span> In stock</span>
      <img src="../assets/OffBtn.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.filters {
  display: flex;
  flex-direction: column;
  width: 300px;
}
.text-div {
  margin-bottom: 39px;
}
.text-search {
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid #d8d8d8;
  padding: 8px;
  /* background-image: url('../assets/search.svg');
    background-repeat: no-repeat; */
}
.text-search::placeholder {
  background-image: url("../assets/search.svg");
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
}
.select {
  padding: 9px;
  margin-bottom: 20px;
  border-color: #d8d8d8;
  border-radius: 4px;
}
.toggle-btn {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
</style>
