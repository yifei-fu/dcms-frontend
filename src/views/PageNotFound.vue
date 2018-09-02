<template>
  <div class="page-not-found-wrapper">
      <h1>404 Not Found</h1>
      <el-button @click="$router.go(-1)">Go back</el-button>
  </div>
</template>

<script>

export default {
  name: "PageNotFound"
};
</script>
