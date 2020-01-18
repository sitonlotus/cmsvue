import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './page/login.vue';
import Home from './page/home.vue';
import {
    Button,
    Form,
    Input,
    FormItem,
    Container,
    Aside,
    Main,
    Header,
    Footer,
    Avatar,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Table,
    TableColumn,
    Message,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Row,
    Col,
    MessageBox,
    Tag,
    Dialog,
    Select,
    Option,
    DatePicker,
    Tabs,
    TabPane,
    Upload
} from 'element-ui'

Vue.use(VueRouter);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Header);
Vue.use(Footer);
Vue.use(Avatar);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Tag);
Vue.use(Dialog);
Vue.use(Select);
Vue.use(Option);
Vue.use(DatePicker);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Upload);
Vue.prototype.$message=Message;
Vue.prototype.$confirm=MessageBox.confirm;

import Banner from './component/banner.vue';
import Teacher from './component/teacher.vue';
import Dish from './component/dish.vue';
import News from './component/news.vue';
import NewsInfo from './component/newsinfo.vue';
const router = new VueRouter({
    routes:[
        {path:'/',component:Login},
        {path:'/login',component:Login},
        {
            path:'/home',
            component:Home,
            children:[
                {path:'/',redirect:'/banner'},
                {path:'/banner',component:Banner},
                {path:'/teacher',component:Teacher},
                {path:'/dish',component:Dish},
                {path:'/news',component:News},
                {path:'/newsinfo/:newsId',component:NewsInfo},
            ],
        }
    ]
});
router.beforeEach((to,from,next)=>{
//     // to代表将要访问的路径
//     // from表示从哪个路径跳转
//     // next表示放行
    if(to.path=="/login" || to.path=="/"){
        return next();
    }
    const loginSta=window.sessionStorage.getItem("loginStatus");
    if(loginSta)
        return next();
    next("/login")
    
})
export default router;