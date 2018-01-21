<template>
  <div id="app" class="container">
    <div class="row">
      <div class="header"><h1>Add another post</h1></div>
      <label>Title</label>
      <input type="text" class="input-group" v-model="newPost.newTitle"><br><br>
      <label>Message</label>
      <input type="text" v-model="newPost.newMessage" class="input-group"><br><br>
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
      // console.log(this.newPost.newTitle);
      this.$emit('add-post',this.newPost);
      console.log(this.newPost);
      // this.newPost.newTitle = '';
      // this.newPost.newMessage= '';
    }
  } 
}
</script>

