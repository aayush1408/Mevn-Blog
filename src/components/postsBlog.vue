<template>
  <div>
    <ul v-for="post in posts">
      <li>{{post.message}} -- {{post.message}} </li>
    </ul>
  </div>
</template>

<script>

export default {
  props:['posts']
}
</script>

<style>
body{
  margin: 0px;
  font-family: 'Nunito SemiBold'
}
</style>
