<script setup>

</script>

<template>
<div class="grid justify-center items-center bg-bglogin bg-fixed bg-top h-screen w-screen fixed">
    <div class="cards px-32 py-8 rounded-tl-3xl rounded-br-3xl shadow-lg bg-red-200/20">
        <h1 class="text-2xl text-center font-bold mb-4">LOGIN FORM</h1>
            <form action="">
                <div class="grid mb-4 w-60">
                    <label for="username" class="font-bold">Username</label>
                    <input type="text" name="username" id="username" class="p-1 mt-1 focus:shadow-lg focus:border-2 border-pink-500 outline-none">    
                </div>
                <div class="grid mb-4">
                    <label for="password" class="font-bold">Password</label>
                    <input type="password" name="password" id="password" class="p-1 mt-1 focus:shadow-lg focus:shadow-xl focus:border-2 border-pink-500 outline-none">
                </div>
                <button type="submit" class="mt-3 bg-pink-400 font-bold py-2 px-4 rounded-lg hover:bg-pink-300">Login</button>
            </form>
    </div>
</div>
</template>
<style>
.cards{
    /* background: rgba(253, 230, 138, 0.3); */
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 6px;
    border: 4px solid rgba( 255, 255, 255, 0.18 );
}
</style>