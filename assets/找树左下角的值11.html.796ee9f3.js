import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as e,a as n,b as o,d as s,e as c,r as l}from"./app.af0a3378.js";const u={},i=n("h1",{id:"\u627E\u6811\u5DE6\u4E0B\u89D2\u7684\u503C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u627E\u6811\u5DE6\u4E0B\u89D2\u7684\u503C","aria-hidden":"true"},"#"),s(" \u627E\u6811\u5DE6\u4E0B\u89D2\u7684\u503C")],-1),r=n("h2",{id:"_513-\u627E\u6811\u5DE6\u4E0B\u89D2\u7684\u503C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_513-\u627E\u6811\u5DE6\u4E0B\u89D2\u7684\u503C","aria-hidden":"true"},"#"),s(" 513.\u627E\u6811\u5DE6\u4E0B\u89D2\u7684\u503C")],-1),k={href:"https://leetcode.cn/problems/find-bottom-left-tree-value/",target:"_blank",rel:"noopener noreferrer"},d=s("\u94FE\u63A5"),v=c(`<h3 id="\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52" aria-hidden="true">#</a> \u9012\u5F52</h3><p>\u9996\u5148\u8981\u662F\u6700\u540E\u4E00\u884C\uFF0C\u7136\u540E\u662F\u6700\u5DE6\u8FB9\u7684\u503C</p><p>\u4F7F\u7528\u9012\u5F52\u6CD5,\u6DF1\u5EA6\u6700\u5927\u7684\u53F6\u5B50\u8282\u70B9\u4E00\u5B9A\u662F\u6700\u540E\u4E00\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">findBottomLeftValue</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//   \u8BB0\u5F55\u6700\u5927\u6DF1\u5EA6</span>
  <span class="token keyword">let</span> max_depth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> res<span class="token punctuation">;</span> <span class="token comment">// \u5168\u5C40\u53D8\u91CF \u6700\u5927\u6DF1\u5EA6\u6700\u5DE6\u8282\u70B9\u7684\u6570\u503C</span>
  <span class="token keyword">const</span> <span class="token function-variable function">traversal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> depth</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>max_depth <span class="token operator">&lt;</span> depth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              max_depth <span class="token operator">=</span> depth<span class="token punctuation">;</span>
              res <span class="token operator">=</span> node<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token function">traversal</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> depth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5305\u542B\u56DE\u6EAF</span>
      node<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> <span class="token function">traversal</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> depth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">traversal</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C42\u5E8F\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u5C42\u5E8F\u904D\u5386" aria-hidden="true">#</a> \u5C42\u5E8F\u904D\u5386</h3><p>\u76F4\u63A5\u627E\u5230\u6700\u540E\u4E00\u5C42\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9\u5373\u53EF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">findBottomLeftValue</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> queue<span class="token operator">=</span><span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> result<span class="token punctuation">;</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> size <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>size<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">===</span><span class="token number">0</span><span class="token punctuation">)</span> result <span class="token operator">=</span> node<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
          node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
          node<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function m(b,h){const a=l("ExternalLinkIcon");return p(),e("div",null,[i,r,n("p",null,[n("a",k,[d,o(a)])]),v])}var w=t(u,[["render",m],["__file","\u627E\u6811\u5DE6\u4E0B\u89D2\u7684\u503C11.html.vue"]]);export{w as default};
