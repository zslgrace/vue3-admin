<template>
  <div class="login">
    <el-container class='login-box'>
      <div class="login-header">登录</div>
      <el-form :model="loginForm" label-width="100px" class="login-form">
        <el-input placeholder="请输入用户名" v-model="loginForm.userName" autocomplete="off"></el-input>
        <el-input type="password"
            placeholder="请输入密码"
            v-model="loginForm.pass"
            autocomplete="off" show-password class='mt10'>
        </el-input>
        <el-button type="primary" @click="submitForm" class="login-btn">登录</el-button>
      </el-form>
    </el-container>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Login extends Vue {
  loginForm = {
    userName: '',
    pass: '',
  }

  submitForm() {
    this.$router.push('about');
  }
}
</script>
<style lang="scss" scoped>
  .login{
    overflow: hidden;
  }
  .login-header{
    font-size: 28px;
    font-weight: bold;
  }
  .login-box{
    width: 400px;
    height: 300px;
    border: 1px solid #dadce0;
    border-radius: 8px;
    padding: 46px 36px;
    margin: 100px auto 0;
    flex-direction: column;
  }
  .login-form,
  .login-btn {
    margin-top: 20px;
  }
  .mt10{
    margin-top: 10px;
  }
</style>
