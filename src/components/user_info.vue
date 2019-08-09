<template>
  <div>
    <div class="user_info">
      <div class="user_img">
        <Avatar icon="ios-person" size="large" :src="require('../assets/img/WechatIMG189.jpeg')" />
        <span class="user_name">Jesiok_</span>
      </div>
      <Divider />
      <!-- 轮播图 -->
      <Carousel class="carousel" dots="none" v-model="value1" loop>
        <CarouselItem>
          <div class="demo-carousel">
            <img src="../assets/img/zzx.jpeg" alt />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img src="../assets/img/WechatIMG189.jpeg" alt />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img src="../assets/img/zzx.jpeg" alt />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img src="../assets/img/WechatIMG189.jpeg" alt />
          </div>
        </CarouselItem>
      </Carousel>

      <div class="select">
        <p>111</p>
        <p>111</p>
        <p>111</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      value1: 0
    };
  }
};
</script>

<style scoped>
.user_info {
  z-index: 1px;
  float: right;
  width: 100%;
  padding: 10px;
  color: #fff;
}
.user_img {
  height: 60px;
  float: left;
  padding: 10px;
  margin-left: 10px;
  width: 100%;
  text-align: left;
}
.user_name{
  display: block;
  float: right;
  font-size: 14px;
  padding: 20px 20px 0px 0px;
}
.carousel {
  width: 100%;

}
.demo-carousel img {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 20px;
}
.select{
  background-color: red;
}
</style>
