
<template>
  <header>
  <div class="w-11/12 mx-auto bg relative text-white">
    <nav class="flex justify-between items-center p-4">
      <div class="flex items-center gap-4">
        <img src="/dronmain.svg" alt="" class="rotate-image">
        <p>DroneShop</p>
      </div>
      <div class="hidden xl:flex">
        <ul class="flex gap-10 text-lg">
          <li><a class="hover:text-[#84CC16] transition ease duration-300" href="/">Главная</a></li>
          <li><NuxtLink class="hover:text-[#84CC16] transition ease duration-300" to="/CompanyPage">Компания</NuxtLink></li>
          <li><a class="hover:text-[#84CC16] transition ease duration-300" href="#">Продукты</a></li>
          <li><NuxtLink class="hover:text-[#84CC16] transition ease duration-300" to="/ContactPage">Контакты</NuxtLink></li>
          <li><a class="hover:text-[#84CC16] transition ease duration-300" href="#">Заказать</a></li>
        </ul>
      </div>
      <div class="flex gap-2 items-center hidden xl:flex ">
        <svg width="35" height="50" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M10.8194 12.42C12.5428 10.5109 13.1518 9.97552 13.8862 9.72634C14.3945 9.5863 14.9275 9.57852 15.4392 9.70369C16.1129 9.90962 16.2911 10.0661 18.5002 12.3808C20.441 14.4134 20.6349 14.6338 20.8209 15.0312C21.1767 15.7289 21.2322 16.553 20.9737 17.2965C20.7778 17.8628 20.4997 18.2376 19.3227 19.4794L18.5551 20.2887C18.3534 20.5041 18.3061 20.8313 18.4375 21.1001C20.1432 24.16 22.5631 26.7117 25.4682 28.5137C25.8026 28.702 26.2144 28.6412 26.4866 28.3634L27.2249 27.5994C27.6812 27.1075 28.1645 26.644 28.6722 26.2114C29.4695 25.6966 30.4631 25.6506 31.3003 26.0899C31.7096 26.2958 31.8448 26.4235 33.8463 28.524C35.9104 30.6884 35.9692 30.7563 36.1963 31.2526C36.6238 32.0742 36.6194 33.0692 36.1846 33.8865C35.9633 34.3478 35.8282 34.5146 34.6668 35.7626C33.9657 36.5163 33.3057 37.2041 33.2 37.3051C32.242 38.1392 31.0128 38.5483 29.7728 38.4459C27.504 38.2285 25.3081 37.4911 23.3394 36.2857C18.9783 33.856 15.2657 30.316 12.5408 25.989C11.9473 25.0834 11.4196 24.132 10.9623 23.143C9.73555 20.932 9.10204 18.4125 9.12926 15.8529C9.22292 14.5138 9.83361 13.2734 10.8194 12.42Z"
            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p> +7(999)-555-55-55</p>
      </div>
      <div class="xl:hidden">
        <button @click="toggleMenu" class="text-white">
          <img :src="!isMenuOpen ? src='/menu.svg' : src='/menu close.svg'"  alt="">
        </button>
      </div>
    </nav>
    <div v-if="isMenuOpen" class="w-1/3 h-auto xl:hidden bg-[#2a2929] absolute right-0 top-full shadow-lg p-4 ">
      <ul class="flex flex-col gap-4 text-xl text-white
       text-center animate-slide-in">
        <li class="flex justify-around items-center max-md:text-sm flex-col">
          <img class="max-md:w-6 h-6" src="/home.svg" alt="">
          <NuxtLink class="hover:text-[#84CC16] transition ease duration-300" href="/">Главная</NuxtLink></li>
        <li class="flex justify-around items-center max-md:text-sm flex-col">
          <img class="max-md:w-6 h-6" src="/companyIcon.svg" alt="">
          <NuxtLink class="hover:text-[#84CC16] transition ease duration-300" href="/CompanyPage">Компания</NuxtLink></li>
        <li class="flex justify-around items-center max-md:text-sm flex-col ">
          <img class="max-md:w-6 h-6" src="/productsIcon.svg" alt="">
          <a class="hover:text-[#84CC16] transition ease duration-300" href="#">Продукты</a></li>
        <li class="flex justify-around items-center max-md:text-sm flex-col">
          <img class="max-md:w-6 h-6" src="/phonemenu.svg" alt="">
          <NuxtLink class="hover:text-[#84CC16] transition ease duration-300" href="/ContactPage">Контакты</NuxtLink></li>
        <li class="flex justify-around items-center max-md:text-sm flex-col">
          <img class="max-md:w-6 h-6" src="/basketIcon.svg" alt="">
          <a class="hover:text-[#84CC16] transition ease duration-300" href="#">Заказать</a></li>
      </ul>
    </div>
  </div>
  
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>
header{
  background-color: #2a2929;
}
@keyframes slide-in {
  from {
    transform: translateX(100%);
    
    opacity: 0;
  }
  to {
    transform: translateX(0);
    
    opacity: 1;
  } }
  .animate-slide-in {
  animation: slide-in 1s ease; 
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




