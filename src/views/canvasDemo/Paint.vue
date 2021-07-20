<template>
  <!-- 参考 https://juejin.cn/post/6986785259966857247?utm_source=gold_browser_extension -->
  <div class="paint">
    <div class="header">
      <div class="options">
        <el-button type="primary" @click="changeType('pencil')" :class="{actived: type === 'pencil'}">画笔</el-button>
        <el-button type="warning" @click="changeType('rect')" :class="{actived: type === 'rect'}">正方形</el-button>
        <el-button type="danger" @click="changeType('circle')" :class="{actived: type === 'circle'}">圆形</el-button>
        <span class="demonstration" style="margin-left: 10px;">颜色</span>
        <el-color-picker v-model="color"></el-color-picker>
      </div>
      <div class="options">
        <el-button class="btn" @click="clear">清空</el-button>
        <el-button class="btn" @click="saveImg">保存</el-button>
      </div>
    </div>
    <canvas id='plane'
      @mousedown="canvasDown"
      @mouseup="canvasUp"
      @mousemove="canvasMove"
      @mouseout="canvasUp"
    ></canvas>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Paint extends Vue {
  color = '#27ae60';
  type = 'pencil';
  isDraw = false;
  beginX = 0;
  beginY = 0;
  canvasWidth = 800;
  canvasHeight = 400;
  imageData: ImageData | null = null;
  canvasEle: HTMLCanvasElement | null = null;
  ctx: CanvasRenderingContext2D | null = null;

  changeType(type: string) {
    this.type = type;
  }

  canvasDown(e: MouseEvent) {
    if (this.canvasEle) {
      this.isDraw = true;
      this.beginX = e.pageX - this.canvasEle.offsetLeft;
      this.beginY = e.pageY - this.canvasEle.offsetTop;
    }
  }

  canvasMove(e: MouseEvent) {
    if (this.canvasEle && this.isDraw) {
      const endX = e.pageX - this.canvasEle.offsetLeft;
      const endY = e.pageY - this.canvasEle.offsetTop;
      if (this.type === 'pencil') {
        this.pencilDraw(endX, endY);
      } else {
        this.draw(endX, endY);
      }
    }
  }

  pencilDraw(x: number, y: number) {
    if (this.ctx) {
      this.ctx.beginPath();
      this.ctx.arc(x, y, 5, 0, 2 * Math.PI);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
      this.ctx.closePath();
    }
  }

  draw(x: number, y: number) {
    if (this.canvasEle && this.ctx) {
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      if (this.imageData) {
        this.ctx.putImageData(this.imageData, 0, 0, 0, 0, this.canvasWidth, this.canvasHeight);
      }
      this.ctx.beginPath();
      this.ctx.strokeStyle = this.color;
      if (this.type === 'rect') {
        this.ctx.strokeRect(this.beginX, this.beginY, x - this.beginX, y - this.beginY);
      } else if (this.type === 'circle') {
        this.ctx.arc(this.beginX, this.beginY, Math.sqrt((x - this.beginX) ** 2 + (y - this.beginY) ** 2), 0, 2 * Math.PI);
        this.ctx.stroke();
      } else if (this.type === 'line') {
        this.ctx.arc(this.beginX, this.beginY, Math.sqrt((x - this.beginX) ** 2 + (y - this.beginY) ** 2), 0, 2 * Math.PI);
        this.ctx.stroke();
      }
      this.ctx.closePath();
    }
  }

  canvasUp() {
    if (this.canvasEle && this.ctx) {
      this.imageData = this.ctx.getImageData(0, 0, this.canvasWidth, this.canvasHeight);
      this.isDraw = false;
    }
  }
  clear() {
    if (this.ctx) {
      this.imageData = null;
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
  }

  saveImg() {
    if (this.canvasEle) {
      const url = this.canvasEle.toDataURL();
      const a = document.createElement('a');
      a.download = 'mypicture';
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  mounted() {
    this.canvasEle = document.getElementById('plane') as HTMLCanvasElement;
    this.ctx = this.canvasEle.getContext('2d');
    this.canvasEle.width = this.canvasWidth;
    this.canvasEle.height = this.canvasHeight;
  }
}
</script>
<style lang="scss" scope>
  .paint{
    background: #fff;
    padding: 20px 40px;
    width: 600px;
  }
  .header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .options{
    display: flex;
    flex-direction: row;
    align-items: center;;
  }
  canvas{
    border: 1px solid black;
    width: 800px;
    height: 400px;
    margin-top: 10px;
  }
  .actived{
    box-shadow:inset 2px 3px 3px rgba(0,0,0,0.5);
  }
</style>
