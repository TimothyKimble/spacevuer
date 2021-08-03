<template>
  <div class="ImageDetails row  p-0 my-2 w-100 ">
    
    <div class="col-6 d-flex align-items-center">
      <img :src="activeImage.image" alt="" srcset="" class="img-fluid">
    </div>
    <div class="col-6 d-flex align-items-center justify-content-center flex-column">
      <h2 class="">{{activeImage.title}}</h2>
      {{activeImage.explanation}}</div>
  </div>
</template>


<script>
import { computed, reactive } from 'vue';
import { AppState } from '../AppState';
export default {
  name: 'ImageDetails',
  setup(){
const state = reactive({
})
    return { state,
    activeImage: computed(()=> AppState.activeImage)
    }
  }
};
</script>


<style scoped>
</style>