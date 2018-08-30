<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PostList></PostList>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from '@/components/PostList.vue'

export default {
  name: 'home',
  components: {
    PostList
  }
}
</script>
