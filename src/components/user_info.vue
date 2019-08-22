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

      <!-- <div class="select">
        <ul>
          <li>搜索</li>
          <li>分类</li>
          <li>时间轴</li>
          <li>友情链接</li>
        </ul>
      </div> -->
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
  z-index: .0625rem /* 1/16 */;
  float: right;
  width: 100%;
  padding: .625rem /* 10/16 */;
  color: #fff;
}
.user_card {
  height: 18.125rem /* 290/16 */;
  background: hsla(0, 1%, 69%, 0.13) border-box;
  border-radius: 0.3em;
}
.user_card_content {
  /* background-color: #fff; */
}
.card_list {
  text-align: left;
  margin-top: 1.25rem /* 20/16 */;
}
.card_list li {
  line-height: 1.25rem /* 20/16 */;
  padding: .3125rem /* 5/16 */ 1.25rem /* 20/16 */;
}
.card_list span {
  margin-left: .3125rem /* 5/16 */;
}
.user_img {
  height: 3.75rem /* 60/16 */;
  float: left;
  padding: .625rem /* 10/16 */;
  margin-left: .625rem /* 10/16 */;
  width: 100%;
  text-align: left;
}
.user_name {
  display: block;
  float: right;
  font-size: .875rem /* 14/16 */;
  padding: 1.25rem /* 20/16 */ 1.25rem /* 20/16 */ 0rem /* 0/16 */ 0rem /* 0/16 */;
}
.carousel {
  width: 100%;
}
.demo-carousel img {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: .625rem /* 10/16 */;
  border-radius: 1.25rem /* 20/16 */;
}
.select {
  /* background-color: red; */
}
.select ul li {
  line-height: 3.125rem /* 50/16 */;
  /* border-top: 1px solid #fff; */
  /* border-bottom: 1px solid#fff; */
}
</style>
