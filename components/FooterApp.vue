
<template>
    <footer class="bg-gray-800 text-white">
        <hr class="mb-2">
        <div class="w-11/12 mx-auto flex justify-evenly  pb-4 text-center max-lg:sm ">
            <div class="flex gap-6 items-center max-lg:mx-auto p-10">
                <img src="/dronmain.svg" alt="" class="rotate-image">
                <p class="text-xl">DroneShop</p>
            </div>
          <!--   <div class="max-lg:hidden">
                <ul class="flex flex-col text-center">
                    <li class="text-xl p-6">Помощь</li>
                    <li class="opacity-50 hover:opacity-100 transition ease duration-300 mb-6">Обратная связь</li>
                    <li class="opacity-50 hover:opacity-100 transition ease duration-300 mb-6">Техническая поддержка</li>
                </ul>
            </div> -->
            <!-- <div class="max-lg:hidden">
                <ul class="flex flex-col text-center">
                    <li class="text-xl p-6">Правила</li>
                    <li class="opacity-50 hover:opacity-100 transition ease duration-300">Условия использования</li>
                </ul>
            </div> -->
            <div class="flex flex-col max-lg:hidden">
                <ul >
                    <li class="text-xl p-6 text-center ">Контакты</li>
                </ul>
                <ul class="flex items-center gap-4 opacity-50 hover:opacity-100 transition ease duration-300 mb-6 max-lg:sm">
                    <li><svg width="35" height="30" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M3.82291 0.00390625C3.88163 0.00131127 3.94067 0 4 0H7.00001H41.0469H44C44.0594 0 44.1184 0.00131127 44.1771 0.00390625H46C47.1046 0.00390625 48 0.899337 48 2.00391V3.99935V31.9948V33.9981C48 35.1026 47.1046 35.9981 46 35.9981H41.1244C41.0418 36.0084 40.9582 36.0084 40.8756 35.9981H7.12441C7.0418 36.0084 6.95821 36.0084 6.8756 35.9981H2C0.895433 35.9981 0 35.1026 0 33.9981V31.9948V3.99935V2.00391C0 0.899337 0.895431 0.00390625 2 0.00390625H3.82291ZM46 32.01C45.9921 33.1277 45.1203 33.9945 44 33.9945H42V7.9987C42.0004 7.80887 41.9468 7.62284 41.8454 7.46237C41.7586 7.32513 41.64 7.21143 41.5001 7.13065V6.94306L41.3556 7.06201C41.2032 7.00403 41.0385 6.98404 40.876 7.00435C40.6876 7.02788 40.5097 7.10455 40.3633 7.22539L24 20.6998L7.63672 7.22539C7.4541 7.07571 7.2244 6.99547 6.98829 6.99887C6.87027 7.00026 6.75463 7.02249 6.64628 7.06347L6.50005 6.94306V7.13276C6.4233 7.17707 6.35214 7.23174 6.28877 7.29585C6.10377 7.48302 6.00001 7.73556 6 7.9987V33.9945H4C2.87471 33.9945 2 33.1198 2 31.9948V3.99935C2 2.91786 2.80804 2.06802 3.86998 2.0036H6.6493L23.3633 15.767C23.5425 15.9149 23.7676 15.9958 24 15.9958C24.2324 15.9958 24.4575 15.9149 24.6367 15.767L41.3507 2.0036H44.1301C45.187 2.06772 45.9924 2.9099 46 3.98413V32.01ZM38.2062 2.0036L24 13.7009L9.79384 2.0036H38.2062ZM23.3633 22.7658L8.00001 10.1155V33.9945H40V10.1155L24.6367 22.7658C24.4575 22.9138 24.2324 22.9947 24 22.9947C23.7676 22.9947 23.5425 22.9138 23.3633 22.7658Z"
                                fill="white" />
                        </svg></li>
                    <li>Tishechkin1994@gmail.com</li>
                </ul>
                <ul class="flex items-center gap-4 opacity-50 hover:opacity-100 transition ease duration-300">
                    <li><img src="/phone.svg" alt=""></li>
                    <li>+7(901)-780-05-04</li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
</script>

<style scoped>
hr {
    border: 1px solid #84CC16;
}

footer {
    background-color: #2a2929;
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