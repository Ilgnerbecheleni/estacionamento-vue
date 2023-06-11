<!-- eslint-disable vue/no-export-in-script-setup -->


<template>
  <main class="login">
  <h1>I-PARK</h1>
 <form>
 <div class="input-items">
 <span class="input-ico"><i class="fa-solid fa-user"></i></span>
  <input type="email" class="input-info">
 </div>
 <div class="input-items">
  <span class="input-ico"><i class="fa-sharp fa-solid fa-lock"></i></span>
  <input type="password" class="input-info">
 </div>
 <RouterLink to="/" class="link">
 <button class="btn-login">
  Login
 </button>
</RouterLink>
 
 </form>
  </main>
</template>
<script >

</script>

<style>
.login{
  
  width: 100vw;
  height: 100vh;
  background: #2575E8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 200px;
}

.input-info{
  width: 200px;
  height: 30px;
  border-radius: 8px;
  border: none;

}
.input-ico{
  position: absolute;
  left: 8px;
}
.input-items{
  display: flex;
  align-items: center;
  position: relative;
}
.link{
  text-decoration: none;
  color: black;
  letter-spacing: 4px;
}

.btn-login{
  width: 200px;
  height: 35px;
  border:none;
  border:1px solid black;
  background: #2575E8;
  border-radius: 8px;
  text-transform: uppercase;
}

</style>