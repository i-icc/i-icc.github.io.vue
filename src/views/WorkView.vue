<template>
  <main class="container">
    id: {{ id }}
  </main>
</template>

<script>
// import WorkComponent from "@/components/WorkComponent.vue";

export default {
  data() {
    return {
      works: [],
      tag: ""
    };
  },
  created() {
    this.tag = this.$route.query.tag;

    for (var i = 0; i < 4; i++) {
      fetch(`works/${i}.json`)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
          this.works.push(json);
        });
    }
  },
  components: {
    
  },
};
</script>
