<template>
  <div id = "city">
  	<div id = "discribe">
  		<h1>各大城市就业分析表单</h1>
  		<p>快速了解国内各个城市对不同岗位的需求情况和薪资水平，准确地为你的就业规划提供有效的第一手信息</p>
  	</div>
  	<div id = "cities">
  		<div class = "single" v-for = "city in cities">
  			<el-card :body-style="{ padding: '0px' }">
          <div class = "header" style="padding: 14px;">
          <span>{{ city.name }}</span>
          </div>
  			  <img :src = "city.src" class="image" @click = "toggle(city.router)">
  		    </el-card>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  data() {
  	return {
  		cities: [
  		  {name: '北京', src: require('../../images/beijing.jpg'), router: '/beijing'},
        {name: '上海', src: require('../../images/shanghai.jpg'), router: '/shanghai'},
        {name: '成都', src: require('../../images/chengdu.jpg'), router: '/chengdu'},
        {name: '广州', src: require('../../images/guangzhou.jpg'), router: '/guangzhou'},
        {name: '深圳', src: require('../../images/shenzhen.jpg'), router: '/shenzhen'},
        {name: '重庆', src: require('../../images/chongqing.jpg'), router: '/chongqing'},
        {name: '厦门', src: require('../../images/xiamen.jpg'), router: 'xiamen'},
        {name: '武汉', src: require('../../images/wuhan.jpg'), router: '/wuhan'},
        {name: '南京', src: require('../../images/nanjing.jpg'), router: '/nanjing'}
  		]
  	}
  },
  methods: {
  	toggle(destination) {
  		this.$router.push(destination);
  	}
  }
};
</script>

<style>
#discribe {
	width: 100%;
	text-align: center;
	height: 200px;
	line-height: 100px;
}

#cities {
	margin: auto;
	width: 1200px;
	height: 1050px;
	border: 1px solid #F0F1F1;
	-webkit-box-shadow:0px 3px 3px #c8c8c8 ;
    -moz-box-shadow:0px 3px 3px #c8c8c8 ;
    box-shadow:0px 3px 3px #c8c8c8 ;
}

.single {
	width: 400px;
	float: left;
}

.image {
	width: 100%;
  height: 310px;
	display: block;
}

.image:hover{
  cursor: pointer;
}

.header {
    height: 10px;
    line-height: 10px;
    text-align: center;
}
</style>
