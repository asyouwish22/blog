import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as n,e as s}from"./app.9d53dd6f.js";const i={},l=s(`<h1 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h1><h2 id="\u57FA\u672C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7C7B\u578B" aria-hidden="true">#</a> \u57FA\u672C\u7C7B\u578B</h2><ol><li>Node\u7C7B\u578B</li></ol><ul><li>\u6240\u6709DOM\u8282\u70B9\u7EE7\u627F\u8BE5\u7C7B\u578B\uFF0CNode\u6709\u4E00\u4E2A\u5C5E\u6027nodeType\u8868\u793ANode\u7684\u7C7B\u578B\uFF0C\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u5176\u6570\u503C\u5206\u522B\u8868\u793A\u76F8\u5E94\u7684Node\u7C7B\u578B</li></ul><ol start="2"><li>Element\u7C7B\u578B</li></ol><ul><li>nodeType\u4E3A1</li><li>nodeValue\u4E3Anull</li><li>\u6BD4\u5982div\uFF0Cspan\uFF0Ca\u7B49\u6807\u7B7E\u5C31\u662Felement\u4E2D\u7684\u4E00\u79CD\u3002</li></ul><ol start="3"><li>Attr\u7C7B\u578B</li></ol><ul><li>\u8868\u793A\u5143\u7D20\u7684\u7279\u6027\uFF0C\u76F8\u5F53\u4E8E\u5143\u7D20\u7684attributes\u5C5E\u6027\u4E2D\u7684\u8282\u70B9</li><li>nodeType\u503C\u4E3A2</li><li>nodeName\u662F\u7279\u6027\u7684\u540D\u79F0</li><li>nodeValue\u662F\u7279\u6027\u7684\u503C</li><li>parentNode\u4E3Anull</li></ul><ol start="4"><li>Text\u7C7B\u578B</li></ol><ul><li>\u6587\u672C\u8282\u70B9</li><li>nodeType\u4E3A3</li><li>nodeName\u4E3A#text</li><li>nodeValue\u4E3A\u6587\u672C\u5185\u5BB9</li><li>\u6CA1\u6709\u5B50\u8282\u70B9</li><li>parentNode\u662F\u4E00\u4E2AElement</li></ul><ol start="5"><li>Comment</li></ol><ul><li>\u6CE8\u91CA</li><li>nodeType\u4E3A8</li><li>nodeValue\u4E3A\u6CE8\u91CA\u7684\u5185\u5BB9</li></ul><ol start="6"><li>Document</li></ol><ul><li>nodeType\u4E3A9</li><li>nodeValue\u4E3A null</li><li>parentNode\u4E3A null</li></ul><h2 id="dom\u6838\u5FC3" tabindex="-1"><a class="header-anchor" href="#dom\u6838\u5FC3" aria-hidden="true">#</a> DOM\u6838\u5FC3</h2><h3 id="_1-\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA" aria-hidden="true">#</a> 1.\u521B\u5EFA</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1.</span> document<span class="token punctuation">.</span>write
<span class="token number">2.</span> innerHTML
<span class="token number">3.</span> creteElement
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u589E" tabindex="-1"><a class="header-anchor" href="#_2-\u589E" aria-hidden="true">#</a> 2.\u589E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1.</span> appendChild
<span class="token number">2.</span> insertBefore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u5220" tabindex="-1"><a class="header-anchor" href="#_3-\u5220" aria-hidden="true">#</a> 3.\u5220</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>removeChild
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-\u6539" tabindex="-1"><a class="header-anchor" href="#_4-\u6539" aria-hidden="true">#</a> 4.\u6539</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\u4E3B\u8981\u4FEE\u6539dom\u7684\u5143\u7D20\u5C5E\u6027
<span class="token number">1.</span> \u4FEE\u6539\u5143\u7D20\u5C5E\u6027\uFF1A src\u3001href\u3001title\u7B49
<span class="token number">2.</span> \u4FEE\u6539\u666E\u901A\u5143\u7D20\u5185\u5BB9\uFF1A innerHTML \u3001innerText
<span class="token number">3.</span> \u4FEE\u6539\u8868\u5355\u5143\u7D20\uFF1A value\u3001type\u3001disabled\u7B49
<span class="token number">4.</span> \u4FEE\u6539\u5143\u7D20\u6837\u5F0F\uFF1A style\u3001className
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u67E5" tabindex="-1"><a class="header-anchor" href="#_5-\u67E5" aria-hidden="true">#</a> 5.\u67E5</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\u83B7\u53D6\u67E5\u8BE2dom\u7684\u5143\u7D20
<span class="token number">1.</span> <span class="token constant">DOM</span>\u63D0\u4F9B\u7684<span class="token constant">API</span> \u65B9\u6CD5\uFF1A getElementById\u3001getElementsByTagName<span class="token operator">...</span>\u4E0D\u592A\u63A8\u8350
<span class="token number">2.</span> <span class="token constant">H5</span>\u63D0\u4F9B\u7684\u65B0\u65B9\u6CD5\uFF1A querySelector\u3001querySelectorAll \u63A8\u8350
<span class="token number">3.</span> \u5229\u7528\u8282\u70B9\u64CD\u4F5C\u83B7\u53D6\u5143\u7D20\uFF1A <span class="token function">\u7236</span><span class="token punctuation">(</span>parentNode<span class="token punctuation">)</span><span class="token function">\u3001\u5B50</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span><span class="token function">\u3001\u5144</span><span class="token punctuation">(</span>previousElementSibling\u3001nextElementSibling<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-\u5C5E\u6027\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_6-\u5C5E\u6027\u64CD\u4F5C" aria-hidden="true">#</a> 6.\u5C5E\u6027\u64CD\u4F5C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1.</span> setAttribute\uFF1A\u8BBE\u7F6Edom\u7684\u5C5E\u6027\u503C
<span class="token number">2.</span> getAttribute\uFF1A\u5F97\u5230dom\u7684\u5C5E\u6027\u503C
<span class="token number">3.</span> removeAttribute\u79FB\u9664\u5C5E\u6027
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-\u4E8B\u4EF6\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_7-\u4E8B\u4EF6\u64CD\u4F5C" aria-hidden="true">#</a> 7.\u4E8B\u4EF6\u64CD\u4F5C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\u4E8B\u4EF6\u6E90<span class="token punctuation">.</span>\u4E8B\u4EF6\u7C7B\u578B<span class="token operator">=</span>\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,29),d=[l];function r(t,c){return a(),n("div",null,d)}var p=e(i,[["render",r],["__file","DOM_core.html.vue"]]);export{p as default};