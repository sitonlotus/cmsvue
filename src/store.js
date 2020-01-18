import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import qs from 'qs';
Vue.use(Vuex);
var myStore = new Vuex.Store({
    state:{
        login:{
            username:"",
            userpwd:"",
            logstatus:false
        },
        banner:[],
        news:[],
        teacher:[],
        dish:[]
    },
    mutations:{//显式更改state里的数据
        checkStatus:function(state,[sta,username,userpwd]){
            if(sta=="ok"){
                state.login.logstatus=true;
                state.login.username=username;
                state.login.userpwd=userpwd;
            }
            this.$router.push("/home");
        },
        bannerList:function(state,json){
            state.banner.length=0;
            for(let key in json){
                state.banner.push(json[key]);
            }
        },
        newsList:function(state,json){
            state.news.length=0;
            for(let key in json){
                state.news.push(json[key]);
            }
        },
        delnews:function(state,newsid){
            for(let key in state.news){
                if(state.news[key].id_news==newsid){
                    state.news.splice(key,1);
                }
            }
        },
        searchInfo:function(state,keyword){
            for(let key in state.news){
                if(!state.news[key].title_news.includes(keyword)){
                    state.news.splice(key,1);
                }
            }
        },
        teacherList:function(state,json){
            state.teacher.length=0;
            for(let key in json){
                state.teacher.push(json[key]);
            }
        },
        dishList:function(state,json){
            state.dish.length=0;
            for(let key in json){
                state.dish.push(json[key]);
            }
        }
    },
    actions:{//异步
        login:function(context,[username,userpwd]){
            axios({
                url:"http://www.qhdlink-student.top/student/login.php",
                method:"POST",
                data:{
                    "username": username,
                    "userpwd": userpwd,
                    "userclass":48,
                    "type":2
                },
                transformRequest:[function(data){
                    return qs.stringify(data);
                }],
                headers:{"Content-Type":"application/x-www-form-urlencoded"}
            }).then(value=>context.commit("checkStatus",[value.data,username,userpwd]));
            // console.log(this);
        },
        banner:function(context,[username,userpwd]){
            axios({
                url:"http://www.qhdlink-student.top/student/banner.php",
                method:"POST",
                data:{
                    "username":username,
                    "userpwd":userpwd,
                    userclass:48,
                    type:2
                },
                transformRequest:[
                    function(data){
                        return qs.stringify(data)
                    }
                ],// transformRequest是data的回调函数，如果没有他，传送的是json格式。
                headers:{'Content-Type':'application/x-www-form-urlencoded'}
            }).then(value=>context.commit("bannerList",value.data))//then接收promise对象
        },
        news:function(context,[username,userpwd]){
            axios({
                url:"http://www.qhdlink-student.top/student/newsa.php",
                method:"POST",
                data:{
                    "username":username,
                    "userpwd":userpwd,
                    userclass:48,
                    type:2
                },
                transformRequest:[
                    function(data){
                        return qs.stringify(data)
                    }
                ],// transformRequest是data的回调函数，如果没有他，传送的是json格式。
                headers:{'Content-Type':'application/x-www-form-urlencoded'}
            }).then(value=>context.commit("newsList",value.data))//then接收promise对象
        },
        teacher:function(context,[username,userpwd]){
            axios({
                url:"http://www.qhdlink-student.top/student/coach.php",
                method:"POST",
                data:{
                    "username":username,
                    "userpwd":userpwd,
                    userclass:48,
                    type:2
                },
                transformRequest:[
                    function(data){
                        return qs.stringify(data)
                    }
                ],// transformRequest是data的回调函数，如果没有他，传送的是json格式。
                headers:{'Content-Type':'application/x-www-form-urlencoded'}
            }).then(value=>context.commit("teacherList",value.data))//then接收promise对象
        }

    },
    dish:function(context,[username,userpwd]){
        axios({
            url:"http://www.qhdlink-student.top/student/coacha.php",
            method:"POST",
            data:{
                "username":username,
                "userpwd":userpwd,
                userclass:48,
                type:2
            },
            transformRequest:[
                function(data){
                    return qs.stringify(data)
                }
            ],// transformRequest是data的回调函数，如果没有他，传送的是json格式。
            headers:{'Content-Type':'application/x-www-form-urlencoded'}
        }).then(value=>context.commit("dishList",value.data))
    }
});

export default myStore;