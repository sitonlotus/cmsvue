<template>
    <div class="login">
        <h2 v-html="newInfo.title_news"></h2>
        <p v-html="newInfo.time_news"></p>
        <div v-html="newInfo.info_news"></div>
        <!-- <div>{{newInfo}}</div> -->
    </div>
</template>
<script>
import qs from 'qs';
import axios from 'axios';
export default {
    name:"newsInfo",
    computed:{
      username:function(){
          return this.$store.state.login.username;
      },
      userpwd:function(){
          return this.$store.state.userpwd;
      },
    },
    methods:{
        newsInfo:function(){
            axios({
                url:"http://www.qhdlink-student.top/student/newsinfo.php",
                method:"POST",
                data:{
                    "username": this.$store.state.login.username,
                    "userpwd": this.$store.state.login.userpwd,
                    "userclass":48,
                    "type":2,
                    "m":this.$route.params.newsId
                },
                transformRequest:[function(data){
                    return qs.stringify(data);
                }],
                headers:{"Content-Type":"application/x-www-form-urlencoded"}
            }).then(value=>{
                this.newInfo=value.data[0];
                console.log(value.data[0])
            })
        }
    },
    data(){
        return{
            newInfo:null
        }
    },
    mounted(){
        this.newsInfo();
        // console.log(this.$route.params.newsId)
    }
}
</script>