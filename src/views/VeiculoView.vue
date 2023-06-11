<script>

import MenuItems from '../components/MenuItems.vue';
export default{
  components:{
    MenuItems
  }
}
</script>

<template>
  <div class="about">
    <h1>Veiculos</h1>
    <MenuItems
    
    :homeselected="false"
    :clienteselected="false"
    :Veiculoselected="true"
    />
  </div>
</template>

<style>
.about{
  margin-left: 250px;
}
</style>
