<template>
  <div id="app">
    <!-- <gtop></gtop>
    <gleft></gleft>
    <div class="center-component">
      
    </div> -->
    <div class="g-sign-body" v-if="!isLogin">
      <g-sign></g-sign>
    </div>
    <router-view/>
    
    
  </div>
</template>

<script>

import gSign from '@/components/page/gsign'

export default {
  name: 'App',
  data(){
    return{
      isLogin: true
    }
  },
  components:{
    gSign
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow:hidden;
}
.g-sign-body{
  width: 100%;
  height: 100%;
}
.center-component{
  float:left;
  width:95%; 
  background-color: #EFF2F7;
  height:100%;
  overflow: auto;
}
</style>
