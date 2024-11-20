<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
const team = [
    {
        name: 'Иванов Иван',
        position: 'Инженер',
        img: '/2.jpg',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quas!',
    },
    {
        name: 'Сергеев Иван',
        position: 'Директор',
        img: '/4.jpg',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quas!',
    },
    {
        name: 'Сергеев Олег',
        position: 'Менеджер',
        img: '/3.jpg',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quas!',
    }
]

</script>

<template>
    <div class="conteiner bg-[#090909]">
        <div class="w-10/12 mx-auto p-10 max-md:w-full max-lg:w-full max-lg:w-11/12 flex flex-col justify-center ">
            <h1 class="text-lime-500 text-3xl mb-10 ">Наша команда</h1>

            <div class="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
                
                <div v-for="i in team" :key="i"
                    class="card-out-team text-white flex flex-col items-center gap-4 p-4 relative">
                    <img :src="i.img" alt="">
                    <div class="flex flex-col gap-4">
                        <p class="text-xl font-bold">{{ i.name }}</p>
                        <p class="text-lg">{{ i.position }}</p>
                        <p class="text-lg">{{ i.discription }}</p>
                    </div>
                </div>


            </div>







        </div>

    </div>
</template>

<style scoped>
.card-out-team {
    position: relative;
    overflow: hidden;
}

.card-out-team::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 50%;
    border-top: 2px solid #84CC16; 
    border-left: 2px solid #84CC16;/* Цвет и толщина бордера */
    box-sizing: border-box;
}
.card-out-team::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 50%;
    border-bottom: 2px solid #84CC16; 
    border-right: 2px solid #84CC16; /* Цвет и толщина бордера */
    box-sizing: border-box;
}
</style>