<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue'
import BoardComponent from './components/BoardComponent.vue';
import MenuComponent from './components/MenuComponent.vue';
import SpecialDeals from './components/SpecialDeals.vue';
import TransactionComponent from './components/TransactionComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

</script>

<template>
  <section class="app font-[Poppins]">
    <NavbarComponent />
    <BoardComponent />
    <MenuComponent />
    <SpecialDeals />
    <TransactionComponent />
    <FooterComponent />
  </section>
</template>