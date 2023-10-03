<script setup lang="ts">
import MenuLayout from '@/layouts/MenuLayout.vue'
// import { RouterView } from 'vue-router';
import HamburgerPage from '@/pages/HamburgerPage.vue'
</script>

<template>
  <div>
    <MenuLayout />
    <router-view></router-view>
    <HamburgerPage />
  </div>
</template>

<style scoped></style>
