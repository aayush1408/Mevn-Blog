<template>
  <div>
    <div class="container">
      <h1 class="header"> {{post.title}} </h1>
      <p> {{post.message}} </p>
      <button @click="showForm" class="btn btn-success btn-md">Update</button><button class="btn btn-danger btn-md" @click="deletePost(post)">Delete</button>
    </div>
    <div class="form" v-show="isEditing">
      <label>Title</label>
      <input type="text" v-model="post.title">
      <label>Message</label>
      <input type="text" v-model="post.message">
      <button @click="hideForm">Done</button>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  
  props:['post'],
  data(){
    return{
      isEditing:false
    }
  },
  methods:{
    showForm(){
      this.isEditing = true
    },
    hideForm(){
      this.isEditing =false
    },
    deletePost(post){
      this.$emit('postDelete',post);
    }
  }

}
</script>

<style>
</style>
