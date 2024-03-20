<template>
  <main class="container">
    <div class="m-5 home">
      <div class="display-1">某猫創作倉庫</div>
      <div class="display-6 mb-2">
        思いついたものを徒然なるまま作っています。<br />
        <s>半年に一度くらいのペースで動画も出しています。</s><br />
        連絡はTwitterのDMまで。
      </div>
    </div>

    <div class="m-3 home">
      <!-- アイコン置きたい 上でも下でも -->
      <img src="/img/icon.png" class="icon" />
      <div class="display-4">i-icc/某猫</div>
    </div>

    <div class="links mb-5">
      <div v-for="link in links" :key="link.l">
        <a class="nav-link" :href="link.l" style="color: black" target="_blank"
          ><img :src="link.i" class="link"
        /></a>
      </div>
    </div>
    <!-- 技術スタックとかここにいつか書くかも -->
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
          i: "/img/youtube_logo.png",
        },
        {
          l: "https://www.nicovideo.jp/user/96299447",
          t: "niconico",
          i: "/img/niconico_logo.png",
        },
        { l: "https://github.com/i-icc", t: "git", i: "/img/git_logo.png" },
        {
          l: "https://twitter.com/bo_neko00000",
          t: "twitter",
          i: "/img/twitter_logo.png",
        },
      ],
    };
  },
};
</script>
