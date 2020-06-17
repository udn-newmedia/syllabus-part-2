<template>
  <div id="nav" style="padding-top:50px">
    <router-link to="/">Page1(home)</router-link>|
    <router-link to="/page2">Page2</router-link>|
    <router-link to="/page3">Page3</router-link>
  </div>
</template>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
