<template>
  <el-menu :active-text-color="variables.green" unique-opened>
    <side-menu-item v-for="(route, index) in routes" :key="route.path" :item="route" :index="index"/>
  </el-menu>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import variables from '@/style/_variables.scss';
import { constRoutes, dynamicRoutes } from '@/router';
import SideMenuItem from './SideMenuItem.vue';

@Options({
  components: {
    SideMenuItem,
  },
})
export default class Menu extends Vue {
  variables = variables;

  routes = dynamicRoutes.concat(constRoutes);
}
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
