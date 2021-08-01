import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name: 'kim',
      likes:[36,29,40],
      isLiked:[false,false,false],
      postMore:{},
    }
  },
  mutations:{
    updateLikes(state,idx){
    if(state.isLiked[idx]==false){
        state.likes[idx]++;
    }
    else{
        state.likes[idx]--;
    }
    state.isLiked[idx] = !state.isLiked[idx]
    },
    AddLikes(state){
        state.likes.unshift(0);
        state.isLiked.unshift(false);
    },
    setPostMore(state,response){
        state.postMore = response;
    }
  },
  actions:{
    getPost(context,buttonCount){
        axios.get(`https://codingapple1.github.io/vue/more${buttonCount}.json`)
        .then(response=>{
            context.commit('setPostMore',response.data);
        })
    }
  }
})

export default store