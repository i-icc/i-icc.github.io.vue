<script>
export default {
  props: ["work"],
};
</script>

<template>
  <div class="border-bottom mt-5 mb-5">
    <h1 class="display-2">{{ work.title }}</h1>
    <div class="display-10 mb-4">
      {{ work.short_description }}
    </div>
    <div>{{ work.tag }}</div>
  </div>

  <div class="row">
    <div class="col-md-8 mb-5">
      {{ work.description }}
    </div>
    <div class="col-md-4">
      <div class="movie-wrap mb-3" v-if="work.media">
        <iframe
          width="560"
          height="315"
          :src="work.media"
          :title="work.title"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="mb-4">
        <a :href="work.link" target="_blank">サービス</a>
      </div>
      <div>
        <div class="border-bottom display-10 mb-2">使用技術</div>
        <div>{{ work.tech }}</div>
      </div>
    </div>
  </div>
</template>
