<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-half">
      <h1>{{ entry.title }}</h1>
      <div v-html="myhtml"></div>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
import showdown from 'showdown';
import axios from "axios";
import hljs from "highlight.js";


export default {
  name: "SingleEntry",
  data: function() {
    return {
      myhtml : "",
      entry: {}
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

        const tmpIMG = tmp.replace('<img src="/uploads', '<img src="https://api.benedikt-bergenthal.de/uploads');
        const dom = document.createElement('div');
        dom.innerHTML = tmpIMG;
        const codes = dom.querySelectorAll('code');
        for(var i = 0; i < codes.length; ++i) {
          const code = codes[i];
          console.log(`InnerHTML: ${code.innerHTML}`)
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
/*
.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  // background: #193549;
  // color: #00354B;
}

.hljs-strong,
.hljs-emphasis {
  color: #ffc600;
}

.hljs-bullet,
.hljs-quote,
.hljs-link,
.hljs-number,
.hljs-regexp,
.hljs-literal {
  color: #6896ba;
}

.hljs-code,
.hljs-selector-class {
  color: #ffffff;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-section,
.hljs-attribute,
.hljs-name,
.hljs-variable {
  color: #ffc600 !important;
}

.hljs-params {
  color: #ac25ac;
}

.hljs-function 
.hljs-title{
  color: #ff86ff !important;
}

.hljs-string {
  color: #3ad900;
}

.hljs-subst,
.hljs-type,
.hljs-built_in,
.hljs-builtin-name,
.hljs-symbol,
.hljs-selector-id,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-template-tag,
.hljs-template-variable,
.hljs-addition {
  color: #e0c46c;
}

.hljs-comment,
.hljs-deletion,
.hljs-meta {
  color: #7f7f7f;
}*/
/*!
 * StackOverflow.com dark style
 *
 * @stackoverflow/stacks v0.56.0
 * https://github.com/StackExchange/Stacks
 */

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
