<template>
  <div>
    <div class="container" >
      <post v-on:postDelete="deletePost(post)" v-for="post in posts" v-bind:post="post" ></post>
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
  
  }

}
</script>

<style>
body{
  margin: 0px;
  font-family: 'Nunito SemiBold'
}
</style>
