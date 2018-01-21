<template>
  <div id="app" class="container">
    <div class="row">
      <div class="header"><h1>Add another post</h1></div>
      <label>Title</label>
      <input type="text"  v-model="newPost.newTitle"><br>
      <label>Message</label>
      <input type="text" v-model="newPost.newMessage">
      <button class="btn btn-sm btn-primary" @click="addPost">+</button>  
    </div>
    
  </div>
</template>

<script>

export default {
  data(){
    return{
      newPost:{
        newTitle:'',
        newMessage:''
      }
    }
  },
  methods:{
    addPost(){
      this.$emit('add-post',this.newPost)
    }
  } 
}
</script>

