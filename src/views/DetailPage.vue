<script setup>
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import axios from 'axios';
import NotFound from './NotFound.vue';
import DetailContent from '@/views/DetailContent.vue'
import { HollowDotsSpinner } from 'epic-spinners'
import { FulfillingSquareSpinner } from 'epic-spinners'

const route = useRoute()
const id = route.params.id
</script>
<template>
<Suspense>
    <DetailContent :id="id"/>
    <template #fallback>
        <div class="absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center">
            <fulfilling-square-spinner
            :animation-duration="4000"
            :size="70"
            color="#ff1d5e"
            />
            <div class="flex items-baseline">
                <h1 class="text-2xl font-bold mt-4 mr-2">Loading Content </h1>
                <hollow-dots-spinner
                :animation-duration="1000"
                :dot-size="6"
                :dots-num="3"
                color="#000"
                />
            </div>
        </div>
    </template>
</Suspense>
</template>
