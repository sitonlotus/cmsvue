<template>
    <div class="home_container">
        <el-container class="home_outer">
            <el-header class="head">{{username}},欢迎你！
                <el-avatar class="headlogo" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                <el-button type="info" @click="logout">退出</el-button>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                        unique-opened="true"
                        default-active="1"
                        router>
                        <el-submenu index="/banner">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>Banner管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/banner">Banner管理</el-menu-item>
                                <el-menu-item index="#">选项2</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="/teacher">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span>学院管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/teacher">老师管理</el-menu-item>
                                <el-menu-item index="/dish">菜品管理</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-menu-item index="/news">
                            <i class="el-icon-document"></i>
                            <span slot="title">新闻管理</span>
                        </el-menu-item>
                        <el-menu-item index="#">
                            <i class="el-icon-setting"></i>
                            <span slot="title">其他管理</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-container>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                    <el-footer>@2020 版权所有</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default {
    name:"home",
    computed:{
        username:function(){
            return this.$store.state.login.username
        }
    },
    methods:{
        logout:function(){
            window.sessionStorage.clear();
            this.$router.push("/login");
        }
    }
}
</script>
<style lang="less" scoped>
.home_container{
    width: 100%;
    height: 100%;
    .home_outer{
        width: 100%;
        height: 100%;
        .head{
            background: #eee;
            line-height: 60px;
            .headlogo{
                float: right;
                vertical-align: middle;
                margin-top: 10px;
            }
        }
    }
}
.el-menu{
    border-right: 0;
}
.el-footer{
    text-align: center;
    line-height: 60px;
}
</style>

