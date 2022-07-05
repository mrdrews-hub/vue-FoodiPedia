<script setup>
import axios from 'axios'
import CardMeal from './CardMeal.vue'
import MealIngredient from '@/components/async/MealIngredient.vue'
import TagBar from '@/components/TagBar.vue'
import { reactive, ref, watchEffect, onMounted } from 'vue';

//! Loading Content Problem

    const loading = ref(false)
    const filter = reactive({
        ingredient: '',
        category: 'Breakfast',
        country: 'Japanese'
    })
    const mealByCategory = ref()
    const mealByCountry = ref()

    const tagsIngredient = (await (axios.get('list.php?ci=list'))).data.meals
    const filterIngredientMeal = () => {
        
    }
    watchEffect(async () => {
        loading.value = true
        try {
            const response = (await axios.get(`filter.php?i=${filter.ingredient}`)).data.meals
            mealByCountry.value = response
            loading.value = false
        } catch (error) {
            console.log(error);
        }
    })

    /* FILTERING BY CATEGORY */
    const tagsCategory = (await (axios.get('list.php?c=list'))).data.meals
    const filterCategoryMeal = (key) => {
        filter.category = key
        loading.value = true
    }
    watchEffect(async () => {
        try {
            const response = (await axios.get(`filter.php?c=${filter.category}`)).data.meals
            mealByCategory.value = response
            loading.value = false
        } catch (error) {
            console.log(error);
        }
    })

    /* FILTERING BY COUNTRY */
    const tagsCountry = (await (axios.get('list.php?a=list'))).data.meals
    const filterCountryMeal = (key) => {
        filter.country = key
        loading.value = true
    }
    watchEffect(async () => {
        try {
            const response = (await axios.get(`filter.php?a=${filter.country}`)).data.meals
            mealByCountry.value = response
            loading.value = false
        } catch (error) {
            console.log(error);
        }
    })
</script>
<template>
    <div class="container mx-auto my-8">
        <!-- <MealIngredient @on-filter="filterMeal"/> -->

        <!-- mealByCategory -->
        <h2 class="text-xl">Food By Category</h2>
        <CardMeal :meals="mealByCategory" :tag="filter.category" :title="filter.category" :loading="loading">
            <template #tagbar>
                <TagBar :tags="tagsCategory" @filter-meal="filterCategoryMeal"/>
            </template>
        </CardMeal>

        <!-- JapaneseMeal -->
        <h2 class="text-xl">Food By Country</h2>
        <CardMeal :meals="mealByCountry" :tag="filter.country" :title="filter.country" :loading="loading">
            <template #tagbar>
                <TagBar :tags="tagsCountry" @filter-meal="filterCountryMeal"/>
            </template>
        </CardMeal>
    </div>
</template>
