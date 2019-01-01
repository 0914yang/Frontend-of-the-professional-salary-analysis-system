<template>
  <div id = "profile">
    <el-row style="height: 100px;" type="flex" justify="center">
      <el-col :span="24"><app-nav class="grid-content"></app-nav></el-col>
    </el-row>
    <el-row style="height: 80%;" type="flex" justify="center">
      <el-col :span="24"><div class="grid">
        <h1>Single City</h1>
      </div></el-col>
    </el-row>
    <el-row style="height: 100px;" type="flex" justify="center">
      <el-col :span="24"><app-footer class="grid"></app-footer></el-col>
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
  }
};
</script>

<style scoped>
.profile {
  width: 100%;
  height: 600px;
}

.grid-content {
  border-radius: 10px;
  border: solid 1px #cecece;
  height: 100%;
}
</style>
