<template>
  <div>
    <div class="aritcle">
      <div class="aritcle_item" v-for="(item,index) in this.articleData" :key="index">
        <div class="aritcle_item_header">{{item.article_name}}</div>
        <div class="aritcle_item_info">
          <span>{{item.article_publish_time}}</span>
          发布在
          <span>{{item.article_sort}}</span>
        </div>
        <div class="aritcle_item_summary">
          <div class="markdown-body">
          <h2><a id="22222_0"></a>22222</h2>
          </div>
          <a href>阅读全文</a>
        </div>
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
      articleData: ""
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.$http
        .post($globalVal.LocalHostURL + "/article/select")
        .then(res => {
          console.log(res.data.data);
          this.articleData = res.data.data;
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
  height: 600px;
  background-color: #f1f3f4;
  color: #303133;
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
