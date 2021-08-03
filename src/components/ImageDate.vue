<template>
  <div class="ImageDate row p-2 border bg-dark text-light rounded border-primary shadow-sm mt-2 text-left">
    <form @submit.prevent="getImages" class="col-md-12 d-flex justify-content-around ">      <input v-model="state.query" type="date" name="image-date" id="start">
      <button class="btn btn-warning" @click="setActiveImage">Explore!</button>
    </form>

    <div class="col-12">
      <Image v-for="i in images" :key="i" :image="i" />
    </div>


  </div>
</template>


<script>
import {computed, onMounted, reactive } from 'vue';
import { imagesService } from '../services/ImagesService'
import { AppState } from '../AppState';
import Image from '../components/Image.vue'
export default {
  name: 'ImageDate',
  setup(){
    const state = reactive({
      query: ''
    })

    onMounted(() => {
      imagesService.getImages()
    })

    return {
      state,
      images: computed(() => AppState.images),
      getImages(){
        imagesService.getImages(state.query)
      },
      setActiveImage(image){
        imagesService.setActiveImage(image)
      }
    }
  },
  components:{Image}
}
</script>


<style  scoped>
.image:hover{
  color: aqua;
  transform: scale(1.1);
  cursor: pointer;
}
</style>