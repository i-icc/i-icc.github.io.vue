<template>
  <main class="container">id: {{ id }}</main>
</template>

<script>
// import WorkComponent from "@/components/WorkComponent.vue";

export default {
  data() {
    return {
      work: {},
      id: "",
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    fetch(`works/${this.id}.json`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.work = json;
      });
  },
};
</script>
