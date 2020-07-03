const contentGenerator = require("./utils/contentGenerator.js");

/* 內容文件 */
const monitorCode = contentGenerator("../contents/monitor.html");
const mainPageContent = contentGenerator("../contents/mainPage.html");
const storyContent = contentGenerator("../contents/story.html");
const pollContent = contentGenerator("../contents/poll.html");

/* 正式路徑 */
// const pathRoot = process.env.NODE_ENV === 'production' ? 'https://udn.com/newmedia/2020/12-years-education/' : 'http://localhost:8080/';
/* 測試路徑 */
const pathRoot =
  process.env.NODE_ENV === "production"
    ? "https://nmdap.udn.com.tw/test/Second_Wave2/"
    : "http://localhost:8080/";

const story_path = "story/";
const poll_path = "poll/";

module.exports = {
  publicPath: pathRoot,
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "台灣教改 為什麼總失敗 | 專題 | 聯合報",
      description:
        "台灣教育改革26年，社會普遍認為愈改愈亂、學生愈改愈茫和忙，《聯合報》帶讀者進入教改時間洪流，反思過去、展望未來。如今108課綱上路，能否撕下「教改＝災難」的標籤？",
      keywords: "教改,九年一貫,108課綱,12年國教,國中會考,學測,指考",
      author: "洪欣慈、許瑋琳、張庭瑋",
      datePublished: "2020-07-13T07:00:00+08:00",
      dateModified: "2020-07-13T07:00:00+08:00",
      MONITOR: monitorCode,
      CONTENT: mainPageContent,
      pageUrl: pathRoot,
      publicPath: pathRoot,
      mainPage: pathRoot,
      theme: "#ffffff",
    },
    story: {
      entry: "src/subpages/story/main.js",
      template: "public/index.html",
      filename: "story/index.html",
      title: "升學主義悲歌：19歲少女的告白 | 專題 | 聯合報",
      description:
        "教育改革總強調多元與鬆綁，但當機會更多，為什麼台灣教育，卻讓學生更迷惘、甚至後悔自己的選擇？一個真實故事，背後是難以翻轉的文憑迷思。新一波教改，能給孩子嘗試不同道路的勇氣嗎？",
      keywords: "教改,升學,考試,108課綱,聯合報",
      author: "洪欣慈、許瑋琳、楊若榆、林澔一",
      datePublished: "2020-07-13T07:00:00+08:00",
      dateModified: "2020-07-13T07:00:00+08:00",
      MONITOR: monitorCode,
      CONTENT: storyContent,
      pageUrl: pathRoot + story_path,
      publicPath: pathRoot,
      mainPage: pathRoot,
      theme: "#000000",
    },
    poll: {
      entry: "src/subpages/poll/main.js",
      template: "public/index.html",
      filename: "poll/index.html",
      title: "【108課綱大調查】 升學主義 教師心中的教改殺手 | 專題 | 聯合報",
      description:
        "108課綱上路1年，《聯合報》此次針對全台929所國高中、1243位民眾進行民調，調查結果看到民眾和學校對新課綱理念的認同，但也看到他們濃厚的焦慮與不安。",
      keywords: "108課綱.12年國教,教改,升學,民調,聯合報",
      author: "洪欣慈、許瑋琳、張庭瑋",
      datePublished: "2020-07-13T07:00:00+08:00",
      dateModified: "2020-07-13T07:00:00+08:00",
      MONITOR: monitorCode,
      CONTENT: pollContent,
      pageUrl: pathRoot + poll_path,
      publicPath: pathRoot,
      mainPage: pathRoot,
      theme: "#ffffff",
    },
  },
};
