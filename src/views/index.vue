<template>
  <div class="mian">
    <Header class="mian_header"></Header>
    <Row class="main_row">
      <Col span="6" class="left">
        <user-info></user-info>
      </Col>
      <Col span="14" class="center">
        <main-body></main-body>
      </Col>
      <Col span="4" class="right"></Col>
    </Row>
  </div>
</template>

<script>
import UserInfo from "@/components/user_info";
import MainBody from "@/views/template/main_body";
import Header from "@/components/header";
export default {
  name: "",
  components: { Header, UserInfo, MainBody },
  data() {
    return {};
  }
};
</script>

<style scoped>
.mian {
  color: #fff;
  background: -webkit-linear-gradient(left, #2c3e50, #fd746c);
  background: -o-linear-gradient(left, #2c3e50, #fd746c);
  background: -moz-linear-gradient(left, #2c3e50, #fd746c);
  background: linear-gradient(to right, #2c3e50, #fd746c);
}

.mian_header {
  width: 100%;
  height: 80px;
  
}

.main_row {
  /* margin-top: 80px; */
  overflow: hidden;
  clear: both;
}
.left {
}
.center {
}
</style>
