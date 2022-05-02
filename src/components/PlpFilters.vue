<template>
  <div class="filters">
    <div class="text-div">
        <input class="text-search" type="text" name="search" id="" placeholder="Search..." />
    </div>
    <select name="" id="">
      <option value="">Shop By</option>
      <option value="">Two</option>
      <option value="">Three</option>
    </select>
    <select name="" id="">
      <option value="">Sort By</option>
      <option value="">Two</option>
      <option value="">Three</option>
    </select>
    <input type="range" name="" id="" />
    <div>
      <span> On sale</span>
      <img src="../assets/OffBtn.svg" alt="" />
    </div>
    <div>
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
    border-bottom: 1px solid #D8D8D8;
    padding: 8px;
    /* background-image: url('../assets/search.svg');
    background-repeat: no-repeat; */
}
.text-search::placeholder {
    background-image: url('../assets/search.svg');
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;
}
</style>