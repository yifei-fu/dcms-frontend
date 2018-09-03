<template>
  <div class="home">
    <el-container>
      <el-aside width="20em">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>dcms</span>
          </div>
          <div>
            {{overview}}
          </div>
        </el-card>
        <Tags></Tags>
      </el-aside>
      <el-container>
        <el-header style="height:auto;"><img alt="Vue logo" src="../assets/logo.png"></el-header>
        <el-main>
          <PostList></PostList>
        </el-main>
        <el-footer>
          <div class="links">
            <a href="https://github.com/yifei-fu/dcms">dcms</a>
            |
            <a href="https://github.com/yifei-fu/dcms-frontend">dcms-frontend</a>
            |
            <a href="https://github.com/yifei-fu">yifei-fu</a>
          </div>
        </el-footer>
      </el-container>
    </el-container>

  </div>
</template>

<script>
// @ is an alias to /src
import PostList from "@/components/PostList.vue";
import Tags from "@/components/Tags.vue";

export default {
  name: "home",
  components: {
    PostList,
    Tags
  },
  data() {
    return {
      overview:
        "A Django CMS for building small websites, blogs, and forums. Single-page frontend with Vue.js, Element UI."
    };
  }
};
</script>
