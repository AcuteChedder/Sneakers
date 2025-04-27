<script setup>
import Card from './Card.vue'

defineProps({
    products: Array
})

const emit = defineEmits(['addToCart'])
</script>

<template>
    <div class=" grid grid-cols-4 gap-5">
        <Card
            v-for="product in products"
            :key="product.id"
            :title="product.title"
            :imageUrl="product.imageUrl" 
            :onClickAdd="() => emit('addToCart', product)"
            :price="product.price"
            :isAdded="product.isAdded" 
        />
    </div>
</template>