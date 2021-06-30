<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <el-switch v-model="value1"> </el-switch>
    <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>
  </div>
</template>

<script lang="ts">
import {
  Options,
  Vue,
} from 'vue-class-component';

@Options({})
export default class Home extends Vue {
  value1 = true;

  value2 = true;
}
</script>
