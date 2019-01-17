<template>
  <div class="search" :style="{backgroundImage: 'url(' + imgfirst + ')' }">
    <el-row style="height: 30%;" type="flex" justify="center">
      <el-col :span="24"><div class="grid-content">
        <h2 class="t2">搜索你想要的职位</h2>
      </div></el-col>
    </el-row>
    <el-row style="height:20%;" type="flex" justify="center">
      <el-col :span="12"><div class="grid-content">
        <el-input  v-model="input" placeholder="请输入你想要的岗位"></el-input>
      </div></el-col>
    </el-row>
    <el-row style="height: 10%;" type="flex" justify="center">
      <el-col :span="12"><div class="grid-content">
        <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
      </div></el-col>
    </el-row>     
    <el-row style="height: 30%;" type="flex" justify="center">
      <el-col :span="24"><div class="grid-content">
        <p class="t3">查看你想要岗位的薪资和需求分析</p>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>

import imgfirst from '../../images/first.jpg'



export default {
  data() {
    return {
      input: '',
      imgfirst,
    }
  },
  methods: {
    search: function(){
      if(this.input === "") {
        alert("请先输入你要搜索的职位");
      }
      else {
        this.jump(this.input);
      }
    },
    jump: function(destination) {
      this.$router.push("/searchresults/#" + destination);
    }
  }  
};
</script>

<style scoped>
.search {
  width: 100%;
  height: 400px;
  text-align: center;
  position:relative;
  background:top center no-repeat;
}

.t2{
  color:white;
  text-shadow:2px 2px #696969;
  text-align: top;
}

.t3{
  color:white;
  text-shadow:2px 2px #696969;
  text-align: top;
}
</style>
