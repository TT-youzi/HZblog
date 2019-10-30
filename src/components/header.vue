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
          <li class="animated bounceInDown">Music</li>
        </router-link>
        <router-link to="/foodlist">
          <li class="animated bounceInDown delay-2s">食谱</li>
        </router-link>
      </ul>
      <div class="lock">
        <span class="login" @click="handleLock">解锁权限</span>
      </div>
      <Modal
        title="解锁key"
        v-model="modalVisible"
        class-name="vertical-center-modal"
        @on-ok="handleOK"
        :loading="loading"
      >
        <Input v-model="inpValue" size="large" placeholder="KEY" />
      </Modal>
      <!-- <Col class="demo-spin-col" span="8">
        <Spin fix>
          <Icon type="ios-loading" size="18" class="demo-spin-icon-load"></Icon>
          <div>Loading</div>
        </Spin>
      </Col>-->
    </div>
  </div>
</template>

<script scoped>
import $globalVal from "../utils/global";

export default {
  name: "",
  components: {},
  data() {
    return {
      modalVisible: false,
      inpValue: "",
      loading: true
    };
  },
  methods: {
    handleLock() {
      let temp = sessionStorage.getItem("pass");
      console.log(temp);
      if (temp) {
        this.$Notice.success({
          title: "已认证",
          desc: "The desc will hide when you set render.",
          render: h => {
            return h("span", [
              "权限通过，欢迎登录",
              h("a", "后台发布文章系统")
            ]);
          }
        });
        console.log('dao')
        this.$router.push({
          path: "/article/edit_article"
        });
        console.log('dao')

      } else {
        this.modalVisible = true;
      }
    },
    handleOK() {
      setTimeout(() => {
        this.modalVisible = false;
        if (this.inpValue === $globalVal.KEY) {
          sessionStorage.setItem("pass", "true");
          this.$Notice.success({
            title: "认证成功",
            desc: "The desc will hide when you set render.",
            render: h => {
              return h("span", ["欢迎登录", h("a", "后台发布文章系统")]);
            }
          });
          this.$router.push({
            path: "/article/edit_article"
          });
        } else {
          this.$Notice.warning({
            title: "认证失败",
            desc: "sorry，认证key错误 :）"
          });
          this.$router.push({
            path: "/article"
          });
        }
      }, 1000);
    }
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
  border-bottom: 0.3125rem /* 5/16 */ solid #000;
  background: url("../assets/img/aaaaa.png");
  background-size: 100%;
}
.header_img {
  float: left;
  height: 100%;
  margin-left: 0.625rem /* 10/16 */;
}
.header ul {
  float: left;
  height: 5rem /* 80/16 */;
  text-align: center;
  width: 54.5%;
  margin-left: 21%;
}
.header ul li {
  font-size: 0.75rem /* 12/16 */;
  float: left;
  padding: 0rem /* 0/16 */ 1.875rem /* 30/16 */;
  text-align: center;
  color: #fff;
  cursor: pointer;
}
.header ul li:hover {
  background-color: #000;
  color: #fff;
  border-radius: 0.625rem /* 10/16 */;
}

.lock {
  text-align: center;
}

.login {
  padding: 0rem /* 0/16 */ 0.9375rem /* 15/16 */;
  cursor: pointer;
}

.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.demo-spin-col {
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}
</style>
