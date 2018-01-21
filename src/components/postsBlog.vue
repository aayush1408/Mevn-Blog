<template>
  <div>
    <div class="container" >
      <post v-on:postDelete="deletePost(post)" v-for="post in posts" v-bind:post="post" ></post>
      <add-blog  v-on:add-post='addedPost'></add-blog>
     </div>
  </div>
</template>

<script>
import Post from './post.vue';
import addBlog from './addBlog.vue';
export default {

props:['posts'], 
  components:{
    Post,
    addBlog
  },
  methods:{
    deletePost(post){
      const postIndex = this.posts.indexOf(post);
      this.posts.splice(postIndex,1);
    },
     addedPost(newPost){
        this.posts.push(newPost);
        console.log(this.posts);
        
    }
  
  }

}
</script>

<style>

</style>
