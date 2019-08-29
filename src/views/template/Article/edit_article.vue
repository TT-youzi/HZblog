<template>
  <div>
    <div class="edit_article">
      <div class="edit_publish">
        <Button class="edit_btn" @click="editVisible = true" type="primary">发布文章</Button>
        <!-- <div class="markdown-body">
          <h2><a id="22222_0"></a>22222</h2>
        </div> -->
        <Modal v-model="editVisible" fullscreen title="发布文章" ok-text="确定发布" @on-ok="handleSend">
          <div class="edit_title">
            <!-- <span>题目：</span> -->
            <Input class="edit_title_inp" v-model="inpValue" size="large" placeholder="Title:" />
            <Select
              size="large"
              class="edit_select"
              v-model="selectVal"
              multiple
              placeholder="sort:"
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
          <div>
            <mavon-editor
              v-model="editValue"
              @change="handleChange"
              @save="handleSave"
              @htmlCode="handleHtml"
            />
          </div>
        </Modal>
      </div>
      <div class="aritcle">
        <div class="aritcle_item">
          <div class="aritcle_item_header">自信崩溃与绝望之谷</div>
          <div class="aritcle_item_info">
            <span>4月 03, 2019</span>
            发布在
            <span>Chatting~</span>
          </div>
          <div class="aritcle_item_summary">
            <p>有很长一段时间没写东西了(:з」∠)，甚至还删了不少之前内容。现在看来，原因其实很简单，我开始意识到很多之前写的东西仅仅只是建立在我自己的无知之上。</p>
            <a href>编辑文章</a>
          </div>
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
      editVisible: false,
      editValue: "",
      editValueHtml: "",
      inpValue: "",
      selectVal: "",
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
        }
      ]
    };
  },
  methods: {
    handleSend() {
      let publishTime = new Date();
      console.log(this.inpValue);
      console.log(this.selectVal);
      console.log(this.editValueHtml);
      console.log(publishTime);
      let formData = {
        article_name: this.inpValue,
        article_sort: this.selectVal,
        article_content: this.editValueHtml,
        // article_publish_time: publishTime
      };
      console.log(formData)
      this.$http
        .post($globalVal.ServerBaseURL + "/article/add", formData)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
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
  height: 600px;
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
