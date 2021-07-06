<template>
  <el-menu
    :active-text-color="variables.green"
    :default-active="activeMenu"
    unique-opened>
    <side-menu-item v-for="route in routes" :key="route.name" :item="route" />
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

  get activeMenu() {
    const route = this.$route;
    console.log(route.path);
    return route.path;
  }
}
</script>

<style lang="scss">
  .el-menu{
    border: none;
    text-align: left;
  }
  .el-submenu.is-active >.el-submenu__title{
    color: $green;
  }
  .el-menu-item:hover, .el-menu-item:focus,
  .el-submenu__title:hover, .el-submenu__title:focus {
    background-color: #fff;
    color: $green;
  }
</style>
