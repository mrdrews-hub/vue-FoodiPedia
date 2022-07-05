<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { Splide, SplideSlide, } from '@splidejs/vue-splide'
import VLazyImage from 'v-lazy-image'
import { reactive } from 'vue';
import axios from 'axios'

const router = useRouter()

defineProps({
    meals: Array, //Array of object
    tag: {
        type: String,
        default: null
    },
    title: {
        type: String,
        default: ''
    },
    loading: Boolean
})

const sliderOption = {
    rewind: true,
    perPage: 4,
    autoWidth: true,
    gap: '18px',
    pagination: false,
    lazyload: 'sequential',
    breakpoints:{
        512: {
            focus: 'center',
            arrows: false
        }
    }
}

const goToDetail = (id) => {
    router.push({ name: 'detail', params: { id } })
}
</script>

<template>

<div class="mx-3 md:mx-1">
    <div class="flex items-center mt-2">
        <!-- <hr class="border-2 border-teal-400 w-1/2"> -->
        <h1 class="font-bold text-lg mx-3 text-center min-w-max">{{ title }}</h1>
        <hr class="border-2 bg-teal-400 border-teal-400 w-full rounded-full">
    </div>
    <slot name="tagbar"></slot>
    <Splide :options="sliderOption" ref="splide">
        <template #before-track class="hidden md:block">
                <div class="splide__arrows">
                        <button class="splide__arrow splide__arrow--prev bg-sky-300">
                            Prev
                        </button>
                        <button class="splide__arrow splide__arrow--next bg-sky-300">
                            Next
                        </button>
                </div>
        </template>
        <SplideSlide v-for="meal in meals" :key="meal.id" >
            <div class="w-72 max-w-sm rounded-lg overflow-hidden shadow-lg drop-shadow-md mt-4 relative" :data-id="meal.idMeal">
            <div class="w-full h-72 animate-pulse bg-slate-400" v-if="loading"></div>
                <v-lazy-image class="w-full hover:scale-105 hover:brightness-75 transition duration-1000 cursor-pointer"
                        v-else
                        :src="meal.strMealThumb"
                        :src-placeholder="meal.strMealThumb"
                        @click="goToDetail(meal.idMeal)"/>
                <div class="px-6 py-4">
                    <div class="overflow-hidden hover:overflow-visible">
                        <h1 class="title font-bold text-xl mb-2 truncate hover:text-clip transition">{{ meal.strMeal }}</h1>
                    </div>
                    <p class="text-gray-700 text-base text-justify line-clamp-2 hover:text-ellipsis overflow-hidden subpixel-antialiased">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odit. Veniam odio beatae natus repudiandae corrupti.
                    </p>
                    <div class="pt-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{ tag }}</span>
                    </div>
                </div>
            </div>
        </SplideSlide>
    </Splide>
</div>
</template>