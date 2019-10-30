<template>
  <div>
    <div class="edit_article">
      <div class="edit_publish">
        <Button class="edit_btn" @click="vlogVisible = true " type="primary">发布v-log</Button>
        <Button class="edit_btn" @click="cardVisible = true " type="primary">编辑名片</Button>
        <Modal v-model="cardVisible" scrollable title="编辑名片" @on-ok="handleEditCard">
          <div>
            <Input
              style="margin-bottom:5px;"
              v-model="cardValue.cardValue1"
              size="large"
              placeholder="Location"
            />
            <Input
              style="margin-bottom:5px;"
              v-model="cardValue.cardValue2"
              size="large"
              placeholder="Aries"
            />
            <Input
              style="margin-bottom:5px;"
              v-model="cardValue.cardValue3"
              size="large"
              placeholder="Linkedln"
            />
            <Input
              style="margin-bottom:5px;"
              v-model="cardValue.cardValue4"
              size="large"
              placeholder="Email"
            />
          </div>
        </Modal>
        <Button class="edit_btn" @click="sortVisible = true " type="primary">管理标签</Button>
        <!-- 标签管理 -->
        <Modal v-model="sortVisible" scrollable title="标签管理">
          <div>
            <p>当前标签：</p>
            <div>
              <!-- <Modal
                v-model="tagDelVisible"
                :styles="{top: '300px'}"
                scrollable
                title="删除标签"
                ok-text="确定删除"
                @on-ok="handleDelTag"
              >
                <p>{{this.delTagName}}</p>
              </Modal>-->
              <Tag
                :color="item.tag_color"
                v-for="item in tagList"
                :key="item.tag_id"
                :name="item.tag_name"
                @click.native="handleDelTagMock(item.tag_id,item.tag_name)"
              >{{item.tag_name}}</Tag>
              <br />
              <br />
              <Input v-model="addTagValue" placeholder="Enter Tag Name..." style="width: 200px" />
              <Button icon="ios-add" type="dashed" @click="handleAddTag">添加标签</Button>
            </div>
          </div>
        </Modal>
        <Button class="edit_btn" @click="editVisible = true" type="primary">发布文章</Button>
        <!-- 发布文章 -->
        <Modal v-model="editVisible" fullscreen title="发布文章" ok-text="确定发布" @on-ok="handleSend">
          <div class="edit_title">
            <!-- <span>题目：</span> -->
            <Input class="edit_title_inp" v-model="inpValue" size="large" placeholder="标题:" />
            <Select
              size="large"
              v-model="selectVal"
              multiple
              placeholder="分类:"
              :max-tag-count="2"
              :max-tag-placeholder="maxTagPlaceholder"
            >
              <Option
                v-for="item in selectList"
                :value="item.value"
                :key="item.value"
              >{{ item.label }}</Option>
            </Select>
          </div>
          <Input v-model="editSummary" type="textarea" placeholder="简介..." />
          <!-- 富文本 -->
          <div>
            <mavon-editor
              v-model="editValue"
              ref="md"
              @imgAdd="imgAdd"
              @change="handleChange"
              @save="handleSave"
              @htmlCode="handleHtml"
            />
          </div>
        </Modal>

        <!-- 发布v-log -->
        <Modal v-model="vlogVisible" fullscreen title="发布V-log" ok-text="确定发布" @on-ok="handleSend">
          <div class="v_body">
            <Row>
              <Col span="12">col-12</Col>
              <Col span="12">col-12</Col>
            </Row>

            <!-- <div class="vlog_header">
              <p>
                标题：
                <Input
                  style="width:600px;"
                  v-model="V_value"
                  size="large"
                  placeholder="例：RSSHub Radar — 订阅一个 RSS 源不应该这么难"
                />
              </p>
            </div>
            <br />
            <div class="vlog_header">
              <p>
                <Icon type="md-calendar" size="16" />
                <DatePicker type="date" placeholder="2019-01-01" style="width: 250px"></DatePicker>
              </p>
            </div>
            <br />
            <div class="vlog_header">
              <p>
                标题：
                <Input
                  style="width:600px;"
                  v-model="V_value"
                  size="large"
                  placeholder="例：RSSHub Radar — 订阅一个 RSS 源不应该这么难"
                />
              </p>
            </div>
            <br />
            <div class="vlog_header">
              <p>
                标题：
                <Input
                  style="width:600px;"
                  v-model="V_value"
                  size="large"
                  placeholder="例：RSSHub Radar — 订阅一个 RSS 源不应该这么难"
                />
              </p>
            </div>

            <div class="vlog_info">
              <span class="vlog_info_item" style="color:#00a7e0"></span>
              <span class="vlog_info_item">
                <Icon type="ios-game-controller-b" size="16" />
                <Select v-model="model10" multiple style="width:200px">
                  <Option
                    v-for="item in selectList"
                    :value="item.value"
                    :key="item.value"
                  >{{ item.label }}</Option>
                </Select>
              </span>
              <span class="vlog_info_item" style="color:#fd746c">
                <Icon type="ios-pin" size="16" />
                <Input v-model="value" placeholder="坐标..." style="width: 150px" />
              </span>
            </div>

            <div class="vlog_header">
              <p>
                标题：
                <Input
                  style="width:600px;"
                  v-model="value6"
                  type="textarea"
                  :rows="4"
                  placeholder="Enter something..."
                />
              </p>
            </div>

            <div class="vlog_content">
              <video id="myVideo" class="video-js">
                <source src="@/assets/video/1569745009911582.mp4" type="video/mp4" />
              </video>
            </div>-->
          </div>
        </Modal>
      </div>
      <div class="aritcle">
        <div class="aritcle_item" v-for="(item,index) in this.articleData" :key="index">
          <div class="aritcle_item_body">
            <div class="aritcle_item_header">
              <span @click="handleEdit(item.article_id)">{{item.article_name}}</span>
            </div>
            <div class="aritcle_item_info">
              <span>{{item.article_publish_time}}</span>
              发布在
              “
              <span class="aritcle_item_sort">{{item.article_sort}}</span>”
            </div>
            <div class="aritcle_item_summary">
              <div>{{item.article_summary}}</div>
              <div class="aritcle_item_btn">
                <!-- <a @click="handleEdit(item.article_id)">编辑文章</a> -->
                <Button @click="handleEdit(item.article_id)" type="primary" size="small" ghost>编辑文章</Button>
                <Poptip confirm title="确定要删除这篇文章吗？" @on-ok="handleDel(item.article_id)">
                  <Button type="error" size="small" ghost>删除文章</Button>
                </Poptip>
              </div>
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
  </div>
