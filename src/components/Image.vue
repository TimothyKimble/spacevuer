<template>
  <div @submit.prevent="setActiveImage" class="image row">
    <div class="col-4">
      <img :src="image.image" alt="" class="img-fluid">
    </div>
    <div class="col-8">
      <div>{{image.title}}</div>

    </div>
  </div>
</template>


<script>
import { reactive } from 'vue';
import { Image } from '../models/Image';
import { imagesService } from '../services/ImagesService';
export default {
  name: 'Image',
  props: { image:{type: Image, required: true}},
  setup(props){
const state = reactive({
})
    return { state,
    setActiveImage(){
      imagesService.setActiveImage(props.image)
    }
    }
  }
};
</script>


<style scoped>
.image:hover{
  color: aqua;
  transform: scale(1.1);
  cursor: pointer;
}
</style>