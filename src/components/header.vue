<template>
  <div>
    <div class="header">
      <img class="header_img" src="../assets/img/logo.png" alt />
      <ul>
        <li>Welcome To My World</li>
        <router-link to="/vlog">
          <li class="animated bounceInDown">Vlog</li>
        </router-link>
        <router-link to="/article">
          <li class="animated bounceInDown delay-1s">个人文章</li>
        </router-link>
        <router-link to="/music">
          <li class="animated bounceInDown ">Music</li>
        </router-link>
        <router-link to="/foodlist">
          <li class="animated bounceInDown delay-2s">食谱</li>
        </router-link>
      </ul>
      <div class="lock">
        <span class="login">解锁</span>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "",
  components: {},
  data() {
    return {};
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 1;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background-color: #000000a6;
  border-bottom: 5px solid #000;
  background: url("../assets/img/aaaaa.png");
  background-size: 100%;
}
.header_img {
  float: left;
  height: 100%;
  margin-left: 10px;
}
.header ul {
  float: left;
  height: 80px;
  text-align: center;
  width: 54.5%;
  margin-left: 21%;
}
.header ul li {
  font-size: 12px;
  float: left;
  padding: 0px 30px;
  text-align: center;
  color: #fff;
  cursor: pointer;
}
.header ul li:hover {
  background-color: #000;
  color: #fff;
  border-radius: 10px;
}

.lock {
  text-align: center;
}

.login {
  padding: 0px 15px;
}
</style>
