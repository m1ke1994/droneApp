<script>
</script>
<template>
    <h1 class="text-lime-500 text-3xl py-10 max-sm:text-xl">Обратный звонок</h1>
    <div class="w-full bg-[#1b1b1b] flex justify-between p-8 max-lg:flex-col items-center gap-10 rounded-xl">
        <div class="w-3/6 flex flex-col justify-between max-lg:flex-col items-center gap-10 max-sm:text-sm max-sm:w-full">
            <p class="text-white text-2xl py-5 max-lg:w-full text-lg">Оставьте заявку и наш менеджер свяжется с Вами в течении 5 минут</p>
            <form class="flex-col flex gap-10 w-2/4 max-lg:w-full text-lg">
                <input class="text-xl bg-[#1b1b1b] border-b-2 border-[#343434]" type="text" placeholder="Ваше Имя">
                <input class="text-xl bg-[#1b1b1b] border-b-2 border-[#343434]" type="tel" placeholder="Ваш Телефон">
                <input class="text-xl bg-[#1b1b1b] border-b-2 border-[#343434]" type="Email" placeholder="Ваш Email">
            </form>

            <button
                class=" max-sm:w-32 w-48 text-lime-500 py-2 px-14 border border-lime-500 text-lg max-lg:text-base max-lg:px-8 max-lg:py-1 max-sm:w-full hover:bg-lime-500 hover:text-black font-bold transition ease duration-300">
                Отправить
            </button>

        </div>

        <div class="w-3/6">
            <img src="/droneCall.png" alt="">
        </div>
    </div>

</template>
<style scoped></style>