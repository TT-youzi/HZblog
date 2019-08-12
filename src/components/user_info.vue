<template>
  <div>
    <div class="user_info">
      <div class="user_card">
        <div class="user_img">
          <Avatar icon="ios-person" size="large" :src="require('../assets/img/WechatIMG210.jpeg')" />
          <span class="user_name">Huizhong Zhang</span>
        </div>
        <Divider />
        <div class="user_card_content">
          <!-- <p>Something About Me</p> -->
          <ul class="card_list">
            <li>
              <Icon type="ios-planet" size="10" />
              <span>Location:</span>
            </li>
            <li>
              <Icon type="ios-planet" size="10" />
              <span>Aries:</span>
            </li>

            <li>
              <Icon type="logo-twitter" size="10" />
              <span>
                Linkedln:
                <Tooltip
                  theme="light"
                  :delay="500"
                  max-width="250px"
                  placement="top-start"
                  content="https://www.linkedin.com/in/huizhong-zhang-30828a131/"
                >
                  <a href="https://www.linkedin.com/in/huizhong-zhang-30828a131/">link is here</a>
                </Tooltip>
              </span>
            </li>
            <li>
              <Icon type="logo-whatsapp" size="10" />
              <span>Email:</span>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <!-- 轮播图 -->
      <Carousel autoplay class="carousel" dots="none" v-model="value1" loop>
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
        <ul>
          <li>搜索</li>
          <li>分类</li>
          <li>时间轴</li>
          <li>友情链接</li>
        </ul>
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
.user_card {
  height: 290px;
  background: hsla(0, 1%, 69%, 0.13) border-box;
  border-radius: 0.3em;
}
.user_card_content {
  /* background-color: #fff; */
}
.card_list {
  text-align: left;
  margin-top: 20px;
}
.card_list li {
  line-height: 20px;
  padding: 5px 20px;
}
.card_list span {
  margin-left: 5px;
}
.user_img {
  height: 60px;
  float: left;
  padding: 10px;
  margin-left: 10px;
  width: 100%;
  text-align: left;
}
.user_name {
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
.select {
  /* background-color: red; */
}
.select ul li {
  line-height: 50px;
  /* border-top: 1px solid #fff; */
  /* border-bottom: 1px solid#fff; */
}
</style>
