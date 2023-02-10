<template>
  <div>
    <el-card style="margin: 20px 0">
      <categorySelect @getCategoryId="getCategoryId"></categorySelect>
    </el-card>
    <el-card>
      <div v-show="isShowTable">
        <el-button
          icon="el-icon-plus"
          type="primary"
          ref="tab"
          :disabled="!category3Id"
          @click="isShowTable = false"
          >添加属性</el-button
        >
        <!-- 表格 -->
        <el-table style="width: 100%" border :data="attrList">
          <el-table-column
            label="序号"
            type="index"
            width="80"
            align="center"
          ></el-table-column>
          <el-table-column
            label="属性名称"
            prop="attrName"
            width="150"
          ></el-table-column>
          <el-table-column label="属性值列表" prop="prop" width="">
            <template slot-scope="{ row, $index }">
              <el-tag
                type="success"
                v-for="(attrvalue, index) in row.attrValueList"
                :key="attrvalue.id"
                style="margin: 0 20px"
              >
                {{ attrvalue.valueName }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" prop="prop" width="150">
            <template slot-scope="{ row, $index }">
              <el-button
                type="warning"
                icon="el-icon-edit"
                size="mini"
              ></el-button>
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 添加属性或修改属性结构 -->
      <div v-show="!isShowTable">
        <el-form :inline="true" ref="form" label-width="80px">
          <el-form-item label="属性名" :model="attrInfo">
            <el-input placeholder="请输入属性名" v-model="attrInfo.attrName"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" icon="el-icon-plus" @click="addAttrValue" :disabled="!attrInfo.attrName">添加属性值</el-button>
        <el-button @click="isShowTable=true">取消</el-button>
        <el-table style="width:100%;margin:20px 0" border :data="attrInfo.attrValueList">
           <el-table-column label="序号" type="index" width="80" align="center"></el-table-column>
           <el-table-column label="属性值名称" width="">
              <template slot-scope="{row,$index}">
                <el-input placeholder="请输入属性值名称" v-model="row.valueName">
                </el-input>
              </template>
           </el-table-column>
           <el-table-column label="操作" width="">
            <template slot-scope="{row,$index}">
                <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
              </template>
           </el-table-column>
        </el-table>
        <el-button type="primary">保存</el-button>
        <el-button @click="isShowTable=true">取消</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import categorySelect from "@/components/categorySelect";
export default {
  name: "Attr",
  components: {
    categorySelect,
  },
  data() {
    return {
      category1Id: "",
      category2Id: "",
      category3Id: "",
      attrList: [],
      isShowTable: true,      //控制table的显示与隐藏
      attrInfo:{              //收集新增属性|修改属性使用
       attrName:"",                 //属性名
       attrValueList:[              //属性名中的属性值
          
       ],
       categoryId:0,                //携带category3Id
       categoryLevel:3,     
      }
    };
  },
  methods: {
    getCategoryId(cForm) {
      console.log(cForm);
      this.category1Id = cForm.category1Id;
      this.category2Id = cForm.category2Id;
      this.category3Id = cForm.category3Id;
      //发请求获取品牌属性
      this.getAttrList();
    },
    async getAttrList() {
      let { category1Id, category2Id, category3Id } = this;
      let result = await this.$API.attr.reqAttrList(
        category1Id,
        category2Id,
        category3Id
      );
      if (result.code == 200) {
        this.attrList = result.data;
      }
    },
    //添加属性值
    addAttrValue(){
      //向属性值的数组里面添加元素
      this.attrInfo.attrValueList.push({
             attrId:0,
             valueName:'' 
      })
    }
  },
};
</script>
<style scoped>
</style>