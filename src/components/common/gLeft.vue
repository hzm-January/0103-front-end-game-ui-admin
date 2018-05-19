<template>
  <div class="left-body">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose" style="width:100%">
      <el-submenu index="1">
        <template slot="title">
          <span>商品中心</span>
        </template>
        <el-menu-item-group>
          <el-submenu index="1-1-1">
            <template slot="title">商品管理</template>
            <el-menu-item index="1-1-2-1" @click="productDetail">商品明细</el-menu-item>
          </el-submenu>
          <el-submenu index="1-1-2">
            <template slot="title">库存管理</template>
            <el-menu-item index="1-1-2-1">新增</el-menu-item>
          </el-submenu>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>会员中心</span>
        </template>  
      </el-submenu>
    </el-menu>
    <!-- <p style="width:10%;height:10%">商</p> -->
  </div>
  
</template>
<script>
export default {
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      productDetail(){
        // console.log("product");
      }
    }
}
</script>
<style scoped>
  .left-body{
       color:#fff;
       font-size:10px;
       height:100%;
       float:left;
       width:10%;
       border-right: solid 1px #1488C6;
    }
</style>
