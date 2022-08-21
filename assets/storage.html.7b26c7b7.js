import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as n,e}from"./app.078ebd30.js";const o={},i=e(`<h1 id="web\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#web\u5B58\u50A8" aria-hidden="true">#</a> Web\u5B58\u50A8</h1><h2 id="_1-\u672C\u5730\u5B58\u50A8\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#_1-\u672C\u5730\u5B58\u50A8\u7279\u6027" aria-hidden="true">#</a> 1.\u672C\u5730\u5B58\u50A8\u7279\u6027</h2><ol><li>\u53EA\u80FD\u5B58\u50A8\u5B57\u7B26\u4E32\uFF0C\u53EF\u4EE5\u5C06\u5BF9\u8C61JSON.stringify() \u7F16\u7801\u540E\u5B58\u50A8</li><li>\u5BB9\u91CF\u8F83\u5927\uFF0C\u7EA65M\u3002</li><li>\u6570\u636E\u5B58\u50A8\u5728\u7528\u6237\u6D4F\u89C8\u5668\u4E2D</li><li>\u4E0D\u4F1A\u968Fhttp\u8BF7\u6C42\u88AB\u53D1\u9001\u5230\u670D\u52A1\u7AEF</li></ol><h2 id="_2-window-sessionstorage" tabindex="-1"><a class="header-anchor" href="#_2-window-sessionstorage" aria-hidden="true">#</a> 2.window.sessionStorage</h2><ol><li>\u5728\u540C\u4E00\u4E2A\u7A97\u53E3(\u9875\u9762)\u4E0B\u6570\u636E\u53EF\u4EE5\u5171\u4EAB</li><li>\u4EE5\u952E\u503C\u5BF9\u7684\u5F62\u5F0F\u5B58\u50A8</li><li>\u751F\u547D\u5468\u671F\u4E3A\u5173\u95ED\u6D4F\u89C8\u5668\u7A97\u53E3</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
 sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
 sessionStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
 sessionStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-window-localstorge" tabindex="-1"><a class="header-anchor" href="#_3-window-localstorge" aria-hidden="true">#</a> 3.window.localStorge</h2><ol><li>\u53EF\u4EE5\u591A\u7A97\u53E3\uFF08\u9875\u9762\uFF09\u5171\u4EAB\uFF08\u540C\u4E00\u6D4F\u89C8\u5668\u53EF\u4EE5\u5171\u4EAB\uFF09</li><li>\u4EE5\u952E\u503C\u5BF9\u7684\u5F62\u5F0F\u5B58\u50A8</li><li>\u751F\u547D\u5468\u671F\u6C38\u4E45\u751F\u6548\uFF0C\u9664\u975E\u624B\u52A8\u5220\u9664\uFF0C\u5426\u5219\u5173\u95ED\u9875\u9762\u4E5F\u4F1A\u5B58\u5728</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-cookie" tabindex="-1"><a class="header-anchor" href="#_4-cookie" aria-hidden="true">#</a> 4.cookie</h2><ol><li>\u672C\u8EAB\u7528\u4E8E\u6D4F\u89C8\u5668\u548Csever\u901A\u8BAF</li><li>\u88AB&quot;\u501F\u7528&quot;\u5230\u672C\u5730\u5B58\u50A8\u6765\u7684</li><li>\u53EF\u7528document.cookie=&#39;...&#39;\u6765\u4FEE\u6539</li><li>\u5B58\u50A8\u5927\u5C0F\u9650\u5236\u4E3A4KB</li><li>http\u8BF7\u6C42\u65F6\u9700\u8981\u53D1\u9001\u5230\u670D\u52A1\u7AEF\uFF0C\u589E\u52A0\u8BF7\u6C42\u6570\u91CF</li></ol><h2 id="_5-cookie\u3001localstorage\u3001sessionstorage\u4E09\u8005\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_5-cookie\u3001localstorage\u3001sessionstorage\u4E09\u8005\u533A\u522B" aria-hidden="true">#</a> 5.cookie\u3001localStorage\u3001sessionStorage\u4E09\u8005\u533A\u522B</h2><ol><li>\u751F\u547D\u5468\u671F</li></ol><ul><li>cookie:\u53EF\u8BBE\u7F6E\u5931\u6548\u65F6\u95F4\uFF0C\u6CA1\u6709\u8BBE\u7F6E\u7684\u8BDD\uFF0C\u9ED8\u8BA4\u662F\u5173\u95ED\u6D4F\u89C8\u5668\u540E\u5931\u6548</li><li>localStorage\uFF1A\u9664\u975E\u88AB\u624B\u52A8\u6E05\u9664\uFF0C\u5426\u5219\u5C06\u4F1A\u6C38\u4E45\u4FDD\u5B58</li><li>sessionStorage\uFF1A\u4EC5\u5728\u5F53\u524D\u7F51\u9875\u4F1A\u8BDD\u4E0B\u6709\u6548\uFF0C\u5173\u95ED\u9875\u9762\u6216\u6D4F\u89C8\u5668\u540E\u5C31\u4F1A\u88AB\u6E05\u9664</li></ul><ol start="2"><li>\u5B58\u653E\u6570\u636E\u5927\u5C0F</li></ol><ul><li>cookie\uFF1A4k\u5DE6\u53F3</li><li>localStorage\u548CsessionStorage: \u53EF\u4FDD\u5B585MB\u4FE1\u606F</li></ul><ol start="3"><li>http\u8BF7\u6C42</li></ol><ul><li>cookie:\u6BCF\u6B21\u90FD\u4F1A\u643A\u5E26\u5728HTTP\u5934\u4E2D\uFF0C\u5982\u679C\u4F7F\u7528cookie\u4FDD\u5B58\u8FC7\u591A\u6570\u636E\u4F1A\u5E26\u6765\u6027\u80FD\u95EE\u9898</li><li>localStorage\u548CsessionStorage\uFF1A\u4EC5\u5728\u5BA2\u6237\u7AEF\uFF08\u6D4F\u89C8\u5668\uFF09\u4E2D\u4FDD\u5B58\uFF0C\u4E0D\u53C2\u4E0E\u548C\u670D\u52A1\u5668\u901A\u4FE1</li></ul><ol start="4"><li>\u6613\u7528\u6027</li></ol><ul><li>cookie\uFF1A\u9700\u8981\u7A0B\u5E8F\u5458\u81EA\u5DF1\u5C01\u88C5\uFF0C\u6E90\u751F\u7684Cookie\u63A5\u53E3\u4E0D\u53CB\u597D</li><li>localStorage\u548CsessionStorage\uFF1A\u6E90\u751F\u63A5\u53E3\u53EF\u4EE5\u63A5\u53D7\uFF0C\u4E5F\u53EF\u4EE5\u518D\u6B21\u5C01\u88C5\u6765\u5BF9Object\u548CArray\u6709\u66F4\u597D\u7684\u652F\u6301</li></ul><ol start="5"><li>\u5E94\u7528\u573A\u666F</li></ol><ul><li>\u4ECE\u5B89\u5168\u6027\u6765\u8BF4\uFF0C\u56E0\u4E3A\u6BCF\u6B21http\u8BF7\u6C42\u90FD\u4F1A\u643A\u5E26cookie\u4FE1\u606F\uFF0C\u8FD9\u6837\u65E0\u5F62\u4E2D\u6D6A\u8D39\u4E86\u5E26\u5BBD\uFF0C\u6240\u4EE5cookie\u5E94\u8BE5\u5C3D\u53EF\u80FD\u5C11\u7684\u4F7F\u7528</li><li>\u53E6\u5916cookie\u8FD8\u9700\u8981\u6307\u5B9A\u4F5C\u7528\u57DF\uFF0C\u4E0D\u53EF\u4EE5\u8DE8\u57DF\u8C03\u7528\uFF0C\u9650\u5236\u6BD4\u8F83\u591A</li><li>\u4F46\u662F\u7528\u6765\u8BC6\u522B\u7528\u6237\u767B\u5F55\u6765\u8BF4\uFF0Ccookie\u8FD8\u662F\u6BD4storage\u66F4\u597D\u7528\u7684\u3002\u5176\u4ED6\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u4F7F\u7528storage\uFF0C\u5C31\u7528storage.</li><li>storage\u5728\u5B58\u50A8\u6570\u636E\u7684\u5927\u5C0F\u4E0A\u9762\u79D2\u6740\u4E86cookie\uFF0C\u73B0\u5728\u57FA\u672C\u4E0A\u5F88\u5C11\u4F7F\u7528cookie\u4E86</li><li>localStorage\u548CsessionStorage\u552F\u4E00\u7684\u5DEE\u522B \uFF1A\u4E00\u4E2A\u662F\u6C38\u4E45\u4FDD\u5B58\u5728\u6D4F\u89C8\u5668\u91CC\u9762.\u4E00\u4E2A\u662F\u5173\u95ED\u7F51\u9875\u5C31\u6E05\u9664\u4E86\u4FE1\u606F\uFF0C</li><li>localStorage\u53EF\u4EE5\u7528\u6765\u5938\u9875\u9762\u4F20\u9012\u53C2\u6570\uFF0CsessionStorage\u7528\u6765\u4FDD\u5B58\u4E00\u4E9B\u4E34\u65F6\u7684\u6570\u636E\uFF0C\u9632\u6B62\u7528\u6237\u5237\u65B0\u9875\u9762\u4E4B\u540E\u4E22\u5931\u4E86\u4E9B\u53C2\u6570\u3002</li></ul>`,22),l=[i];function t(c,r){return s(),n("div",null,l)}var d=a(o,[["render",t],["__file","storage.html.vue"]]);export{d as default};
