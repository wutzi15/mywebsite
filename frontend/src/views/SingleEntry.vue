<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-half">
      <h1>{{ entry.title }}</h1>
      <div class="readingTime" v-if="readingTime !== ''">
      {{readingTime}} to read.
      </div>
      <img v-if="entry.media[0]" :src="`https://api.benedikt-bergenthal.de${entry.media[0].url}`" :alt="entry.media[0].alternativeText">
      <div v-html="myhtml"></div>
    </div>
    <div class="column"></div>
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

      }catch(error){
        console.error(error);
      }
      // console.log(`Content: ${this.entry.content}`)
    }
  }

}
</script>

<style lang="scss" >
code {
  font-family: "Fira Code", monospace;
  color: #333;
  // background-color: #00354B;
}

// pre {
//    background-color: #00354B;
// }

body {
  padding: 20px;
}
html {
  padding-top: 50px;
  padding-bottom: 20px;
}
h1 {
  font-size: 3rem;
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
}

a{
  color: #aaa;
  font-weight: 600;
  &:hover{
    color: #ccc;
  }
}
ul {
  list-style-type: disc;
  list-style-position: inside;
}

.readingTime {
  text-align: right;
}

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: #ffffff;
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
  color: v#c59bc1;
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
