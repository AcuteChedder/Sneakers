<script setup>
    defineProps({
        id: Number,
        imageUrl: String,
        title: String,
        price: Number,
    })
</script>

<template>
    
    <div class="flex items-center border border-slate-200 p-4 rounded-xl gap-4">
        <img class="w-16 h-16" :src="imageUrl" alt="Sneakers">

        <div class="flex flex-col justify-between">
            <p>{{ title }}</p>

            <div class="flex justify-between mt-2">
                <b>{{ price }}</b>
                <img class=" opacity-40 hover:opacity-100 cursor-pointer transition" src="/close.svg" alt="">
            </div>
        </div>

    </div>

</template>