<!-- 
<script setup>
import { ref } from 'vue'

const video = [
  {
    title: 'Video 1',
    url: '<iframe width="400" height="300" src="https://www.youtube.com/embed/kj-okj0xiaU?si=JYcXGwnse5TJDqy_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    title: 'Video 2',
    url: '<iframe width="400" height="300" src="https://www.youtube.com/embed/ES9gTSVqMss?si=XKnjD4NB-gWVx53H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    title: 'Video 3',
    url: '<iframe width="400" height="300" src="https://www.youtube.com/embed/Np53fj3zR2U?si=dMti3i2wYYv_3wh6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    title: 'Video 4',
    url: '<iframe width="400" height="300" src="https://www.youtube.com/embed/mqFFm0lfFu4?si=2TJ5N_GLOIS9KVk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    title: 'Video 5',
    url: '<iframe width="400" height="300" src="https://www.youtube.com/embed/oSkS4cHcq_w?si=FO3Kzrj6_tPrGKWD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    title: 'Video 6',
    url: '<iframe width="400" height="300" src="https://www.youtube.com/embed/jIs2iuXvPAM?si=-35tjbYiwZ6ms6ND" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  
]
</script>

<template>
  <div class="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
    <div v-for="i in video" :key="i.title" class="bg-gray-100 rounded-lg shadow-xl p-4">
      <p class="text-center mb-4">{{ i.title }}</p>
      <hr class="border-2 border-black mb-4 opacity-40">
      <div class="video w-full" v-html="i.url"></div>
    </div>
  </div>
</template>

<style scoped>
.video  {
  width: 90%;
  height: 90%;
  
}
</style> -->
<script setup>
import { ref } from 'vue'

const video = [
  {
    title: 'Video 1',
    url: '<iframe width="400" height="300" src="https://www.youtube.com/embed/kj-okj0xiaU?si=JYcXGwnse5TJDqy_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    title: 'Video 2',
    url: '<iframe width="400" height="300" src="https://www.youtube.com/embed/ES9gTSVqMss?si=XKnjD4NB-gWVx53H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    title: 'Video 3',
    url: '<iframe width="400" height="300" src="https://www.youtube.com/embed/Np53fj3zR2U?si=dMti3i2wYYv_3wh6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    title: 'Video 4',
    url: '<iframe width="400" height="300" src="https://www.youtube.com/embed/mqFFm0lfFu4?si=2TJ5N_GLOIS9KVk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    title: 'Video 5',
    url: '<iframe width="400" height="300" src="https://www.youtube.com/embed/oSkS4cHcq_w?si=FO3Kzrj6_tPrGKWD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    title: 'Video 6',
    url: '<iframe width="400" height="300" src="https://www.youtube.com/embed/jIs2iuXvPAM?si=-35tjbYiwZ6ms6ND" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
]
</script>

<template>
  <div class="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
    <div v-for="i in video" :key="i.title" class="bg-gray-100 rounded-lg shadow-xl p-4">
      <p class="text-center mb-4">{{ i.title }}</p>
      <hr class="border-2 border-black mb-4 opacity-40">
      <div class="video w-full" v-html="i.url"></div>
    </div>
  </div>
</template>

<style scoped>
.video {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>