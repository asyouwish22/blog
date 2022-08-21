import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as e,a as n,b as o,d as s,e as c,r as l}from"./app.078ebd30.js";var i="/assets/remove_ex1.35c75c8b.jpg",u="/assets/remove-nth-node-from-end-of-list.6def6d73.jpg";const r={},d=n("h1",{id:"_5-\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C-n-\u4E2A\u7ED3\u70B9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_5-\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C-n-\u4E2A\u7ED3\u70B9","aria-hidden":"true"},"#"),s(" 5.\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C N \u4E2A\u7ED3\u70B9")],-1),k=n("h2",{id:"_19-\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C-n-\u4E2A\u7ED3\u70B9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_19-\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C-n-\u4E2A\u7ED3\u70B9","aria-hidden":"true"},"#"),s(" 19.\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C N \u4E2A\u7ED3\u70B9")],-1),v={href:"https://leetcode.cn/problems/remove-nth-node-from-end-of-list/",target:"_blank",rel:"noopener noreferrer"},m=s("\u9898\u76EE\u94FE\u63A5"),h=c('<p>\u7ED9\u4F60\u4E00\u4E2A\u94FE\u8868\uFF0C\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C n \u4E2A\u7ED3\u70B9\uFF0C\u5E76\u4E14\u8FD4\u56DE\u94FE\u8868\u7684\u5934\u7ED3\u70B9\u3002</p><p>\u8FDB\u9636\uFF1A\u4F60\u80FD\u5C1D\u8BD5\u4F7F\u7528\u4E00\u8D9F\u626B\u63CF\u5B9E\u73B0\u5417?</p><p>\u793A\u4F8B\uFF1A<br><img src="'+i+`" alt="\u5220\u9664"></p><p>\u8F93\u5165\uFF1Ahead = [1,2,3,4,5], n = 2 \u8F93\u51FA\uFF1A[1,2,3,5] \u793A\u4F8B 2\uFF1A</p><p>\u8F93\u5165\uFF1Ahead = [1], n = 1 \u8F93\u51FA\uFF1A[] \u793A\u4F8B 3\uFF1A</p><p>\u8F93\u5165\uFF1Ahead = [1,2], n = 1 \u8F93\u51FA\uFF1A[1]</p><h3 id="\u8BA1\u7B97\u94FE\u8868\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u94FE\u8868\u957F\u5EA6" aria-hidden="true">#</a> \u8BA1\u7B97\u94FE\u8868\u957F\u5EA6</h3><p>\u6211\u9996\u5148\u60F3\u5230\u7684\u5C31\u662F\u8BA1\u7B97\u94FE\u8868\u957F\u5EA6length</p><p>\u8981\u5220\u9664\u5012\u6570\u7B2Cn\u4E2A\u8282\u70B9\uFF0C\u4ECE\u865A\u62DF\u5934\u7ED3\u70B9\u5F00\u59CB\u904D\u5386\uFF0C\u904D\u5386\u5230length-n,\u6B63\u597D\u662F\u8981\u5220\u9664\u7684\u8282\u70B9</p><p>\u627E\u5230\u5176\u524D\u4E00\u4E2A\u8282\u70B9\u8FDB\u884C\u5220\u9664\u64CD\u4F5C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">removeNthFromEnd</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">let</span> length<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
     <span class="token keyword">let</span> dummy<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">let</span> cur<span class="token operator">=</span>dummy<span class="token punctuation">;</span>
     <span class="token keyword">while</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">{</span>
         length<span class="token operator">++</span><span class="token punctuation">;</span>
         head<span class="token operator">=</span>head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
     <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>length<span class="token operator">-</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//\u6B63\u597D\u904D\u5386\u5230\u5176\u524D\u4E00\u4E2A\u8282\u70B9</span>
        cur<span class="token operator">=</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
     cur<span class="token punctuation">.</span>next<span class="token operator">=</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
     <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53CC\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u53CC\u6307\u9488" aria-hidden="true">#</a> \u53CC\u6307\u9488</h3><p>\u5982\u679C\u8981\u5220\u9664\u5012\u6570\u7B2Cn\u4E2A\u8282\u70B9</p><p>\u8BA9fast\u5148\u79FB\u52A8n\u6B65\uFF0C\u7136\u540E\u8BA9fast\u548Cslow\u540C\u65F6\u79FB\u52A8\uFF0C\u76F4\u5230fast\u6307\u5411\u94FE\u8868\u672B\u5C3E\u3002\u5220\u6389slow\u6240\u6307\u5411\u7684\u8282\u70B9\u5C31\u53EF\u4EE5\u4E86.</p><p><img src="`+u+`" alt="remove-nth-node-from-end-of-list"></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">removeNthFromEnd</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">let</span> dummy<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">let</span> slow<span class="token operator">=</span>dummy<span class="token punctuation">;</span>
     <span class="token keyword">let</span> fast<span class="token operator">=</span>dummy<span class="token punctuation">;</span>
     <span class="token keyword">while</span><span class="token punctuation">(</span>n<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         fast<span class="token operator">=</span>fast<span class="token punctuation">.</span>next
     <span class="token punctuation">}</span>
     <span class="token keyword">while</span><span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span>
         slow<span class="token operator">=</span>slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
         fast<span class="token operator">=</span>fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
     slow<span class="token punctuation">.</span>next<span class="token operator">=</span>slow<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
     <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6808" tabindex="-1"><a class="header-anchor" href="#\u6808" aria-hidden="true">#</a> \u6808</h3><p>\u904D\u5386\u94FE\u8868\u7684\u540C\u65F6\u5C06\u6240\u6709\u8282\u70B9\u4F9D\u6B21\u5165\u6808\u3002</p><p>\u6839\u636E\u6808\u300C\u5148\u8FDB\u540E\u51FA\u300D\u7684\u539F\u5219\uFF0C\u6211\u4EEC\u5F39\u51FA\u6808\u7684\u7B2Cn\u4E2A\u8282\u70B9\u5C31\u662F\u9700\u8981\u5220\u9664\u7684\u8282\u70B9\uFF0C</p><p>\u5E76\u4E14\u76EE\u524D\u6808\u9876\u7684\u8282\u70B9\u5C31\u662F\u5F85\u5220\u9664\u8282\u70B9\u7684\u524D\u9A71\u8282\u70B9\u3002\u8FD9\u6837\u4E00\u6765\uFF0C\u5220\u9664\u64CD\u4F5C\u5C31\u53D8\u5F97\u5341\u5206\u65B9\u4FBF\u4E86\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">removeNthFromEnd</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">let</span> dummy<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">let</span> cur<span class="token operator">=</span>dummy<span class="token punctuation">;</span>
     <span class="token keyword">let</span> stack<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
     <span class="token keyword">while</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">{</span>
         stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
         cur<span class="token operator">=</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
     <span class="token keyword">while</span><span class="token punctuation">(</span>n<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token keyword">let</span> pre<span class="token operator">=</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    pre<span class="token punctuation">.</span>next<span class="token operator">=</span>pre<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function b(f,w){const a=l("ExternalLinkIcon");return p(),e("div",null,[d,k,n("p",null,[n("a",v,[m,o(a)])]),h])}var _=t(r,[["render",b],["__file","remove-nth-node-from-end-of-list.html.vue"]]);export{_ as default};
