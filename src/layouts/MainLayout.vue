<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <SideBar :collapsed="collapsed" />
    <a-layout>
      <a-layout-header>
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import SideBar from "./SideBar.vue";
export default {
  components: { SideBar },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style lang="less" scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.ant-layout {
  height: 100vh;
}
.ant-layout-header {
  background: #fff;
  padding: 0;
  text-align: left;
}
</style>

