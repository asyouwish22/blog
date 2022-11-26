import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as n,e as s}from"./app.3ff8d30b.js";const t={},o=s(`<h1 id="vue\u76F8\u5173\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#vue\u76F8\u5173\u95EE\u9898" aria-hidden="true">#</a> vue\u76F8\u5173\u95EE\u9898</h1><h2 id="computed\u548Cwatch\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#computed\u548Cwatch\u7684\u533A\u522B" aria-hidden="true">#</a> computed\u548Cwatch\u7684\u533A\u522B</h2><blockquote><p>\u5B83\u4EEC\u90FD\u7528\u4E8E\u76D1\u542C\u6570\u636E\u53D8\u5316\u3002</p></blockquote><ol><li><p>computed<br> \u5982\u679C\u51FD\u6570\u6240\u4EE5\u4F9D\u8D56\u5C5E\u6027\u6CA1\u6709\u53D1\u9001\u53D8\u5316\uFF0C\u5219\u4ECE\u7F13\u5B58\u4E2D\u8BFB\u53D6\uFF0C\u5FC5\u987B\u8981\u6709return\u8FD4\u56DE\u503C\uFF0C\u4F7F\u7528\u65B9\u6CD5\u548Cdata\u4E2D\u7684\u6570\u636E\u4E00\u6837</p></li><li><p>watch<br> watch\u51FD\u6570\u6709\u4E24\u4E2A\u53C2\u6570\uFF0C\u65B0\u503C\u548C\u65E7\u503C\uFF0Cwatch\u4E2D\u7684\u51FD\u6570\u4E0D\u9700\u8981\u8C03\u7528\uFF0C\u53EA\u4F1A\u76D1\u542C\u6570\u636E\u7684\u503C\u662F\u5426\u53D1\u9001\u6539\u53D8\uFF0C\u800C\u4E0D\u4F1A\u76D1\u542C\u6570\u636E\u7684\u5730\u5740\u662F\u5426\u53D1\u751F\u6539\u53D8\uFF0C\u9700\u8981\u6DF1\u5EA6\u76D1\u542C\u9700\u8981\u914D\u5408deep:true\u4F7F\u7528</p></li><li><p>\u533A\u522B\uFF1A</p></li></ol><ul><li>\u529F\u80FD\uFF1Acomputed\u662F\u8BA1\u7B97\u5C5E\u6027\uFF0Cwatch\u662F\u76D1\u542C\u6570\u636E\u53D8\u5316</li><li>\u7F13\u5B58\uFF1Acomputed\u652F\u6301\u7F13\u5B58\uFF0C\u53EA\u6709\u4F9D\u8D56\u6570\u636E\u53D1\u751F\u6539\u53D8,\u624D\u4F1A\u91CD\u65B0\u8FDB\u884C\u8BA1\u7B97;watch\u4E0D\u652F\u6301\u7F13\u5B58\uFF0C\u5F53\u5BF9\u5E94\u5C5E\u6027\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u54CD\u5E94\u6267\u884C</li><li>\u5F02\u6B65\uFF1Acomputed\u4E0D\u652F\u6301\u5F02\u6B65\uFF0C\u6709\u5F02\u6B65\u64CD\u4F5C\u65F6\u4E0D\u53D1\u76D1\u542C\u6570\u636E\u53D8\u5316\uFF0Cwatch\u652F\u6301\u5F02\u6B65\u64CD\u4F5C</li><li>\u8FD4\u56DE\u503C\uFF1Acomputed\u4E2D\u7684\u51FD\u6570\u5FC5\u987B\u8981\u7528return\u8FD4\u56DE\uFF0Cwatch\u4E2D\u7684\u51FD\u6570\u4E0D\u662F\u5FC5\u987B\u8981\u7528return.</li><li>computed\u64C5\u957F\u5904\u7406\u7684\u573A\u666F\uFF1A\u4E00\u4E2A\u6570\u636E\u53D7\u591A\u4E2A\u6570\u636E\u5F71\u54CD\uFF1Bwatch\u64C5\u957F\u5904\u7406\u7684\u573A\u666F\uFF1A\u4E00\u4E2A\u6570\u636E\u5F71\u54CD\u591A\u4E2A\u6570\u636E\u3002</li><li>computed\u7B2C\u4E00\u6B21\u52A0\u8F7D\u65F6\u5C31\u76D1\u542C\uFF0Cwatch\u9ED8\u8BA4\u7B2C\u4E00\u6B21\u52A0\u8F7D\u4E0D\u76D1\u542C\uFF0C\u5982\u679C\u9700\u8981\u7B2C\u4E00\u6B21\u52A0\u8F7D\u505A\u76D1\u542C\uFF0C\u6DFB\u52A0immediate\u5C5E\u6027\uFF0C\u503C\u4E3Atrue</li></ul><h2 id="vue\u53CC\u5411\u7ED1\u5B9A\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#vue\u53CC\u5411\u7ED1\u5B9A\u6570\u636E" aria-hidden="true">#</a> vue\u53CC\u5411\u7ED1\u5B9A\u6570\u636E</h2><blockquote><p>vue.js\u91C7\u7528\u6570\u636E\u52AB\u6301\u7ED3\u5408\u53D1\u5E03\u8005-\u8BA2\u9605\u8005\u6A21\u5F0F\u7684\u65B9\u5F0F\uFF0C\u901A\u8FC7Object.defineProperty()\u52AB\u6301\u5404\u4E2A\u5C5E\u6027\u7684setter,getter,\u5728\u6570\u636E\u53D8\u52A8\u65F6\u53D1\u5E03\u6D88\u606F\u7ED9\u8BA2\u9605\u8005\u3002\u89E6\u53D1\u76F8\u5E94\u7684\u76D1\u542C\u56DE\u8C03</p></blockquote><h2 id="vue\u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u52A0\u8F7D\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#vue\u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u52A0\u8F7D\u987A\u5E8F" aria-hidden="true">#</a> Vue\u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u52A0\u8F7D\u987A\u5E8F</h2><ul><li>\u52A0\u8F7D\u6E32\u67D3\u8FC7\u7A0B : \u7236\u7EC4\u4EF6\u5148\u521B\u5EFA\uFF0C\u5B50\u7EC4\u4EF6\u5148\u6302\u8F7D</li></ul><p>\u7236beforeCreste -&gt; \u7236created -&gt; \u7236beforeMount -&gt; \u5B50beforeCreate -&gt; \u5B50created -&gt; \u5B50beforeMount -&gt; \u5B50mounted -&gt; \u7236mounted</p><ul><li>\u5B50\u7EC4\u4EF6\u66F4\u65B0</li></ul><p>\u7236beforeUpdate -&gt; \u5B50beforeUpdate -&gt; \u5B50updated -&gt; \u7236updated</p><ul><li>\u7236\u7EC4\u4EF6\u66F4\u65B0\uFF1A\u4E0D\u89E6\u53D1\u5B50\u7EC4\u4EF6</li></ul><p>\u7236beforeUpdate -&gt; \u7236updated</p><ul><li>\u9500\u6BC1\u8FC7\u7A0B</li></ul><p>\u7236beforeDestory -&gt; \u5B50beforeDestory -&gt; \u5B50destoryed -&gt; \u7236destoryed</p><h2 id="\u7236\u7EC4\u4EF6\u76D1\u542C\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EC4\u4EF6\u76D1\u542C\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u7236\u7EC4\u4EF6\u76D1\u542C\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F</h2><ul><li>\u53EF\u4EE5\u5728\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u7528<code>$emit</code>\u4E8B\u4EF6\uFF0C\u7ED9\u7236\u7EC4\u4EF6\u4F20\u9012\u4FE1\u606F</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Parent.vue</span>
<span class="token operator">&lt;</span>Child  @mounted <span class="token operator">=</span> <span class="token string">&#39;doSomething&#39;</span><span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// Child.vue</span>
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;mounted&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5728\u7236\u7EC4\u4EF6\u5F15\u7528\u5B50\u7EC4\u4EF6\u65F6\u901A\u8FC7<code>@hook</code>\u6765\u76D1\u542C</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Parent.vue</span>
<span class="token operator">&lt;</span>Child @hook<span class="token operator">:</span>mounted <span class="token operator">=</span> <span class="token string">&#39;doSomething&#39;</span><span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u7236\u7EC4\u4EF6\u76D1\u542C\u5230\u5B50\u7EC4\u4EF6mounted\u51FD\u6570&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Child.vue</span>
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5B50\u7EC4\u4EF6\u89E6\u53D1mounted\u51FD\u6570&#39;</span><span class="token punctuation">)</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="keep-alive" tabindex="-1"><a class="header-anchor" href="#keep-alive" aria-hidden="true">#</a> keep-alive</h2><p>keep-alive\u662FVue\u5185\u7F6E\u7684\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u7528\u6765\u4FDD\u6301\u88AB\u5305\u542B\u7684\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u907F\u514D\u91CD\u65B0\u6E32\u67D3</p><ul><li><p>\u6709\u4E24\u4E2A\u5C5E\u6027\uFF0C<code>include</code>\u548C<code>exclude</code>, \u4E0Einclude\u91CC\u7684\u540D\u79F0\u5339\u914D\u7684\u7EC4\u4EF6\u4F1A\u88AB\u7F13\u5B58\uFF0C\u4E0Eexclude\u91CC\u7684\u540D\u79F0\u5339\u914D\u7684\u7EC4\u4EF6\u4E0D\u4F1A\u88AB\u7F13\u5B58\uFF0Cexclude\u4F18\u5148\u7EA7\u6BD4include\u9AD8</p></li><li><p>\u5BF9\u5E94\u4E24\u4E2A\u94A9\u5B50\u51FD\u6570\uFF0C<code>activated</code>\u548C<code>deactivated</code>,\u7EC4\u4EF6\u88AB\u6FC0\u6D3B\u65F6\u89E6\u53D1activated\uFF0C\u7EC4\u4EF6\u88AB\u79FB\u9664\u65F6\u89E6\u53D1deactivated</p></li></ul><h2 id="\u7EC4\u4EF6\u4E2D\u7684data" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u4E2D\u7684data" aria-hidden="true">#</a> \u7EC4\u4EF6\u4E2D\u7684data</h2><p>\u7EC4\u4EF6\u662F\u7528\u6765\u590D\u7528\u7684\uFF0C\u4E14 JS\u91CC\u5BF9\u8C61\u662F\u5F15\u7528\u5173\u7CFB\uFF0C\u5982\u679C\u7EC4\u4EF6\u4E2D data \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u90A3\u4E48\u8FD9\u6837\u4F5C\u7528\u57DF\u6CA1\u6709\u9694\u79BB\uFF0C\u5B50\u7EC4\u4EF6\u4E2D\u7684 data \u5C5E\u6027\u503C\u4F1A\u76F8\u4E92\u5F71\u54CD\uFF0C\u5982\u679C\u7EC4\u4EF6\u4E2Ddata \u9009\u9879\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u90A3\u4E48\u6BCF\u4E2A\u5B9E\u4F8B\u53EF\u4EE5\u7EF4\u62A4\u4E00\u4EFD\u88AB\u8FD4\u56DE\u5BF9\u8C61\u7684\u72EC\u7ACB\u7684\u62F7\u8D1D\uFF0C\u7EC4\u4EF6\u5B9E\u4F8B\u4E4B\u95F4\u7684 data \u5C5E\u6027\u503C\u4E0D\u4F1A\u4E92\u76F8\u5F71\u54CD\uFF1B\u800Cnew vue \u7684\u5B9E\u4F8B.\u662F\u4E0D\u4F1A\u88AB\u590D\u7528\u7684\uFF0C\u4E0D\u5B58\u5728\u5F15\u7528\u5BF9\u8C61\u7684\u95EE\u9898</p><h2 id="v-model" tabindex="-1"><a class="header-anchor" href="#v-model" aria-hidden="true">#</a> v-model</h2><p>v-model \u5728\u5185\u90E8\u4E3A\u4E0D\u540C\u7684\u8F93\u5165\u5143\u7D20\u4F7F\u7528\u4E0D\u540C\u7684\u5C5E\u6027\u5E76\u629B\u51FA\u4E0D\u540C\u7684\u4E8B\u4EF6\uFF1A</p><ul><li><p>text \u548C textarea \u5143\u7D20\u4F7F\u7528 value \u53B2\u6027\u548Cinput \u4E8B\u4EF6</p></li><li><p>checkbox \u548Cradio \u4F7F\u7528 checked \u5C5E\u6027\u548C change\u4E8B\u4EF6</p></li><li><p>select \u5B57\u6BB5\u5C06value \u4F5C\u4E3A prop \u5E76\u5C06 change \u4F5C\u4E3A\u4E8B\u4EF6</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>input v<span class="token operator">-</span>model <span class="token operator">=</span> <span class="token string">&#39;something&#39;</span><span class="token operator">&gt;</span>

\u76F8\u5F53\u4E8E

<span class="token operator">&lt;</span>input v<span class="token operator">-</span>bind<span class="token operator">:</span>value<span class="token operator">=</span><span class="token string">&#39;something&#39;</span> v<span class="token operator">-</span>on<span class="token operator">=</span><span class="token string">&#39;something = $event.target.value&#39;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),i=[o];function p(l,c){return e(),n("div",null,i)}var u=a(t,[["render",p],["__file","vue_about.html.vue"]]);export{u as default};
