<script setup>
  import { computed, onMounted, ref, watch, provide } from "vue"
  import Header from "./components/Header.vue"
  import CardList from "./components/CardList.vue"
  import Drawer from "./components/Drawer.vue"
  
  import axios from "axios"
  axios.defaults.baseURL = "http://localhost:3000";

  const products = ref([])
  const sortBy = ref('')
  const drawerOpen = ref(false)
  const cart = ref([])

  const closeDrawer = () => {
    drawerOpen.value = false
  }

  const openDrawer = () => {
    drawerOpen.value = true
  }

  const onChangeSelect = (event) => {
    sortBy.value = event.target.value
  }

  const fetchItems = async () => {
    try {
      const {data} = await axios.get('/products')
      products.value = data
    } catch(err) {
      console.log(err)
    }
  }

  const addToCart = (product) => {
    if(!product.isAdded) {
      cart.value.push(product)
      product.isAdded = true
    } else {
      cart.value.splice(cart.value.indexOf(product), 1)
      product.isAdded = false
    }

    console.log(cart)
  }

  
  onMounted(fetchItems)

  watch(sortBy, async () => {
    try {
      const {data} = await axios.get('/products', {
        params: {
          sortBy: sortBy.value
        }
      })
      products.value = data
    } catch(err) {
      console.log(err)
    }
  })

  provide('cart', {
    cart,
    closeDrawer,
    openDrawer
  })

</script>

<template>
  <Drawer v-if="drawerOpen" />
  <div class=" bg-white w-4/5 m-auto rounded-xl shadow-xl mt-10">
    <Header @open-drawer="openDrawer" />

    <div class="p-10">
      <div class="flex justify-between items-center">
        <h2 class=" text-3xl font-bold mb-10">Все кроссовки</h2>

        <div class="flex gap-4">
            <select @change="onChangeSelect" class="py-2 px-3 border border-gray-200 rounded-md outline-none">
              <option value="name">По названию</option>
              <option value="price">По цене (Дешевые)</option>
              <option value="-price">По цене (Дорогие)</option>
            </select>

            <div class="relative">
              <img src="/search.svg" class="absolute left-4 top-3" alt="">
              <input type="text" class="border border-gray-200 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:outline-gray-400" placeholder="Поиск...">
            </div>
        </div>

      </div>

      <CardList :products="products" @add-to-cart="addToCart"/>
    </div>

  </div>
</template>

<style scoped> 

</style>