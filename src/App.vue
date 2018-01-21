<template>
  <div id="app">
    <posts-blog v-bind:posts='posts' ></posts-blog>
    <add-blog v-on:add-post="addPost"></add-blog>
  </div>
</template>

<script>
import post from './components/post.vue';    
import postsBlog from './components/postsBlog.vue';  
export default {
   components:{
    'posts-blog':postsBlog
  } ,

   data(){
    return{
      posts:[{
        title:'Rick',
        message:'Rickty rickty mother fucker'
      },{
        title:'Morty',
        message:'I am a loser'
      },{
        title:'Beth',
        message:'I am Ricks daughters'
      },{
        title:'Jerry',
        message:'I am just an asshole'
      }]
         }
  },
  methods:{
      addPost(newPost){
      this.posts.push(newPost);
    }
  }
  
}
</script>

<style>
body{
  margin: 0px;
  font-family: 'Nunito SemiBold'
}
</style>
