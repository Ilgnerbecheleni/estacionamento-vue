<!-- eslint-disable vue/no-export-in-script-setup -->


<template>
  <main class="clientes">
  <h1>Clientes</h1>
    <MenuItems   
    :homeselected="false"
    :clienteselected="true"
    :Veiculoselected="false"
    />
  </main>
</template>
<script >
import MenuItems from '../components/MenuItems.vue';
export default {
  components: {
    MenuItems,
  },
};
</script>

<style>
.clientes{
  margin-left: 250px;
}
</style>