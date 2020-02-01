<template>
  <div class="main home">
    <div class="header">
      <!-- <h1>Have a nice haliday</h1> -->
    </div>
    <ul class="menu">
      <li @click="$router.push({name: 'Airplane'})">訂機票</li>
      <li @click="$router.push({name: 'Restaurant'})">訂飯店</li>
      <li @click="$router.push({name: 'Game'})">紅利點數</li>
      <li @click="$router.push({name: 'Test'})">測驗遊戲</li>
    </ul>
    <div class="primary">
      <router-view />
    </div>
    <p class="clearfix" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Home",

  data() {
    return {};
  }
};
</script>

