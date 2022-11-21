import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as e,a as n,b as o,d as s,e as c,r as l}from"./app.40343dc0.js";const u={},i=n("h1",{id:"_1-\u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6","aria-hidden":"true"},"#"),s(" 1.\u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6")],-1),r=n("h2",{id:"_349-\u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_349-\u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6","aria-hidden":"true"},"#"),s(" 349. \u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6")],-1),k={href:"https://leetcode.cn/problems/intersection-of-two-arrays/",target:"_blank",rel:"noopener noreferrer"},d=s("\u9898\u76EE\u94FE\u63A5"),m=c(`<p>\u7ED9\u5B9A\u4E24\u4E2A\u6570\u7EC4 nums1 \u548C nums2 \uFF0C\u8FD4\u56DE \u5B83\u4EEC\u7684\u4EA4\u96C6 \u3002\u8F93\u51FA\u7ED3\u679C\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u4E00\u5B9A\u662F \u552F\u4E00 \u7684\u3002\u6211\u4EEC\u53EF\u4EE5 \u4E0D\u8003\u8651\u8F93\u51FA\u7ED3\u679C\u7684\u987A\u5E8F \u3002</p><h3 id="\u66B4\u529B\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u66B4\u529B\u89E3\u6CD5" aria-hidden="true">#</a> \u66B4\u529B\u89E3\u6CD5</h3><p>\u7528\u4E24\u4E2A\u5FAA\u73AF\u904D\u5386\u6570\u7EC4,\u9047\u5230\u76F8\u540C\u7684\u5219\u52A0\u5165\u54C8\u5E0C\u8868\u4E2D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">intersection</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> res<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>nums1<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>nums2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">if</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">===</span>nums2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
              res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>res<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u54C8\u5E0C\u8868" tabindex="-1"><a class="header-anchor" href="#\u54C8\u5E0C\u8868" aria-hidden="true">#</a> \u54C8\u5E0C\u8868</h3><ol><li><p>\u627E\u51FA\u957F\u5EA6\u957F\u7684\u6570\u7EC4\uFF0C\u653E\u5165\u54C8\u5E0C\u8868\u4E2D\uFF0C\u540C\u65F6\u521B\u5EFA\u4E00\u4E2A\u5B58\u653E\u7ED3\u679C\u7684\u54C8\u5E0C\u8868</p></li><li><p>\u904D\u5386\u957F\u5EA6\u77ED\u7684\u6570\u7EC4\uFF0C\u5982\u679C\u54C8\u5E0C\u8868\u4E2D\u5B58\u5728\uFF0C\u5219\u52A0\u5165\u7ED3\u679C\u4E2D\u3002</p></li><li><p>\u5C06\u7ED3\u679C\u8F6C\u6362\u4E3A\u6570\u7EC4\u8FD4\u56DE</p></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">intersection</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>nums1<span class="token punctuation">.</span>length<span class="token operator">&lt;</span>nums2<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">const</span> temp<span class="token operator">=</span>nums1<span class="token punctuation">;</span>
       nums1<span class="token operator">=</span>nums2<span class="token punctuation">;</span>
       nums2<span class="token operator">=</span>temp<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">let</span> set<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>nums1<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">let</span> res<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>nums2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>nums2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">&amp;&amp;</span>res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>nums2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD8\u53EF\u901A\u8FC7filter</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">intersection</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> set1<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>nums1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> set2<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>nums2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> res<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">...</span>set1<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span>set2<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53CC\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u53CC\u6307\u9488" aria-hidden="true">#</a> \u53CC\u6307\u9488</h3><ol><li>\u7528sort((a,b)=&gt;a-b)\u6392\u4E3A\u5347\u5E8F</li><li>\u5229\u7528\u53CC\u6307\u9488,\u5411\u540E\u904D\u5386\uFF0C\u627E\u5230\u76F8\u7B49\u7684\u6570\u503C\u4FDD\u5B58\u5230\u96C6\u5408res\u4E2D\u3002\u5E76\u7EE7\u7EED\u5F80\u540E\u79FB\u76F4\u81F3\u7ED3\u675F</li><li>\u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO\uFF08nlogn\uFF09 \u7A7A\u95F4\u590D\u6742\u5EA6\u4E3AO(n)</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">intersection</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  nums1<span class="token operator">=</span>nums1<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>a<span class="token operator">-</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  nums2<span class="token operator">=</span>nums2<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>a<span class="token operator">-</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> res<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span>nums1<span class="token punctuation">.</span>length<span class="token operator">&amp;&amp;</span>j<span class="token operator">&lt;</span>nums2<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">if</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;</span>nums2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         i<span class="token operator">++</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&gt;</span>nums2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         j<span class="token operator">++</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
         res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         i<span class="token operator">++</span><span class="token punctuation">;</span>
         j<span class="token operator">++</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>res<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function v(b,h){const a=l("ExternalLinkIcon");return t(),e("div",null,[i,r,n("p",null,[n("a",k,[d,o(a)])]),m])}var y=p(u,[["render",v],["__file","intersection-of-two-arrays.html.vue"]]);export{y as default};