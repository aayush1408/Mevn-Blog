<template>
  <div id="app">
    <posts-blog v-bind:posts='posts' ></posts-blog>
    <add-blog  v-on:add-post='addedPost'></add-blog>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';    
import postsBlog from './components/postsBlog.vue';  
export default {
   components:{
    postsBlog,
    addBlog
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
             addedPost(newPost){
                this.posts.push(newPost);
                console.log(this.posts);
        
    }
    }
  
}
</script>
