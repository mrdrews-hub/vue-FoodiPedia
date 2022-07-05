<script setup>
import { onMounted, ref } from 'vue';
import { getItem, setItem } from '../utils/storage'
const props = defineProps({
    id: String,
    img: String,
    title: String,
    desc: String,
    category: String,
})

const STORE_NAME = 'FAVORITED'
const favButton = ref(null)
const isFavorited = ref(false)

const favoriteEventHandler = (event) => {
    try {
        const dataFavorited = {
            id: props.id,
            thumbnail: props.img,
            title: props.title,
            desc: props.desc,
            category: props.category,
        }
        setItem(dataFavorited)
    } catch (error) {
        console.error(error);
    }

    // const isFavoritedStorageExist = Boolean(localStorage.getItem(STORE_NAME))
    // if(!isFavoritedStorageExist) {
    //     localStorage.setItem(STORE_NAME, JSON.stringify([dataFavorited]))
    // } else {
    //     const storage = JSON.parse(localStorage.getItem(STORE_NAME))
    //     storage.push(dataFavorited)
    //     localStorage.setItem(STORE_NAME, JSON.stringify(storage))
    // }

    isFavorited.value = !isFavorited.value
}
</script>

<template>
<button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" @click="favoriteEventHandler" ref="favButton"
    class="w-min h-min p-2 flex justify-center bg-pink-400 items-center border-2 font-bold rounded-full hover:scale-105 transition duration-150 ease-in-out"
    >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" :fill="[isFavorited ? 'red' : 'white']">
        <title>Favorite</title>
        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
    </svg>
</button>
</template>