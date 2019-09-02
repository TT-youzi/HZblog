<template>
  <div>
    <div class="index_detail">
      <Header class="mian_header"></Header>
      <router-view></router-view>
      <Footer class="mian_header" style="background-color:#fff;"></Footer>

    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
export default {
  name: "",
  components: { Header, Footer },
  data() {
    return {};
  }
};
</script>

<style scoped>
.index_detail {
  color: #fff;
  background: -webkit-linear-gradient(left, #2c3e50, #fd746c);
  background: -o-linear-gradient(left, #2c3e50, #fd746c);
  background: -moz-linear-gradient(left, #2c3e50, #fd746c);
  background: linear-gradient(to right, #2c3e50, #fd746c);
}

.mian_header {
  width: 100%;
  height: 5rem /* 80/16 */;
}
.left {
}
.center {
}
</style>
