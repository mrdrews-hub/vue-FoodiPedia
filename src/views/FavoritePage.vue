<script setup>
import CardMeal from '@/components/CardMeal.vue'
import { getItem } from '../utils/storage'

const favoriteData = getItem()

console.log(favoriteData);
</script>

<template>
<div>
    <CardMeal :meals="favoriteData"/>
</div>
</template>