<template>
  <div class="about">
    <h1>This is a test page.</h1>
    <el-container class='tel-search-box'>
      <el-input placeholder="请输入手机号码"
        v-model="telNo"
        style='width: 300px; marginRight: 10px;'></el-input>
      <el-button type="primary" round @click="getInfo">获取手机归属地信息</el-button>
    </el-container>
    <div>{{ telInfos }}</div>
    <div class="demo">
      <div class="container">
        <div class="ul">
          <div class="harmony"></div>
        </div>
        <div class="ul">
          <div class="harmony"></div>
        </div>
      </div>

      <svg>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0 6"/>
        </filter>
      </svg>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import { getMobileInfo } from '@/api/demo';

@Options({})
export default class About extends Vue {
  telNo = '';

  telInfos = '123';

  async getInfo() {
    if (!this.telNo) {
      return;
    }
    this.telInfos = await getMobileInfo(this.telNo);
  }

  mounted() {
    this.telInfos = this.$route.fullPath;
  }
}
</script>

<style lang="scss" scoped>
  h1{
    color: $green;
  }
  .tel-search-box{
    justify-content: center;
  }
  .about{
    background-image: linear-gradient(90deg,rgba(159,219,252,.15) 3%,transparent 0),
    linear-gradient(1turn,rgba(159,219,252,.15) 3%,transparent 0);
    background-size: 20px 20px;
    background-position: 50%;
  }
  .demo{
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    margin: 50px auto;
  }
  .ul {
    position: relative;
    width: 100px;
    height: 50px;
    padding: 10px;
    list-style: none;
    overflow: hidden
  }
  .ul:first-of-type {
    padding-bottom: 0
  }
  .ul:last-of-type {
    padding-top: 0;
    margin-top: -2px;
    animation: container-move .1s 1.2s forwards;
  }
  .harmony {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 70px;
      height: 70px;
      border: 15px solid white;
      border-radius: 50%;
      transform: translateY(50%);
      box-shadow: 0 0 6px white, inset 0 0 6px white;
      animation: move 1.2s forwards
    }
    .ul:last-of-type > .harmony {
      top: auto;
      bottom: 10px;
      transform: translateY(-50%);
      filter: url(#blur)
    }

    svg {
      width: 0;
      height: 0
    }

    @keyframes move {
      to { transform: none }
    }
</style>
