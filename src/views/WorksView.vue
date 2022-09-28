<template>
  <main class="container">
    <div
      class="text-lg-center mb-4 mt-2"
      style="font-size: 4rem; font-family: 'Kosugi Maru', sans-serif"
    >
      制作物 {{ tag }}
    </div>
    <div class="works">
      <WorksComponent :works="works" />
    </div>
  </main>
</template>

<script>
import WorksComponent from "@/components/WorksComponent.vue";

import "../../public/css/works.css";

export default {
  data() {
    return {
      works: [],
      tag: "",
    };
  },
  mounted() {
    this.tag = this.$route.query.tag;
    for (var i = 0; i < 4; i++) {
      fetch(`works/${i}.json`)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          this.works.push(json);
        });
    }
  },
  components: {
    WorksComponent,
  },
};
</script>
