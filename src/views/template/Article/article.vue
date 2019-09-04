<template>
  <div>
    <div class="aritcle">
      <div class="aritcle_item" v-for="(item,index) in this.articleData" :key="index">
        <div class="aritcle_item_header" @click="handleDetail(item.article_id)">{{item.article_name}}</div>
        <div class="aritcle_item_info">
          <span>{{item.article_publish_time}}</span>
          发布在
          <span>“{{item.article_sort}}”</span>
        </div>
        <div class="aritcle_item_summary">
          <div>{{item.article_summary}}</div>
          <a @click="handleDetail(item.article_id)">阅读全文</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $globalVal from "../../../utils/global.js";
import DateUtil from "../../../utils/formDate";
export default {
  name: "",
  components: { DateUtil },
  data() {
    return {
      articleData: []
    };
  },
  created() {
    this.initData();
  },
  methods: {
    handleDetail(articleId) {
      this.$router.push({
        path: "/article_detail",
        query: { articleId: articleId }
      });
    },
    initData() {
      this.$http
        .post($globalVal.ServerBaseURL + "/article/select")
        .then(res => {
          console.log(res.data.data);
          res.data.data.forEach(element => {
            console.log(DateUtil.fmtDate(element.article_publish_time));
            element.article_publish_time = DateUtil.fmtDate(
              element.article_publish_time
            );
            this.articleData.push(element);
          });
          console.log(this.articleData);
          sessionStorage.setItem('articleList', JSON.stringify(this.articleData));
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.aritcle {
  background-color: #fff;
  color: #303133;
  min-height: 600px;
}

.aritcle_item {
  padding: 10px;
  border-bottom: 1px solid #e2e2e2;
}
.aritcle_item_header {
  font-family: "Open Sans", sans-serif;
  font-size: 1.6rem;
  line-height: 1.9em;
  letter-spacing: 0.01em;
  text-align: left;
  padding: 0px 20px;
  cursor: pointer;
}
.aritcle_item_info {
  padding: 0px 20px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  color: #9eabb3;
  line-height: 1.5em;
  text-align: left;
}
.aritcle_item_summary {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0px 20px;
  text-align: left;
  text-rendering: optimizelegibility;
  letter-spacing: -0.3px;
  font-family: "Merriweather", serif;
  color: #5d686f;
  font-weight: 400;
  font-size: 14px;
}
.aritcle_item_summary a {
  display: block;
  margin-top: 10px;
  font-size: 14px;
}
</style>
