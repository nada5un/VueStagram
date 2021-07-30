<template>
   <div>
    <Post 
        :data="data" 
        v-for="(data,idx) in instaData" 
        :key="idx"
    ></Post>
    </div>
</template>

<script>
import Post from '@/components/Post.vue';
export default {
    name: "Container",
    props:{
        instaData: Object
    },
    components: {
        Post
    },
    data(){
        return{
        }
    }
}
</script>

<style>
</style>