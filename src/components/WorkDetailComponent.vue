<script>
export default {
  props: ["work"],
};
</script>

<template>
  <div class="border-bottom mt-2 mb-5">
    <h1 class="display-1">{{ work.title }}</h1>
    <div class="display-8 mb-2">
      {{ work.short_description }}
    </div>
    <div class="tags mb-2">
    <router-link :to="'/works?tag=' + t" v-for="t in work.tag"
        :key="t">
      <span
        class="badge rounded-pill bg-light text-dark tag"
        >{{ t }}</span
      >
      </router-link>
    </div>
  </div>

  <div class="row">
    <div class="col-md-7 mb-3">
      <div v-for="d in work.description" :key="d">
        <p>{{ d }}</p>
      </div>
    </div>
    <div class="col-md-1"></div>
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
        <div class="row links">
          <div class="col-md-2"></div>
          <div class="col-md-2 mb-2">
            <form :action="work.git" target="_blank" v-if="work.git">
              <input type="image" src="/img/git_logo.png" alt="github" />
            </form>
          </div>
          <div class="col-md-8">
            <form :action="work.link" target="_blank" v-if="work.link">
              <button>サービスへ</button>
            </form>
          </div>
        </div>
      </div>
      <div class="border-bottom display-6 mb-2">使用技術</div>
      <div class="tags">
        <span
          class="badge rounded-pill bg-light text-dark tag"
          v-for="t in work.tech"
          :key="t"
          >{{ t }}</span
        >
      </div>
      <div class="mt-4 center-block">
        <div id="pre-page">
          <router-link to="/works"><i class="fas fa-angle-left"></i></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
