<script setup>
defineProps({
  totalPrice: Number
})
const emit = defineEmits(['openDrawer'])

const cartOpen = () => {
  emit('openDrawer')
}
</script>
<template>
      <header  class="flex justify-between border-b border-slate-300 px-10 py-8">
        <div class="flex items-center gap-4">
          <img src="/logo.png" alt="logo" class="w-10">
          <div class="">
            <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
            <p class=" text-slate-400">Магазин лучших кроссовок</p>
          </div>
        </div>
  
        <ul class="flex items-center gap-10">
          <li @click="cartOpen" class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
            <img src="/cart.svg" alt="Cart">
            <b>{{ totalPrice }} руб.</b>
          </li>
          <li class="flex items-center gap-3 cursor-pointer font-medium text-gray-500 hover:text-black">
            <img src="/heart.svg" alt="Cart">
            <span>Закладки</span>
          </li>
          <li class="flex items-center gap-3 cursor-pointer font-medium text-gray-500 hover:text-black">
            <img src="/profile.svg" alt="Cart">
            <span>Профиль</span>
          </li>
        </ul>
      </header>
  </template>