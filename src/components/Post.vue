<template>
  <div class="post-wrapper">
    <div v-if="status==='error'">
      <el-alert title="Failed to load post." type="error" show-icon center/>
    </div>
    <div v-if="status==='loading'">
      <p>Loading</p>
    </div>
    <div v-if="status==='ready'" class="content-wrapper">
      <h1>{{data.title}}</h1>
      <el-row>
        <el-col :span="6">
          <div class="grid-content">{{data.author.username}}</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">{{data.category}}</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">{{data.votes_score_avg}}</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">{{data.modification_time}}</div>
        </el-col>
      </el-row>
      <el-tag v-for="tag in data.tags" :key="tag.id">{{tag.name}}</el-tag>
      <div class="content">{{data.content}}</div>
    </div>
  </div>
</template>

<script>
import { fetch_post_by_id } from "@/api/post";

export default {
  name: "Post",
  props: {
    id: Number
  },
  data() {
    return {
      status: "loading",
      data: null
    };
  },
  mounted() {
    if (!this.id) this.id = 3;
    fetch_post_by_id(this.id)
      .then(response => {
        this.data = response.data;
        this.status = "ready";
      })
      .catch(error => {
        console.log(error);
        this.data = error;
        this.status = "error";
      });
  }
};
</script>

<style scoped>
.post-wrapper {
  margin: auto;
  width: auto;
  max-width: 60em;
}
</style>
