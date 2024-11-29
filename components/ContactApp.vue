<template>
    <div class="conteiner bg-gray-100">
        <div class="w-9/12 mx-auto p-10 max-md:w-full max-lg:w-full max-lg:w-11/12 flex flex-col justify-center">
            <h1 class="text-lime-800 text-3xl mb-10">Контактная информация</h1>
            <div class="relative">
                <img class="mx-auto" src="/map.jpg" alt="Карта">
                <img class="absolute  z-10" src="/map-pin.svg" alt="Точка на карте">
            </div>
            <div class="contacts flex flex-col gap-4 mt-10">
                <div class="flex items-center gap-4">
                    <img src="/map-contacts.svg" alt="">
                    <p class="text-black text-xl">Санкт-Петербург: 192148, ул.Ольги Берггольц 40 лит.</p>
                </div>
                <div class="flex items-center gap-4">
                    <img src="/gmail.svg" alt="">
                    <p class="text-black text-xl">DroneShop@gmail.com</p>
                </div>
                <div class="flex items-center gap-4">
                    <img src="/phone.svg" alt="">
                    <p class="text-black text-xl">+7(999)-555-55-55</p>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.relative {
    position: relative;
}

.absolute {
    position: absolute;
    top: 40%;
    left: 60%
}
</style>