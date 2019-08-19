<template>
  <div class="wyyMusic">
    <div class="search_body">
      <el-input
        class="searchMus"
        @keyup.enter.native="handleEnter"
        @focus="handleFocus"
        placeholder="请输入内容"
        v-model="inputValue"
        clearable
      >
        <el-button slot="append" @click="handleEnter" icon="el-icon-search"></el-button>
      </el-input>
      <div class="hot_select" v-if="hotShow">
        <p>热门搜索：</p>
        <el-link class="hot_dispare" type="primary" underline @click="handleBlur">收起</el-link>
        <ul>
          <li v-for="(item,index) in this.hotSelect" :key="index">
            <el-tag
              class="hot_tag"
              @click="handleClickTag(item)"
              size="small"
              type="warning"
              effect="plain"
            >{{ item.first }}</el-tag>
          </li>
        </ul>
      </div>
    </div>
    <div class>
      <song-table v-if="!musicListVisible" v-bind:inpVal="inputValue"></song-table>
    </div>
    <div class="music_list" v-if="musicListVisible">
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
import songTable from "../../../components/song_table";
export default {
  name: "",
  components: { songTable },
  data() {
    return {
      playlists: "",
      nowUpdateTime: "",
      lastUpdateTime: "", //当前最后一个歌单
      catlist: "", //分类
      total: 0,
      current: 1,
      inputValue: "",
      hotSelect: "",
      hotShow: false,
      musicListVisible: "true"
    };
  },
  created() {
    this.initData();
  },
  mounted() {},
  methods: {
    handleSelect(item) {
      console.log(item);
    },
    handleClickTag(item) {
      this.inputValue = item.first;
      // this.inputValue = item.first;
    },
    handleEnter() {
      this.hotShow = false;
      this.musicListVisible = false;
    },
    handleFocus() {
      this.hotShow = true;
    },
    handleBlur() {
      this.hotShow = false;
    },
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

      this.$http
        .get($globalVal.WyyBaseURL + "/search/hot")
        .then(res => {
          this.hotSelect = res.data.result.hots;
          console.log(this.hotSelect);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.wyyMusic {
  min-height: 800px;
  background-color: #fff;
}
.music_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 1.25rem /* 20/16 */;
  background-color: #fff;
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
  box-shadow: 0.125rem /* 2/16 */ 0.125rem /* 2/16 */ 1.25rem /* 20/16 */
    0.125rem /* 2/16 */ #ccc;
  position: relative;
  left: 0.03125rem /* 0.5/16 */;
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
  padding: 0.3125rem /* 5/16 */;
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
  padding: 0.125rem /* 2/16 */;
}
.playCount span:hover {
  color: azure;
}
.list_item p {
  color: #303133;
  font-size: 0.875rem /* 14/16 */;
  padding: 0.625rem /* 10/16 */;
}
.creator {
  position: absolute;
  bottom: 0.3125rem /* 5/16 */;
  height: 2.5rem /* 40/16 */;
  width: 100%;
  background-color: #00000078;
  line-height: 2.5rem /* 40/16 */;
  padding: 0.3125rem /* 5/16 */ 0.625rem /* 10/16 */;
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
  padding-left: 0.625rem /* 10/16 */;
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
  margin-left: 0.1875rem /* 3/16 */ !important;
  margin-top: 0.125rem /* 2/16 */ !important;
}
.allpage {
  margin: auto;
  color: #303133;
}

.search_body {
  padding-top: 20px;
  background-color: #fff;
  width: 100%;
  position: relative;
  padding-bottom: 20px;
}
.searchMus {
  width: 70%;
  margin: 0px auto;
}

.hot_select {
  position: absolute;
  top: 60px;
  left: 15%;
  width: 70%;
  margin: 0px auto;
  padding: 20px;
  z-index: 9999;
  border: 1px solid #f3f3f3;
  background-color: #fff;
  color: #303133;
}
.hot_select p {
  text-align: left;
}
.hot_tag {
  float: left;
  margin-top: 5px;
  margin-right: 10px;
  cursor: pointer;
}
.hot_dispare {
  position: absolute;
  bottom: 10px;
  right: 20px;
}
</style>
