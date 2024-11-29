<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/dronmain.svg" alt="" class="rotate-image">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Droneshop</span>
      </a>
      <button data-collapse-toggle="navbar-solid-bg" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-solid-bg" aria-expanded="false" @click="toggleMenu">
        <svg v-if="!isMenuOpen" class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
        <svg v-else version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 94.926 94.926"
          style="enable-background:new 0 0 94.926 94.926;" xml:space="preserve">
          <g>
            <path
              d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0 c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096 c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476 c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62 s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z">
            </path>
          </g>
        </svg>
      </button>
      <div :class="['w-full md:block md:w-auto ', { 'hidden': !isMenuOpen, 'slide-down': isMenuOpen }]"
        id="navbar-solid-bg">
        <ul 
          class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
            <NuxtLink to="/"
              class="block py-2 px-3 md:p-0 text-gray-900 rounded md:bg-transparent md:text-gray-900 md:dark:text-white dark:text-white text-xl hover:text-lime-700 transition-all duration-300"
              aria-current="page">Главная</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/CompanyPage"
              class="block py-2 px-3 md:p-0 text-gray-900 rounded md:bg-transparent md:text-gray-900 md:dark:text-white dark:text-white text-xl hover:text-lime-700 transition-all duration-300">
              Компании</NuxtLink>
          </li>
          <li>
            <NuxtLink to="ContactPage"
              class="block py-2 px-3 md:p-0 text-gray-900 rounded md:bg-transparent md:text-gray-900 md:dark:text-white dark:text-white text-xl hover:text-lime-700 transition-all duration-300">
              Контакты</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#"
              class="block py-2 px-3 md:p-0 text-gray-900 rounded md:bg-transparent md:text-gray-900 md:dark:text-white dark:text-white text-xl hover:text-lime-700 transition-all duration-300">
              Продукты</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#"
              class="block py-2 px-3 md:p-0 text-gray-900 rounded md:bg-transparent md:text-gray-900 md:dark:text-white dark:text-white text-xl hover:text-lime-700 transition-all duration-300">
              Заказать</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
}

.slide-down {
  animation: slide-down 0.3s ease-out;
}

@keyframes slide-down {
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
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