<script setup>
    import { RouterLink } from 'vue-router';
</script>
<template>
<div class="h-screen w-full bg-indigo-900 relative">
    <div class="absolute z-10 top-0">
        <h1 class="font-extrabold text-4xl text-red-400 text-center">ERROR 404 NOT FOUND!</h1>
        <RouterLink to="/" class="link font-bold text-xl text-center mt-2 hover:text-red-600">Back to Earth</RouterLink>
    </div>
</div>
</template>