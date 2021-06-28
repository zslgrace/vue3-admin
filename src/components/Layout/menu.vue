<template>
  <el-menu :active-text-color="variables.green" unique-opened>
    <el-menu-item index="1">列表1</el-menu-item>
    <el-submenu index="2">
      <template #title>列表2</template>
      <el-menu-item index="2-1">列表2-1</el-menu-item>
      <el-menu-item index="2-2">列表2-2</el-menu-item>
      <el-menu-item index="2-3">列表2-3</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">列表3</el-menu-item>
    <el-menu-item index="4">列表4</el-menu-item>
    <el-submenu index="5">
      <template #title>列表5</template>
      <el-menu-item index="5-1">列表5-1</el-menu-item>
      <el-menu-item index="5-2">列表5-2</el-menu-item>
      <el-menu-item index="5-3">列表5-3</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import variables from '@/assets/style/variables.scss';

export default {
  computed: {
    variables() {
      return variables;
    },
  },
};
</script>

<style lang="scss">
  .el-menu{
    border: none;
    text-align: left;
  }
  .el-submenu.is-active .el-submenu__title{
    color: $green;
  }
  .el-menu-item:hover, .el-menu-item:focus,
  .el-submenu__title:hover, .el-submenu__title:focus {
    background-color: #fff;
    color: $green;
  }
</style>
