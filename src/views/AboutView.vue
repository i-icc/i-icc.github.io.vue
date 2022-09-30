<template>
  <main class="container">
    <div class="m-5 home">
      <div class="display-1">空想倉庫(仮)</div>
      <div class="display-4 mb-2">
        説明たくさんするぞいぞい。<br />説明たくさんするぞいぞい<br />説明たくさんするぞいぞい<br />説明たくさんするぞいぞい
      </div>
    </div>

    <div class="m-3 home">
      <!-- アイコン置きたい 上でも下でも -->
      <img src="/img/icon.png" class="icon" />
      <div class="display-4">i-icc/某猫</div>
    </div>

    <div class="row mb-5">
      <div class="col-md-3 display-6 link" v-for="link in links" :key="link.l">
        <a class="nav-link" :href="link.l" style="color: black" target="_blank">{{
          link.t
        }}</a>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 display-5">技術スタックとか所属や生い立ち等</div>
    </div>
  </main>
</template>

<script>
// 連絡はgitかツイッターのDMまでよろしくお願いします。的な？
import "../../public/css/about.css";

export default {
  data() {
    return {
      links: [
        {
          l: "https://www.youtube.com/channel/UCJPHtSJNPvXaMm-DO2Hu8_w",
          t: "youtube",
          i: "",
        },
        { l: "https://www.nicovideo.jp/user/96299447", t: "niconico", i: "" },
        { l: "https://github.com/i-icc", t: "git", i: "/img/git_logo.png" },
        { l: "https://twitter.com/shark_engineer", t: "twitter", i: "" },
      ],
    };
  },
};
</script>
