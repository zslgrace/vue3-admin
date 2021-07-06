<template>
  <div class="about">
    <h1>This is a test page.</h1>
    <div>{{ Infos }}</div>
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

@Options({})
export default class About extends Vue {
  Infos = '123';

  mounted() {
    this.Infos = this.$route.fullPath;
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
