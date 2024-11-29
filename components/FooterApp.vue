
<template>
    <footer class="bg-gray-100">
        <hr class="mb-2">
        
        <div class="w-10/12 flex justify-between mx-auto flex-wrap ">
            <div class="flex gap-6 items-center max-lg:mx-auto p-4 ">
                <img src="/dronmain.svg" alt="" class="rotate-image">
                <p class="text-xl">DroneShop</p>
            </div>
            <div class="flex gap-4 items-center max-lg:mx-auto px-4 md:text-sm ">
                <img src="/phone.svg" alt="" >
                <p class="text-2xl">+7 999 55 44 05</p>
            </div>
            <div class="flex gap-4 items-center max-lg:mx-auto px-4 md:text-sm ">
                <img src="/gmail.svg" alt="" >
                <p class="text-2xl">Droneshop@gmail.com</p>
            </div>
        </div>
    </footer>
</template>

<script>
</script>

<style scoped>

hr {
    border: 1px solid #5f9907;
}


.rotate-image {
    animation: rotate 5s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>