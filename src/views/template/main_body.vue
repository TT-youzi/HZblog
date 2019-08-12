<template>
  <div class="main-body">
    <div class="content">
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
    let formData = '再见杰克'
    this.$http
      .get("https://api.apiopen.top/searchMusic?name="+formData)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {}
};
</script>

<style scoped>
.main-body {
  color: #000;
  /* height: 500px; */
  width: 100%;
  overflow-x: hidden;
  /* overflow-y: scroll; */
}
.content {
  height: 770px;
  margin: auto;
  background-color: #fff;
  color: #fff;
  background: hsla(0, 1%, 69%, 0.13) border-box;
  border-radius: 0.3em;
  -webkit-box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.3) inset,
    0 0.5em 1em rgba(0, 0, 0, 0.6);
  /* box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.3) inset,
    0 0.5em 1em rgba(0, 0, 0, 0.6);
  text-shadow: 0 1px 1px hsla(0, 0%, 100%, 0.3); */
}
</style>
