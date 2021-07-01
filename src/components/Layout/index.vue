<template>
    <div class="page">
      <header class="page-header">Hello, welcome！</header>
      <aside class="page-aside">
        <my-menu></my-menu>
      </aside>
      <main class="page-main">
        <router-view></router-view>
      </main>
    </div>
</template>

<script>
import menu from './Menu.vue';

export default {
  components: {
    myMenu: menu,
  },
};
</script>

<style>
.page-header{
  box-sizing: border-box;
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  padding: 10px 24px;
  border-bottom: 1px solid #eaecef;
  font-weight: 500;
  line-height: 40px;
  font-size: 32px;
  text-align: left;
}
.page-aside{
  box-sizing: border-box;
  position: fixed;
  top: 61px;
  left: 0;
  bottom: 0;
  width: 260px;
  overflow-y: scroll;
  padding: 24px;
  border-right: 1px solid #eaecef;
}
.page-main{
  height: 100%;
  padding-top: 61px;
  padding-left: 260px;
}
</style>
