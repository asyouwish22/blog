import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as p,a as n,b as o,d as s,e as c,r as i}from"./app.078ebd30.js";var l="/assets/swap-node-in-pairs.6ff9264e.jpg";const r={},u=n("h1",{id:"_4-\u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-\u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9","aria-hidden":"true"},"#"),s(" 4.\u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9")],-1),d=n("h2",{id:"_24-\u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_24-\u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9","aria-hidden":"true"},"#"),s(" 24.\u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9")],-1),k={href:"https://leetcode.cn/problems/swap-nodes-in-pairs/",target:"_blank",rel:"noopener noreferrer"},v=s("\u9898\u76EE\u94FE\u63A5"),m=c('<p>\u7ED9\u5B9A\u4E00\u4E2A\u94FE\u8868\uFF0C\u4E24\u4E24\u4EA4\u6362\u5176\u4E2D\u76F8\u90BB\u7684\u8282\u70B9\uFF0C\u5E76\u8FD4\u56DE\u4EA4\u6362\u540E\u7684\u94FE\u8868\u3002</p><p>\u4F60\u4E0D\u80FD\u53EA\u662F\u5355\u7EAF\u7684\u6539\u53D8\u8282\u70B9\u5185\u90E8\u7684\u503C\uFF0C\u800C\u662F\u9700\u8981\u5B9E\u9645\u7684\u8FDB\u884C\u8282\u70B9\u4EA4\u6362\u3002</p><p>\u8F93\u5165\uFF1Ahead = [1,2,3,4] \u8F93\u51FA\uFF1A[2,1,4,3] \u793A\u4F8B 2\uFF1A</p><p>\u8F93\u5165\uFF1Ahead = [] \u8F93\u51FA\uFF1A[] \u793A\u4F8B 3\uFF1A</p><p>\u8F93\u5165\uFF1Ahead = [1] \u8F93\u51FA\uFF1A[1]</p><h3 id="\u865A\u62DF\u5934\u7ED3\u70B9" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF\u5934\u7ED3\u70B9" aria-hidden="true">#</a> \u865A\u62DF\u5934\u7ED3\u70B9</h3><p>\u4E00\u5B9A\u8981\u753B\u56FE\uFF0C\u4E0D\u753B\u56FE\uFF0C\u64CD\u4F5C\u591A\u4E2A\u6307\u9488\u5F88\u5BB9\u6613\u4E71\uFF0C\u800C\u4E14\u8981\u64CD\u4F5C\u7684\u5148\u540E\u987A\u5E8F</p><p>\u521D\u59CB\u65F6\uFF0Ccur\u6307\u5411\u865A\u62DF\u5934\u7ED3\u70B9</p><p><img src="'+l+`" alt="swap"></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">swapPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> dummy<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  dummy<span class="token punctuation">.</span>next<span class="token operator">=</span>head<span class="token punctuation">;</span>
  <span class="token keyword">let</span> cur<span class="token operator">=</span>dummy<span class="token punctuation">;</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token operator">&amp;&amp;</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//\u8981\u5224\u65ADcur.next.next</span>
    <span class="token keyword">let</span> n1<span class="token operator">=</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">let</span> n2<span class="token operator">=</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    cur<span class="token punctuation">.</span>next<span class="token operator">=</span>n2<span class="token punctuation">;</span>
    n1<span class="token punctuation">.</span>next<span class="token operator">=</span>n2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    n2<span class="token punctuation">.</span>next<span class="token operator">=</span>n1<span class="token punctuation">;</span>
    cur<span class="token operator">=</span>n1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52" aria-hidden="true">#</a> \u9012\u5F52</h3><p>\u5B97\u65E8\u5C31\u662F\u7D27\u7D27\u6293\u4F4F\u539F\u6765\u7684\u51FD\u6570\u7A76\u7ADF\u8FD4\u56DE\u7684\u662F\u4EC0\u4E48?\u4F5C\u7528\u662F\u4EC0\u4E48\u5373\u53EF swapPairs(ListNode head) \u7684\u610F\u4E49\u5C31\u662F\u4E24\u4E24\u7FFB\u8F6C\u94FE\u8868\u4E2D\u7684\u8282\u70B9+\u8FD4\u56DE\u7FFB\u8F6C\u540E\u7684\u65B0\u7684\u5934\u7ED3\u70B9</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">swapPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span><span class="token punctuation">(</span>head<span class="token operator">===</span><span class="token keyword">null</span><span class="token operator">||</span>head<span class="token punctuation">.</span>next<span class="token operator">===</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>
 <span class="token comment">//1-&gt;2-&gt;3-&gt;4</span>
 <span class="token comment">//\u4FDD\u5B58\u8282\u70B92</span>
 <span class="token keyword">const</span> newHead<span class="token operator">=</span>head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
 <span class="token comment">//\u7EE7\u7EED\u9012\u5F52\uFF0C\u5904\u7406\u8282\u70B93-&gt;4</span>
 <span class="token comment">//\u5F53\u9012\u5F52\u7ED3\u675F\u8FD4\u56DE\u540E\uFF0C\u5C31\u53D8\u6210\u4E864-&gt;3</span>
 <span class="token comment">//\u4E8E\u662Fhead\u8282\u70B9\u5C31\u6307\u5411\u4E864\uFF0C\u53D8\u62101-&gt;4-&gt;3</span>
 head<span class="token punctuation">.</span>next<span class="token operator">=</span><span class="token function">swapPairs</span><span class="token punctuation">(</span>newHead<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">//\u8282\u70B92\u6307\u54111</span>
 newHead<span class="token punctuation">.</span>next<span class="token operator">=</span>head<span class="token punctuation">;</span>
 <span class="token keyword">return</span> newHead<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function h(b,w){const a=i("ExternalLinkIcon");return t(),p("div",null,[u,d,n("p",null,[n("a",k,[v,o(a)])]),m])}var f=e(r,[["render",h],["__file","swap-nodes-in-pairs.html.vue"]]);export{f as default};
