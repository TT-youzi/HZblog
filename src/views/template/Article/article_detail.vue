<template>
  <div>
    <div class="article_detail">
      <div class="detail_body">
        <h1 class="aritcle_item_header">{{this.currArticleData.article_name}}</h1>
        <div class="aritcle_item_info">
          <span>{{this.currArticleData.article_publish_time}}</span>
          发布在
          <span>“{{this.currArticleData.article_sort}}”</span>
        </div>
        <div class="article_content markdown-body" v-html="this.currArticleData.article_content"></div>
        <!-- <div class="aritcle_item_summary">
        <div>{{this.currArticleData.article_summary}}</div>
        </div>-->
        <Divider />
        <div class="detail_body_footer">
          <ButtonGroup class="detail_body_footer_left" size="large">
            <Button @click="handleLastOne">
              <Icon type="ios-arrow-back"></Icon>上一篇
            </Button>
            <Button @click="handleNextOne">
              下一篇
              <Icon type="ios-arrow-forward"></Icon>
            </Button>
          </ButtonGroup>

          <ButtonGroup class="detail_body_footer_right" size="large">
            <Button @click="handleClickTop">
              <Icon type="md-arrow-round-up" />顶部
            </Button>
            <Button>
              其他
              <Icon type="ios-arrow-forward"></Icon>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "mavon-editor/dist/css/index.css";
import $globalVal from "@/utils/global.js";
import DateUtil from "@/utils/formDate";
export default {
  name: "article_detail",
  components: {},
  data() {
    return {
      currentArticleId: "",
      currArticleData: "",
      articleList: ""
    };
  },
  created() {
    this.currentArticleId = this.$route.query.articleId;
    console.log(this.currentArticleId);
    this.initData();
    this.articleList = JSON.parse(sessionStorage.getItem("articleList"));
    console.log(this.articleList);
  },
  methods: {
    handleLastOne() {
      for (var i = 0; i < this.articleList.length; i++) {
        if (this.articleList[i].article_id == this.currentArticleId) {
          this.$router.push({
            path: "/article_detail",
            query: {
              articleId: this.articleList[i - 1].article_id
            }
          });
          this.reNewData();
          return false;
        }
      }
    },
    handleNextOne() {
      for (var i = 0; i < this.articleList.length; i++) {
        if (this.articleList[i].article_id == this.currentArticleId) {
          this.$router.push({
            path: "/article_detail",
            query: {
              articleId: this.articleList[i + 1].article_id
            }
          });
          this.reNewData();
          return false;
        }
      }
    },
    reNewData() {
      this.currentArticleId = this.$route.query.articleId;
      this.currArticleData = this.articleList.find((item)=>{
        return item.article_id == this.currentArticleId;
      })
    },

    handleClickTop() {
      window.scrollTo(0, 0);
    },
    initData() {
      let formData = {
        articleId: this.currentArticleId
      };
      this.$http
        .post($globalVal.ServerBaseURL + "/article/detail", formData)
        .then(res => {
          // console.log(res.data);
          this.currArticleData = res.data.data[0];
          console.log(this.currArticleData);
          this.currArticleData.article_publish_time = DateUtil.fmtDate(
            this.currArticleData.article_publish_time
          );
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.article_detail {
  min-height: 800px;
  background-color: #fff;
  color: #303133;
}
.detail_body {
  width: 50%;
  margin: 0px auto;
  padding: 20px;
}
.aritcle_item_header {
  font-size: 34px;
  font-weight: 700;
  text-align: left;
}
.aritcle_item_info {
  text-align: left;

  line-height: 1.5em;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #9eabb3;
  padding: 10px 10px;
}
.article_content {
  text-align: left;
  font-size: 16px;
  padding: 20px;
  min-height: 560px;
}
.detail_body_footer {
  height: 60px;
  line-height: 60px;
  background-color: #fff;
}
.detail_body_footer_left {
  float: left;
}
.detail_body_footer button {
  margin-right: 20px;
}
.detail_body_footer_right {
  float: right;
}
</style>
