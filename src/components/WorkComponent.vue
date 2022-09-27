<template>
  <div class="card work">
    <div class="box">
      <router-link :to="'/works/' + id">
        <img :src="image_path" />
        <div class="card_content">
          <p class="title">{{ title }}</p>
          <p class="desc">{{ short_description }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkModule",
  props: ["title", "short_description", "image_path", "id"],
};
</script>
