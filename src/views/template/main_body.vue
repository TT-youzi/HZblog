<template>
  <div class="main-body">
    <div class="content animated fadeInLeft">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  created() {
    
  },
  methods: {}
};
</script>

<style scoped>
.main-body {
  color: #000;
  background-color: #fff;
  width: 100%;
  overflow-x: hidden;
  min-height: 786px;
}
.content {
  margin: auto;
  color: #fff;
  /* background: hsla(0, 1%, 69%, 0.13) border-box; */
  border-radius: 0.3em;
  /* -webkit-box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.3) inset,
    0 0.5em 1em rgba(0, 0, 0, 0.6); */
  /* box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.3) inset,
    0 0.5em 1em rgba(0, 0, 0, 0.6);
  text-shadow: 0 1px 1px hsla(0, 0%, 100%, 0.3); */
}
</style>
