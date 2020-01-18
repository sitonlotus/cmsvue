import Vue from "vue";
import App from './App.vue';
// import 'element-ui/lib/theme-chalk/index.css';
import './reset.css';
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)

new Vue({
  el:"#ex",
  components:{App },
  template:'<App/>'
 
})
