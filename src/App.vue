<script setup>
  import Header from "./components/Header.vue"
  import CardList from "./components/CardList.vue"
  import Drawer from "./components/Drawer.vue"
</script>

<template>
  <!-- <Drawer /> -->
  <div class=" bg-white w-4/5 m-auto rounded-xl shadow-xl mt-10">
    <Header/>

    <div class="p-10">
      <div class="flex justify-between items-center">
        <h2 class=" text-3xl font-bold mb-10">Все кроссовки</h2>

        <div class="flex gap-4">
            <select class="py-2 px-3 border border-gray-200 rounded-md outline-none">
              <option value="">По названию</option>
              <option value="">По цене (Дешевые)</option>
              <option value="">По цене (Дорогие)</option>
            </select>

            <div class="relative">
              <img src="/search.svg" class="absolute left-4 top-3" alt="">
              <input type="text" class="border border-gray-200 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:outline-gray-400" placeholder="Поиск...">
            </div>
        </div>

      </div>

      <CardList />
    </div>

  </div>
</template>

<style scoped> 

</style>

