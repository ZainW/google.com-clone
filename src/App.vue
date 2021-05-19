<template>
  <div class="flex justify-between">
    <div>
      <span class="mx-2">About</span>
      <span>Store</span>
    </div>
    <div>
      <span>Gmail</span>
      <span>Images</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<style>

</style>
