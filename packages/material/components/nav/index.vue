<template>
  <nav>
    <Select class="fl" :options="selOpts" @change="siteChange"></Select>
    {{ props.title }}
    <Button class="fr">退出</Button>
  </nav>
</template>
<script setup>
import { Button, Select } from "@sg-design/web-vue";

const props = defineProps({
  title: "",
});

const selOpts = [
  {
    value: "1",
    label: "web 组件库",
  },
  {
    value: "2",
    label: "资源库",
  },
];

const siteChange = (value) => {
  console.log(value);
};
</script>
<style scoped>
nav {
  height: 50px;
  background: #ec722e;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
</style>
