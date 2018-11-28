<template>
  <div id = "profile">
    <el-row style="height: 15%;" type="flex" justify="center">
      <el-col :span="24"><app-nav class="grid-content"></app-nav></el-col>
    </el-row>
    <el-row style="height: 90%;" type="flex" justify="center">
      <el-col :span="24"><app-information class="grid-content"></app-information></el-col>
    </el-row>
  </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Information from '../components/profile/Information.vue'

export default {
  components: {
    'app-nav': Nav,
    'app-information': Information
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
