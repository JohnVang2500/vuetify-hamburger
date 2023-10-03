<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

interface DataType {
  image: string
  name: string
  to: string
}
const menus: DataType[] = [
  {
    image: 'https://i.pinimg.com/originals/82/56/32/8256322b33934084aa448163a51d8891.png',
    name: 'Burgers',
    to: 'hamburger'
  },
  {
    image: 'https://www.svgrepo.com/show/422270/chicken-christmas-food.svg',
    name: 'chicken',
    to: ''
  },
  {
    image: 'https://www.svgrepo.com/show/88905/pizza.svg',
    name: 'Pizza',
    to: ''
  },
  {
    image: 'https://www.svgrepo.com/show/15590/salad.svg',
    name: 'Salad',
    to: ''
  },
  {
    image: 'https://www.svgrepo.com/show/396537/french-fries.svg',
    name: 'French fries',
    to: ''
  },
  {
    image: 'https://www.svgrepo.com/show/475544/drinks.svg',
    name: 'Drinks',
    to: ''
  }
]
</script>

<template>
  <section class="bg-gray-100 p-[20px]">
    <ul
      class="max-sm:w-[400px] max-sm:grid max-sm:grid-cols-3 max-sm:rounded-[20px] max-sm:gap-10 sm:w-[500px] sm:grid sm:grid-cols-4 sm:gap-10 sm:rounded-[20px] md:w-[600px] md:grid md:grid-cols-5 lg:w-[900px] lg:grid lg:grid-cols-6 lg:rounded-[70px] xl:flex xl:justify-center xl:gap-20 shadow-lg xl:rounded-[70px] bg-white xl:w-[900px] p-[30px] m-[auto]"
    >
      <li
        v-for="(menu, id) in menus"
        :key="id"
        @click="router.push({name: menu.to})"
        class="grid gap-2 hover:opacity-100 duration-150 hover:scale-110 cursor-pointer opacity-50"
      >
        <img :src="menu.image" class="w-[40px] duration-150 m-[auto]" />
        <p class="uppercase text-[13px] text-center text-black">{{ menu.name }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>