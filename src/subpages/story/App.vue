<template lang="pug">
  div#app
    HeaderTypeA
      a(
        href="../problem/"
        target="_blank" rel="noopener"
        aria-label="outlink"
        name="outlink"
        @click="sendGA(formatGA('MenuLink_1'))"
      ) 揭露課綱五大亂象
      a(
        href="../poll/"
        target="_blank" rel="noopener"
        aria-label="outlink"
        name="outlink"
        @click="sendGA(formatGA('MenuLink_2'))"
      ) 課綱上路周年大調查
      a(
        href="../problem/"
        target="_blank" rel="noopener"
        aria-label="outlink"
        name="outlink"
        @click="sendGA(formatGA('MenuLink_3'))"
      ) 台灣教育關鍵數字
      a(
        href="../"
        target="_blank" rel="noopener"
        aria-label="outlink"
        name="outlink"
        @click="sendGA(formatGA('MenuLink_4'))"
      ) 台灣教改為何總失敗
      a(class="active") 升學主義悲歌
      a(
        href="../collect/"
        target="_blank" rel="noopener"
        aria-label="outlink"
        name="outlink"
        @click="sendGA(formatGA('MenuLink_6'))"
      ) 關於108課綱 我想說......
      a(
        href="https://udn.com/search/word/2/108課綱"
        target="_blank"
        rel="noopener"
        aria-label="outlink"
        name="outlink"
        @click="sendGA(formatGA('MenuLink_7'))"
      ) 更多課綱相關報導
    main
      TheCover
      ArticleContainer
        p.enlarge 爸爸說：幹嘛不隨便填一個科系，<br>先進到大學再說啊！
        p.enlarge 老師說：就先順順上大學，<br>以後不做相關的工作也沒關係啊！
        p.enlarge 鬧了一場家庭革命，<br>爸爸氣到2、3個月不跟我說話。
      WideImage(
        :srcMob="require('~/img/story/img1/mob.jpg')"
        :srcPad="require('~/img/story/img1/pc.jpg')"
        :srcPc="require('~/img/story/img1/pc.jpg')"
      )
      ArticleContainer
        div#tilt-text-1
          TiltText(text="但我不要只是為了" rotateDegree="15deg")
      TitleMarguee
      VoiceStory(
        :bgMob="require('~/img/story/story_bg1/mob.jpg')"
        :bgPad="require('~/img/story/story_bg1/pad.jpg')"
        :bgPc="require('~/img/story/story_bg1/pc.jpg')"
      ) 「難道讀了大學，<br>就一定是你未來想從事的事情嗎？」
      ArticleContainer
        p.enlarge 我一直以為我對數理有興趣，但填志願時發現，我一點都不想選理工科系，光想像未來工作的樣子、要念的書，我都不想要。
        p.enlarge 現在回想，<MarkText>只是那些科目成績比較好，就以為是興趣。</MarkText>
      ArticleContainer(bgColor="#000000")
        div.black-article-container
          p.white 時間回到國三，<br>當時的小雅猶豫要選高中、高職還是五專。
      ArticleContainer
        p.enlarge 我從小不擅長考試讀書，喜歡畫畫和攝影，高職和五專或許比較適合我發展專長，但我下不了決心。
        p.enlarge 國中老師口頭上說：「你就選你有興趣的」，但又開玩笑接了一句：<br v-if="deviceType !== 'pc'"><TiltText text="是只有這條路可以走了嗎？" rotateDegree="25deg"></TiltText>
      VoiceStory(
        :bgMob="require('~/img/story/story_bg2/mob.jpg')"
        :bgPad="require('~/img/story/story_bg2/pad.jpg')"
        :bgPc="require('~/img/story/story_bg2/pc.jpg')"
      ) 「大家心裡想的還是讀五專就是不會讀書，即使沒有說出來，你還是感覺得到。」
      ArticleContainer
        p.enlarge 我自己也不甘心，<MarkText>覺得是不是我不夠好，才只能選這條路？</MarkText>
        p.enlarge 身旁不少朋友都選五專或高職，但我的成績又比他們好一點，就會覺得，上高職和五專好像有點可惜。
        h2.enlarge 社會還是期待<br>學生上高中，
      BlackHole
      ArticleContainer
        p.enlarge 高中3年，我的成長主要來自社團。我參與學生會、扶輪社，也和同學組團參加設計比賽，學到策畫、主持、與廠商應對的能力，畢業後都派上用場。
        h2.enlarge 不上大學後<br>我去打工
        p.enlarge 「後來跟老闆比較熟的時候，我問他：為什麼會用我這樣的人？攤開履歷我都不一定會用我自己。他跟我說：你社團的部分很加分啊！」
      TiltText(text="學畫畫"  rotateDegree="15deg")
      TiltText(text="接攝影案子" rotateDegree="-15deg")
      FullWideImage(
        :srcMob="require('~/img/story/img2/mob.jpg')"
        :srcPad="require('~/img/story/img2/pc.jpg')"
        :srcPc="require('~/img/story/img2/pc.jpg')"
        :useDescription="true"
      ) 圖為小雅的水彩繪畫作品。圖／小雅提供
      ArticleContainer
        p.enlarge 小時候我曾經想當老師，我硬著頭皮去補習班應徵，但只有高中學歷，根本沒有人會用我，直到一家補習班願意給我工作，還讓我自己設計科學實驗教案。
        p.enlarge 「後來跟老闆比較熟的時候，我問他：為什麼會用我這樣的人？攤開履歷我都不一定會用我自己。他跟我說：你社團的部分很加分啊！」
        h2.enlarge 我很開心，<br>覺得自己被肯定了
        p.enlarge 比較愛玩、不喜歡讀書，很多人覺得這樣的孩子就是壞，<MarkText>但我們不是壞孩子，我們也不是什麼事都成不了。</MarkText>
        p.enlarge 到補習班上班後，雖然有挫折，但發現教課、設計教案是我想要的，想當老師就要有大學學歷，所以我正在準備指考，今年7月要重考大學。
      BlackLine(pos='top')
      FullWideImage(
        :srcMob="require('~/img/story/img3/mob.jpg')"
        :srcPad="require('~/img/story/img3/pad.jpg')"
        :srcPc="require('~/img/story/img3/pc.jpg')"
      )
      BlackLine(pos='bottom')

      WideImage(
        :srcMob="require('~/img/story/text1/mob.jpg')"
        :srcPad="require('~/img/story/text1/pc.jpg')"
        :srcPc="require('~/img/story/text1/pc.jpg')"
      )

      BlackLine(pos='top')
      FullWideImage(
        :srcMob="require('~/img/story/img4/mob.jpg')"
        :srcPad="require('~/img/story/img4/pad.jpg')"
        :srcPc="require('~/img/story/img4/pc.jpg')"
      )
      BlackLine(pos='bottom')

      ArticleContainer
        p 一路陪伴女兒的小雅媽媽說：
        p 一開始，希望她就近、隨便念一所大學都好，<MarkText>至少要有個大學文憑，現在大學文憑是基本的。</MarkText>
        p 大兒子求學路與小雅完全不同，他功課一向不錯，理所當然順順往上念，<MarkText>沒有特別去思考孩子未來想走什麼，</MarkText>讀到大三，他一度想休學，
        h2 因為不知道自己畢業後要幹嘛
        p 我發現，很多學生上了大學，還是不知道自己想做什麼，為了不想失業，就只好繼續唸，對未來也不見得有幫助。
        p 二女兒（小雅）的經歷，還有接觸到108課綱後，我想法不同了，小女兒現在高一，就覺得，讓她做自己喜歡的事情就好。

      WideImage(
        :srcMob="require('~/img/story/text2/mob.jpg')"
        :srcPad="require('~/img/story/text2/pc.jpg')"
        :srcPc="require('~/img/story/text2/pc.jpg')"
      )

      BlackLine(pos='top')
      FullWideVideo(
        :srcMob="require('~/media/story/video/mob.mp4')"
        :srcPad="require('~/media/story/video/pad.mp4')"
        :srcPc="require('~/media/story/video/pc.mp4')"
        :posterMob="require('~/media/story/video/mob.jpg')"
        :posterPad="require('~/media/story/video/pad.jpg')"
        :posterPc="require('~/media/story/video/pc.jpg')"
      )
      BlackLine(pos='bottom')
    Marketing
    OtherProjects
    PageFooter
      FooterEditor
        div
          p 製作人
          p 洪欣慈
        div
          p 網頁設計
          p 張心慈
        div
          p 網頁製作
          p 楊若榆
        div
          p 影像
          p 影像中心、<br>報系資料庫
        div
          p 監製
          p 蕭衡倩
        div
          p 製作單位
          p 聯合報新媒體中心、<br>視覺設計中心、<br>數據中心
        div
          p 
          p 2020.07
      FooterShare
      FooterFbComment
      FooterLogo
      PageBackTop
