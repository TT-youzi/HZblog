<template>
  <div class="wyyMusic">
    <div class="music_list">
      <div class="list_item" v-for="item in playlists" :key="item.id">
        <div class="img_box">
          <img :src="item.coverImgUrl" alt />

          <div class="playCount">
            <Icon type="ios-headset-outline" size="20" />
            <span>{{item.playCount}}</span>
          </div>

          <div class="creator">
            <img class="creator_img" :src="item.creator.avatarUrl" alt />
            <span>{{item.creator.nickname}}</span>
            <Button class="creator_btn" icon="md-play" :ghost="true" type="default" shape="circle"></Button>
          </div>
        </div>
        <p>{{item.name}}</p>
      </div>
      <Page class="allpage" :current="current" :total="total" simple />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      playlists: "",
      lastUpdateTime: "", //当前最后一个歌单
      catlist: "", //分类
      total: "",
      current: 1
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      //获取歌单分类
      // this.$http
      //   .get("http://localhost:3000/playlist/catlist")
      //   .then(res => {
      //     this.catlist = res;
      //     console.log(this.catlist);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });

      //获取歌单
      this.$Spin.show(); //加载中界面
      this.$http
        .get("http://localhost:3000/top/playlist/highquality?before=&limit=12")
        .then(res => {
          this.total = res.data.total;
          this.$Spin.hide(); //加载中界面消失
          this.playlists = res.data.playlists;
          console.log(this.playlists);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.music_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 20px;
  background-color: #f1f3f4;
}
.list_item {
  background: hsla(0, 1%, 69%, 0.13) border-box;
  width: 29%;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;
  margin-bottom: 2%;
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
  cursor: pointer;
}
.list_item:hover {
  box-shadow: 2px 2px 20px 2px #ccc;
  position: relative;
  left: 0.5px;
  top: -0.5px;
}
.img_box {
  width: 100%;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0em;
  border-bottom-left-radius: 0em;
  position: relative;
}
.img_box img {
  width: 100%;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0em;
  border-bottom-left-radius: 0em;
}
.playCount {
  text-align: right;
  width: 100%;
  color: #fff;
  position: absolute;
  top: 0%;
  right: 0%;
  padding: 5px;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0em;
  border-bottom-left-radius: 0em;
}
.playCount span {
  display: block;
  float: right;
  height: 20px;
  line-height: 20px;
  padding: 2px;
}
.playCount span:hover {
  color: azure;
}
.list_item p {
  color: #303133;
  font-size: 14px;
  padding: 10px;
}
.creator {
  position: absolute;
  bottom: 5px;
  height: 40px;
  width: 100%;
  background-color: #00000078;
  line-height: 40px;
  padding: 5px 10px;
  white-space: nowrap;
}
.creator_img {
  height: 30px !important;
  width: 30px !important;
  border-radius: 20px !important;
  float: left;
}
.creator span {
  display: block;
  height: 30px;
  line-height: 30px;
  float: left;
  padding-left: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
  width: 140px;
}
.creator_btn {
  float: right;
}
.ivu-btn >>> .ivu-icon {
  margin-left: 3px !important;
  margin-top: 2px !important;
}
.allpage {
  margin: auto;
  color: #303133;
}
</style>
