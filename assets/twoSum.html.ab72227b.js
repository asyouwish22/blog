import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as e,a as n,b as o,d as s,e as c,r as u}from"./app.078ebd30.js";const l={},i=n("h1",{id:"_1-\u4E24\u6570\u4E4B\u548C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u4E24\u6570\u4E4B\u548C","aria-hidden":"true"},"#"),s(" 1.\u4E24\u6570\u4E4B\u548C")],-1),r=n("h2",{id:"_1-\u4E24\u6570\u4E4B\u548C-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u4E24\u6570\u4E4B\u548C-1","aria-hidden":"true"},"#"),s(" 1.\u4E24\u6570\u4E4B\u548C")],-1),k={href:"https://leetcode.cn/problems/two-sum/",target:"_blank",rel:"noopener noreferrer"},d=s("\u9898\u76EE\u94FE\u63A5"),v=c(`<p>\u9898\u76EE\u63CF\u8FF0 :</p><p>\u7ED9\u5B9A\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 nums \u548C\u4E00\u4E2A\u76EE\u6807\u503C target\uFF0C\u8BF7\u4F60\u5728\u8BE5\u6570\u7EC4\u4E2D\u627E\u51FA\u548C\u4E3A\u76EE\u6807\u503C\u7684\u90A3 \u4E24\u4E2A \u6574\u6570\uFF0C\u5E76\u8FD4\u56DE\u4ED6\u4EEC\u7684\u6570\u7EC4\u4E0B\u6807\u3002</p><p>\u4F60\u53EF\u4EE5\u5047\u8BBE\u6BCF\u79CD\u8F93\u5165\u53EA\u4F1A\u5BF9\u5E94\u4E00\u4E2A\u7B54\u6848\u3002\u4F46\u662F\uFF0C\u4F60\u4E0D\u80FD\u91CD\u590D\u5229\u7528\u8FD9\u4E2A\u6570\u7EC4\u4E2D\u540C\u6837\u7684\u5143\u7D20\u3002</p><p>\u793A\u4F8B:</p><p>\u7ED9\u5B9A nums = [2, 7, 11, 15], target = 9</p><p>\u56E0\u4E3A nums[0] + nums[1] = 2 + 7 = 9 \u6240\u4EE5\u8FD4\u56DE [0, 1]</p><h3 id="\u66B4\u529B\u7834\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u66B4\u529B\u7834\u89E3\u6CD5" aria-hidden="true">#</a> \u66B4\u529B\u7834\u89E3\u6CD5\uFF1A</h3><p>\u4E24\u6B21\u5FAA\u73AF\uFF0C\u904D\u5386\u7B2C\u4E00\u4E2A\u5143\u7D20\u4E0E\u5269\u4E0B\u6240\u6709\u5143\u7D20\u662F\u5426\u6709\u7B49\u4E8E\u76EE\u6807\u7684\uFF0C \u518D\u904D\u5386\u7B2C\u4E8C\u4E2A\u5143\u7D20\u4E0E\u5269\u4E0B\u5143\u7D20\uFF0C\u4EE5\u6B64\u7C7B\u63A8</p><p>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1A O(n<sup>2</sup>) \u7A7A\u95F4\u590D\u6742\u5EA6\uFF1A O(1)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> l<span class="token punctuation">,</span>r<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>l<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>l<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>l<span class="token operator">++</span><span class="token punctuation">)</span>
     <span class="token keyword">for</span><span class="token punctuation">(</span>r<span class="token operator">=</span>l<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>r<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>r<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token operator">+</span>nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token operator">===</span>target<span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token keyword">return</span> <span class="token punctuation">[</span>l<span class="token punctuation">,</span>r<span class="token punctuation">]</span>
       <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E00\u904D\u54C8\u5E0C\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E00\u904D\u54C8\u5E0C\u6CD5" aria-hidden="true">#</a> \u4E00\u904D\u54C8\u5E0C\u6CD5\uFF1A</h3><p>\u53EA\u904D\u5386\u4E00\u6B21\uFF0C\u5C06\u904D\u5386\u8FC7\u7684\u5143\u7D20\u901A\u8FC7\u4E00\u4E2Aobject\u904D\u5386\u5C06\u4F4D\u7F6E\u548C\u503C\u6682\u5B58\u8D77\u6765\uFF0C \u5982\uFF1A obj[value]=&quot;\u4F4D\u7F6E&quot;\u3002\u904D\u5386\u65F6\u5224\u65AD\u662F\u5426\u6709\u5F53\u524D\u5BF9\u5E94\u7684\u503C \u65F6\u95F4\u590D\u6742\u5EA6\uFF1A O(n) \u7A7A\u95F4\u590D\u6742\u5EA6\uFF1A O(n)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> obj<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> temp<span class="token operator">=</span>target<span class="token operator">-</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>temp<span class="token punctuation">]</span><span class="token operator">!==</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span>obj<span class="token punctuation">[</span>temp<span class="token punctuation">]</span><span class="token punctuation">,</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            obj<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">=</span>i
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">3.</span>\u7528map \u601D\u8DEF\u4E0E\u4E0A\u9762\u4E00\u81F4
<span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">let</span> map<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> temp<span class="token operator">=</span>target<span class="token operator">-</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">,</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function m(b,h){const a=u("ExternalLinkIcon");return t(),e("div",null,[i,r,n("p",null,[n("a",k,[d,o(a)])]),v])}var y=p(l,[["render",m],["__file","twoSum.html.vue"]]);export{y as default};
