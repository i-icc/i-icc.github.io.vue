<template>
  <main class="container">
  <div class="works">
    <WorkComponent :id="work.id" :title="work.title" :image_path="work.image_path" :short_description="work.short_description" />
    <WorkComponent :id="work2.id" :title="work2.title" :image_path="work2.image_path" :short_description="work2.short_description" />
    <WorkComponent :id="test.id" :title="test.title" :image_path="test.image_path" :short_description="test.short_description" />
    <WorkComponent :id="test.id" :title="test.title" :image_path="test.image_path" :short_description="test.short_description" />
    <WorkComponent :id="work.id" :title="work.title" :image_path="work.image_path" :short_description="work.short_description" />
    <WorkComponent :id="work2.id" :title="work2.title" :image_path="work2.image_path" :short_description="work2.short_description" />
    <WorkComponent :id="test.id" :title="test.title" :image_path="test.image_path" :short_description="test.short_description" />
    <WorkComponent :id="test.id" :title="test.title" :image_path="test.image_path" :short_description="test.short_description" />
    <WorkComponent :id="work.id" :title="work.title" :image_path="work.image_path" :short_description="work.short_description" />
    <WorkComponent :id="work2.id" :title="work2.title" :image_path="work2.image_path" :short_description="work2.short_description" />
    <WorkComponent :id="test.id" :title="test.title" :image_path="test.image_path" :short_description="test.short_description" />
    <WorkComponent :id="test.id" :title="test.title" :image_path="test.image_path" :short_description="test.short_description" />
  </div>
  </main>
</template>

<script>
import WorkComponent from '@/components/WorkComponent.vue';
import test from '../../public/works/0.json';
import work from '../../public/works/1.json';
import work2 from '../../public/works/2.json';

import "../../public/css/works.css";

export default {
  name: 'App',
  data() {
    return {
      test: test,
      work: work,
      work2: work2
    };
  },
  components: {
    WorkComponent
  },
};
</script>
