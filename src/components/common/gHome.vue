<template>
  <div class="g-home-style">
      <g-top class="home-top"></g-top>
      <g-left class="home-left"></g-left>
      <gCenterHome class="home-center"></gCenterHome>
  </div>
</template>
<script>
import gLeft   from "@/components/common/gleft";
import gTop    from "@/components/common/gtop";
import gCenter from "@/components/common/gCenter";
import gCenterHome from "@/components/common/gCenterHome";
export default {
    components:{
        gLeft,gTop,gCenter,gCenterHome
    }
};
</script>
<style>
    .g-home-style{
        height: 100%;
    }
    .home-left{
        height: 100%;
        float: left;
    }
    .home-center{
        height: 100%;
        width: 90%;
        /* background-color: rgb(238, 225, 225); */
        /* background-color: #1488C6; */
        float: left;
    }
</style>
