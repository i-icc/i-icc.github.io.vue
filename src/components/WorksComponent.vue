<script>
export default {
  name: "WorksModule",
  props: ["works"],
};
</script>

<template>
  <div v-for="work in works" :key="work.id" class="card work">
    <router-link style="text-decoration: none; color: inherit" :to="'/work/' + work.id">
      <div class="box">
        <img :src="work.image_path" />
        <div class="card_content">
          <div class="desc">{{ work.short_description }}</div>
        </div>
        <div class="title">{{ work.title }}</div>
      </div>
    </router-link>
  </div>
</template>
