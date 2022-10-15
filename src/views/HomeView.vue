<template>
  <main class="container">
    <div class="m-5 home">
      <div class="display-1">某猫のワクワク創作倉庫</div>
      <div class="display-8 mb-2">思いついたものを暇な時に作っています</div>
    </div>

    <div class="row">
      <div class="col-md-4 display-6 link" v-for="link in links" :key="link.l">
        <router-link class="nav-link" :to="link.l" style="color: black;">{{
          link.t
        }}</router-link>
      </div>
    </div>
  </main>
</template>

<script>
import "../../public/css/home.css";

export default {
  data() {
    return {
      links: [
        { l: "/works", t: "Works" },
        { l: "/about", t: "About" },
        { l: "/info", t: "Info" },
      ],
    };
  },
};
</script>
