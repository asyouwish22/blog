import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c,a as n,b as t,d as s,e as p,r as l}from"./app.4f4a5eae.js";const i={},u=n("h1",{id:"\u91CD\u5EFA\u4E8C\u53C9\u6811",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u91CD\u5EFA\u4E8C\u53C9\u6811","aria-hidden":"true"},"#"),s(" \u91CD\u5EFA\u4E8C\u53C9\u6811")],-1),r=n("h2",{id:"\u5251\u630707-\u91CD\u5EFA\u4E8C\u53C9\u6811",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5251\u630707-\u91CD\u5EFA\u4E8C\u53C9\u6811","aria-hidden":"true"},"#"),s(" \u5251\u630707 \u91CD\u5EFA\u4E8C\u53C9\u6811")],-1),k={href:"https://leetcode.cn/problems/zhong-jian-er-cha-shu-lcof/",target:"_blank",rel:"noopener noreferrer"},d=s("\u94FE\u63A5"),v=p(`<p>\u8F93\u5165\u67D0\u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u904D\u5386\u548C\u4E2D\u5E8F\u904D\u5386\u7684\u7ED3\u679C\uFF0C\u8BF7\u6784\u5EFA\u8BE5\u4E8C\u53C9\u6811\u5E76\u8FD4\u56DE\u5176\u6839\u8282\u70B9\u3002</p><ul><li>\u4EE5\u524D\u5E8F\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u4E3A\u5207\u5272\u70B9\uFF0C\u5207\u5272\u4E2D\u5E8F\u6570\u7EC4\uFF0C\u7136\u540E\u518D\u5207\u5272\u524D\u5E8F\u6570\u7EC4\uFF0C\u4E00\u5C42\u4E00\u5C42\u5207\u5272\uFF0C\u6BCF\u6B21\u524D\u5E8F\u6570\u7EC4\u7B2C\u4E00\u4E2A\u5143\u7D20\u5C31\u662F\u8282\u70B9</li><li>\u4FDD\u8BC1\u533A\u95F4\u7684\u5F00\u95ED\u4E00\u81F4\uFF0C\u90FD\u4E3A\u5DE6\u95ED\u53F3\u5F00</li><li>\u524D\u5E8F\u6570\u7EC4\u5927\u5C0F\u548C\u4E2D\u5E8F\u5927\u5C0F\u76F8\u540C\uFF0C\u53EF\u4EE5\u6309\u7167\u4E2D\u5E8F\u6570\u7EC4\u5927\u5C0F\u6765\u5207\u5272</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">buildTree</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">preorder<span class="token punctuation">,</span> inorder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token comment">// \u524D\u5E8F\u904D\u5386\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9\u5C31\u662F\u5F53\u524D\u4E2D\u95F4\u8282\u70B9</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>preorder<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> rootVal <span class="token operator">=</span> preorder<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u83B7\u53D6\u4E2D\u95F4\u8282\u70B9\u5728\u4E2D\u5E8F\u904D\u5386\u7684\u4E0B\u6807</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> inorder<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u521B\u5EFA\u4E2D\u95F4\u8282\u70B9</span>
    <span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//\u5207\u5272\u524D\u5E8F\u548C\u4E2D\u5E8F\u6570\u7EC4\u6784\u9020</span>
    root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>preorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>preorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_106-\u4ECE\u4E2D\u5E8F\u4E0E\u540E\u5E8F\u904D\u5386\u5E8F\u5217\u6784\u9020\u4E8C\u53C9\u6811" tabindex="-1"><a class="header-anchor" href="#_106-\u4ECE\u4E2D\u5E8F\u4E0E\u540E\u5E8F\u904D\u5386\u5E8F\u5217\u6784\u9020\u4E8C\u53C9\u6811" aria-hidden="true">#</a> 106 \u4ECE\u4E2D\u5E8F\u4E0E\u540E\u5E8F\u904D\u5386\u5E8F\u5217\u6784\u9020\u4E8C\u53C9\u6811</h2>`,4),m={href:"https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/",target:"_blank",rel:"noopener noreferrer"},b=s("\u94FE\u63A5"),f=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">buildTree</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">inorder<span class="token punctuation">,</span> postorder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>postorder<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">//    \u540E\u5E8F\u904D\u5386\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u662F\u5F53\u524D\u6839\u8282\u70B9</span>
   <span class="token keyword">let</span> rootVal <span class="token operator">=</span> postorder<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">let</span> index <span class="token operator">=</span> inorder<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span><span class="token punctuation">;</span>

   root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>index<span class="token punctuation">)</span><span class="token punctuation">,</span> postorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>index<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> postorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function h(_,x){const a=l("ExternalLinkIcon");return o(),c("div",null,[u,r,n("p",null,[n("a",k,[d,t(a)])]),v,n("p",null,[n("a",m,[b,t(a)])]),f])}var g=e(i,[["render",h],["__file","\u91CD\u5EFA\u4E8C\u53C9\u681116.html.vue"]]);export{g as default};
