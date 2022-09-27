<template>
  <main class="container">
  <div class="works">
    <WorkComponent id="0" title="testテスト試" image_path="img/test.jpg" short_description="this is a test" />
  </div>
  </main>
</template>

<script>
import WorkComponent from '@/components/WorkComponent.vue'

import "../../public/css/works.css"

export default {
  name: 'App',
  components: {
    WorkComponent
  }
}
</script>
