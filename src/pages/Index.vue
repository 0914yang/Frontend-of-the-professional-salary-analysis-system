<template>
  <div class="index">
    <el-row style="height: 100px;" type="flex" justify="center">
      <el-col :span="24"><app-nav class="grid-content"></app-nav></el-col>
    </el-row>
    <el-row style="height: 66%;" type="flex" justify="center">
      <el-col :span="24"><app-search class="grid"></app-search></el-col>
    </el-row>
    <el-row style="height: 120%;" type="flex" justify="center">
      <el-col :span="24"><app-city class="grid"></app-city></el-col>
    </el-row>
    <el-row style="height: 100px;" type="flex" justify="center">
      <el-col :span="24"><app-footer class="grid"></app-footer></el-col>
    </el-row>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Search from '../components/index/Search.vue'
import City from '../components/index/City.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    'app-nav': Nav,
    'app-search': Search,
    'app-city': City,
    'app-footer': Footer
  }
};
</script>

<style scoped>
.index {
  width: 100%;
  height: 100%;
}

.grid-content {
  border-radius: 10px;
  border: solid 1px #cecece;
  height: 100%;
}

.grid {
  height: 100%;
}
</style>
