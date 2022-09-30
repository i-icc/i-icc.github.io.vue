<template>
  <main class="container">
    <div
      class="text-lg-center mb-4 mt-2"
      style="font-size: 4rem; font-family: 'Kosugi Maru', sans-serif"
    >
      制作物
    </div>
    <div class="works">
      <WorksComponent :works="works" :tag="tag" />
    </div>
  </main>
</template>

<script>
import WorksComponent from "@/components/WorksComponent.vue";

import "../../public/css/works.css";

export default {
  data() {
    return {
      all_works: [],
      works: [],
      tag: null,
    };
  },
  methods: {
    select_work: function () {
      console.log("test", this.tag, this.all_works, this.works);
      this.works = [];
      for (const work of this.all_works) {
        console.log(work);
        if (work.tag.includes(this.tag) || this.tag == null) this.works.push(work);
      }
    },
  },
  watch: {
    $route: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.tag = this.$route.query.tag;
        this.select_work();
      } else {
        this.select_work();
      }
    },
  },
  mounted() {
    this.tag = this.$route.query.tag;
    for (var i = 0; i < 13; i++) {
      fetch(`/works/${i}.json`)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          this.all_works.push(json);
          if (json.tag.includes(this.tag) || this.tag == null) this.works.push(json);
        });
    }
    this.select_work();
  },
  components: {
    WorksComponent,
  },
};
</script>
