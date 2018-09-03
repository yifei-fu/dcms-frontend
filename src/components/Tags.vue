<template>
    <div class="tags-wrapper">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>Tags</span>
            </div>
            <div v-if="api">
                <el-button round v-for="tag in api.data" :key="tag.id" @click="$router.push({name:'tag', params:{tag:tag.name}})">
                    {{tag.name}}
                </el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
import { fetch_tags } from "@/api/content";

export default {
  name: "Tags",
  data() {
    return {
      api: null
    };
  },
  mounted() {
    this.api = fetch_tags(() => {});
    this.api.get_next();
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
