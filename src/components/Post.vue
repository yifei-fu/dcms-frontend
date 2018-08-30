<template>
  <div class="post-wrapper">
    <div v-if="api.status==='error'">
      <el-alert title="Failed to load post." type="error" show-icon center/>
    </div>
    <div v-if="api.status==='loading'">
      <p>Loading</p>
    </div>
    <div v-if="api.status==='success'" class="content-wrapper">
      <h1>{{api.data.title}}</h1>
      <el-row>
        <el-col :span="6">
          <div class="grid-content">{{api.data.author.username}}</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">{{api.data.category}}</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">{{api.data.votes_score_avg}}</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">{{api.data.modification_time}}</div>
        </el-col>
      </el-row>
      <el-tag v-for="tag in api.data.tags" :key="tag.id">{{tag.name}}</el-tag>
      <div class="content">{{api.data.content}}</div>
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
      api: fetch_post_by_id(this.id)
    };
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
