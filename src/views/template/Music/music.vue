<template>
  <div class="wyyMusic">
    <div class="music_list">
      <div
        class="list_item"
        v-for="item in playlists"
        :key="item.id"
        @click="handleClickItem(item)"
      >
        <div class="img_box">
          <img :src="item.coverImgUrl" alt />

          <div class="playCount">
            <Icon type="md-headset" size="20" />
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
      <Page
        class="allpage"
        :current="current"
        :total="total"
        simple
        @on-change="this.handleChangePage"
      />
    </div>
  </div>
</template>

<script>
import $globalVal from "../../../utils/global.js";
export default {
  name: "",
  components: {},
  data() {
    return {
      playlists: "",
      nowUpdateTime: "",
      lastUpdateTime: "", //当前最后一个歌单
      catlist: "", //分类
      total: 0,
      current: 1
    };
  },
  created() {
    this.initData();
  },
  methods: {
    handleClickItem(item) {
      this.$router.push({
        path: "/music/paly_list",
        query: { listId: item.id }
      });
    },
    handleChangePage(i) {
      console.log(this.lastUpdateTime);
      this.initData();
    },
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
        .get(
          $globalVal.WyyBaseURL +
            "/top/playlist/highquality?before=" +
            this.lastUpdateTime +
            "&limit=12"
        )
        .then(res => {
          this.total = res.data.total;
          this.$Spin.hide(); //加载中界面消失
          this.playlists = res.data.playlists;
          this.lastUpdateTime = this.playlists[11].updateTime;
          this.nowUpdateTime = this.playlists[0].updateTime;
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
  padding: 1.25rem /* 20/16 */;
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
  box-shadow: .125rem /* 2/16 */ .125rem /* 2/16 */ 1.25rem /* 20/16 */ .125rem /* 2/16 */ #ccc;
  position: relative;
  left: .03125rem /* 0.5/16 */;
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
  padding: .3125rem /* 5/16 */;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0em;
  border-bottom-left-radius: 0em;
}
.playCount span {
  display: block;
  float: right;
  height: 1.25rem /* 20/16 */;
  line-height: 1.25rem /* 20/16 */;
  padding: .125rem /* 2/16 */;
}
.playCount span:hover {
  color: azure;
}
.list_item p {
  color: #303133;
  font-size: .875rem /* 14/16 */;
  padding: .625rem /* 10/16 */;
}
.creator {
  position: absolute;
  bottom: .3125rem /* 5/16 */;
  height: 2.5rem /* 40/16 */;
  width: 100%;
  background-color: #00000078;
  line-height: 2.5rem /* 40/16 */;
  padding: .3125rem /* 5/16 */ .625rem /* 10/16 */;
  white-space: nowrap;
}
.creator_img {
  height: 1.875rem /* 30/16 */ !important;
  width: 1.875rem /* 30/16 */ !important;
  border-radius: 1.25rem /* 20/16 */ !important;
  float: left;
}
.creator span {
  display: block;
  height: 1.875rem /* 30/16 */;
  line-height: 1.875rem /* 30/16 */;
  float: left;
  padding-left: .625rem /* 10/16 */;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
  width: 8.75rem /* 140/16 */;
}
.creator_btn {
  float: right;
}
.ivu-btn >>> .ivu-icon {
  margin-left: .1875rem /* 3/16 */ !important;
  margin-top: .125rem /* 2/16 */ !important;
}
.allpage {
  margin: auto;
  color: #303133;
}
</style>
