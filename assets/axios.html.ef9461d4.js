import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as e,a as n,b as o,d as s,e as c,r as i}from"./app.078ebd30.js";const l={},r=n("h1",{id:"axios",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#axios","aria-hidden":"true"},"#"),s(" axios")],-1),u={href:"http://www.axios-js.com/zh-cn/docs/",target:"_blank",rel:"noopener noreferrer"},k=s("axios\u4E2D\u6587\u6587\u6863"),d=c(`<h2 id="_1-\u57FA\u672C\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u672C\u6848\u4F8B" aria-hidden="true">#</a> 1. \u57FA\u672C\u6848\u4F8B</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">&#39;https://test.youbaobao.xyz:18081/book/home/v2&#39;</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">openId</span><span class="token operator">:</span> <span class="token string">&#39;1234&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">&#39;abcd&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-axios-create" tabindex="-1"><a class="header-anchor" href="#_2-axios-create" aria-hidden="true">#</a> 2.axios.create</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">&#39;/book/home/v2&#39;</span>
<span class="token keyword">const</span> request <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;https://test.youbaobao.xyz:18081&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token punctuation">,</span> 
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">openId</span><span class="token operator">:</span> <span class="token string">&#39;1234&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-axios-\u8BF7\u6C42\u62E6\u622A\u5668" tabindex="-1"><a class="header-anchor" href="#_3-axios-\u8BF7\u6C42\u62E6\u622A\u5668" aria-hidden="true">#</a> 3.axios \u8BF7\u6C42\u62E6\u622A\u5668</h2><ul><li><p>\u4E3A http \u8BF7\u6C42\u7684 headers \u4E2D\u6DFB\u52A0 token\uFF0C\u540C\u65F6\u8FDB\u884C\u767D\u540D\u5355\u6821\u9A8C\uFF0C\u5982 /login \u4E0D\u9700\u8981\u6DFB\u52A0 token\uFF0C\u5E76\u5B9E\u73B0\u5F02\u6B65\u6355\u83B7\u548C\u81EA\u5B9A\u4E49\u5904\u7406</p></li><li><p>\u8C03\u7528<code>request.interceptors.request.use</code> \u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u9700\u8981\u4F20\u5165\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u62E6\u622A\u5668\u65B9\u6CD5\uFF0C\u5305\u542B\u4E00\u4E2A <code>config </code>\u53C2\u6570\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u8FD9\u4E2A\u65B9\u6CD5\u4E2D\u4FEE\u6539 <code>config </code>\u5E76\u4E14\u8FDB\u884C\u56DE\u4F20\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u5F02\u5E38\u5904\u7406\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>Promise.reject(error)</code> \u5C06\u5F02\u5E38\u8FD4\u56DE\u7ED9\u7528\u6237\u8FDB\u884C\u5904\u7406\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728<code>request</code>\u8BF7\u6C42\u540E\u53EF\u4EE5\u901A\u8FC7 catch \u6355\u83B7\u5F02\u5E38\u8FDB\u884C\u81EA\u5B9A\u4E49\u5904\u7406</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> WhiteUrl<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/book/home/v2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> url<span class="token operator">=</span><span class="token string">&#39;/book/home/v2&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> request<span class="token operator">=</span>axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span><span class="token string">&#39;https://test.youbaobao.xyz:8181&#39;</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span><span class="token number">5000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

request<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token parameter">config</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u6709baseURL\u3001headers\u3001params\uFF0Cmethod\uFF0Curl\uFF0Ctimeout\u7B49\u4FE1\u606F</span>
    <span class="token keyword">const</span> url<span class="token operator">=</span>config<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">repalce</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>baseURL<span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u62FF\u5230baseURL\u540E\u9762\u7684\u5185\u5BB9</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>WhiteURL<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">wl</span><span class="token operator">=&gt;</span>url<span class="token operator">===</span>wl<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> config<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;abcd&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token parameter">err</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">//console.log(err)</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token punctuation">,</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">openId</span><span class="token operator">:</span><span class="token string">&#39;1254&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-axios-\u54CD\u5E94\u62E6\u622A\u5668" tabindex="-1"><a class="header-anchor" href="#_4-axios-\u54CD\u5E94\u62E6\u622A\u5668" aria-hidden="true">#</a> 4.axios \u54CD\u5E94\u62E6\u622A\u5668</h2><ul><li>\u901A\u8FC7 <code>request.interceptors.response.use</code> \u65B9\u6CD5\u5B9A\u4E49\u54CD\u5E94\u62E6\u622A\u5668\uFF0C\u5B83\u4ECD\u7136\u9700\u89812\u4E2A\u53C2\u6570\uFF0C\u4E0E\u8BF7\u6C42\u62E6\u622A\u5668\u7C7B\u4F3C\uFF0C\u6CE8\u610F\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3B\u8981\u5904\u7406 <code>statusCode</code> \u975E 200 \u7684\u5F02\u5E38\u8BF7\u6C42</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> WhiteUrl<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/book/home/v2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> url<span class="token operator">=</span><span class="token string">&#39;/book/home/v2&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> request<span class="token operator">=</span>axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span><span class="token string">&#39;https://test.youbaobao.xyz:8181&#39;</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span><span class="token number">5000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

request<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token parameter">respose</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u5305\u542Bdata\uFF0Cdata\u91CC\u6709error_code</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>error_code<span class="token operator">===</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token parameter">err</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token punctuation">,</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">openId</span><span class="token operator">:</span><span class="token string">&#39;1254&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function v(m,b){const a=i("ExternalLinkIcon");return t(),e("div",null,[r,n("p",null,[n("a",u,[k,o(a)])]),d])}var y=p(l,[["render",v],["__file","axios.html.vue"]]);export{y as default};
