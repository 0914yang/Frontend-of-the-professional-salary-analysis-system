<template>
  <div class="city">
  	<el-row style="height: 20%;" type="flex" justify="center">
      <el-col :span="24"><div class="grid-content">
        <h3>各大城市就业分析表单</h3>
        <p>快速了解国内各个城市对不同的岗位的需求情况和薪资水平，准确地为你的就业规划提供有效的第一手信息</p>
      </div></el-col>
    </el-row>
    <el-row style="height: 80%;" type="flex" justify="center">
      <el-col :span="24"><div class="grid-content">
        <el-row style="height: 33%;" :gutter="10" type="flex" justify="center">
          <el-col :span="5"><div class="grid img" :style="{backgroundImage:'url(' + imgone + ')'}" @click="jump('/beijing')">北京</div></el-col>
          <el-col :span="5"><div class="grid img" :style="{backgroundImage:'url(' + imgtwo + ')'}" @click="jump('/chengdu')">成都</div></el-col>
          <el-col :span="5"><div class="grid img" :style="{backgroundImage:'url(' + imgthree + ')'}" @click="jump('/chongqing')">重庆</div></el-col>
        </el-row>
        <el-row style="height: 33%;" :gutter="10" type="flex" justify="center">
          <el-col :span="5"><div class="grid img" :style="{backgroundImage:'url(' + imgfour + ')'}" @click="jump('/guangzhou')">广州</div></el-col>
          <el-col :span="5"><div class="grid img" :style="{backgroundImage:'url(' + imgfive + ')'}" @click="jump('/nanjing')">南京</div></el-col>
          <el-col :span="5"><div class="grid img" :style="{backgroundImage:'url(' + imgsix + ')'}" @click="jump('/shanghai')">上海</div></el-col>
        </el-row>
        <el-row style="height: 33%;" :gutter="10" type="flex" justify="center">
          <el-col :span="5"><div class="grid img" :style="{backgroundImage:'url(' + imgseven + ')'}" @click="jump('/shenzhen')">深圳</div></el-col>
          <el-col :span="5"><div class="grid img" :style="{backgroundImage:'url(' + imgeight + ')'}" @click="jump('/wuhan')">武汉</div></el-col>
          <el-col :span="5"><div class="grid img" :style="{backgroundImage:'url(' + imgnight + ')'}" @click="jump('/xiamen')">厦门</div></el-col>
        </el-row>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
import imgone from '../../images/beijing.jpg'
import imgtwo from '../../images/chengdu.jpg'
import imgthree from '../../images/chongqing.jpg'
import imgfour from '../../images/guangzhou.jpg'
import imgfive from '../../images/nanjing.jpg'
import imgsix from '../../images/shanghai.jpg'
import imgseven from '../../images/shenzhen.jpg'
import imgeight from '../../images/wuhan.jpg'
import imgnight from '../../images/xiamen.jpg'

export default {
  data() {
  	return {
  		imgone,
      imgtwo,
      imgthree,
      imgfour,
      imgfive,
      imgsix,
      imgseven,
      imgeight,
      imgnight
  	}
  },
  methods: {
  	jump: function(destination) {
      this.$router.push("/singlecity/#" + destination);
    }
  }
};
</script>

<style scoped>
.city {
  width: 100%;
  height: 100%;
  text-align: center;
}

.grid-content {
  height: 100%;
}

.grid {
  border-radius: 10px;
  border: solid 1px #cecece;
  height: 100%;
}

.img {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  font-weight: bold;
  font-size: 40px;
  color: #fff;
  cursor: pointer;
}
</style>
