<script setup>
import { onMounted } from 'vue'
import { Splide, SplideSlide, } from '@splidejs/vue-splide'

defineProps(['tags'])
defineEmits(['filterMeal'])

const sliderOption = {
    rewind: true,
    perPage: 4,
    autoWidth: true,
    gap: '14px',
    pagination: false,
    arrows: false
}
</script>

<template>
<div class="px-2 mt-4">
    <Splide :options="sliderOption">
        <SplideSlide v-for="tag in tags">
                <span 
                class="px-4 py-2 rounded-full text-gray-600 bg-slate-300 font-semibold text-sm flex align-center w-max cursor-pointer hover:bg-slate-200 transition duration-300 ease" 
                @click="$emit('filterMeal',tag.strCategory || tag.strArea)">
                    {{tag.strCategory || tag.strArea}}
                </span>
        </SplideSlide>
    </Splide>
</div>
</template>