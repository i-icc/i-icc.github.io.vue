<template>
  <div class="card work">
    <div class="box">
      <router-link :to="'/works/' + id">
        <img :src="image_path" />
        <div class="card_content">
          <div class="desc">{{ short_description }}</div>
        </div>
      </router-link>
      <div class="title">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkModule",
  props: ["title", "short_description", "image_path", "id"],
};
</script>
