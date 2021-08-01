<template>    
  <div class="filter-item">
    <div class="filter-title">
      <slot></slot>
    </div>
    <div :class="`${filter} filter-image`" :style="{ backgroundImage:`url(${imageUrl})`}" @click="filterName(this.filter)">
    </div>   
  </div>
    
</template>

<script>
export default {
    name:'filterbox',
    props:{
      imageUrl:String,
      filter:String,
    },
    methods:{
      filterName(filter){
        this.emitter.emit('filterName',filter);
      }
    }
}
</script>

<style>
.filter-title{
  text-align: center;
  font-size: 12px;
  margin-top: 15px;
  margin-bottom: 5px;
}
.filter-item {
  width: 100px;
  height: auto;
  margin: 5px 5px 5px auto;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
.filter-item:first-child{
  margin-left: 15px;
}
.filter-item:last-child{
  margin-right: 15px;
}
.filter-image{
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position : center;
  display: inline-block;
}
</style>