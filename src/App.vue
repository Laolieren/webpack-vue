<template>
    <div id="main">
        <router-link to="/login">登陆</router-link>
        <router-link to="/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'App',
}
</script>


