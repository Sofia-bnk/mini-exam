<template>
  <div class="nav">
    <nav class="nav"><router-link to="/">Home</router-link></nav>
  </div>
  <router-view />
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Montserrat", sans-serif;
}
html {
  margin: 0;
  padding: 0;
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  max-height: 100%;
  background-color: #e4e4e4;
  width: 100%;
}
input {
  padding: 0.5em;
  border-radius: 5px;
  font-size: 1em;
  height: 1em;
}
input[type="checkbox"] {
  margin: 0.5em;
  transform: scale(1.8);
}
button {
  width: 10em;
  cursor: pointer;
  padding: 1em;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.nav {
  background-color: white;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: 1.2rem;
}
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
a:active {
  text-decoration: none;
}
</style>
