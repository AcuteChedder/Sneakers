<script setup>
    import DrawerHead from './DrawerHead.vue';
    import CartListItem from './CartListItem.vue';
    import InfoBlock from './InfoBlock.vue';

    defineProps({
        totalPrice:  Number,
        vatPrice: Number
    })
</script>

<template>
    <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
    <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
        <DrawerHead />

        <div class="flex h-full items-center" v-if="!totalPrice">
            <InfoBlock  
            title="Корзина пустая" 
            description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ." 
            imageUrl="/package-icon.png"/>
        </div>

        <CartListItem />

        <div class="flex flex-col gap-4 mt-7" v-if="totalPrice">
            <div class="flex gap-2">
                <span>Итого:</span>
                <div class="flex-1 border-b border-dashed"></div>
                <b>{{ totalPrice }} руб.</b>
            </div>

            <div class="flex gap-2">
                <span>Налог 5%:</span>
                <div class="flex-1 border-b border-dashed"></div>
                <b>{{ vatPrice }} руб.</b>
            </div>

            <button :disabled="totalPrice ? false : true" class="mt-4 bg-lime-500 w-full rounded-xl py-3 disabled:bg-slate-400 text-white hover:bg-lime-600 transition active:bg-lime-700 cursor-pointer">Оформить заказ</button>
        </div>

    </div>
</template>