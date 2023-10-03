<script setup lang="ts">
</script>

<template>
    <section class="bg-gray-100 p-[30px] grid gap-10">
        <div class="relative m-[auto] grid justify-center">
            <img src="https://images.pexels.com/photos/349610/pexels-photo-349610.jpeg?cs=srgb&dl=pexels-lukas-349610.jpg&fm=jpg"
            class="w-full h-[500px] opacity-20 object-cover rounded-3xl" />
            <img src="https://burgerking.ke/assets/img/menu/beef_meals/11_double_cheese_bacon.png"
            class="absolute right-10 top-20" />
        </div>
        <div class="m-[auto] flex justify-center gap-10">
            <button type="button"
            class="w-[150px] rounded-[50px] p-[16px] text-white bg-red-600
            active:bg-blue-100 active:text-black active:border-2 hover:border-red-600 duration-100">Order Now</button>
            <button type="button" class="w-[150px] rounded-[50px] p-[16px] text-black border-red-600 border-2 active:bg-red-600 active:text-white duration-100">View Menu</button>
        </div>
    </section>
</template>

<style scoped></style>