<template>
  <div class="center-body">
    <div class="center-top">
      
      <div class="center-top-search-input">
        <!-- <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input> -->
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <el-input v-model="input" placeholder="商品编号" size="small" style="width:100%"></el-input>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <el-input v-model="input" placeholder="商品名称" size="small" style="width:100%"></el-input>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <el-input v-model="input" placeholder="商品类别" size="small" style="width:100%"></el-input>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <el-input v-model="input" placeholder="商品品牌" size="small" style="width:100%"></el-input>
            </div>
          </el-col>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <label for="商品编号："></label>

        
      </div>
      <!-- <el-button plain>添加商品</el-button> -->
    </div>
    <div class="center-body-content">
      <div class="center-body-content-table">
        <el-table
          :data="tableData2"
          style=""
          :fit=true
          max-height="100%"
          :stripe=true
          :row-class-name="tableRowClassName">
          <el-table-column
            prop="date"
            label="商品编号"
            align="left"
            >
          </el-table-column>
          <el-table-column
            prop="name"
            label="商品名称"
            align="left"
           >
          </el-table-column>
          <el-table-column
            prop="address"
            label="商品类别"
            align="left"
            >
          </el-table-column>
          
        </el-table>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  methods:{
    tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
  },
  data(){
    return{
      select:'',
      input5:'',
      input:'',
      tableData2: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
              }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
              }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }]
    }
  }
}
</script>
<style>
  .center-body{
    background-color: #fff;
    width: 89.8%;
  }
  .center-top{
    border-bottom: solid 1px #1488C6;
  }
  .center-top-search-input input{
    width:100%;
  }
  .center-top-search-input {
    width: 100%;
    margin: 2% 1%;
    
  }
  .input-with-select{
    

  }
  .input-witch-slot{
    width: 50%
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
    width: 20%
  }
  .center-body-content{
    margin: 2% 1%;
  }
  .center-body-content-table{
    width: 100%;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .bg-purple {
    /* background: #d3dce6; */
  }
</style>
