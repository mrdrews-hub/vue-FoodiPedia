<script setup>
import { MenuIcon, XIcon } from '@heroicons/vue/solid'
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const isOpen = ref(false)
let changeBG = ref('')
onMounted(() => {
let mybutton = document.getElementById("btn-back-to-top");

    window.addEventListener("scroll", function(el) {
        if(window.scrollY > 100){
            changeBG.value = 'bg-teal-600'
            mybutton.style.display = "block"
        }else{
            changeBG.value = ''
            mybutton.style.display = 'none'
        }
    })
    mybutton.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
})

</script>

<template>
<div class="text-white z-50 transition ease-out duration-200 sticky top-0" :class="changeBG">
    <header class="md:container mx-auto">
        <div class="sidebar w-1/2 bg-teal-600/50 border-2 border-teal-200 backdrop-blur-md h-screen absolute -left-96 z-50 transition" :class="isOpen ? 'left-0' : 'hidden'">
            <XIcon class="absolute top-0 right-0 w-8 m-1 cursor-pointer hover:text-red-500" @click="isOpen = !isOpen"/>
            <div class="mt-16 ml-8 font-bold text-xl flex flex-col justify-center align-middle gap-4">
                <div>
                    <RouterLink to="/" class="border-b-2 hover:border-black transition duration-500">Home</RouterLink>
                </div>
                <div>
                    <RouterLink to="/gallery" class="border-b-2 hover:border-black transition duration-500">Gallery</RouterLink>
                </div>
                <div>
                    <RouterLink to="/about" class="border-b-2 hover:border-black transition duration-500">About</RouterLink>
                </div>
            </div>
        </div>
        <nav class="flex items-center justify-between content-center px-4 py-3">
            <div class="font-bold mr-4 hidden md:flex gap-6">
                <div>
                    <RouterLink to="/" class="border-b-2 hover:text-teal-200 transition duration-500">Home</RouterLink>
                </div>
                <div>
                    <RouterLink to="/gallery" class="border-b-2 hover:text-teal-200 transition duration-500">Gallery</RouterLink>
                </div>
                <div>
                    <RouterLink to="/about" class="border-b-2 hover:text-teal-200 transition duration-500">About</RouterLink>
                </div>
            </div>
            <MenuIcon class="w-12 md:hidden cursor-pointer" @click="isOpen = !isOpen"/>
    
            <div class="brand">
                <h1 class="font-bold text-2xl text-pink-200 font-palette">EATIFY</h1>
            </div>
        </nav>
    </header>
</div>
<button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" 
        class="inline-block p-3 bg-red-500/60 backdrop-blur-md text-white font-medium text-xs leading-tight uppercase 
               rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg
               focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 
               ease-in-out bottom-7 right-7 z-50 animate-bounce-slow" id="btn-back-to-top">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>
</button>
</template>
<style>
#btn-back-to-top {
  position: fixed;
  display: none;
}
</style>