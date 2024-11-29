<script setup>
import { ref } from 'vue'

const galary = [
    {
        title:'image 1',
        url:'https://avatars.mds.yandex.net/i?id=3b2b5fc5ec5ddbf95549bf120c2b54039fbf1554-9085653-images-thumbs&n=13'
    },
    {
        title:'image 2',
        url:'https://avatars.mds.yandex.net/i?id=b88635a281d338566d5a60d8dd06c69271a5b51d-9212855-images-thumbs&n=13'
    },
    {
        title:'image 3',
        url:'https://avatars.mds.yandex.net/i?id=947da09bd1409c16cc2fb325cd5d5bd7f305f18b-5487972-images-thumbs&n=13'
    },
    {
        title:'image 4',
        url:'https://avatars.mds.yandex.net/i?id=0bcc01ad900cdc1fd53470be687620ea439a8663-9880043-images-thumbs&n=13'
    },
    {
        title:'image 5',
        url:'https://avatars.mds.yandex.net/i?id=64c930f45892d105ff21551ea60b1b4e3dd0bae4-5338918-images-thumbs&n=13'
    },
    {
        title:'image 6',
        url:'https://avatars.mds.yandex.net/i?id=d776c3a0ff57d60393c6f5beb2da16cfb89862a7-8750458-images-thumbs&n=13'
    }






]
</script>

<template>
    <div class="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <div v-for="i in galary" :key="i.title"  class="bg-gray-100 rounded-lg shadow-xl p-4">
            <p class="text-center mb-4">{{ i.title }}</p>
            <hr class="border-2 border-black mb-4 opacity-40">
            <img :src="i.url" class="w-full grayscale hover:grayscale-0 transition-all duration-500">
        </div>
        </div>
    
</template>

<style scoped>
.video iframe {
    width: 100px;
    height: 100px;

}
</style>