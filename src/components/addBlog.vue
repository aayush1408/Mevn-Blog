<template>
  <div id="app" class="container">
    <div class="row">
      <div class="header"><h1>Add another post</h1></div>
      <label>Title</label>
      <input type="text" v-model="title" class="input-group" ><br><br>
      <label>Message</label>
      <input type="text" v-model="message" class="input-group"><br><br>
      <button class="btn btn-sm btn-primary" @click="addPost">+</button>  
    </div>
    
  </div>
</template>

<script>
export default {

  data(){
    return{
        title:'',
        message:''
    }
  },
  methods:{
    addPost(){
      const title = this.title;
      const message = this.message;
     this.$emit('add-post',{title,message});
    }
  } 
}
</script>

