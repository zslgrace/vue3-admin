<template>
  <div class="test">
    <h1>This is a test page.</h1>
    <!-- 这里的active-color就可以使用引用的variables变量了 -->
    <el-switch v-model="value1" :active-color="variables.green"> </el-switch>
  </div>
</template>

<script>
import variables from '@/assets/style/variables.scss';

export default {
  data() {
    return {
      value1: true,
      variables,
    };
  },
};
</script>

<style lang="scss" scoped>
  h1{
    color: $green;
  }
</style>