</template>

<script>
import $globalVal from "../../../utils/global.js";
import DateUtil from "../../../utils/formDate";

export default {
  name: "",
  components: {},
  data() {
    return {
      flag: "",
      vlogVisible: false,
      delModal: false,
      editVisible: false,
      sortVisible: false,
      editValue: "",
      editSummary: "",
      editValueHtml: "",
      articleEditVal: "",
      inpValue: "",
      selectVal: "专业类",
      coverImage: "",
      selectList: [
        {
          value: "专业类",
          label: "专业类"
        },
        {
          value: "日记",
          label: "日记"
        },
        {
          value: "小说",
          label: "小说"
        },
        {
          value: "一切只为有趣",
          label: "一切只为有趣"
        }
      ],
      articleData: [],
      current: 1,
      pageSize: 10,
      total: 0,
      currentEditId: "",
      tagList: "",
      addTagValue: "",
      tagDelVisible: false,
      delTagName: "",
      cardVisible: false,
      cardValue: {
        cardValue1: "",
        cardValue2: "",
        cardValue3: "",
        cardValue4: ""
      },

      V_value: ""
    };
  },
  created() {
    this.initData();
    this.showSort();
  },
  methods: {
    // 绑定@imgAdd event
    async imgAdd(pos, file) {
      // 第一步.将图片上传到服务器.
      let formdata = new FormData();
      formdata.append("imgFile", file);
      let res = await this.$http
        .post($globalVal.ServerBaseURL + "/uploadImage", formdata)
        .then(res => {
          console.log(res.data.url);
          this.coverImage = res.data.url;
          console.log(res);
          this.$refs.md.$img2Url(pos, res.data.url);
        });
      // 替换掉当前的url
    },

    //编辑名片逻辑
    handleEditCard() {
      let formdata = this.cardValue;
      this.$http
        .post($globalVal.ServerBaseURL + "/card/updateCard", formdata)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //标签部分逻辑
    // handleDelTagMock(tagId, tagName) {
    //   console.log(tagId);
    //   this.delTagName = tagName;
    //   this.delTagId = tagId;
    //   this.tagDelVisible = true;
    // },
    // handleDelTag() {
    //   let fromData = {
    //     tag_id: this.delTagId
    //   };
    //   this.$http
    //     .post($globalVal.ServerBaseURL + "/article/delTag", fromData)
    //     .then(res => {
    //       console.log(res.data.data);
    //       this.showSort();
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
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
    handleAddTag() {
      let fromData = {
        tag_name: this.addTagValue
      };
      this.$http
        .post($globalVal.ServerBaseURL + "/article/addTag", fromData)
        .then(res => {
          console.log(res.data.data);
          this.showSort();
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleTagClose() {},

    handleLastOne() {
      console.log(this.current);
      if (this.current == 1) {
        this.$Message.warning("别点我了！已经到头了！");
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
        this.$Message.warning("停！后面没了");
        return false;
      }
    },
    //编辑文章回显
    handleEdit(articleId) {
      this.flag = "edit";
      this.currentEditId = articleId;
      this.editVisible = true;
      console.log(articleId);
      let fromData = {
        articleId: articleId
      };
      this.$http
        .post($globalVal.ServerBaseURL + "/article/detail", fromData)
        .then(res => {
          let temp = res.data.data[0];
          this.inpValue = temp.article_name;
          this.editSummary = temp.article_summary;
          this.editValue = temp.article_editVal;
          this.selectVal = temp.article_sort;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleDel(articleId) {
      console.log(articleId);
      let fromData = {
        articleId: articleId
      };
      this.$http
        .post($globalVal.ServerBaseURL + "/article/delete", fromData)
        .then(res => {
          console.log(res.data);
          this.initData();
        })
        .catch(err => {
          console.log(err);
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
    },
    //发布文章
    handleSend() {
      //***********编辑还是发布标示**************
      console.log(this.flag);

      console.log(this.$refs.md.d_render);
      console.log(this.$refs.md.d_value);
      // this.content.content = this.$refs.md.d_render //html
      this.articleEditVal = this.$refs.md.d_value; //普通文本
      let publishTime = new Date();
      console.log(this.inpValue);
      console.log(this.selectVal);
      console.log(this.editValueHtml);
      console.log(publishTime);
      let formData = {
        article_id: this.currentEditId,
        article_name: this.inpValue,
        article_sort: this.selectVal,
        article_summary: this.editSummary,
        article_content: this.editValueHtml,
        article_editVal: this.articleEditVal,
        cover_image: this.coverImage
      };
      console.log(formData);
      if (this.flag == "edit") {
        this.$http
          .post($globalVal.ServerBaseURL + "/article/edit", formData)
          .then(res => {
            console.log(res.data);
            this.initData();
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$http
          .post($globalVal.ServerBaseURL + "/article/add", formData)
          .then(res => {
            console.log(res.data);
            this.initData();
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    maxTagPlaceholder(num) {
      return "more " + num;
    },
    handleChange(value, render) {
      this.editValueHtml = render;
      console.log(this.editValueHtml);
    },

    handleSave() {
      console.log(this.editValue);
    },
    handleHtml() {
      console.log("000");
    }
  }
};
</script>

<style scoped>
.edit_article {
  min-height: 600px;
  background-color: #fff;
}

.edit_publish {
  padding: 20px;
  text-align: right;
  border-bottom: 1px solid #e2e2e2;
}
.edit_btn {
}

.aritcle {
  background-color: #fff;
  color: #303133;
  min-height: 100vh;
  position: relative;
  padding-bottom: 80px;
}

.aritcle_item {
  padding: 10px;
  border-top: 1px solid #e2e2e2;
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
.aritcle_item_btn {
  padding: 10px 0px 0px 0px;
}
.aritcle_item_btn button {
  margin-right: 10px;
}
.aritcle_item_summary a {
  font-size: 14px;
  margin-right: 20px;
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

.edit_title {
  height: 60px;
  line-height: 60px;
}
.edit_title span {
  font-size: 24px;
  font-weight: 500;
}
.edit_title_inp {
  width: 50%;
}
.edit_select {
  width: 49%;
  z-index: 1600;
}
.edit_select >>> .ivu-select-dropdown {
  z-index: 1600;
}
</style>

<style scoped>
@import url("./vlog.css");
</style>