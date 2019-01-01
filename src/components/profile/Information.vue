<template>
  <div class="information">
    <el-container>
  		<el-aside width="200px">
    		  			<el-row style="height: 50%;" type="flex" justify="left">
     			<el-col :span="24"><div class="grid-content">
     				<ul>
        				<li><a class="active" href="/">个人信息</a></li>
        				<li><a class="active" href="/">职业意向</a></li>
     				</ul>
      			</div></el-col>
    		</el-row>
  		</el-aside>
  		<el-main>
  			<el-row style="height: 50%;" type="flex" justify="left">
     			<el-col :span="24"><div class="grid-content">
        			<h1>基本信息</h1>
      			</div></el-col>
    		</el-row>
    		  <el-row style="height: 50%;" :type="flex" justify="left">
    		  	<el-col :span="4"><div class="grid-content">
        			<p class="a">姓名</p>
      			</div></el-col>
     			<el-col :span="4"><div class="grid-content">
        			<el-input size="small" v-model="input1" placeholder=""></el-input>
      			</div></el-col>
      			<el-col :span="4"><div class="grid-content">
        			<p class="a">居住地</p>
      			</div></el-col>
      			<el-col :span="2"><div class="grid-content">
        			<el-input size="small" v-model="input2" placeholder="省份"></el-input>
      			</div></el-col>
      			<el-col :span="2"><div class="grid-content">
        			<el-input size="small" v-model="input3" placeholder="城市"></el-input>
      			</div></el-col>
            <el-col :span="8"><div class="grid-content2">
              <img border="0" src="../../images/head.jpg" alt="Pulpit rock" width="200" height="200">
            </div></el-col>
    		</el-row>
    		</el-row>
    		  <el-row style="height: 50%;" :type="flex" justify="left">
    		  	<el-col :span="4"><div class="grid-content">
        			<p class="a">性别</p>
      			</div></el-col>
     			<el-col :span="4"><div class="grid-content">
        			<el-radio v-model="radio" label="1">男</el-radio>
  					<el-radio v-model="radio" label="2">女</el-radio>
      			</div></el-col>
      			<el-col :span="4"><div class="grid-content">
        			<p class="a">出生日期</p>
      			</div></el-col>
      			<el-col :span="4"><div class="grid-content">
        			<el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
      			</div></el-col>
    		</el-row>
    	    </el-row>
    		  <el-row style="height: 50%;" :type="flex" justify="left">
    		  	<el-col :span="4"><div class="grid-content">
        			<p class="a">最高学历</p>
      			</div></el-col>
     			<el-col :span="4"><div class="grid-content">
        			  <el-select v-model="value" placeholder="请选择">
    					<el-option
      						v-for="item in options"
      						:key="item.value"
     						 :label="item.label"
     						 :value="item.value">
   						 </el-option>
					  </el-select>
      			</div></el-col>
    		</el-row>
    		<el-row style="height: 50%;" type="flex" justify="left">
     			<el-col :span="24"><div class="grid-content">
        			<h1>联系信息</h1>
      			</div></el-col>
    		</el-row>
    	    </el-row>
    		  <el-row style="height: 50%;" :type="flex" justify="left">
    		  	<el-col :span="4"><div class="grid-content">
        			<p class="a">手机号码</p>
      			</div></el-col>
     			<el-col :span="4"><div class="grid-content">
        			<el-input size="small" v-model="input4" placeholder=""></el-input>
      			</div></el-col>
      			<el-col :span="4"><div class="grid-content">
        			<p class="a">邮箱地址</p>
      			</div></el-col>
      			<el-col :span="4"><div class="grid-content">
        			<el-input size="small" v-model="input5" placeholder=""></el-input>
      			</div></el-col>
            <el-col :span="8"><div class="grid-content">
              <p class="a">头像</p>
            </div></el-col>
    		</el-row>
  		</el-main>
   	</el-container>
  </div>
</template>

<script>

export default {
  name:"app",
  data() {
        return {
          input1: '马冬梅',
          input2: '四川',
          input3: '成都',
          input4: '1234567890',
          input5: '1234567890@qq.com',
          radio: '2',
          options: [{
          value: '选项1',
          label: '高中'
        }, {
          value: '选项2',
          label: '本科'
        }, {
          value: '选项3',
          label: '硕士'
        }, {
          value: '选项4',
          label: '博士'
        }],
        value1: '1998-01-12'
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

.el-aside {
  height: 100%;
  background-color: #D3DCE6;
  color: #333;
  line-height: 60px;
  font-size: 20px;
}
  
.el-main {
  height: 100%;
  background-color: #FFFFFF;
  color: #333;
  text-align: center top;
  line-height: 15px;
  font-weight: bold;
  font-size: 20px;
}
ul {
	height: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
}
 
li a {

    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}
 
li a:hover {
    background-color: #555;
    color: white;
}

.a {
  margin-top: 10px;
}
</style>
