<script setup>
import { reactive, onBeforeMount } from 'vue';
import MealContent from '@/components/MealContent.vue'
import RandomMeal from '@/components/RandomMeal.vue'
import axios from 'axios';

// let data = reactive({})
// onBeforeMount(async() => {
//     data = (await axios.get('filter.php?c=Seafood')).data
//     console.log(data);
// })
</script>

<template>
    <div class="bg-bghero bg-cover bg-top h-128 lg:h-148 relative -mt-24 bg-fixed animate-fade">
        <div class="h-full flex items-center justify-center">
            <div class="w-full py-16 bg-slate-100/40 rounded-xl backdrop-grayscale md:w-max md:p-16">
                <p class="font-bold text-4xl text-center text-red-500">Welcome to Eatify</p>
                <p class="font-bold text-4xl text-center text-red-500 mb-8">Free Food Catalogoue</p>
                <form action="" class="text-center flex justify-evenly">
                    <input class="form-control block p-2 mr-2 w-4/6 sm:w-96 transition rounded border border-solid border-gray-300
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-teal-400
                    focus:outline-none" type="text" placeholder="Search Food">
                    <button class="bg-teal-400 p-2 rounded font-bold hover:bg-teal-500">Search</button>
                </form>
                
            </div>
        </div>
    </div>
    <Suspense>
        <RandomMeal />
    </Suspense>
    <Suspense>
        <MealContent />
        <template #fallback>
            <div class="grid grid-rows-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                <div class="border-2 shadow-md rounded-md mx-auto p-4 mt-4 w-72" v-for="n in 4">
                    <div class="animate-pulse">
                        <div class="bg-slate-600 h-52 w-full rounded-md"></div>
                        <div class="space-y-6">
                            <div class="h-4 bg-slate-600 rounded mt-6"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-3 gap-4">
                                    <div class="h-2 bg-slate-600 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-600 rounded col-span-1"></div>
                                </div>
                                <div class="h-2 bg-slate-600 rounded"></div>
                            </div>
                            <div class="rounded full w-14 h-4 bg-slate-600"></div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Suspense>
    <div class="py-12 bg-teal-600 text-center">
        <div><p class="text-2xl font-semibold">&copy;Copyright 2022 <span class="text-pink-300">EATIFY</span></p></div><br>
        <h2 class="text-lg">By Andre Saputra</h2>
    </div>
</template>
<style>
@keyframes myfade{
    from { opacity: 0 }
    to { opacity: 1 }
}
.bg-bghero{
    animation: myfade linear 1s;
}
</style>