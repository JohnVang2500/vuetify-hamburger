<script setup lang="ts">
import { ref } from "vue";

const isShown = ref<boolean>(false);
function onShow() {
  isShown.value = !isShown.value;
}

interface MenuType {
  icon_image: string,
  icon_name: string,
}
const menus: MenuType[] = [
  {
    icon_image: "https://www.svgrepo.com/show/485567/home-2.svg",
    icon_name: "Home",
  },
  {
    icon_image: "https://www.svgrepo.com/show/496359/menu-1.svg",
    icon_name: "Menu",
  },
  {
    icon_image: "https://www.svgrepo.com/show/499764/user.svg",
    icon_name: "About Us",
  },
  {
    icon_image: "https://www.svgrepo.com/show/496654/tag-user.svg",
    icon_name: "Contact",
  },
];

const carts = ref<number>(200);
</script>

<template>
  <section class="bg-gray-100 p-[30px]">
    <!------------- Menu Icon  -------------------------->
    <div class="flex justify-between items-center">
      <div>
        <img
          @click="onShow()"
          v-if="!isShown"
          src="https://cdn-icons-png.flaticon.com/128/9109/9109615.png"
          class="w-[60px] bg-white p-[16px] rounded-[50%] shadow-sm duration-150 
          hover:bg-gray-50 active:bg-gray-100 cursor-pointer"
        />
        <img
          @click="onShow()"
          v-else
          src="https://cdn-icons-png.flaticon.com/128/9109/9109764.png"
          class="w-[60px] bg-white p-[16px] rounded-[50%] shadow-sm duration-150 hover:bg-gray-50 active:bg-gray-100 cursor-pointer"
        />
        <ul
          class="p-5 bg-white shadow-xl text-black z-[1] rounded-box w-52 absolute duration-150 gap-5 grid"
          v-show="isShown"
        >
          <li v-for="(item, ind) in menus" :key="ind">
            <a class="flex gap-5 items-center hover:bg-gray-100 active:bg-gray-200 rounded-xl p-[10px] duration-200 cursor-pointer">
              <img :src="item.icon_image" alt="icon image" 
              class="w-[40px]">
              <p>{{ item.icon_name }}</p>
            </a>
          </li>
        </ul>
      </div>

      <!-- -------------- User and Cart Icons -->
      <ul class="flex justify-between gap-10 cursor-default">
        <li>
          <div class="flex justify-between items-center gap-3">
            <img src="https://www.svgrepo.com/show/456992/account.svg" class="w-[25px]" />
            <p class="text-orange-700">My Account</p>
          </div>
        </li>
        <li>
          <div class="flex justify-between items-center gap-3">
            <div class="relative">
              <img
                src="https://www.svgrepo.com/show/487784/shopping-bag-ui.svg"
                class="w-[25px]"
              />
              <span v-if="carts <= 99"
                class="absolute flex justify-center items-center text-center bg-red-600 text-white rounded-[50%] w-[20px] h-[20px] -bottom-2 -right-2 text-[13px]"
                >{{ carts }}</span
              >
              <span v-else
                class="absolute flex justify-center items-center text-center bg-red-600 text-white rounded-[50%] w-[20px] h-[20px] -bottom-2 -right-2 text-[10px]"
                >99+</span
              >
            </div>
            <p class="text-orange-700">Cart</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>
