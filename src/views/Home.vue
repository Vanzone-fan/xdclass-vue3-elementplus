<template>
    <div class="text-xs text-blue-500">xdclass</div>
    <div>{{ user.token }}</div>
    <el-button type="primary">adasda</el-button>
    <el-icon>
        <House />
    </el-icon>
</template>

<script setup>
import { userStore } from '../store/user.js'
const user = userStore();
</script>