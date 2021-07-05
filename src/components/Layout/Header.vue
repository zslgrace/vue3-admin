<template>
  <div class="main-header">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(route, index) in routeList" :key="route.fullPath">
        <span v-if="index==routeList.length-1">{{ route.meta.title }}</span>
        <a v-else @click.prevent="handleLink(route)">{{ route.meta.title }}</a>
        </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { RouteRecord } from 'vue-router';

@Options({})
export default class Header extends Vue {
  routeList: RouteRecord[] = [];

  mounted() {
    console.log(this.$route);
    this.getBreadcrumb();
  }

  getBreadcrumb() {
    this.routeList = this.$route.matched.filter((item) => item.meta && item.meta.title); // 筛选有 title 显示的
  }

  handleLink(route: RouteRecord) {
    this.$router.push({ name: route.name });
  }
}
</script>
<style lang="scss">
.main-header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-bottom: $border;
}
</style>
