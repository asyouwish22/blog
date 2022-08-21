import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.078ebd30.js";const e={},p=t(`<h1 id="\u52A8\u753B\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B\u51FD\u6570" aria-hidden="true">#</a> \u52A8\u753B\u51FD\u6570</h1><h2 id="_1-\u52A8\u753B\u51FD\u6570\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-\u52A8\u753B\u51FD\u6570\u5C01\u88C5" aria-hidden="true">#</a> 1.\u52A8\u753B\u51FD\u6570\u5C01\u88C5</h2><h3 id="_1-1-\u52A8\u753B\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_1-1-\u52A8\u753B\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> 1.1 \u52A8\u753B\u5B9E\u73B0\u539F\u7406</h3><blockquote><p>\u6838\u5FC3\u539F\u7406\uFF1A\u901A\u8FC7\u5B9A\u65F6\u5668 setInterval() \u4E0D\u65AD\u79FB\u52A8\u76D2\u5B50\u4F4D\u7F6E\u3002</p></blockquote><p>\u5B9E\u73B0\u6B65\u9AA4\uFF1A</p><ol><li>\u83B7\u5F97\u76D2\u5B50\u5F53\u524D\u4F4D\u7F6E</li><li>\u8BA9\u76D2\u5B50\u5728\u5F53\u524D\u4F4D\u7F6E\u52A0\u4E0A1\u4E2A\u79FB\u52A8\u8DDD\u79BB</li><li>\u5229\u7528\u5B9A\u65F6\u5668\u4E0D\u65AD\u91CD\u590D\u8FD9\u4E2A\u64CD\u4F5C</li><li>\u52A0\u4E00\u4E2A\u7ED3\u675F\u5B9A\u65F6\u5668\u7684\u6761\u4EF6</li><li>\u6CE8\u610F\u6B64\u5143\u7D20\u9700\u8981\u6DFB\u52A0\u5B9A\u4F4D\uFF0C\u624D\u80FD\u4F7F\u7528element.style.left</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token keyword">function</span> <span class="token function">animate</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5F53\u6211\u4EEC\u4E0D\u65AD\u7684\u70B9\u51FB\u6309\u94AE\uFF0C\u8FD9\u4E2A\u5143\u7D20\u7684\u901F\u5EA6\u4F1A\u8D8A\u6765\u8D8A\u5FEB\uFF0C\u56E0\u4E3A\u5F00\u542F\u4E86\u592A\u591A\u7684\u5B9A\u65F6\u5668</span>
            <span class="token comment">// \u89E3\u51B3\u65B9\u6848\u5C31\u662F \u8BA9\u6211\u4EEC\u5143\u7D20\u53EA\u6709\u4E00\u4E2A\u5B9A\u65F6\u5668\u6267\u884C</span>
            <span class="token comment">// \u5148\u6E05\u9664\u4EE5\u524D\u7684\u5B9A\u65F6\u5668\uFF0C\u53EA\u4FDD\u7559\u5F53\u524D\u7684\u4E00\u4E2A\u5B9A\u65F6\u5668\u6267\u884C</span>
            <span class="token function">clearInterval</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
            obj<span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>offsetLeft <span class="token operator">&gt;=</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// \u505C\u6B62\u52A8\u753B \u672C\u8D28\u662F\u505C\u6B62\u5B9A\u65F6\u5668</span>
                    <span class="token function">clearInterval</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                obj<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> obj<span class="token punctuation">.</span>offsetLeft <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-\u7F13\u52A8\u6548\u679C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_1-2-\u7F13\u52A8\u6548\u679C\u539F\u7406" aria-hidden="true">#</a> 1.2 \u7F13\u52A8\u6548\u679C\u539F\u7406</h3><p>\u7F13\u52A8\u52A8\u753B\u5C31\u662F\u8BA9\u5143\u7D20\u8FD0\u52A8\u901F\u5EA6\u6709\u6240\u53D8\u5316\uFF0C\u6700\u5E38\u89C1\u7684\u662F\u8BA9\u901F\u5EA6\u6162\u6162\u505C\u4E0B\u6765</p><p>\u601D\u8DEF\uFF1A</p><ol><li>\u8BA9\u76D2\u5B50\u6BCF\u6B21\u79FB\u52A8\u7684\u8DDD\u79BB\u6162\u6162\u53D8\u5C0F\uFF0C\u901F\u5EA6\u5C31\u4F1A\u6162\u6162\u843D\u4E0B\u6765\u3002</li><li>\u6838\u5FC3\u7B97\u6CD5\uFF1A (\u76EE\u6807\u503C - \u73B0\u5728\u7684\u4F4D\u7F6E) \xA0\xA0/\xA0\xA010\xA0\xA0\xA0 \u505A\u4E3A\u6BCF\u6B21\u79FB\u52A8\u7684\u8DDD\u79BB\u6B65\u957F</li><li>\u505C\u6B62\u7684\u6761\u4EF6\u662F\uFF1A \u8BA9\u5F53\u524D\u76D2\u5B50\u4F4D\u7F6E\u7B49\u4E8E\u76EE\u6807\u4F4D\u7F6E\u5C31\u505C\u6B62\u5B9A\u65F6\u5668</li><li>\u6CE8\u610F\u6B65\u957F\u503C\u9700\u8981\u53D6\u6574</li></ol><h3 id="_1-3-\u52A8\u753B\u51FD\u6570\u591A\u4E2A\u76EE\u6807\u503C\u4E4B\u95F4\u79FB\u52A8" tabindex="-1"><a class="header-anchor" href="#_1-3-\u52A8\u753B\u51FD\u6570\u591A\u4E2A\u76EE\u6807\u503C\u4E4B\u95F4\u79FB\u52A8" aria-hidden="true">#</a> 1.3 \u52A8\u753B\u51FD\u6570\u591A\u4E2A\u76EE\u6807\u503C\u4E4B\u95F4\u79FB\u52A8</h3><p>\u53EF\u4EE5\u8BA9\u52A8\u753B\u51FD\u6570\u4ECE 800 \u79FB\u52A8\u5230 500\u3002</p><p>\u5F53\u6211\u4EEC\u70B9\u51FB\u6309\u94AE\u65F6\u5019\uFF0C\u5224\u65AD\u6B65\u957F\u662F\u6B63\u503C\u8FD8\u662F\u8D1F\u503C</p><p>\u200B 1.\u5982\u679C\u662F\u6B63\u503C\uFF0C\u5219\u6B65\u957F\u5F80\u5927\u4E86\u53D6\u6574</p><p>\u200B 2.\u5982\u679C\u662F\u8D1F\u503C\uFF0C\u5219\u6B65\u957F \u5411\u5C0F\u4E86\u53D6\u6574</p><h3 id="_1-4-\u52A8\u753B\u51FD\u6570\u6DFB\u52A0\u56DE\u8C03\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-4-\u52A8\u753B\u51FD\u6570\u6DFB\u52A0\u56DE\u8C03\u51FD\u6570" aria-hidden="true">#</a> 1.4 \u52A8\u753B\u51FD\u6570\u6DFB\u52A0\u56DE\u8C03\u51FD\u6570</h3><p>\u56DE\u8C03\u51FD\u6570\u539F\u7406\uFF1A\u51FD\u6570\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A\u53C2\u6570\u3002\u5C06\u8FD9\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u5230\u53E6\u4E00\u4E2A\u51FD\u6570\u91CC\u9762\uFF0C\u5F53\u90A3\u4E2A\u51FD\u6570\u6267\u884C\u5B8C\u4E4B\u540E\uFF0C\u518D\u6267\u884C\u4F20\u8FDB\u53BB\u7684\u8FD9\u4E2A\u51FD\u6570\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u5C31\u53EB\u505A\u56DE\u8C03\u3002</p><p>\u56DE\u8C03\u51FD\u6570\u5199\u7684\u4F4D\u7F6E\uFF1A\u5B9A\u65F6\u5668\u7ED3\u675F\u7684\u4F4D\u7F6E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">animate</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> target<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(callback);  callback = function() {}  \u8C03\u7528\u7684\u65F6\u5019 callback()</span>

    <span class="token comment">// \u5148\u6E05\u9664\u4EE5\u524D\u7684\u5B9A\u65F6\u5668\uFF0C\u53EA\u4FDD\u7559\u5F53\u524D\u7684\u4E00\u4E2A\u5B9A\u65F6\u5668\u6267\u884C</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    obj<span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6B65\u957F\u503C\u5199\u5230\u5B9A\u65F6\u5668\u7684\u91CC\u9762</span>
        <span class="token comment">// \u628A\u6211\u4EEC\u6B65\u957F\u503C\u6539\u4E3A\u6574\u6570 \u4E0D\u8981\u51FA\u73B0\u5C0F\u6570\u7684\u95EE\u9898</span>
        <span class="token comment">// var step = Math.ceil((target - obj.offsetLeft) / 10);</span>
        <span class="token keyword">var</span> step <span class="token operator">=</span> <span class="token punctuation">(</span>target <span class="token operator">-</span> obj<span class="token punctuation">.</span>offsetLeft<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span>
        step <span class="token operator">=</span> step <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>step<span class="token punctuation">)</span> <span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>step<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>offsetLeft <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u505C\u6B62\u52A8\u753B \u672C\u8D28\u662F\u505C\u6B62\u5B9A\u65F6\u5668</span>
            <span class="token function">clearInterval</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u56DE\u8C03\u51FD\u6570\u5199\u5230\u5B9A\u65F6\u5668\u7ED3\u675F\u91CC\u9762</span>
            <span class="token comment">// if (callback) {</span>
            <span class="token comment">//     // \u8C03\u7528\u51FD\u6570</span>
            <span class="token comment">//     callback();</span>
            <span class="token comment">// }</span>
            callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u628A\u6BCF\u6B21\u52A01 \u8FD9\u4E2A\u6B65\u957F\u503C\u6539\u4E3A\u4E00\u4E2A\u6162\u6162\u53D8\u5C0F\u7684\u503C  \u6B65\u957F\u516C\u5F0F\uFF1A(\u76EE\u6807\u503C - \u73B0\u5728\u7684\u4F4D\u7F6E) / 10</span>
        obj<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> obj<span class="token punctuation">.</span>offsetLeft <span class="token operator">+</span> step <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-\u8282\u6D41\u9600" tabindex="-1"><a class="header-anchor" href="#_1-5-\u8282\u6D41\u9600" aria-hidden="true">#</a> 1.5 \u8282\u6D41\u9600</h3><p>\u9632\u6B62\u8F6E\u64AD\u56FE\u6309\u94AE\u8FDE\u7EED\u70B9\u51FB\u9020\u6210\u64AD\u653E\u8FC7\u5FEB\u3002</p><blockquote><p>\u8282\u6D41\u9600\u76EE\u7684\uFF1A\u5F53\u4E0A\u4E00\u4E2A\u51FD\u6570\u52A8\u753B\u5185\u5BB9\u6267\u884C\u5B8C\u6BD5\uFF0C\u518D\u53BB\u6267\u884C\u4E0B\u4E00\u4E2A\u51FD\u6570\u52A8\u753B\uFF0C\u8BA9\u4E8B\u4EF6\u65E0\u6CD5\u8FDE\u7EED\u89E6\u53D1\u3002<br> \u6838\u5FC3\u5B9E\u73B0\u601D\u8DEF\uFF1A\u5229\u7528\u56DE\u8C03\u51FD\u6570\uFF0C\u6DFB\u52A0\u4E00\u4E2A\u53D8\u91CF\u6765\u63A7\u5236\uFF0C\u9501\u4F4F\u51FD\u6570\u548C\u89E3\u9501\u51FD\u6570\u3002</p></blockquote><p>\u5F00\u59CB\u8BBE\u7F6E\u4E00\u4E2A\u53D8\u91CFvar flag= true;</p><p>If(flag){flag = false; do something}\xA0\xA0\xA0\xA0\xA0\xA0 \u5173\u95ED\u6C34\u9F99\u5934</p><p>\u5229\u7528\u56DE\u8C03\u51FD\u6570\u52A8\u753B\u6267\u884C\u5B8C\u6BD5\uFF0C flag = true\xA0\xA0\xA0\xA0 \u6253\u5F00\u6C34\u9F99\u5934</p>`,26),o=[p];function c(l,i){return s(),a("div",null,o)}var k=n(e,[["render",c],["__file","js_animation.html.vue"]]);export{k as default};
