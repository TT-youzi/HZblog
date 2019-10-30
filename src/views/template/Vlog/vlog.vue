<template>
  <div class="vlog_body">
    <div class="vlog_item">
      <div class="vlog_header">
        <p>RSSHub Radar — 订阅一个 RSS 源不应该这么难</p>
      </div>
      <div class="vlog_info">
        <span class="vlog_info_item" style="color:#00a7e0">
          <Icon type="md-calendar" size="16" />2019-09-29
        </span>
        <span class="vlog_info_item">
          <Icon type="ios-game-controller-b" size="16" />“一切为了有趣”
        </span>
        <span class="vlog_info_item" style="color:#fd746c">
          <Icon type="ios-pin" size="16" />美国·纽约
        </span>
      </div>
      <!-- 定位 -->
      <div class="left_ins">
        <div style="font-size:14px;">09月</div>
        <div style="font-size:20px;font-weight:700">29</div>
      </div>
      <div class="left_ins2">
        <span>一切为了有趣</span>
      </div>

      <div class="vlog_text">
        嗯。。。我大概三个月没发过东西了
        这个vlog大概剪了我干了什么
        这个vlog大概剪了我干了什么
      </div>
      <div class="vlog_content">
        <video id="myVideo" class="video-js">
          <source src="@/assets/video/1569745009911582.mp4" type="video/mp4" />
        </video>
      </div>
    </div>


    
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.initVideo();
  },
  methods: {
    initVideo() {
      //初始化视频方法
      let myPlayer = this.$video(myVideo, {
        //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        //自动播放属性,muted:静音播放
        autoplay: "muted",
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        //设置视频播放器的显示宽度（以像素为单位）
        width: "800px",
        //设置视频播放器的显示高度（以像素为单位）
        height: "400px"
      });
    }
  }
};
</script>

<style scoped>
.vlog_body {
  color: black;
  background-color: rgb(239, 239, 239);
  min-height: 786px;
  padding: 30px;
  padding-left: 60px;
  padding-top: 60px;
}
.vlog_item {
  min-height: 400px;
  background-color: #fff;
  padding: 30px;
  position: absolute;
  width: 90%;
}
.vlog_header {
  font-size: 1.375rem /* 22/16 */;
  font-weight: 700;
}
.vlog_header:hover {
  color: #0a9e93;
}
.vlog_info {
  height: 30px;
  line-height: 30px;
  /* display: flex;
  justify-content: space-around; */
  width: 60%;
  margin: 0 auto;
  margin-bottom: 60px;
}
.vlog_info_item {
  margin: 0 8px;
  font-size: 12px;
}
.left_ins {
  background-color: #97dffd;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  position: absolute;
  top: -20px;
  left: -30px;
  height: 60px;
  width: 65px;
  padding-top: 10px;
  border-radius: 70px;
  color: #fff;
  text-align: center;
  line-height: 1.1;
}
.left_ins2 {
  color: #fff;
  position: absolute;
  left: -16px;
  top: 105px;
  border-color: #47456d;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background-color: #97dffd;
  margin: 5px 0 15px 2px;
  font-size: 14px;
  border-radius: 0 4px 4px 0;
  display: inline-block;
  padding: 7px 11px 7px 32px;
  line-height: 1;
}
.left_ins2:after {
  position: absolute;
  content: "";
  top: 100%;
  left: 0;
  border-top: 0 solid transparent;
  border-right-width: 1em;
  border-right-color: inherit;
  border-right-style: solid;
  border-bottom: 1em solid transparent;
  border-left: 0 solid transparent;
  width: 0;
  height: 0;
}
.vlog_text {
  text-align: left;
  font-size: 13px;
  color: #333;
  text-indent: 2em;
  padding: 5px 0px;
}
.vlog_content {
  height: 400px;
  padding: 10px 25px;
}
.video-js{
  height: 100%;
  width: auto;
}
</style>
