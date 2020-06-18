<template lang="pug">
  h1 {{text}}
</template>

<script>
export default {
  name: "TiltText",
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>