<template>
  <div class="sign-body">
    <div class="sign-body-center">
      <h1>GAME</h1>
      <h3>MANAGER</h3>
      <el-form class="sign-form"  ref="form" >
        <el-form-item >
          <el-input placeholder="Game ID" style=""></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="Password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button plain @click="signUp()">SIGN UP</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
  
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return{

    }
  },
  methods:{
    signUp(){
      //1.登录
      //2.登录成功跳转
      // this.$router.push('/gsign-home');
      console.log("sign up");
      this.$router.push('/home');
    }
    
  }
}
</script>
<style scoped>
  .sign-body{
    height: 100%;
    width: 100%;
    background-color: #1488C6;
    /* background: url(../../assets/yellowblue.jpg) no-repeat; */
    overflow: auto;
    text-align: center;
  }
  .sign-body-center{
    width: 20%;
    margin: 0 auto;
    margin-top: 10%;
  }
  /* .sign-form{
    width: 20%;
    margin: 0 auto;
    margin-top: 15%; 
  } */
</style>
