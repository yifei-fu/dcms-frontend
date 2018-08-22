<template>
  <div id="navbar">
    <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" :router="true">
      <el-menu-item v-for="route in navbar_routes" :key="route.id" :index="route.path">
        {{route.name}}
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: function() {
    return { navbar_routes };
  }
};
import { navbar_routes } from "../router";
</script>

<style scoped>
#navbar{
  overflow: hidden;
  position: sticky;
  top: 0;
  width: 100%;
}
</style>
