<template>
  <div class="nav">
    <h1 class = "title">招聘数据分析系统</h1>
      <ul>
        <li><a class="active" @click="jump('/')">首页</a></li>
        <li><a class="active" @click="jump('/profile')">个人中心</a></li>
      </ul>
    <div class = "butt">
      <el-button type="info" class="elb" @click="jump('/login')">登录</el-button>
      <el-button type="info" class="elb" @click="jump('/register')">注册</el-button>
    </div>    
  </div>
</template>

<script>

export default {
  methods: {
    jump: function(destination) {
      this.$router.push(destination);
    }
  }
};
</script>

<style scoped>
.nav {
	width: 100%;
	height: 100%;
	background: #292e3c;
	color: #fff;
	line-height: 20px;
	font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
}

.title {
  float: left;
  margin-left: 20px;
  margin-top: 40px;
  font-size: 40px;
}

.butt {
  float: right;
  margin-top: 20px;
  margin-right: 20px;
}
ul {
    float: left;
    list-style-type: none;
    width:600px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #292e3c;
    font-size: 30px;
}

li {
    float: left;
}

li a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 40px 30px;
    text-decoration: none;
}

li a:hover {
    background-color: #111;
}

.elb {
  cursor: pointer;
  margin-top: 15px;
}

.active {
  cursor: pointer;
}
</style>
