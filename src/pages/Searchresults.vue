<template>
  <div class="searchresults">
    <el-row style="height: 100px;" type="flex" justify="center">
      <el-col :span="24"><app-nav class="grid-content"></app-nav></el-col>
    </el-row>
    <el-row style="height: 95%;" type="flex" justify="center">
      <el-col :span="6"><div class="grid-content">
        <h3>热门搜索职业</h3>
      </div></el-col>
      <el-col :span="18"><div class="grid" @click="jump">
        <el-card class="card">
          <p>{{ searchitem }}</p>
        </el-card>
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
  },
  mounted: function() {
    var hash = decodeURIComponent(window.location.hash);
    hash = hash.substring(1);
    this.searchitem = hash;
  },
  data() {
    return {
      searchitem: ""
    }
  },
  methods: {
    jump: function() {
      this.$router.push("/singlecareer/#" + this.searchitem);
    }
  }
};
</script>

<style scoped>
.searchresults {
  width: 100%;
  height: 600px;
}

.grid-content {
  border-radius: 10px;
  border: solid 1px #cecece;
  height: 100%;
}

.grid {
  height: 100%;
}

.card {
  cursor: pointer;
  border-radius: 10px;
  border: solid 1px #cecece;
}
</style>
