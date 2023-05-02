<template>
  <select @change="handleChange">
    <option v-for="item in props.options" :value="item.value">
      {{ item.label }}
    </option>
  </select>
</template>
<script setup>
const props = defineProps({
  options: [],
});

const emits = defineEmits(["change"]);

const handleChange = (e) => {
  emits("change", e.target.value);
};
</script>
<style></style>