</template>

<script>
import { autoResize_3 } from '@/mixins/masterBuilder.js';

import ArticleContainer from '@/components/layout/ArticleContainer.vue'
import BlackHole from '@cs/BlackHole.vue';
import BlackLine from '@cs/BlackLine.vue';
import HeaderTypeA from '@/components/header/HeaderTypeA'
import FooterEditor from '@/components/footer/FooterEditor.vue';
import FooterFbComment from '@/components/footer/FooterFbComment.vue';
import FooterLogo from '@/components/footer/FooterLogo.vue';
import FooterShare from '@/components/footer/FooterShare.vue';
import FullWideImage from '@cs/FullWideImage.vue';
import FullWideVideo from '@cs/FullWideVideo.vue';
import Marketing from '@/components/self/Marketing.vue'
import MarkText from '@cs/MarkText.vue';
import OtherProjects from '@/components/self/OtherProjects'
import PageFooter from '@/components/footer/PageFooter.vue'
import PageBackTop from '@/components/layout/PageBackTop.vue'
import TheCover from '@cs/TheCover.vue';
import TiltText from '@cs/TiltText.vue'
import TitleMarguee from '@cs/TitleMarguee.vue';
import VoiceStory from '@cs/voice_story/VoiceStory.vue';
import WideImage from '@cs/WideImage.vue';

export default {
  name: 'App',
  mixins: [autoResize_3],
  components: {
    ArticleContainer,
    BlackHole,
    BlackLine,
    HeaderTypeA,
    FooterEditor,
    FooterFbComment,
    FooterLogo,
    FooterShare,
    FullWideImage,
    FullWideVideo,
    Marketing,
    MarkText,
    OtherProjects,
    PageFooter,
    PageBackTop,
    TheCover,
    TiltText,
    TitleMarguee,
    VoiceStory,
    WideImage,
  }
}
</script>

<style lang="scss">
@import '~/style/story.scss';

#tilt-text-1 {
  padding-left: 24%;
  @include pad {
    padding-left: 22%;
  }
  @include pc {
    padding-left: 20%;
  }
}
</style>
