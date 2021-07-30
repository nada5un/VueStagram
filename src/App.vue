<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Vuestagram</li>
    </ul>
    <div class="flex-container" style="width:100%">
      <button class="show-button" @click="showMore">
        더보기
      </button>
    </div>
   

    <!-- <ul class="header-button-left">
      <li>Cancel</li>
    </ul> -->
    <!-- <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <ul class="logo">
      <li>Vuestagram</li>
    </ul> -->
  </div>

  <Container :instaData="instaData"/>
  
  <div class="flex-container">
    <div class="footer">
      <ul class="footer-button-plus">
        <input type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>
  
</template>

<script>
import Container from '@/components/Container.vue';
import instaData from './assets/data';
import axios from 'axios';

export default {
  name: "App", 
  data(){
    return{
      instaData: instaData,
      buttonCount:0,
    }
  },
  components: {
    Container
  },
  methods:{
    showMore(){
      //성공시 then 
      //실패시 catch 
      // axios.post('url',{name:'sung'}).then().catch((err)=>{
      //   console.log(err);
      // })

      axios.get(`https://codingapple1.github.io/vue/more${this.buttonCount}.json`)
      .then(response=>{
        //화살표 사용시 this 사용 가능 
        // 요청 성공시 
        this.instaData.push(response.data);
        this.buttonCount++;
      })
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding-bottom: 48px;
  background-color: black;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 50px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 10px;
  color: white;
}
.header {
  width: 100%;
  height: 40px;
  background-color: black;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.show-button{
  border: 1px solid #191919;
  border-radius: 30px;
  background-color: #191919;
  padding: 2px 7px;
  color: white;
}
.header-button-left {
  color: white;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: white;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.flex-container{
  display: flex;
  justify-content: center;
}
.footer {
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0;
  padding-bottom: 10px;
  background-color: black;
  color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
}
</style>
