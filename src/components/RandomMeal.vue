<script setup>
import axios from 'axios';
import { onBeforeMount,reactive,computed } from 'vue';

const randomMeal = (await axios.get('random.php')).data.meals
const ingredients = (index) => {
    return "strIngredient7".replace(/\d/g, index)
}
const measure = (index) => {
    return "strMeasure1".replace(/\d/g, index)
}
// onBeforeMount(async () => {
//     const data = (await axios.get('random.php')).data.meals
//     randomMeal.push(data) 
//     console.log(randomMeal);
// })
</script>
<template>
<div class="container my-14 px-6 mx-auto">
    <h1 class="font-bold text-2xl text-center min-w-max mx-4 mb-8">Best Food Around The World</h1>
  <!-- Section: Design Block -->
  <section class="mb-32 text-gray-800" v-for="meal in randomMeal">
    <div class="flex flex-wrap">
      <div class="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0">
        <div class="flex lg:py-12">
          <img :src="randomMeal[0].strMealThumb" class="w-full rounded-lg shadow-lg drop-shadow-lg"
            id="cta-img-nml-50" style="z-index: 10" alt="" />
        </div>
      </div>

      <div class="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
        <div
          class="bg-gradient-to-r from-cyan-400 to-blue-400 h-full rounded-lg p-6 lg:pl-12 flex items-center text-center lg:text-left relative">
          <div class="circle w-36 h-36 absolute bg-white/20 rounded-full backdrop-blur-lg drop-shadow-lg top-5"></div>
          <div class="circle w-36 h-36 absolute bg-white/20 rounded-full backdrop-blur-lg drop-shadow-lg bottom-6 right-6"></div>
          <div class="lg:pl-12 z-10">
            <h2 class="text-3xl font-bold mb-2">{{meal.strMeal}}</h2>
            <div class="pb-2">
                <span class="inline-block bg-gray-100/50 backdrop-blur-md rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{ meal.strCategory }}</span>
                <span class="inline-block bg-gray-100/50 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{ meal.strArea }}</span>
                <span class="inline-block bg-gray-100/50 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" v-if="meal.strTags">#{{ meal.strTags }}</span>
            </div>
            <div class="Ingredient">
                <h1 class="font-semibold">Ingredient: </h1>
                <div class="flex flex-wrap gap-x-2">
                    <p v-for="index in 20">{{meal[ingredients(index)]}}</p>
                </div>
            </div>
            <div>
                <h1 class="font-semibold">How to make:</h1>
                <p class="text-justify line-clamp-4 md:line-clamp-6 overflow-scroll">
                    {{meal.strInstructions}}
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->

</div>
</template>
    <style>
      @media (min-width: 992px) {
        #cta-img-nml-50 {
          margin-left: 50px;
        }
      }
    </style>