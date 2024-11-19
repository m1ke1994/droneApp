
<template>
    <UCarousel
      ref="carousel"
      :items="items"
      :ui="{
        item: 'basis-full',
        container: 'rounded-lg',
        indicators: {
          wrapper: 'relative bottom-0 mt-4'
        }
      }"
      indicators
      class="w-2/3 mx-auto max-md:w-full max-xl:w-full"
    >
      <template #default="{ item }">
        <img :src="item" class="w-full border-2 border-black rounded-lg" draggable="false">
      </template>
  
      <template #indicator="{ onClick, page, active }">
        <UButton :label="String(page)" :variant="active ? 'solid' : 'outline'" size="2xs" class="rounded-full min-w-6 justify-center" @click="onClick(page)" />
      </template>
    </UCarousel>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const items = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
    '/5.jpg',
    '/6.jpg',
  ];
  
  // Определяем интерфейс для методов компонента UCarousel
  interface CarouselMethods {
    next: () => void;
  }
  
  // Используем интерфейс для определения типа ссылки на компонент UCarousel
  const carousel = ref<CarouselMethods | null>(null);
  
  // Исправляем тип intervalId
  let intervalId: ReturnType<typeof setInterval> | null = null;
  
  onMounted(() => {
    intervalId = setInterval(() => {
      if (carousel.value && carousel.value.next) {
        carousel.value.next();
      }
    }, 5000);
  });
  
  onUnmounted(() => {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  });
  </script>