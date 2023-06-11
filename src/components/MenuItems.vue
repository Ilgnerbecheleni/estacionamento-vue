<template>
  <nav class="bar">
    <div class="user-items">
    <img src="../assets/users.png" alt="" class="user-photo">
    <h4>Bem-vindo!</h4>
    <div class="user-info">
      <h4>User_Name</h4>

    <button class="user-exit">
      <RouterLink to="/login" class="exit-link"><i class="fa-solid fa-arrow-right-from-bracket"></i></RouterLink>
    </button>
    </div>
    </div>

    <ul class="menu">
      <li class="menuitem">
        <RouterLink to="/" :class="{ 'itemlink': true, 'selected': homeselected }"><i class="fa-solid fa-house"></i></RouterLink>
      </li>
      <li class="menuitem">
        <RouterLink to="/cliente" :class="{ 'itemlink': true, 'selected': clienteselected }"> <i class="fa-solid fa-users"></i> </RouterLink>
      </li>
      <li class="menuitem">
        <RouterLink to="/veiculo" :class="{ 'itemlink': true, 'selected': Veiculoselected }"><i class="fa-solid fa-car"></i></RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
  props: {
    homeselected: {
      type: Boolean, // Tipo da propriedade
      required: true, // Indica se a propriedade é obrigatória
    },
    clienteselected: {
      type: Boolean, // Tipo da propriedade
      required: true, // Indica se a propriedade é obrigatória
    },
    Veiculoselected: {
      type: Boolean, // Tipo da propriedade
      required: true, // Indica se a propriedade é obrigatória
    },
  },
};
</script>

<style scoped>

.user-items{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user-exit{
  margin: 10px;
  border: none;
  background: none;
  font-size: 1.3em;

}

.user-info{
  display: flex;
  align-items: center;
}
.bar {
  background:#2575E8;
  width: 200px;
  height: 100vh;
  position: fixed;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.bar h4{
  margin:4px;
}
.menu {
  width: 200px;
  height: 50vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 24px;
}
.menuitem {
  width: 200px;

 
  width: 100%;
  list-style: none;
  margin: 0;
  text-align: center;
}

.exit-link{
  color: white;

}

.exit-link:hover{
  color: red;
}

.itemlink {
  font-size: 2em;

  margin: 0;
  width: 200px;
  text-decoration: none;
  padding: 8px 0;
  display: block;
  color: #151F30;
}

.selected {
  background:#3988f7;
  color:white;

}
.ico-link{
  width: 80px;

}

.imglink{
  width: 100px;
}

.user-photo{
  width:100px;
  border-radius: 100%;
  height: 100px;
  border:0.5px solid black;
}

</style>
