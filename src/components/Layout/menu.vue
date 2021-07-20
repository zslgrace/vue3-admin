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
