<template>
    <div>xdclass</div>
    <div>{{ user.token }}</div>
</template>

<script setup>
    import {userStore} from '../store/user.js'
    const user = userStore();

</script>