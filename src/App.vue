<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div>
      <!-- <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p> -->
      <el-button>el-button</el-button>
      <div class="container">
        <div class="card mt-5 border-primary">
          <div class="card-header bg-primary text-white">头部</div>
          <div class="card-body">内容</div>
          <div class="card-footer">底部</div>
        </div>
      </div>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "app",
  components: {
    // HelloWorld
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
