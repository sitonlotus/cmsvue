<template>
<div>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>轮播管理</el-breadcrumb-item>
  </el-breadcrumb>
  <el-card class="box-card">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="id_banner"
        label="ID号"
        width="65px">
      </el-table-column>
      <el-table-column
        prop="path_banner"
        label="路径"
        width="180">
      </el-table-column>
      <el-table-column
        prop=""
        label="照片">
        <template slot-scope="scope">
          <img :src="'http://www.qhdlink-student.top/'+scope.row.path_banner" alt="">
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</div>
</template>

<script>
  export default {
    name:"banner",
    computed:{
      username:function(){
          return this.$store.state.login.username;
      },
      userpwd:function(){
          return this.$store.state.login.userpwd;
      },
    },
    mounted(){
      this.init()
    },
    methods:{
      handleClick(row) {
        console.log(row);
      },
      init:function(){
        // this.$store.dispatch("banner",[this.username,this.userpwd])
        console.log(this.$store.state.login.username)
        this.$store.dispatch("banner",[this.$store.state.login.username,this.$store.state.login.userpwd])
      },
    },
    data() {
      return {
        tableData: this.$store.state.banner
      }
    }
  }
</script>
<style lang="less" scoped>
.cell{
  display: flex;
  align-items: center;
}
img{
  width: 180px;
}

</style>