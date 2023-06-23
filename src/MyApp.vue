<template>
<div>
  <navBar></navBar>
  <sideBar></sideBar>
</div>
</template>

<script>
import navBar from "@/components/navBar";
import sideBar from "@/components/sideBar";
export default {
  name: "MyApp",
  components: {
    navBar,sideBar //导入组件的简便方式，不用kv形式
  }
}
</script>

<style scoped>

</style>