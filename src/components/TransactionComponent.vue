<script setup lang="ts">
import { transactions } from '@/data/transaction'
</script>

<template>
  <div class="grid bg-gray-100 p-[100px] m-[auto] justify-center">
    <div class="relative bg-white grid justify-center items-center rounded-[20px] h-[550px] pt-[px] 
    max-sm:h-[1100px] max-sm:w-[430px] sm:w-[500px] sm:h-[1000px]
    md:w-[650px] lg:h-[800px] lg:pt-[420px] xl:w-[1000px]">
      <ul class="flex justify-center m-[auto] gap-6 absolute -top-20 -right-9
      max-sm:grid max-sm:top-0 max-sm:left-0 max-sm:grid-cols-2 max-sm:relative
      sm:grid sm:relative sm:left-0 sm:grid-cols-2 md:grid-cols-2 lg:absolute lg:left-8
      xl:flex xl:absolute xl:-left-8 xl:h-[500px]">
        <li
          v-for="(tran, id) in transactions"
          :key="id"
          class="bg-white shadow-lg hover:shadow duration-150 w-[250px] h-[260px] p-[20px] grid justify-center rounded-[20px] 
          max-sm:w-[180px] max-sm:scale-90 max-sm:h-[180px]
          sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]"
        >
          <img :src="tran.image" class="w-[80px] m-[auto]" />
          <h1 class="text-center font-bold text-black text-[20px]">{{ tran.name }}</h1>
          <p class="text-center text-[13px] text-gray-600 max-sm:hidden">{{ tran.text }}</p>
        </li>
      </ul>
      <div class="grid gap-10">
        <h1
          class="font-extrabold text-center text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Explore Signature Menu
        </h1>
        <p class="leading-8 text-center m-[auto] xl:w-[790px] text-[13px] text-gray-600 
        max-sm:w-[350px] sm:w-[380px] md:w-[450px] lg:w-[500px]">
            Those traveling in third class didn't eat all that badly either. They took their meals in one of two dining rooms on the middle deck with a joint capacity of 473. 
        </p>
        <div class="m-[auto] flex justify-center gap-10">
            <button type="button"
            class="w-[150px] rounded-[50px] p-[16px] text-white bg-red-600
            active:bg-blue-100 active:text-black active:border-2 hover:border-red-600 duration-100">Order Now</button>
            <button type="button" class="w-[150px] rounded-[50px] p-[16px] text-black border-red-600 border-2 active:bg-red-600 active:text-white duration-100">View Menu</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>