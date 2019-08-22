<template>
  <div class="songtable_component">
    <span class="name">{{this.songName}}</span>
    <audio class="audioMusic" :src="this.videoUrl" autoplay controls @ended="nextsong()"></audio>
    <div class="search_song_title">
      <ul>
        <li>歌曲名</li>
        <li>歌手</li>
        <li>专辑</li>
        <li>时长</li>
      </ul>
      <div class="all_song" v-for="(item,index) in searchData" :key="index">
        <div class="all_song_item" @click="handleSong(item)">{{item.name}}</div>
        <div class="all_song_item">{{item.artists[0].name}}</div>
        <div class="all_song_item">{{item.album.name}}</div>
        <div class="all_song_item">{{formatDuring(item.duration)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import $globalVal from "../utils/global.js";
export default {
  name: "",
  props: ["inpVal"],
  components: {},
  data() {
    return {
      searchData: "",
      videoUrl: "",
      songName: ""
    };
  },
  created() {
    console.log(this.$props.inpVal);
    this.initData();
  },
  methods: {
    handleSong(item) {
      this.songName = item.name;
      this.$http
        .get($globalVal.WyyBaseURL + "/song/url?id=" + item.id)
        .then(res => {
          this.videoUrl = res.data.data[0].url;
        })
        .catch(err => {
          console.log(err);
        });
    },
    formatDuring(mss) {
      var days = parseInt(mss / (1000 * 60 * 60 * 24));
      var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = (mss % (1000 * 60)) / 1000;
      return minutes + " 分 " + seconds + " 秒 ";
    },
    initData() {
      this.$http
        .get($globalVal.WyyBaseURL + "/search?keywords=" + this.$props.inpVal)
        .then(res => {
          this.searchData = res.data.result.songs;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.songtable_component {
  background-color: #fff;
  color: #333;
  /* overflow:hidden; */
}
.name{
  display: block;
  height: 40px;
  line-height: 40px;
}
.search_song_title {
  margin-top: 40px;
  height: 40px;
  line-height: 40px;
}
.search_song_title ul {
  display: flex;
  justify-content: space-around;
}
.search_song_title li {
  float: left;
  width: 25%;
  font-size: 14px;
}
.all_song {
  display: flex;
  justify-content: space-around;
  background-color: #fff;
}
.all_song_item {
  float: left;
  width: 25%;
  cursor: pointer;
}
.all_song_item:hover {
  color: #31c27c;
}
.audioMusic {
}
</style>
