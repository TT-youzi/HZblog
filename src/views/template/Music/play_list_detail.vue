<template>
  <div class="play_list">
    <div class="play_info">
      <div class="imgborder">
        <img :src="this.playlistData.coverImgUrl" alt />
      </div>
      <div class="play_info_right">
        <p class="play_name">{{this.playlistData.name}}</p>
        <p class="creater_info">
          <img class="creater_img" :src="this.playlistData.creator.avatarUrl" alt />
          <span class="creater_name">{{this.playlistData.creator.nickname}}</span>
          <span class="creater_time">{{this.playlistData.createTime}}</span>
        </p>
      </div>
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
      playlistData: "",
      privilegesData: ""
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      let listId = this.$route.query.listId;
      this.$http
        .get($globalVal.WyyBaseURL + "/playlist/detail?id=" + listId)
        .then(res => {
          console.log(res);
          this.playlistData = res.data.playlist;
          console.log(this.playlistData);
          this.privilegesData = res.data.privileges;
          console.log(this.privilegesData);
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
  height: 25rem /* 400/16 */;
  padding: 5%;
}
.imgborder {
  float: left;
  border: 1px solid #eee;
  width: 30%;
  padding: 5px;
}
.imgborder img {
  width: 100%;
  height: auto;
  height: 100%;
}
.play_info_right {
  height: 200px;
  float: right;
  width: 70%;
  color: #333;
  padding: 0.625rem /* 10/16 */;
}
.play_name {
  font-size: 16px;
  padding: 5px;
}

.creater_info {
  height: 40px;
  line-height: 40px;
  padding: 2px 10px;
}
.creater_img {
  width: 35px;
  height: 35px;
  float: left;
}
.creater_name {
  height: 35px;
  float: left;
}
.creater_time {
  height: 35px;
  float: left;
}
</style>
