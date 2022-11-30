<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SideMenu from './components/SideMenu.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <header>
    <NavBar />
  </header>

  <div class="grid overflow-hidden grid-cols-8 grid-rows-1 gap-y-2.5 bg-country">
    <div class="box col-start-1 col-end-2">
      <SideMenu />
    </div>
    <div class="box col-start-2 col-end-9">
      <RouterView />
      <div class="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  </div>

  
  
</template>

 
