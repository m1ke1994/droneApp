
<script setup>
import { ref, onMounted, onUpdated } from 'vue'

const video = [
  {
    title: 'Video 1',
    url: '<iframe width="400px" height="300px" src="https://www.youtube.com/embed/kj-okj0xiaU?si=JYcXGwnse5TJDqy_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    title: 'Video 2',
    url: '<iframe  width="400px" height="300px" src="https://www.youtube.com/embed/ES9gTSVqMss?si=XKnjD4NB-gWVx53H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    title: 'Video 3',
    url: '<iframe width="400px" height="300px" src="https://www.youtube.com/embed/Np53fj3zR2U?si=dMti3i2wYYv_3wh6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    title: 'Video 4',
    url: '<iframe width="400px" height="300px" src="https://www.youtube.com/embed/mqFFm0lfFu4?si=2TJ5N_GLOIS9KVk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    title: 'Video 5',
    url: '<iframe width="400px" height="300px" src="https://www.youtube.com/embed/oSkS4cHcq_w?si=FO3Kzrj6_tPrGKWD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    title: 'Video 6',
    url: '<iframe width="400px" height="300px" src="https://www.youtube.com/embed/jIs2iuXvPAM?si=-35tjbYiwZ6ms6ND" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
];


</script>

<template>
  <div class="flex flex-wrap justify-center">
    <div v-for="i in video" :key="i.title" >
      <div class="video-container p-10">
        <div class="video" v-html="i.url"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>



</style>