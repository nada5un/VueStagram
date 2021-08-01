<template>
   <div>
       <div v-if="step==0">
        <Post 
            :data="data" 
            v-for="(data,idx) in instaData" 
            :key="idx"
        ></Post>
       </div>
        
        <!-- 필터선택페이지 -->
        <div v-if="step==1">
            <div :class="`${filter} upload-image`" :style="`background-image:url(${imageUrl})`"></div>
            <div class="filters">
                <FilterBox :imageUrl="imageUrl" v-for="filter in filters" :key="filter" :filter="filter">
                    {{filter}}
                </FilterBox>
            </div>
        </div>
        
        <!-- 글작성페이지 -->
        <div v-if="step==2">
            <div :class="`${filter} upload-image`" :style="{ backgroundImage:`url(${imageUrl})`}"></div>
            <div class="write">
                <textarea 
                    class="write-box"
                    @click="$event.target.value=''"
                    @input="$emit('emitPostText',$event.target.value)"
                    placeholder="문구 입력..."
                >
                </textarea>
            </div>
        </div>
        
    </div>
</template>

<script>
import Post from '@/components/Post.vue';
import FilterBox from '@/components/FilterBox.vue';
import filters from '@/assets/filter'

export default {
    name: "Container",
    props:{
        instaData: Object,
        step:Number,
        imageUrl:String,
    },
    components: {
        Post,
        FilterBox,
    },
    data(){
        return{
            filters: filters,
            filter:'',
        }
    },
    methods:{
    },
    mounted(){
        this.emitter.on("filterName",(filter)=>{
        this.filter = filter;
    });
  },
}
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: black;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: black;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write{
margin-top: 10px;
display: flex;
justify-content: center;
}
.write-box {
background-color: black;
color: white;
border: none;
width: 90%;
height: 100px;
padding: 15px;
display: block;
outline: none;
}
</style>