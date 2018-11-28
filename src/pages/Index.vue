<template>
  <div class="index">
    <el-row style="height: 15%;" type="flex" justify="center">
      <el-col :span="24"><app-nav class="grid-content"></app-nav></el-col>
    </el-row>
    <el-row style="height: 66%;" type="flex" justify="center">
      <el-col :span="24"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row style="height: 120%;" type="flex" justify="center">
      <el-col :span="24"><app-city class="grid-content"></app-city></el-col>
    </el-row>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Search from '../components/index/Search.vue'
import City from '../components/index/City.vue'

export default {
  components: {
    'app-nav': Nav,
    'app-search': Search,
    'app-city': City
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
</style>
