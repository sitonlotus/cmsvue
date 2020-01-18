<template>
    <div class="loginContainer">
        <div class="loginBox">
            <div class="loginForm">
                 <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="登录" name="first">
                        <el-form :model="loginData" ref="loginForm">
                            <el-form-item>
                                <el-input prefix-icon="el-icon-user" v-model="loginData.username"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-input prefix-icon="el-icon-lock" v-model="loginData.userpwd" type="password"></el-input>
                            </el-form-item>
                            <el-form-item class="btns">
                                <el-button type="primary" @click="login">登录</el-button>
                                <el-button type="info" @click="resetForm">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </el-tab-pane>
                    <el-tab-pane label="注册" name="second">
                        <el-form :model="registerData" ref="registerForm" label-width="70px">
                            <el-form-item label="用户名">
                                <el-input prefix-icon="el-icon-user" v-model="registerData.username"></el-input>
                            </el-form-item>
                            <el-form-item label="密  码">
                                <el-input prefix-icon="el-icon-lock" v-model="registerData.userpwd" type="password1"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码">
                                <el-input prefix-icon="el-icon-lock" v-model="registerData.userpwd" type="password2"></el-input>
                            </el-form-item>
                            <el-form-item class="btns">
                                <el-button type="primary" size="small">确认</el-button>
                                <el-button type="info" size="small" @click="resetForm">取消</el-button>
                            </el-form-item>
                        </el-form>
                    </el-tab-pane>
                </el-tabs>
                
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
// import 'element-ui/lib/theme-chalk/index.css';
// import less from 'less';
// Vue.use(less);
export default {
    name:"login",
    data(){
        return{
            loginData:{
                username:"",
                userpwd:""
            },
            activeName: 'first',
            registerData:{
                username:"",
                userpwd:""
            }
        }
    },
    computed:{
        loginStatus:function(){
            return this.$store.state.login.logstatus;
        },
    },
    methods:{
        login:function(){
            this.$store.dispatch("login",[this.loginData.username,this.loginData.userpwd]);
            if(this.loginStatus==true){
                window.sessionStorage.setItem("loginStatus",true);
                this.$message.success("登录成功！")
                this.$router.push({path:"/home"});
            }else{
                this.$message.error("登录失败！")
            }
        },
        resetForm:function(){
            this.$refs.loginForm.resetFields();
            this.loginData.username="";
            this.loginData.userpwd="";
        },
        handleClick:function(tab,event){
            console.log(tab, event);
        }
    },
}
</script>
<style lang="less" scoped>
.loginContainer{
    width: 100%;
    height: 100%;
    background: #999;
}
.loginBox{
    width: 450px;
    height: 260px;
    border-radius: 3px;
    box-shadow: 0 0 10px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .loginForm{
        position: absolute;
        top: 10px;
        width: 70%;
        margin-left: 15%;
    }
}
.btns{
    display: flex;
    justify-content: flex-end;
}
.el-form-item{
    margin-bottom: 10px;
}
</style>