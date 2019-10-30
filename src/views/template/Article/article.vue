<template>
  <div>
    <div class="aritcle">
      <!-- <Input class="article_search" v-model="searchInpValue" search enter-button="Search">
        <Select v-model="searchTagValue" slot="prepend" style="width: 120px">
          <Option value="day" v-for="item in tagList" :key="item.tag_id">{{item.tag_name}}</Option>
        </Select>
      </Input>-->
      <div class="article_search">
        <div class="article_tag_search">
          <Input
            search
            placeholder="Enter something..."
            @on-focus="inpFocus"
            @on-search="handleSearch"
            v-model="searchInpValue"
          />
          <!-- @on-blur="inpBlur" -->
        </div>
        <div class="search_tag" v-if="tagVisable">
          <Button class="article_tag" type="primary" style="height:22px;line-height:22px;padding:0px 5px;" @click="checkAll">Check All</Button>
          <Tag
            checkable
            class="article_tag"
            :color="item.tag_color"
            v-for="item in tagList"
            :key="item.tag_id"
            :name="item.tag_name"
            @on-change="handleClickTag(item.tag_name)"
          >{{item.tag_name}}</Tag>
        </div>
        <!-- <Divider dashed /> -->
        <!-- <div>
          <Tag
            class="article_tag"
            :color="item.tag_color"
            v-for="item in tagList"
            :key="item.tag_id"
            :name="item.tag_name"
          >{{item.tag_name}}</Tag>
        </div>-->
      </div>
      <div class="aritcle_item" v-for="(item,index) in this.articleData" :key="index">
        <div class="aritcle_item_body">
          <div class="aritcle_item_header">
            <span @click="handleDetail(item.article_id)">{{item.article_name}}</span>
          </div>
          <div class="aritcle_item_info">
            <span>{{item.article_publish_time}}</span>
            发布在
            “
            <span class="aritcle_item_sort">{{item.article_sort}}</span>”
          </div>
          <div class="aritcle_item_summary">
            <div>{{item.article_summary}}</div>
            <a @click="handleDetail(item.article_id)">阅读全文</a>
          </div>
        </div>
        <div class="aritcle_item_image" v-if="item.article_image">
          <img :src="item.article_image" alt />
        </div>
      </div>

      <!-- <Page class="article_page" :current="current" :total="total" simple /> -->
      <div class="detail_body_footer">
        <ButtonGroup class="detail_body_footer_left" size="large">
          <Button @click="handleLastOne">
            <Icon type="ios-arrow-back"></Icon>上一页
          </Button>
          <Button @click="handleNextOne">
            下一页
            <Icon type="ios-arrow-forward"></Icon>
          </Button>
        </ButtonGroup>
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
      articleData: [],
      current: 1,
      pageSize: 10,
      total: 0,
      tagList: "",
      searchTagValue: "",
      searchInpValue: "",
      tagVisable: false
    };
  },
  created() {
    this.initData();
    this.showSort();
  },
  methods: {
    checkAll() {
      this.initData();
    },
    //标签查
    handleClickTag(tagName) {
      console.log(tagName);
      let formdata = {
        article_sort: tagName,
        page: this.current,
        pageSize: this.pageSize
      };
      this.$http
        .post($globalVal.ServerBaseURL + "/article/searchByTag", formdata)
        .then(res => {
          console.log(res.data.data);
          this.articleData = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //input查
    handleSearch() {
      let formdata = {
        article_sort: this.searchTagValue,
        article_name: this.searchInpValue,
        page: this.current,
        pageSize: this.pageSize
      };
      this.$http
        .post($globalVal.ServerBaseURL + "/article/search", formdata)
        .then(res => {
          console.log(res.data.data);
          this.articleData = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    inpFocus() {
      this.tagVisable = true;
    },
    inpBlur() {
      this.tagVisable = false;
    },
    showSort() {
      this.$http
        .post($globalVal.ServerBaseURL + "/article/selectTag")
        .then(res => {
          console.log(res.data.data);
          this.tagList = res.data.data;
          this.selectList = [];
          console.log(this.tagList);
          for (let index = 0; index < this.tagList.length; index++) {
            console.log();
            let temp = {
              value: this.tagList[index].tag_name,
              label: this.tagList[index].tag_name
            };
            this.selectList.push(temp);
          }
          console.log(this.selectList);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleLastOne() {
      console.log(this.current);
      if (this.current == 1) {
        this.$Message.warning("已经是第一页");
        return false;
      }
      this.current--;
      this.initData();
    },
    handleNextOne() {
      console.log(this.total / this.pageSize);
      if (this.total / this.pageSize > this.current) {
        this.current++;
        this.initData();
      } else {
        this.$Message.warning("已经是最后一页");

        return false;
      }
    },
    handleDetail(articleId) {
      this.$router.push({
        path: "/article_detail",
        query: { articleId: articleId }
      });
    },
    initData() {
      let fromData = {
        page: this.current,
        pageSize: this.pageSize
      };
      this.$http
        .post($globalVal.ServerBaseURL + "/article/articleList", fromData)
        .then(res => {
          console.log(res.data.data);
          var temp = [];
          res.data.data.articleList.forEach(element => {
            element.article_publish_time = DateUtil.fmtDate(
              element.article_publish_time
            );
            temp.push(element);
          });
          console.log(temp);
          this.articleData = temp;
          this.total = res.data.data.total;
          this.current = res.data.data.currentPage;
          console.log(this.articleData);
          sessionStorage.setItem("articleList", JSON.stringify(temp));
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
  /* background-color: #fff; */
  color: #303133;
  /* min-height: 100vh; */
  position: relative;
  padding-bottom: 80px;
}
.article_tag {
  padding: 0px 10px;
  margin: 0px 5px;
  margin-bottom: 3px;
}
.article_search {
  padding: 20px 80px 0px 80px;
  margin: 0px auto;
  position: relative;
}
.article_tag_search {
  width: 50%;
  margin: 0px auto;
  padding: 0px 5px 5px 5px;
}
.search_tag {
  width: 45%;
  padding: 0px 5px 5px 5px;
  height: 30px;
  position: absolute;
  left: 29%;
  text-align: left;
}

.aritcle_item {
  padding: 10px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  min-height: 160px;
}
.aritcle_item_body {
  flex: 3;
}
.aritcle_item_image {
  flex: 1;
  /* display: flex; */
  padding: 30px;
  padding-right: 50px;
}
.aritcle_item_image img {
  height: 100%;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
  width: 100%;
}
.aritcle_item_header {
  font-family: "Open Sans", sans-serif;
  font-size: 1.6rem;
  line-height: 1.9em;
  letter-spacing: 0.01em;
  text-align: left;
  padding: 0px 20px;
  font-weight: 700;
}
.aritcle_item_header span:hover {
  text-decoration: none;
  color: #0a9e93;
  transition: color 0.3s;
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
.aritcle_item_sort {
  color: #c45630e3;
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
.article_page {
  margin-top: 20px;
  padding-bottom: 20px;
}
.detail_body_footer {
  position: absolute;
  bottom: 0px;
  text-align: center;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #fff;
  margin-top: 20px;
}
.detail_body_footer button {
  /* margin-right: 20px; */
}
</style>
