<script >
import MenuItems from '../components/MenuItems.vue';
export default {
  components: {
    MenuItems,
  },
}

</script>

<template>
  <main class="principal">
<h1>Principal</h1>
<MenuItems
      :homeselected="true"
      :clienteselected="false"
      :Veiculoselected="false"
    />
  </main>
</template>
<style>
.principal{
  margin-left: 250px;
}
</style>
