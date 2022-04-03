<template>
  <div id="app">
    <!-- 导航栏 -->
    <el-menu style="width: 200px;"
      default-active="1-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>User</span>
        </template>
        <el-menu-item-group>
          <template slot="title">页面分组1</template>
          <el-menu-item index="1-1" @click="$router.push({name: 'UserHome'})">Home</el-menu-item>
          <el-menu-item index="1-2" @click="$router.push({name: 'UserSociety'})">Society</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="页面分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    <!-- 路由视图 -->
    <router-view style="flex: 1;"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleOpen(){

    },
    handleClose(){

    }
  }
}
</script>

<style>
/* import global css */
@import './common/main.css';

/* global font setting */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  height: 100vh;
}
</style>
