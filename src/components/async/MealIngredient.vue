<script setup>
import axios from 'axios'
import CardMeal from '../CardMeal.vue'
import { onMounted } from 'vue';

defineEmits(['onFilter'])

    const chickenMeal = (await axios.get('filter.php?i=chicken_breast')).data.meals
    const thumbnnail = {
        chicken : "https://www.themealdb.com/images/ingredients/Chicken-small.png",
        pumpkin : "https://www.themealdb.com/images/ingredients/Pumpkin-small.png",
        fish : "https://www.themealdb.com/images/ingredients/Fish-small.png",
        beef : "https://www.themealdb.com/images/ingredients/Beef-small.png",
        pork : "https://www.themealdb.com/images/ingredients/Pork-small.png",
        egg : "https://www.themealdb.com/images/ingredients/Egg-small.png"
    }
    onMounted(() => {
        const tags = document.querySelectorAll('.tag');
        tags.forEach((el) => {
            if(el.textContent.trim().toLocaleLowerCase() == "chicken"){
                el.classList.add('myactive')
            }
            el.addEventListener('click', (tag) => {
                const isActive = document.getElementsByClassName('myactive')
                if(isActive.length > 0 ){
                    isActive[0].classList.remove('myactive')
                }
                if(tag.target.localName == "img"){
                    tag.target.parentElement.classList.add('myactive')
                }else{
                    tag.target.classList.add('myactive')
                }
            })
        })
    })
</script>
<template>
<div>
            <div class="title flex align-middle h-max items-center">
                <hr class="border-2 border-black w-full">
                    <h1 class="font-bold text-2xl text-center min-w-max mx-4 lg:mx-8">Filter By Main Ingredient</h1>
                <hr class="border-2 border-black w-full">
            </div>
            
            <div class="m-3 grid grid-cols-3 gap-y-6 gap-x-2 justify-items-center justify-center md:grid-cols-4 lg:grid-cols-max">
                <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                data-mdb-ripple-radius="50"
                @click="$emit('onFilter', 'BreakFast')"
                class="tag flex items-center bg-slate-200 rounded-full w-max px-1 hover:bg-teal-200 hover:scale-105 transition font-bold text-lg pr-4" 
                v-for="(image, meal) in thumbnnail">
                    <img :data-src="image" :alt="meal" class="lazyload w-11 h-11 shadow-sm rounded-full mr-2">
                    {{ meal[0].toUpperCase() + meal.slice(1) }}
                </button>
            </div>

            <CardMeal :meals="chickenMeal" tag="#Chicken" title="myRef"/>
</div>
</template>
<style>
.myactive{
    background-color: aquamarine !important;
    transform: scale(105%);
}
</style>