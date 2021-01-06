<template>
  <div class="columns">
    <div class="gap"></div>
    <div class="column">
      <h1><img src="../assets/images/arrow-left-solid.png" alt="go back" class="back-arrow" @click="goBack">{{ entry.title }}</h1>
      <div class="readingTime" v-if="readingTime !== ''">
      {{readingTime}} to read.
      </div>
      <img v-if="hasMedia" :src="`https://api.benedikt-bergenthal.de${entry.media[0].url}`" :alt="entry.media[0].alternativeText" class="header-image">
      <div v-html="myhtml"></div>
    </div>
    <div class="gap"></div>
  </div>
</template>

<script>
import showdown from 'showdown';
import axios from "axios";
import hljs from "highlight.js";
import readTime from './readingTime';

export default {
  name: "SingleEntry",
  data: function() {
    return {
      myhtml : "",
      entry: {},
      readingTime: "",
      hasMedia: false
    }
  },
  mounted() {
    this.convertText();
  },
  methods: {
    convertText: async function() {
      const slug = this.$route.params.slug;

      try {
        const results = await axios.get(
          `https://api.benedikt-bergenthal.de/blog-entries?slug=${slug}`
        );

        this.entry = results.data[0];
        const converter = new showdown.Converter();
        const tmp = converter.makeHtml(this.entry.content);
        this.readingTime = readTime(tmp);
        const tmpIMG = tmp.replace('<img src="/uploads', '<img src="https://api.benedikt-bergenthal.de/uploads');
        const dom = document.createElement('div');
        dom.innerHTML = tmpIMG;
        const codes = dom.querySelectorAll('code');
        for(var i = 0; i < codes.length; ++i) {
          const code = codes[i];

          const highlighted = hljs.highlightAuto(code.innerHTML).value;
          code.innerHTML = highlighted;
        }

        this.myhtml = dom.innerHTML;
        if (this.entry.media[0]) {
          this.hasMedia = true;
        }
      }catch(error){
        // console.error(error);
      }
      // console.log(`Content: ${this.entry.content}`)
    },
    goBack: function() {
      this.$router.go(-1)
    }
  }

}
</script>

<style lang="scss">


.columns {
  display: grid;
 grid-template-columns: repeat(12, 1fr);
}

.column {
  grid-column: span 8;
}

.gap {
  grid-column: span 2;
}

*{
  color:#fff;
}

img {
  width: 100%;
}
code {
  font-family: "Fira Code", monospace;
  color: #333;
  overflow-x: scroll;
}

pre{
  background-color: #fff;
  margin-bottom: 20px;
  overflow-x: scroll;
}

.back-arrow {
  width: 0.8em;
  margin-right: 10px;
  cursor: pointer;
}

.header-image {
  width: 100%;
  height: auto;
}


h1 {
  font-size: 3rem;
  span {
    cursor: pointer;
    padding-right: 1rem;
    font-size: 2.5rem;
  }
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.5rem;
}
h4 {
  font-size: 1.25rem;
}
h5 {
  font-size: 1.15rem;
}
h6 {
  font-size: 1.1rem;
}
p {
  padding-bottom: 1.75rem;
  font-size: 1em;
  line-height: 1.6em;
}
a{
  color: #aaa;
  font-weight: 600;
  &:hover{
    color: #ccc;
  }
  text-decoration: none;
}
ul {
  list-style-type: disc;
  list-style-position: inside;
}
.readingTime {
  text-align: right;
}
@media (max-width: 991px) {
  .columns {
    display:flex;
    padding: 0px 10px 10px 10px;
    margin-top: 120px;
    width: 100%;
  }
  .column {
    width: 100%;
    // max-width: 80vw;
  }

  .gap {
    display: none;
    column-span: span 0;
  }

  .showcase {
    padding: 0;
  }

  .showcase header
  {
    padding: 40px;
  }
}


.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  //color: #ffffff;

  background: #1c1b1b;
}
.hljs-comment {
  color: #999999;
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-meta-keyword,
.hljs-doctag,
.hljs-section,
.hljs-selector-class,
.hljs-meta,
.hljs-selector-pseudo,
.hljs-attr {
  color: #88aece;
}
.hljs-attribute {
  color: #c59bc1;
}
.hljs-name,
.hljs-type,
.hljs-number,
.hljs-selector-id,
.hljs-quote,
.hljs-template-tag,
.hljs-built_in,
.hljs-title,
.hljs-literal {
  color: #f08d49;
}
.hljs-string,
.hljs-regexp,
.hljs-symbol,
.hljs-variable,
.hljs-template-variable,
.hljs-link,
.hljs-selector-attr,
.hljs-meta-string {
  color: #b5bd68;
}
.hljs-bullet,
.hljs-code {
  color: #cccccc;
}
.hljs-deletion {
  color: #de7176;
}
.hljs-addition {
  color: #76c490;
}
.hljs-emphasis {
  font-style: italic;
}
.hljs-strong {
  font-weight: bold;
}
@media screen and (-ms-high-contrast: active) {
  .hljs-addition,
  .hljs-attribute,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-bullet,
  .hljs-comment,
  .hljs-link,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-params,
  .hljs-string,
  .hljs-symbol,
  .hljs-type,
  .hljs-quote {
        color: highlight;
    }
    .hljs-keyword,
    .hljs-selector-tag {
        font-weight: bold;
    }
}
</style>
