<script setup>
import { ref,onMounted } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Navbar from '@/components/Navbar.vue'

const route = useRoute()

</script>

<template>
<Navbar/>
<RouterView />
</template>

<style>

</style>