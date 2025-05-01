<script setup>
    import { inject } from 'vue';
    import CartItem from './CartItem.vue';

    const {cart, removeFromCart} = inject('cart')

    
</script>

<template>
    <div class="flex flex-col flex-1 gap-4" v-auto-animate>
        <CartItem 
        v-for="product in cart" 
        :key="product.id" 
        :title="product.title" 
        :price="product.price" 
        :image-url="product.imageUrl"
        @on-click-remove="() => removeFromCart(product)" /> 
    </div>
</template>