<template>
  <div class="information">
    <el-row style="height: 600px;" type="flex" justify="center">
      <el-col :span="6"><div class="grid-content ll">
        <el-row style="height: 40%;" type="flex" justify="center">
          <el-col :span="24"><div class="grid-content">
            <img v-if="imgseen" border="0" src="../../images/head.jpg" alt="Pulpit rock" width="200" height="200"/>
          </div></el-col>
        </el-row>
        <el-row style="height: 8%" type="flex" justify="center">
          <el-col :span="24"><div class="grid-content">
            <el-button v-if="imgseen" type="primary">修改头像</el-button>
          </div></el-col>
        </el-row>
        <el-row style="height: 8%" type="flex" justify="center">
          <el-col :span="24"><div class="grid-content"></div></el-col>
        </el-row>
        <el-row :class="{active: isActive, 'noactive': noActive}" type="flex" justify="center">
          <el-col :span="24"><div class="grid-content"  @click="changeToG">
            <p>个人信息</p>
          </div></el-col>
        </el-row>
        <el-row style="height: 3%" type="flex" justify="center">
          <el-col :span="24"><div class="grid-content"></div></el-col>
        </el-row>
        <el-row :class="{active: sisActive, 'noactive': snoActive}" type="flex" justify="center">
          <el-col :span="24"><div class="grid-content" @click="changeToZ">
            <p>职业匹配</p>
          </div></el-col>
        </el-row>
      </div></el-col>
      <el-col :span="18" v-if="seen"><div class="grid-content rr">
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
        <el-row style="height: 8%;" type="flex" justify="center">
          <el-col :span="4"><div class="grid-content"></div></el-col>
          <el-col :span="4"><div class="grid-content"></div></el-col>
          <el-col :span="4"><div class="grid-content"></div></el-col>
          <el-col :span="4"><div class="grid-content"></div></el-col>
          <el-col :span="4"><div class="grid-content"></div></el-col>
          <el-col :span="4"><div class="grid-content">
            <el-button type="primary">编辑</el-button>
          </div></el-col>
        </el-row>
      </div></el-col>
      <el-col :span="18" v-if="noseen"><div class="grid-content rr"></div></el-col>
      <el-col :span="18" v-if="nologin"><div class="grid-content rr" style="line-height: 400px;">登录后可查看</div></el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name:"app",
  data() {
    return {
      isActive: true,
      noActive: false,
      sisActive: false,
      snoActive: true,
      seen: false,
      noseen: false,
      nologin: true,
      imgseen: false
    }
  },
  mounted: function() {
    if(!this.$store.state.isLogin) {
      this.seen = false;
      this.noseen = false;
      this.nologin = true;
      this.imgseen = false;
    }
    else {
      this.seen = true;
      this.noseen = false;
      this.nologin = false;
      this.imgseen = true;
    }
  },
  methods: {
    changeToZ: function() {
      this.isActive = false;
      this.noActive = true;
      this.sisActive = true;
      this.snoActive = false;
      this.seen = false;
      this.noseen = true;
      this.nologin = false;
    },
    changeToG: function() {
      this.isActive = true;
      this.noActive = false;
      this.sisActive = false;
      this.snoActive = true;
      if(!this.$store.state.isLogin) {
        this.seen = false;
        this.noseen = false;
        this.nologin = true;
      }
      else {
        this.seen = true;
        this.noseen = false;
        this.nologin = false;
      }
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

.active {
  height: 12%;
  background-color: #f0f2f5;
}

.noactive {
  height: 12%;
  background-color: #FFF;
  cursor: pointer;
}
</style>
