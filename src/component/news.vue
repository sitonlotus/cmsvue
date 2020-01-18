<template>
<div>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>新闻管理</el-breadcrumb-item>
  </el-breadcrumb>
  <el-card class="box-card">
    <el-row :gutter="20">
      <el-col :span="9">
        <el-input placeholder="请输入内容" v-model="keywords" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="searchKey"></el-button>
        </el-input>
      </el-col>
      <el-col :span="4">

      </el-col>
    </el-row>
    
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="id_news"
        label="ID号"
        width="60px">
      </el-table-column>
      <el-table-column
        prop="title_news"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="time_news"
        label="时间"
        width="180">
      </el-table-column>
      <el-table-column
        label="操作"
        width="130">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</div>
</template>

<script>
  export default {
    name:"news",
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
        this.$router.push('/newsinfo/'+row.id_news);
        
      },
      init:function(){
        // this.$store.dispatch("banner",[this.username,this.userpwd])
        this.$store.dispatch("news",[this.$store.state.login.username,this.$store.state.login.userpwd])
      },
      del:function(row) {
        this.$confirm('此操作将永久删除该条新闻, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
          this.$store.commit("delnews",row.id_news);
          this.$message.success("删除该新闻成功！");
        }).catch(()=>{
          this.$message.info("已经取消了删除！");
        })
        
      },
      searchKey:function(){
        console.log(this.keywords)
        if(this.keywords==''){
          this.$store.dispatch("news",[this.$store.state.login.username,this.$store.state.login.userpwd]);
        }else{
          this.$store.commit("searchInfo",this.keywords);
        }
      }
    },
    data() {
      return {
        tableData: this.$store.state.news,
        keywords:''
      }
    }
  }
</script>
<style lang="less" scoped>
.search{
  width: 300px;
  margin: 10px 10px 10px 0;
}
</style>