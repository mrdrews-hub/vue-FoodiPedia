<script setup>
import { MenuIcon, XIcon } from '@heroicons/vue/solid'
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const isOpen = ref(false)
const deviceWidth = ref(document.body.offsetWidth)
const changeBG = ref()
console.log(deviceWidth.value);
onMounted(() => {
const mybutton = document.getElementById("btn-back-to-top");
const burgerMenu = document.getElementById('burger')

    window.addEventListener("scroll", function(el) {
        
        if(window.scrollY > 100){
            changeBG.value = ['bg-slate-100/80', 'backdrop-blur-md']
            mybutton.style.display = "block"
        }else{
            // header.classList.remove('nav-fixed')
            changeBG.value = ''
            mybutton.style.display = 'none'
        }
    })
    mybutton.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
    burgerMenu.addEventListener('click', (el) => {
        const header = document.querySelector('header')
        const navMenu = document.querySelector('nav')
        burgerMenu.classList.toggle('burger-active')
        navMenu.classList.toggle('nav-hidden')
        navMenu.classList.toggle('nav-active')
    })
})

</script>

<template>

<!-- <div class="text-white z-50 transition ease-out duration-200 sticky top-0" :class="changeBG">
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
                <h1 class="font-bold text-2xl text-pink-200 font-mono">FoodiPedia</h1>
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
</button> -->

<header class="sticky top-0 left-0 w-full flex items-center z-40 py-1" :class="changeBG">
    <div class="container">
        <div class="flex items-center justify-between relative z-50">
            <div class="p-4">
                <h1 class="text-2xl font-bold text-teal-500">FoodiPedia</h1>
            </div>
            <div class="flex items-center px-4">
                <button id="burger" class="block absolute right-1 md:hidden">
                    <span class="w-[32px] h-[3px] my-2 block bg-teal-500 rounded-full origin-top-left transition duration-300 ease-in-out"></span>
                    <span class="w-[26px] h-[3px] my-2 block bg-teal-500 rounded-full transition duration-300 ease-in-out"></span>
                    <span class="w-[32px] h-[3px] my-2 block bg-teal-500 rounded-full origin-bottom-left transition duration-300 ease-in-out"></span>
                </button>
            </div>
        </div>
    </div>
                <nav class="nav-hidden pl-8 py-4 absolute top-0 bottom-0 backdrop-blur-lg h-max w-full md:static md:bg-transparent md:backdrop-blur-none md:px-14">
                <ul class="font-bold gap-4 mt-14 text-lg md:flex md:mt-0 md:justify-end md:content-center">
                    <li>
                        <RouterLink to="/" class="hover:text-teal-500 transition duration-500 flex md:items-center">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/gallery" class="hover:text-teal-500 transition duration-500 flex md:items-center">Gallery</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/favorite" class="hover:text-teal-500 transition duration-500 flex md:items-center">Favorite</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about" class="hover:text-teal-500 transition duration-500 flex md:items-center">About</RouterLink>
                    </li>
                </ul>
            </nav>
</header>

<button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" 
        class="inline-block p-3 bg-red-500/60 backdrop-blur-md text-white font-medium text-xs leading-tight uppercase 
               rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg
               focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 
               ease-in-out bottom-7 right-7 z-50 animate-bounce-slow" id="btn-back-to-top">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>
</button>
</template>
<style>
.nav-hidden{
    @apply -left-[906px] animate-fade-out;
}
.nav-active{
    @apply animate-slide-right bg-slate-100/90
}
.burger-active > span:nth-child(1){
    @apply rotate-45 ;
}
.burger-active > span:nth-child(3){
    @apply -rotate-45 ;
}
.burger-active > span:nth-child(2){
    @apply scale-0 ;
}
#btn-back-to-top {
    position: fixed;
    display: none;
}
</style>