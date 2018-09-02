<template>
  <div class="post-list-wrapper">
    <div v-if="api.status==='error'">
      <el-alert title="Failed to load post." type="error" show-icon center/>
    </div>
    <div v-if="api.status==='loading'">
      <p>Loading</p>
    </div>
    <div class="content-wrapper">
      <div v-if="data">
        <el-table :data="data" :show-header="false">
          <el-table-column label="Title" align="center">
            <template slot-scope="scope">
              <router-link :to="{name:'post', params: {id:scope.row.id}}">{{scope.row.title}}</router-link>
            </template>
          </el-table-column>
        </el-table>
        <el-button class="load-more-button" round v-if="api.next_url" :loading="api.status==='loading'" @click="api.get_next()">
          {{api.status!=='loading'?"Load more":"Loading"}}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { fetch_post_list } from "@/api/post";

export default {
  name: "Categories",
  props: {
    query: String
  },
  data() {
    return {
      data: null,
      api: null
    };
  },
  mounted() {
    this.api = fetch_post_list(this.query, this.set_data);
    this.api.get_next();
  },
  methods: {
    set_data(status, data) {
      this.data = data;
    }
  }
};
</script>

<style scoped>
.post-wrapper {
  margin: auto;
  width: auto;
  max-width: 60em;
}
.load-more-button {
  margin-top: 2em;
}
</style>
