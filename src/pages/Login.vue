<template>
  <div class="login">
    <el-row style="height: 100px;" type="flex" justify="center">
      <el-col :span="24"><app-nav class="ggrid"></app-nav></el-col>
    </el-row>
    <el-row style="height: 30%;" type="flex" justify="center">
      <el-col :span="24"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row style="height: 30%;" type="flex" justify="center">
      <el-col :span="6"><div class="grid">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="age">
            <el-input v-model.number="ruleForm2.age"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          </el-form-item>
        </el-form>
      </div></el-col>
    </el-row>
    <el-row style="height: 35%;" type="flex" justify="center">
      <el-col :span="24"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row style="height: 100px;" type="flex" justify="center">
      <el-col :span="24"><app-footer class="grid-content"></app-footer></el-col>
    </el-row>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    'app-nav': Nav,
    'app-footer': Footer
  },
  data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        else
          callback();
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
        else
          callback();
      };
      return {
        ruleForm2: {
          pass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.commit('loginChange');
            this.$router.push('/profile');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 600px;
}

.grid-content {
  height: 100%;
}

.ggrid {
  border-radius: 10px;
  border: solid 2px #cecece;
  height: 100%;
}

.grid {
  border-radius: 10px;
  border: solid 2px #cecece;
  height: 100%;
  padding: 20px;
}
</style>
