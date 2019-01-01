<template>
  <div class="information">
    <el-row style="height: 600px;" type="flex" justify="center">
      <el-col :span="6"><div class="grid-content ll">
        <img border="0" src="../../images/head.jpg" alt="Pulpit rock" width="200" height="200"/>
      </div></el-col>
      <el-col :span="18"><div class="grid-content rr">
        <el-row style="height: 12%;" type="flex" justify="center">
          <el-col :span="24"><div class="grid-content">
              <h3>基本信息</h3>
            </div></el-col>
        </el-row>
        <el-row style="height: 12%;" type="flex" justify="center">
            <el-col :span="4"><div class="grid-content">
              <p>姓名：</p>
            </div></el-col>
            <el-col :span="4"><div class="grid-content">
              <p>马冬梅</p>
            </div></el-col>
            <el-col :span="4"><div class="grid-content">
              <p>居住地:</p>
            </div></el-col>
            <el-col :span="2"><div class="grid-content">
              <p>四川</p>
            </div></el-col>
            <el-col :span="2"><div class="grid-content">
              <p>成都</p>
            </div></el-col>
        </el-row>
        <el-row style="height: 12%;" type="flex" justify="center">
          <el-col :span="4"><div class="grid-content">
            <p>性别:</p>
            </div></el-col>
          <el-col :span="4"><div class="grid-content">
            <p>女</p>
            </div></el-col>
          <el-col :span="4"><div class="grid-content">
            <p>出生日期:</p>
            </div></el-col>
          <el-col :span="4"><div class="grid-content">
            <p>1998-01-12</p>
            </div></el-col>
        </el-row>
        <el-row style="height: 12%;" type="flex" justify="center">
          <el-col :span="4"><div class="grid-content">
              <p>最高学历:</p>
            </div></el-col>
          <el-col :span="4"><div class="grid-content">
              <p>本科</p>
            </div></el-col>
          <el-col :span="8"><div class="grid-content"></div></el-col>
        </el-row>
        <el-row style="height: 12%;" type="flex" justify="center">
          <el-col :span="24"><div class="grid-content">
              <h3>联系信息</h3>
            </div></el-col>
        </el-row>
        <el-row style="height: 12%;" type="flex" justify="center">
          <el-col :span="4"><div class="grid-content">
              <p>手机号码:</p>
            </div></el-col>
          <el-col :span="4"><div class="grid-content">
              <p>1234567890</p>
            </div></el-col>
            <el-col :span="4"><div class="grid-content">
              <p>邮箱地址:</p>
            </div></el-col>
            <el-col :span="4"><div class="grid-content">
              <p>1234567890@qq.com</p>
            </div></el-col>
        </el-row>
        <el-row style="height: 12%;" type="flex" justify="center">
          <el-col :span="4"><div class="grid-content">
              <p>就业方向:</p>
            </div></el-col>
          <el-col :span="4"><div class="grid-content">
              <p>前端</p>
            </div></el-col>
            <el-col :span="8"><div class="grid-content"></div></el-col>
        </el-row>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name:"app",
  data() {
    return {
    }
  }  
};
</script>

<style scoped>
.information {
  width: 100%;
  height: 100%;
  text-align: center;
}

.grid-content {
  height: 100%;
}

.rr {
  background-color: #f0f2f5;
}
</style>
