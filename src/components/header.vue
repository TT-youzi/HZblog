<template>
  <div>
    <div class="header">
      <img class="header_img" src="../assets/img/logo.png" alt />
      <ul>
        <li>WELCOME</li>
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
  height: 5rem /* 80/16 */;
  width: 100%;
  line-height: 5rem /* 80/16 */;
  background-color: #000000a6;
  border-bottom: .3125rem /* 5/16 */ solid #000;
  background: url("../assets/img/aaaaa.png");
  background-size: 100%;
}
.header_img {
  float: left;
  height: 100%;
  margin-left: .625rem /* 10/16 */;
}
.header ul {
  float: left;
  height: 5rem /* 80/16 */;
  text-align: center;
  width: 54.5%;
  margin-left: 21%;
}
.header ul li {
  font-size: .75rem /* 12/16 */;
  float: left;
  padding: 0rem /* 0/16 */ 1.875rem /* 30/16 */;
  text-align: center;
  color: #fff;
  cursor: pointer;
}
.header ul li:hover {
  background-color: #000;
  color: #fff;
  border-radius: .625rem /* 10/16 */;
}

.lock {
  text-align: center;
}

.login {
  padding: 0rem /* 0/16 */ .9375rem /* 15/16 */;
}
</style>
