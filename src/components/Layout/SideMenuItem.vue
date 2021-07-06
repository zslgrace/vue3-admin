<template>
  <section class="sideMenuItem" v-if="item.meta && !item.meta.hidden">
    <el-menu-item v-if="!item.children" :index="item.path" @click="toPage(item.name)">
        <i class="menu_icon_actived"></i>
        <span>{{ item.meta.title }}</span>
    </el-menu-item>

    <el-submenu v-else :index="item.path">
        <template #title>
            <i :class="item.meta.icon"></i>
            <span>{{ item.meta.title }}</span>
        </template>
        <side-menu-item
                v-for="child in item.children"
                :key="child.name"
                :item="child"
        />
    </el-submenu>
  </section>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: ['item', 'index'],
})
export default class SideMenuItem extends Vue {
  toPage(route: string) {
    this.$router.push({ name: route });
  }
}
</script>
