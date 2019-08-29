<template>
  <div class="play_list">
    <div class="play_info">
      <div class="imgborder">
        <img :src="this.playlistData.coverImgUrl" alt />
      </div>
      <div class="play_info_right">
        <p class="play_name">{{this.playlistData.name}}</p>

        <div class="creater_info">
          <img class="creater_img" :src="this.playlistData.creator.avatarUrl" alt />
          <span class="creater_name">{{this.playlistData.creator.nickname}}</span>
          <span class="creater_time">{{this.playlistData.createTime}}</span>
        </div>
        <div class="play_tag">
          <Tag class="tag" v-for="(item,index) in this.playlistData.tags" :key="index">{{item}}</Tag>
        </div>
        <div class="introduce">介绍：{{this.playlistData.description}}</div>
      </div>
    </div>
    <Divider size="small" style="width:80%;" />
    <div class="song_list">
      <div class="songtable_component">
        <p class="title">
          <Icon type="ios-disc" size="30" />歌曲列表：
          <audio class="audioMusic" :src="this.videoUrl" autoplay controls @ended="nextsong()"></audio>
          <span style="float:right;font-size:12px;">播放次数：{{this.playlistData.playCount}}</span>
        </p>
        <ul class="songlist__header">
          <li class="songlist__header_name">歌曲</li>
          <li class="songlist__header_author">歌手</li>
          <li class="songlist__header_album">专辑</li>
          <li class="songlist__header_time">时长</li>
        </ul>
        <ul class="songlist_body">
          <li class="songlist_box" v-for="(item,index) in this.playlistData.tracks" :key="index">
            <div class="songlist__item">
              <!-- <div class="songlist__number">{{index+1}}</div> -->
              <div class="songlist__songname" @click="handleSong(item)">{{item.name}}</div>
              <div class="songlist__artist">{{item.ar[0].name}}</div>
              <div class="songlist__album">{{item.al.name}}</div>
              <div class="songlist__time">03:25</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import $globalVal from "../../../utils/global.js";
