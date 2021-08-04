<template>
<div style="padding : 10px">
  <div class="flex-container">
    <input class="search-box" placeholder="🔍 검색" @input="searchFollower($event.target.value)"/>
  </div>
  <div class="post-box">
    <div class="post-header" v-for="follower in followers" :key="follower">
        <div class="profile" :style="{backgroundImage:`url(${follower.image})`}"></div>
        <span class="profile-name">{{follower.name}}</span>
    </div>
  </div>
</div>
</template>
<script>
import {onMounted, ref } from 'vue';
import axios from 'axios';

export default {
    name:'mypage',
    props:{
        one:Number,
    },
    setup(){
        let followers = ref([]);
        let followersOrigin = ref([]);

        onMounted(()=>{
            axios.get('/follower.json').then((response)=>{
            followers.value = response.data;
            followersOrigin.value = [...followers.value];
            })
        });
        
        function searchFollower(input){
            let newFollower = followersOrigin.value.filter(follower=>follower.name.includes(input));
            followers.value = [...newFollower];
        }

        return {followers ,searchFollower,followersOrigin};
    },
    data(){
        return{

        }
    },
    computed:{
    }
}
</script>
<style scoped>
.search-box{
    width: 90%;
    height: 23px;
    background-color: #ddd;
    border: 1px solid #ddd;
    border-radius: 5px;
}
.post-box{
    margin-top: 20px;
}
</style>