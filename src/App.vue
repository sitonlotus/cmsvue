
<template>
    <router-view></router-view>
</template>

<script>
import router from './router.js';
import myStore from './store.js';
export default {
    name: 'app',
    router,
    store:myStore,
    methods:{
        
    }
}
</script>
