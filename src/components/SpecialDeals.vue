<script setup lang="ts">
import { details, lists } from '@/data/specialDeals'
</script>

<template>
  <div class="grid bg-gray-100 p-[50px]">
    <section class="bg-gray-100 p-[20px] m-[auto] grid justify-center">
      <section class="bg-gray-100 justify-center m-[auto]">
        <div
          class="xl:flex xl:justify-between xl:w-[1000px] m-[auto] items-center max-sm:grid max-sm:gap-10 sm:grid sm:gap-10"
        >
          <h1
            class="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Special Deals
          </h1>
          <div class="flex items-center gap-10 justify-center">
            <img
              src="https://www.svgrepo.com/show/410373/left-arrow.svg"
              class="w-[30px] cursor-pointer"
            />
            <p class="text-[20px] text-black tracking-[10px]">
              <span class="text-orange-600">1</span> 2 3
            </p>
            <img
              src="https://www.svgrepo.com/show/410424/right-arrow.svg"
              class="w-[30px] cursor-pointer"
            />
          </div>
        </div>
      </section>
      <div
        class="carousel xl:w-[1000px] xl:h-[400px] rounded-box flex justify-left
         max-sm:gap-0 max-sm:w-[390px] max-sm:h-[300px] max-sm:flex sm:flex sm:w-[500px] md:flex md:w-[660px] lg:flex lg:w-[890px] xl:flex"
      >
        <ul
          v-for="(det, id) in details"
          :key="id"
          class="carousel-item relative flex justify-center items-center bg-white xl:w-[700px] pl-[50px] pr-[50px] pb-[30px] scale-75 duration-150 rounded-[30px] shadow-lg opacity-50 hover:opacity-100 max-sm:w-[450px] max-sm:p-[20px] max-sm:rounded-[20px] max-sm:scale-50 max-sm:hover:scale-50 sm:w-[550px] sm:p-[10px]"
        >
          <div>
            <div class="grid gap-5">
              <div>
                <h1 class="text-[20px] text-black font-bold">{{ det.name }}</h1>
                <p>{{ det.rate }}</p>
              </div>
              <ul class="grid justify-start items-center gap-3">
                <li
                  v-for="(li, id) in lists"
                  :key="id"
                  class="flex justify-start items-center gap-3"
                >
                  <img :src="li.image" class="w-[30px]" />
                  <p class="text-gray-600 text-[13px]">{{ li.qty }} {{ li.name }}</p>
                </li>
              </ul>
              <p class="text-black text-[13px]">
                Total Cost:
                <span class="italic text-[20px] font-bold text-red-600"> ${{ det.price }}</span>
              </p>
            </div>
          </div>
          <div>
            <img :src="det.image" class="w-[400px]" />
          </div>
          <button
            type="button"
            class="w-[150px] rounded-[50px] p-[16px] active:text-black active:border-red-600 active:bg-white border-2 bg-red-600 text-white duration-100 absolute -bottom-7"
          >
            Order Now
          </button>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
