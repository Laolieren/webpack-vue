<template>
    <div>
        <h1>这是登陆组件{{ $store.getters.getCount }}</h1>
        <button type="button" class="btn btn-default" aria-label="Left Align">
            <span class="glyphicon glyphicon-saved">haha</span>
        </button>
    </div>

</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>

</style>