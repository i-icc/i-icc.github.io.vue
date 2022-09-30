<template>
  <main class="container">
    <WorkDetailComponent :work="work" />
  </main>
</template>

<script>
import WorkDetailComponent from "@/components/WorkDetailComponent.vue";

import "../../public/css/work_deteil.css";

export default {
  data() {
    return {
      work: [],
      id: "",
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    fetch(`/works/${this.id}.json`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.work = json;
      });
  },
  components: {
    WorkDetailComponent,
  },
};
</script>
