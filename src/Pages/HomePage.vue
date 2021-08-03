<template>
  <div class="component  ">
    <div class="row d-flex justify-content-center backgroundImaging ">
      <div class="col-md-12 bg-transparent text-light">
        <img class="img-fluid text-center" alt="Vue logo" src="../assets/logo.png">Whatta Vue
      </div>
      <div class="minRowHeight">
  <div class="row  d-flex justify-content-center text-light">
      <div class="col-md-12 d-flex justify-content-center mt-5">
        <ImageDate/>
      </div>

      <div class="col-md-8 shadow border border-dark rounded my-5 ">
        <ImageDetails/>
      </div></div></div>
    </div>

  </div>
</template>


<script>
import { reactive } from 'vue';
import ImageDate from '../components/ImageDate.vue'
import ImageDetails from '../components/ImageDetails.vue'
export default {
  name: 'HomePage',
  setup(){
    const state = reactive({

    })
    return { state }
  },
    components: {ImageDate, ImageDetails}
}
</script>


<style scoped>
.img-fluid{
  height: 5vh
}
.backgroundImaging{
  background-image: url(https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);
  background-size: cover;
}

.minRowHeight{
  min-height: 95vh;
}

body{
  overflow-x: hidden;
}
main{
  overflow-x: hidden;
}
row {
  overflow-x: hidden;
}
</style>