import DateUtils from "../../../utils/formDate";
import SongTable from "../../../components/song_table";
export default {
  name: "palyliatdetail",
  components: { SongTable },
  data() {
    return {
      playlistData: {
        creator: {
          avatarUrl: "../../../assets/logo.png"
        },
        createTime: ""
      },
      privilegesData: "",
      videoUrl: ""
    };
  },
  created() {
    this.initData();
  },
  methods: {
    handleSong(item) {
      console.log(item.id);
      this.$http
        .get($globalVal.WyyBaseURL + "/song/url?id=" + item.id)
        .then(res => {
          console.log(res.data.data);
          this.videoUrl = res.data.data[0].url;
        })
        .catch(err => {
          console.log(err);
        });
    },
    initData() {
      let listId = this.$route.query.listId;
      this.$http
        .get($globalVal.WyyBaseURL + "/playlist/detail?id=" + listId)
        .then(res => {
          console.log(res);
          res.data.playlist.createTime = DateUtils.fmtDate(
            res.data.playlist.createTime
          );
          // res.data.playlist. = fromData.DateUtils(
          //   res.data.playlist.createTime
          // );setTimes;
          this.playlistData = res.data.playlist;
          console.log(this.playlistData);
          // this.privilegesData = res.data.playlist;
          // console.log(this.privilegesData);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.play_list {
  background-color: #fff;
}
.play_info {
  padding: 5%;
}
.imgborder {
  float: left;
  border: 1px solid #eee;
  width: 30%;
  padding: 0.3125rem /* 5/16 */;
  margin-bottom: 2.5rem /* 40/16 */;
}
.imgborder img {
  width: 100%;
  height: 100%;
}
.play_info_right {
  height: 12.5rem /* 200/16 */;
  float: right;
  width: 70%;
  color: #333;
  padding: 0.625rem /* 10/16 */;
}
.play_name {
  font-size: 1rem /* 16/16 */;
  padding: 0.3125rem /* 5/16 */;
}
.introduce {
  padding: 2px;
  display: -webkit-box; /*必须结合的属性,将对象作为弹性伸缩盒子模型显示*/
  -webkit-line-clamp: 3; /*设置多少行*/
  -webkit-box-orient: vertical; /*必须结合的属性,设置或检索伸缩盒对象的子元素的排列方式*/
  overflow: hidden; /*文本会被修剪，并且剩余的部分不可见*/
  text-overflow: ellipsis; /*显示省略号来代表被修剪的文本*/
}
.creater_info {
  height: 2.5rem /* 40/16 */;
  line-height: 2.5rem /* 40/16 */;
  padding: 0.125rem /* 2/16 */ 10%;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
}
.creater_img {
  width: 2.1875rem /* 35/16 */;
  height: 2.1875rem /* 35/16 */;
  float: left;
  margin-right: 20px;
  border-radius: 20px;
}
.creater_name {
  height: 2.1875rem /* 35/16 */;
  line-height: 2.1875rem /* 35/16 */;
  display: block;
  float: left;
  margin-right: 80px;
}
.creater_time {
  height: 2.1875rem /* 35/16 */;
  line-height: 2.1875rem /* 35/16 */;
  float: left;
}
.play_tag {
  height: 60px;
  line-height: 60px;
}
.tag {
  width: 80px;
}

/* talbe */
.songtable_component {
  background-color: #fff;
  color: #333;
}
.title {
  width: 100%;
  text-align: left;
  padding: 10px 20px;
  font-size: 16px;
  line-height: 20px;
}
.songlist__header {
  height: 50px;
  padding: 0px 40px;
}
.songlist__header li {
  height: 50px;
  line-height: 50px;
  display: block;
  float: left;
}
.songlist__header_name {
  width: 40%;
  text-align: left;
}
.songlist__header_author {
  width: 25%;
  text-align: left;
}
.songlist__header_album {
  width: 25%;
  text-align: left;
}
.songlist__header_time {
  width: 10%;
  text-align: left;
}

.songlist_body {
  background-color: #fff;
  overflow: hidden;
}
.songlist_box {
  background-color: #999;
  padding: 0px 40px;
}
.songlist__songname {
  width: 35%;
  float: left;
  text-align: left;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  overflow: hidden; /*内容会被修剪，并且其余内容是不可见的*/
  text-overflow: ellipsis; /*显示省略符号来代表被修剪的文本。*/
  white-space: nowrap; /*文本不换行*/
  margin-right: 5%;
}
.songlist__songname:hover {
  color: #31c27c;
}
.songlist__artist {
  width: 20%;
  float: left;
  text-align: left;
  height: 50px;
  line-height: 50px;
  margin-right: 5%;
  overflow: hidden; /*内容会被修剪，并且其余内容是不可见的*/
  text-overflow: ellipsis; /*显示省略符号来代表被修剪的文本。*/
  white-space: nowrap; /*文本不换行*/
}
.songlist__album {
  width: 20%;
  float: left;
  text-align: left;
  height: 50px;
  line-height: 50px;
  margin-right: 5%;
  overflow: hidden; /*内容会被修剪，并且其余内容是不可见的*/
  text-overflow: ellipsis; /*显示省略符号来代表被修剪的文本。*/
  white-space: nowrap; /*文本不换行*/
}
.songlist__time {
  width: 10%;
  float: left;
  text-align: left;
  height: 50px;
  line-height: 50px;
  overflow: hidden; /*内容会被修剪，并且其余内容是不可见的*/
  text-overflow: ellipsis; /*显示省略符号来代表被修剪的文本。*/
  white-space: nowrap; /*文本不换行*/
}
.audioMusic {
  position: absolute;
  top: 330px;
  /* left: 35%; */
  z-index: 1;
}
</style>
