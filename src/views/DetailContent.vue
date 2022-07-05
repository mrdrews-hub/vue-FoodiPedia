<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

import FavoriteButton from '@/components/FavoriteButton.vue';

const prop = defineProps(['id'])
const router = useRouter()
const datas = (await axios(`lookup.php?i=${prop.id}`)).data.meals

const keys = (str,index) => str.replace(/\d/g, index)
const filtereIngredients = (str,res) => {
    const result = []
    res.forEach(meal => {
        for(let i = 1; i <= 20; i++){
            result.push(meal[keys(str,i)])
        }
    });
  return result.filter( val => val !== '')
}
const ingredients = filtereIngredients("strIngredient1", datas)

const filterMeasure = (str,res) => {
    const result = []
    res.forEach(meas => {
        for(let i = 1; i <= ingredients.length; i++){
            result.push(meas[keys(str,i)])
        }
    });
    return result
}
const measure = filterMeasure("strMeasure1", datas)

const ingredient = measure.map((el,i) => el + " " + ingredients[i])
const str = datas.map(el => el.strInstructions)[0].split('\r')

// onMounted(() => {
//   const btnBack = document.querySelector('#back');
//   btnBack.addEventListener('click', () => {
//     router.push({ name: 'home' })
//   })
// })
</script>

<template>
<div class="md:container mx-auto">

  <!-- Section: Design Block -->
  <section class="text-gray-800 text-center md:text-left">
    <div class="block rounded-lg shadow-lg bg-white">
      <div class="flex flex-wrap items-start" v-for="meal in datas">
        <div class="grow-0 shrink-0 basis-auto block lg:flex flex-col w-full lg:w-6/12 xl:w-4/12">
          <img :src="meal.strMealThumb" :alt="meal.strMeal"
            class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
          <div class="px-5 py-6 md:px-8">
            <div class="title mb-6 text-left flex w-full justify-between">
              <div class="flex flex-col">
                <h2 class="text-2xl font-bold mb-2 leading-7 lg:text-3xl">{{ meal.strMeal }}</h2>
                <p><b>#</b>{{ meal.strArea + " Food" }}</p>
                <p v-if="meal.strTags"><b>tags: </b>{{ meal.strTags }}</p>
              </div>
              <FavoriteButton :id="meal.idMeal" :img="meal.strMealThumb" :title="meal.strMeal" :desc="meal.strInstructions" :category="meal.strCategory"/>
            </div>
            <h2 class="font-bold text-lg mb-2">Ingredients: </h2>
            <div class="mb-2 flex flex-wrap flex-1">
              <div class="w-full lg:w-6/12 xl:w-4/12 mb-4" v-for="i in ingredient">
                <p class="flex items-center md:justify-start" >
                  <svg class="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>{{ i }}
                </p>
              </div>
            </div>
            <h2 class="text-lg font-bold mb-2 text-left">Method: </h2>
            <p class="text-gray-500 mb-6 pb-2 text-justify" v-for="(par, i) in str">
              {{par}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->

</div>
</template>