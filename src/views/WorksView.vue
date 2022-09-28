<template>
  <main class="container">
  <div class="works">
    <WorksComponent :works="works" />
  </div>
  </main>
</template>

<script>
import WorksComponent from '@/components/WorksComponent.vue';

import test from '../../public/works/0.json';
import work from '../../public/works/1.json';
import work2 from '../../public/works/2.json';

import "../../public/css/works.css";

export default {
  data() {
    return {
      works: [work, work2, test]
    };
  },
  components: {
    WorksComponent
  },
};
</script>
