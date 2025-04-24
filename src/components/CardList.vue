<script setup>
import Card from './Card.vue'

defineProps({
    products: Array
})
</script>

<template>
    <div class=" grid grid-cols-4 gap-5">
        <Card
            v-for="product in products"
            :key="product.id"
            :title="product.title"
            :imageUrl="product.imageUrl" 
            :price="product.price" 
        />
    </div>
</template>