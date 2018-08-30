<template>
    <Post :id="post_id"></Post>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  name: "PostView",
  components: { Post },
  computed: {
    post_id: function() {
      return Number(this.$route.params.id);
    }
  }
};
</script>