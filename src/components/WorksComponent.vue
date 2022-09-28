<script>
export default {
  name: "WorkModule",
  props: ["works"],
};
</script>

<template>
  <div v-for="work in works" :key="work.id" class="card work">
    <div class="box">
      <router-link :to="'/works/' + work.id">
        <img :src="work.image_path" />
        <div class="card_content">
          <div class="desc">{{ work.short_description }}</div>
        </div>
      </router-link>
      <div class="title">{{ work.title }}</div>
    </div>
  </div>
</template>
