<script setup lang="ts">
import { hamburgers } from '@/data/hamburgers'
</script>

<template>
    <section class="bg-gray-100 p-[0px] m-[auto] grid justify-center">
      <div class="m-[auto] grid justify-center grid-cols-3 gap-10
      max-sm:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3">
        <div
          v-for="(ham, id) in hamburgers"
          :key="id"
          class="bg-white w-[300px] h-[350px] p-[20px] grid justify-center items-end rounded-[20px] shadow-sm duration-150 hover:scale-105
          max-sm:w-[200px] max-sm:h-[300px]
          sm:w-[250px]
          md:w-[270px]
          lg:w-[300px]"
        >
          <img :src="ham.image" class="w-[200px] m-[auto]
          max-sm:w-[130px] sm:w-[150px]" />
          <div class="grid gap-5">
            <p class="text-left text-black font-bold
            max-sm:text-[14px]">{{ ham.name }}</p>
            <div class="flex justify-between items-center">
              <p>{{ ham.rate }}</p>
              <p class="text-red-600 italic font-bold
              max-sm:text-[14px]">${{ ham.price.toLocaleString() }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped></style>